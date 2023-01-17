const menorValor = 1;
const maiorValor = parseInt(getMaiorValor());

function getMaiorValor(maior) {
    const maiorValorStorage = sessionStorage.getItem('maior');
    if (maiorValorStorage) {
        return maiorValorStorage;
    } else {
        return 1000;
    }
}

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
const inputMaior = document.getElementById('input-maior');
const botaoAdicionar = document.getElementById('input-button');

botaoAlterar.addEventListener('click', e => {
        mostrarInput();
    })
    
    function mostrarInput() {
        elementoMaiorValor.innerHTML = `
        <input type="number" id="input-maior">
        `
        botaoAdicionar.dataset.display = "show"
    }
    
    botaoAdicionar.addEventListener('click', () => {
        salvaIntervalo();
    })
    
    
    function salvaIntervalo() {
    var inputMaior = document.getElementById("input-maior").value
    

        if (1 >= inputMaior) {
                window.alert("O valor maior NÃO pode ser negativo ou igual a 1")
        } else {
            sessionStorage.setItem("maior", inputMaior)
        }

        window.location.reload();
}


