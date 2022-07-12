const data = new Date('2020-05-31 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTxt;

switch (diaSemana) {
    case 0: diaSemanaTxt = "Domingo"; break;
    case 1: diaSemanaTxt = "Segunda-feira"; break;
    case 2: diaSemanaTxt = "Terça-feira"; break;
    case 3: diaSemanaTxt = "Quarta-feira"; break;
    case 4: diaSemanaTxt = "Quinta-feira"; break;
    case 5: diaSemanaTxt = "Sexta-feira"; break;
    case 6: 
        diaSemanaTxt = "Sábado"; 
    break;
    default:
        diaSemanaTxt="Dia invalido";
    break
}
console.log(diaSemanaTxt);