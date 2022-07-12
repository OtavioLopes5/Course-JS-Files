const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (i = 0; i <elementos.length; i++) {
    let add = document.createElement(elementos[i].tag);
    document.querySelector('div').appendChild(add);
    add.innerText = elementos[i].texto;
}
// * com desestruturação :
// let takeElements = elementos[i];
// const {tag,texto} = takeElements;
// let add = document.createElement(tag);
// document.querySelector('div').appendChild(add);
// add.innerText = texto

