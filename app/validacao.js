function verificaChuteValido() {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML +='<div>Chute invalido</div>';
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=
            `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}