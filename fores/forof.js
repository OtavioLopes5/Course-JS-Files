// For of - retorna o valor em si (iteráveis, arrays ou string)


const pessoas = ['Luiz', 'Lucas', 'Liza'];

for (let valor of pessoas) {
    console.log(valor);
}
// =
pessoas.forEach(element => {
    console.log(element);
});