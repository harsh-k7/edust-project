#include "WifiManager.h"
#include "Config.h"
#include <WiFi.h>

void setupWiFi()
{
    WiFi.begin(WIFI_SSID, WIFI_PASS);

    while(WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }

    Serial.println("\nWiFi Connected");
}
