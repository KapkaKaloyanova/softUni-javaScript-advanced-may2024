function timeToWalk(steps, footprintLength, speedKmH) {

    let distanceInMeters = steps * footprintLength;
    let speedMetersPerSecond = speedKmH * 1000 / 3600;
    let timeWalkingInSeconds = distanceInMeters / speedMetersPerSecond;
    let breaks = Math.floor(distanceInMeters/500);

    let additionalTimeSeconds = breaks * 60;
    let totalTimeSeconds = timeWalkingInSeconds + additionalTimeSeconds;

    // convert total time to hours, minutes and seconds
    let hours = Math.floor(totalTimeSeconds / 3600);
    let minutes = Math.floor((totalTimeSeconds % 3600) / 60);
    let seconds = Math.round(totalTimeSeconds % 60);

    console.log(`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`);
   

}
timeToWalk(4000, 0.60, 5)