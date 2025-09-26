let ingressosRestantes;
let idElement;

function comprar() {
    // Pegar as informações enviadas pelo usuário
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    
    // Pega a quantidade de ingressos de cada tipo
    ingresoCadeiraInferior = document.getElementById('qtd-inferior').textContent;
    ingresoCadeiraSuperior = document.getElementById('qtd-superior').textContent;
    ingresoPista = document.getElementById('qtd-pista').textContent;
    idElement = `qtd-${tipoIngresso}`;
    
    // Verifica o tipo de ingresso
    if (tipoIngresso == "superior") {
        comprarIgressos(quantidade, ingresoCadeiraSuperior, idElement);
    }

    if (tipoIngresso == "inferior") {
        comprarIgressos(quantidade, ingresoCadeiraInferior, idElement);
    }

    if (tipoIngresso == "pista") {
        comprarIgressos(quantidade, ingresoPista, idElement);
    }

}

function comprarIgressos(qtd, tipo, idElement) {
    qtd  = parseInt(qtd);
    tipo = parseInt(tipo);
    // Verifica se o valor enviado e maior que a quantidade de ingressos disponiveis
    if (qtd > tipo) {
        alert('A quantidade de ingressos não está disponivel no momento.');
        return;
    } else if (tipo == 0) {
        alert('Ingressos para esse setor está indisponiveis.');
        return;
    } else {
        // Faz a remoção dos ingressos solicitados
        ingressosRestantes = tipo - qtd;
        alert('Compra efetuada com sucesso.');
        // Alterar a quantidade no hmtl
        document.getElementById(idElement).textContent = ingressosRestantes;
    }
}