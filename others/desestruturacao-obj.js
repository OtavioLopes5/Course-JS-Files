const pessoas = {
    nome: 'Otávio',
    sobrenome: 'Lopes', // caso não tenha pode ser setado um valor padrão na nova atribuição
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 75
    }
};

//atribuição via desestruturação

const { sobrenome = "Não existe", endereco: { rua, numero: teste} } = pessoas

console.log(teste);