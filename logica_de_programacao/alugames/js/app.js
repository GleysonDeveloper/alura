
let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let botao = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');

    // Se o jogo estiver como alugado, preciso alterar o texto para alugar
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

ordenarNumeros(3, 1, 5);

function ordenarNumeros(a, b, c) {
    let numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})