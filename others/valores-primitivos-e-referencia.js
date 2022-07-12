/*
! PRIMITIVOS (IMUTÁVEIS) - Strings, Number, Boolean, Undefined, null, bigint, symbol
? REFERÊNCIA (Mutável) - Array, Object, Function
*/

// copiando uma array para outra array sem ter problema de referência
let a = [1,2,3];
let b = [...a];
b.push(4)
console.log(`Array B: ${b} \nArray A: ${a}`);


// copiando um objeto para outro objeto sem ter problema de referencia

const x = { nome: 'Julio', sobrenome: 'Lemos'}

const y = {...x}
y.nome = "Otavio"

console.log(x,y);