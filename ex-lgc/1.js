// escreva uma função que recebe 2 numeros e retorne o maior deles

function recebedor (x,y) {
    if (x > y) {
        return `${x} é maior que ${y}`;
    }else if (y > x){
        return`${y} é maior que ${x}`;
    }
    return `Os valores ${x} e ${y} são iguais`;
}

console.log(recebedor(7.5,7));

