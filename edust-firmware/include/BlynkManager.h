#ifndef BLYNKMANAGER_H
#define BLYNKMANAGER_H

#include <BlynkSimpleEsp32.h>

extern BlynkTimer timer;

void setupBlynk();
void runBlynk();
void sendDataToBlynk(float fill, float lat, float lon);

#endif // BLYNKMANAGER_H
