function escopoGlobal() {
    const form = document.querySelector('.formu');
    const result = document.querySelector('.resultado');
    let pessoas = [];
    

    function recebeEvento (evento) {
        evento.preventDefault();
        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        result.innerHTML += `<p>Usuário Cadastrado: ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}.</p> `
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEvento);
}
escopoGlobal();