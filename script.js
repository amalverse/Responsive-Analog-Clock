let lastSecond = new Date().getSeconds();
setInterval(() => {
    date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();
    hRotation = 30*hTime+mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;

    // Play sound if the minute has changed
    if (sTime !== lastSecond) {
        sound.currentTime = 0; // rewind if still playing
        sound.play();
        lastSecond = sTime;
    }


}, 1000);
