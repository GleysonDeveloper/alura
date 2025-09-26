// Desafios - Modulo 2

// 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Em que dia da semana estamos?');

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt('Digite um número positivo ou negativo: ');

if (numeroDigitado > 0) {
    alert(`O número ${numeroDigitado} e positivo`);
} else {
    alert(`O número ${numeroDigitado} e negativo`);
}

// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = 80;
if (pontuacao >= 100) {
    alert(`Parabéns você venceu com uma pontuação de ${pontuacao}`);
} else {
    alert(`Tente novamente para ganhar, sua pontuação foi inferior a 100. Sua pontuação ${pontuacao}`)
}

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoEmConta = 100;
alert(`O sado de sua conta e de R$ ${saldoEmConta} reais.`);

// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeDigitado = prompt('Digite seu nome: ');
alert(`Seja bem vindo ${nomeDigitado}.`)