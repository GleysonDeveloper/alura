function capturarValores() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;

    document.getElementById('mostrarNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

function modificarConteudo() {
    let paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Novo texto modificado dinamicamente!';
}

let numero1 = 10;
let numero2 = 20;

let soma = numero1 + numero2;
let mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;

console.log(mensagem);

let duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante que vem ao mundo é criar algo";
let fraseSeparadas = duasSentencas.split(';');

console.log(fraseSeparadas);

let numerosSeparados = "10, 20, 30, 40, 50";
let arrayNumeros = numerosSeparados.split(',');

console.log(arrayNumeros);