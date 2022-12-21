"use strict";

const daysDiv = document.querySelector('#days div div');
const hoursDiv = document.querySelector('#hours div>div');
const minutesDiv = document.querySelector('#minutes div>div');
const secondsDiv = document.querySelector('#seconds div>div');


// adding decoration to the divs
const flipCards = document.querySelectorAll('.flip-card');


[...flipCards].forEach(div=>{
    const leftBall = document.createElement('div');
    leftBall.classList.add('ball');
    leftBall.classList.add('left');

    const rightBall = document.createElement('div');
    rightBall.classList.add('ball');
    rightBall.classList.add('right');
    console.log(div);
    div.appendChild(leftBall);
    div.appendChild(rightBall);
});


const finalDate = new Date("January 1, 2023 00:00:00");
// const finalDate = new Date("February 1, 2023 00:01:00");


let x = setInterval(function(){
    const currentTime = new Date().getTime();
    let distance = finalDate - currentTime;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        daysDiv.innerHTML = 0;
        hoursDiv.innerHTML = 0;
        minutesDiv.innerHTML = 0;
        secondsDiv.innerHTML = 0;
        document.querySelector('header h3').innerHTML = "We've launched!";
    }

}, 1000);   

