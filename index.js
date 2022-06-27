setInterval(()=>{
d =new Date();
hTime = d.getHours();
mTime =d.getMinutes();
sTime =d.getSeconds();
hRoatation =30*hTime + mTime/2;
mRoatation = 6*mTime;
sRoatation =6*sTime;

hours.style.transform = `rotate(${hRoatation}deg)`;
minutes.style.transform = `rotate(${mRoatation}deg)`;
seconds.style.transform = `rotate(${sRoatation}deg)`;
},1000);