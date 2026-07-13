#include "BlynkManager.h"
#include "Config.h"

BlynkTimer timer;

void setupBlynk()
{
    Blynk.begin(BLYNK_AUTH_TOKEN, WIFI_SSID, WIFI_PASS);
}

void runBlynk()
{
    Blynk.run();
    timer.run();
}

void sendDataToBlynk(float fill, float lat, float lon)
{
    Blynk.virtualWrite(V0, fill);
    Blynk.virtualWrite(V1, lat);
    Blynk.virtualWrite(V2, lon);
}
