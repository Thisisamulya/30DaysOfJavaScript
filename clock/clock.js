const seconds=document.querySelector(".seconds")
const minutes=document.querySelector(".minutes")
const hours=document.querySelector(".hours")
function whatTime(){
    const date = new Date();
    const secondss= date.getSeconds();
    const rotation1 = (secondss/60)*360+90;
    seconds.style.transform=`rotate(${rotation1}deg)`;
    const minutess= date.getMinutes();
    const rotation2 = (minutess/60)*360+(secondss/60)*6+90;
    minutes.style.transform=`rotate(${rotation2}deg)`;
    const hourss= date.getHours();
    const rotation3 = (hourss/12)*360+(minutess/60)*30+90;
    hours.style.transform=`rotate(${rotation3}deg)`;
    const audio = new Audio('clock.mp3')
    audio.loop=true;
    audio.play();
}
setInterval(whatTime,1000)
whatTime();
