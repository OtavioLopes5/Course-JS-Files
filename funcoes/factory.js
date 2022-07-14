function criaPessoa(nome, sobrenome, a, p) {
    return {
        fala(assunto) {  //factory function
            return `${nome} ${sobrenome} Acha que o seu ${assunto} esta alto, pois seu peso de ${this.peso} kg 
e sua altura de ${this.altura} não estão com um índice bom. \nNo final do dia ele descobriu que seu ${assunto} é de ${this.imc()}`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso/ (this.altura * this.altura);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Otavio', 'Lopes', 1.7, 80);
console.log(p1.fala('IMC'));

