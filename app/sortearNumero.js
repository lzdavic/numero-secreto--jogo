function getMenorValor() {
    var menorValorMemory = sessionStorage.menor

    if (sessionStorage.menor == "undefined") {
        menorValor === 1;
        return
    } else {
        menorValor = menorValorMemory + 1 - 0
    }
    return
}

var menorValor = parseInt(getMenorValor());
var maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor + 1));
}

console.log (numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor


// alterar intervalo do sorteio

const botaoAlterar = document.getElementById('alterar-intervalo');
const inputMenor = document.getElementById('input-menor');
const inputMaior = document.getElementById('input-maior');
const botaoAdicionar = document.getElementById('input-button');

botaoAlterar.addEventListener('click', e => {
        mostrarInput();
    })
    
    function mostrarInput() {
        elementoMenorValor.innerHTML = `
        <input type="number" id="input-menor">
        `
        elementoMaiorValor.innerHTML = `
        <input type="number" id="input-maior">
        `
        botaoAdicionar.dataset.display = "show"
    }
    
    botaoAdicionar.addEventListener('click', () => {
        salvaIntervalo();
    })
    
    
    function salvaIntervalo() {
    var inputMenor = document.getElementById("input-menor").value
    var inputMaior = document.getElementById("input-maior").value
    

        if (inputMenor >= inputMaior || 
            inputMenor <= 0 || 
            inputMaior <= 0) {
                window.alert("O valor menor não pode ultrapassar o valor maior e os valores NÃO podem ser negativos")
        } else {
            sessionStorage.setItem("menor", inputMenor)
            sessionStorage.setItem("maior", inputMaior)
        }
}


