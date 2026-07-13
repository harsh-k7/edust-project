#ifndef BINSTATUS_H
#define BINSTATUS_H

#include <Arduino.h>

float calculateFillPercentage(float distance);
String getStatusString(float fillPercentage);

#endif // BINSTATUS_H
