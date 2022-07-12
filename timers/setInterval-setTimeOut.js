const data = () => {
    let date = new Date(0000,00,00,00,00,00,0000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
const timer = setInterval(() => {
    console.log(data());
}, 1000);

setTimeout (() => {
    clearInterval(timer); //para o setInterval
}, 6000)