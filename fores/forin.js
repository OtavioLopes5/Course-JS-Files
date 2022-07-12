// const pessoas = ['Luiz', 'Lucas', 'Liza'];

// For in - retorna o índice ou chave (string, array ou objetos)


const pessoas = {
    nome: 'Otávio',
    sobrenome: 'Lopes',
    idade: 19,
    endereco:{
        rua: 'Avenida 2',
        numero: 5
    },
}

for (let i in pessoas) {
    console.log(i, pessoas[i]);
}

// console.log(pessoas['idade']);