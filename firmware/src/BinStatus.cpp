#include "BinStatus.h"
#include "Config.h"

float calculateFillPercentage(float distance)
{
    if(distance < 0) return -1;
    
    float fill = ((BIN_HEIGHT - distance) / BIN_HEIGHT) * 100.0;
    return constrain(fill, 0, 100);
}

String getStatusString(float fillPercentage)
{
    if(fillPercentage < 30)
        return "EMPTY";
    else if(fillPercentage < 70)
        return "HALF";
    else
        return "FULL";
}
