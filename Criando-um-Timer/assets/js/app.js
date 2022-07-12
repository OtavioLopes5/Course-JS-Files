const numeros = document.querySelector('.timer')
const iniciar = document.querySelector('.btn-iniciar')
const parar = document.querySelector('.btn-pausar')
const zerar = document.querySelector('.btn-zerar')
const reiniciar = document.querySelector('.btn-reiniciar')
const hist = document.querySelector('.hist')

function newHourBySeconds(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

let ms = 0
let seconds = 0;
let timer;
let times = 1;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        numeros.innerText = newHourBySeconds(seconds);

    }, 1000);
}

iniciar.addEventListener('click', () => {
    numeros.classList.remove('pausado') 
    clearInterval(timer)
    startTimer()
})

parar.addEventListener('click', () => {
    numeros.classList.add('pausado') // ! adiciona um estilo para a classe com um estilo no css ja criado
    clearInterval(timer)
})

zerar.addEventListener('click', () => {
    numeros.classList.remove('pausado') 
    hist.innerHTML += `<p> ${times++}º ${newHourBySeconds(seconds)} </p>`
    clearInterval(timer);
    numeros.innerText = '00:00:00';
    seconds = 0;
})

reiniciar.addEventListener('click', () => {
    numeros.classList.remove('pausado') 
    hist.innerHTML += `<p> ${times++}º ${newHourBySeconds(seconds)} </p>`
    numeros.innerText = '00:00:00';
    seconds = 0;
})