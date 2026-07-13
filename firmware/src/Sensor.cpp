#include "Sensor.h"
#include "Config.h"
#include <Arduino.h>

void setupSensor()
{
    pinMode(TRIG_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);
}

float getRawDistance()
{
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);

    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);

    digitalWrite(TRIG_PIN, LOW);

    long duration = pulseIn(ECHO_PIN, HIGH, 30000); // 30ms timeout

    if(duration == 0)
        return -1; // Timeout

    return duration * 0.0343 / 2.0;
}

// Implements a simple median filter to remove noise spikes
float getDistance()
{
    const int numSamples = 5;
    float samples[numSamples];
    
    // Collect samples
    for (int i = 0; i < numSamples; i++) {
        samples[i] = getRawDistance();
        delay(10); // Short delay between pings
    }
    
    // Sort samples (Bubble Sort)
    for (int i = 0; i < numSamples - 1; i++) {
        for (int j = 0; j < numSamples - i - 1; j++) {
            if (samples[j] > samples[j + 1]) {
                float temp = samples[j];
                samples[j] = samples[j + 1];
                samples[j + 1] = temp;
            }
        }
    }
    
    // Return the median (middle element)
    return samples[numSamples / 2];
}
