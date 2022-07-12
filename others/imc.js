const nome = 'Otavio';
const sobrenome = 'Lopes';
let idade = 19;
let peso = 74;
let altura = 1.75;
let imc = peso/(altura*altura);
let anoNascimento;
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kilos, tem ${altura} de altura e seu IMC é de ${imc}`) // * template strings
console.log(nome,'nasceu em',anoNascimento)
console.log(typeof(idade))