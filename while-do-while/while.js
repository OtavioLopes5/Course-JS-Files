// let i = 0;
// while ( i <= 10) {
//     console.log(i);
//     i++
// }

function randm(min, max) {
    const r = Math.random() * (max - min) + min; //pega um valor aleatório com um mínimo e um máximo
    return Math.floor(r); //arredonda

}

let min = 1;
let max = 50;
let rand = randm(min, max);

// while (rand !== 10) { //enquanto o resultado não for 10, continue até ser 10
//     rand = randm(min, max)
//     console.log(rand);
// }

do{
    rand = randm(min, max);
    console.log(rand);
} while (rand !== 5);