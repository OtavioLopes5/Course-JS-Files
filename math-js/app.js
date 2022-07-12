// ! https://www.w3schools.com/js/js_math.asp
// Random // * https://www.w3schools.com/js/js_random.asp
let num1 = 9.623;


//console.log(10/0) // * podemos dividir por 0 no js, assim retornando o dado infinito
//let num2 = Math.floor(num1);// * arredonda para baixo
//let num2 = Math.ceil(num1); // * arredonda para cima
//let num2 = Math.round(num1); // * arredonda automaticamente com base no valor
//let num2 = Math.min(1,2,3,4,5,6,7,8,9,123,1231241,-1,-2,-3,-5,-7) // * mostra qual o menor valor da lista
//let num2 = Math.max(1,2,3,4,5,6,7,8,9,123,1231241,-1,-2,-3,-5,-7)  // * mostra qual o maior valor da lista
//let num2 = Math.random()*7; // *0 ao 6
let num2 = Math.floor(Math.random() * 7) + 3;

// Modo de colocar um min max para sortear
    // find diff
    let max = 10;
    let min = 1;
    let difference = max - min; 

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;


console.log(rand);
