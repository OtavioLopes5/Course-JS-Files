let numero = Number(prompt("Digite um número"));
const numAparecer = document.getElementById('strNumber');

numAparecer.innerHTML = numero;

const raizAparecer = document.getElementById('raiz');
raizAparecer.innerHTML = Math.sqrt(numero);

const intAparecer = document.getElementById('nInt');
intAparecer.innerHTML = Number.isInteger(numero)

const eounNumero = document.getElementById('tfNum');
eounNumero.innerHTML = Number.isNaN(numero)

const arreC = document.getElementById('arredCima');
arreC.innerHTML = Math.ceil(numero)

const arreB = document.getElementById('arredBaixo');
arreB.innerHTML = Math.floor(numero)

const casasDecimais = document.getElementById('casasDec');
numero = numero.toFixed(2)
casasDecimais.innerHTML = numero