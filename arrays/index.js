const alunos = ['Otávio', 'Arthur', 'Lucilene'];



alunos.push('Henrique'); // * Adiciona no array.
alunos.unshift('Luisa'); // * Adiciona no começo do array

let pegandoAlunos = alunos.slice(0, 3)

console.log(pegandoAlunos)

// console.log(alunos[3]);

let removidoAluno = alunos.pop(); // * retira o ultimo valor do array
let removidoDoComeço = alunos.shift(); // * retira o ultimo valor do array