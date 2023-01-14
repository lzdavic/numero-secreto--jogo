const menorInicial = 1
const maiorInicial = 1000
var menorValor = getMenorValor();
var maiorValor = getMaiorValor();
const numeroSecreto = gerarNumeroAleatorio();


function getMenorValor() {
    if (sessionStorage.menor != "undefined") {
        return parseInt(sessionStorage.menor);
    } else {
        return parseInt(menorInicial)
    }
}

function getMaiorValor() {
    if (sessionStorage.maior != "undefined") {
        return parseInt(sessionStorage.maior);
    } else {
        return maiorInicial
    }
}

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

        window.location.reload();
}


