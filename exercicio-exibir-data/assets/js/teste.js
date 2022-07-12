const data = new Date();

let result = document.querySelector('.resultado');

function clearNumbers(numero) {
    return numero <= 9 ? `0${numero}` : `${numero}`;
}
const day = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
const hours = clearNumbers(data.getHours());
const min = clearNumbers(data.getMinutes());
const week = data.getDay();

function monthfinal(mesf) {
    const mont = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]; //changed the usability of switch
    return mont[mesf]
}

function weekFinal(weekf) {
    const wek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return wek[weekf]
}

result.innerHTML = `${weekFinal(week)}, ${day} de ${monthfinal(month)} de ${year}<br>${hours}:${min}`
