const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); // tras a data atual
    
    const seconds =  now.getSeconds(); // pega somente os segundos atual da data atual
    const secondsDegrees = ((seconds/60) * 360) + 90; // transforma para o angulo exato de cada segundo
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);