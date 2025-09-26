alert('Boas vindas ao jogo do número seceteo');

let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao número secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto e menor que ${chute}`);
        } else {
            alert(`O número secreto e maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

// Ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// Modo lusitano

// if (tentativas > 1) {
//     alert(`Isso ai! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }