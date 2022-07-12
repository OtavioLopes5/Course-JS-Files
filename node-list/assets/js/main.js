// ! QuerySelectorAll pega todos os elementos desejados e coloca em uma nodeList, que retorna "array".
// * usando o for podemos formatar os elementos.


const paragrafos = document.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body); //pega o css do body.
const backgroundColorBody = estilosBody.backgroundImage; //pega o background-image

for (let i of paragrafos) {
    i.style.backgroundImage = backgroundColorBody
    i.style.color = "#fff";
}