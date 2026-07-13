#include <Arduino.h>
#include "Config.h"
#include "Sensor.h"
#include "WifiManager.h"
#include "BlynkManager.h"
#include "GPS.h"
#include "BinStatus.h"

void sendSensorData()
{
    float distance = getDistance();

    if(distance < 0)
    {
        Serial.println("Sensor Timeout");
        return;
    }

    float fill = calculateFillPercentage(distance);
    String status = getStatusString(fill);

    Serial.print("Distance: ");
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

    timer.setInterval(120000L, sendSensorData);

    sendSensorData();
}

void loop()
{
    runBlynk();
}
