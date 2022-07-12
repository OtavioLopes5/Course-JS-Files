let x = 'a'
try {
    //executada quando não tem erros
    if (typeof x !== 'number') {
        throw new Error('x precisa ser um numero')
    }
} catch(error) {
    //executada quando existem erros
    console.log("Descobrimos um erro no sistema!");
    console.log(error);
} finally {
    //executada sempre
    console.log('FINALLY: sempre sou executado em qualquer caso');
}



