#include "WifiManager.h"
#include "Config.h"
#include <WiFi.h>

void setupWiFi()
{
    Serial.print("Connecting to WiFi: ");
    Serial.println(WIFI_SSID);
    
    WiFi.mode(WIFI_STA);
    WiFi.begin(WIFI_SSID, WIFI_PASS);

    // Initial connection attempt with timeout
    int attempts = 0;
    while(WiFi.status() != WL_CONNECTED && attempts < 20)
    {
        delay(500);
        Serial.print(".");
        attempts++;
    }

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("\nWiFi Connected");
        Serial.print("IP Address: ");
        Serial.println(WiFi.localIP());
    } else {
        Serial.println("\nWiFi Connection Failed (Will retry in background)");
    }
}

void checkWiFi()
{
    // Auto-reconnect logic
    if(WiFi.status() != WL_CONNECTED) {
        Serial.println("WiFi Disconnected. Attempting reconnection...");
        WiFi.disconnect();
        WiFi.reconnect();
        delay(500);
    }
}
