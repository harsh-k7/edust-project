#include "BlynkManager.h"
#include "Config.h"

BlynkTimer timer;

void setupBlynk()
{
    Blynk.config(BLYNK_AUTH_TOKEN);
    // Don't block if Blynk is unreachable during boot
    Blynk.connect(3000); 
}

void checkBlynk()
{
    if (!Blynk.connected()) {
        Serial.println("Blynk disconnected. Attempting to reconnect...");
        Blynk.connect(2000);
    }
}

void runBlynk()
{
    if (Blynk.connected()) {
        Blynk.run();
    }
    timer.run();
}

void sendDataToBlynk(float fill, float lat, float lon)
{
    if (Blynk.connected()) {
        Blynk.virtualWrite(V0, fill);
        Blynk.virtualWrite(V1, lat);
        Blynk.virtualWrite(V2, lon);
    }
}
