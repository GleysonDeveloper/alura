
// 1  - Passo e preciso criar uma função sortear
// 2  - Passo e recuperar as informaçẽos dos inputs, quantidade, de e ate
// 3  - Passo e tratar o conteúdo dos inputs para garantir que seja um inteiro
// 4  - Passo e verificar se o número digitado no 'de' e maior que o 'ate' retornar um alert e limpara os campos
// 5  - Passo e criar uma função para pegar um número aleatorio entre 'de 'e 'ate'
// 6  - Passo e criar uma estrutura de repitição usando que foi informado pelo usuário (quantidade) e salvar em um array os números sorteados
// 7  - Passo e exibir o resultado no html para o usuário
// 8  - Passo e fazer um tratamento para não receber números iguais no sorteio
// 9  - Passo e alterar o status do botão reiniciar
// 10 - Passo e fazer uma função para reiniciar o sorteio

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert("O número do campo 'Do número' não pode ser maior que o número do campo 'Até número'.");
        return;
    }

    let sorteados = [];
    let numero;

    let intervalor = Math.abs(de - ate);
    
    if (intervalor < quantidade) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    
    for (let i = 0; i < quantidade; i++) {
    numero = obeterNumeroAleatorio(de, ate);
    while (sorteados.includes(numero)) {
            numero = obeterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);  
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
    alterarStatusBotao();
}

function obeterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}