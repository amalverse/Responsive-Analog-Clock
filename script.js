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

}, 1000);

setInterval(function() {
  const audio = document.getElementById('tickSound');
  audio.currentTime = 0; // rewind to start
  audio.play();
}, 1000);
