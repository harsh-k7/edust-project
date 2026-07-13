#include <Arduino.h>
#include "Config.h"
#include "Sensor.h"
#include "WifiManager.h"
#include "BlynkManager.h"
#include "GPS.h"
#include "BinStatus.h"

// Timer variables for non-blocking checks
unsigned long lastConnectionCheck = 0;
const unsigned long CONNECTION_CHECK_INTERVAL = 10000; // Check every 10 seconds

void sendSensorData()
{
    float distance = getDistance();

    if(distance < 0)
    {
        Serial.println("Sensor Error / Timeout");
        return;
    }

    float fill = calculateFillPercentage(distance);
    String status = getStatusString(fill);

    Serial.print("Filtered Distance: ");
    Serial.print(distance);
    Serial.println(" cm");

    Serial.print("Fill Level: ");
    Serial.print(fill);
    Serial.println("%");

    Serial.print("Status: ");
    Serial.println(status);

    float lat = getLatitude();
    float lon = getLongitude();
    
    sendDataToBlynk(fill, lat, lon);
}

void setup()
{
    Serial.begin(115200);

    setupSensor();
    setupWiFi();
    setupBlynk();

    // Send sensor data every 2 minutes
    timer.setInterval(120000L, sendSensorData);

    // Initial reading
    sendSensorData();
}

void loop()
{
    // Handle WiFi and Blynk reconnections periodically without blocking
    if (millis() - lastConnectionCheck > CONNECTION_CHECK_INTERVAL) {
        checkWiFi();
        checkBlynk();
        lastConnectionCheck = millis();
    }

    runBlynk();
}
