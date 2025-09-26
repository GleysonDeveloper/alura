// Desafios - Modulo 3

// 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador1 = 1;

while(contador < 10) {
    alert(`Contagem ${contador1}`);
    contador1++;
}

// 2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;

while(contador2 >= 0) {
    alert(`Contagem regressiva: ${contador2}`);
    contador2--;
}

// 3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador3 = prompt('Por favor digite um número: ')

while(contador3 >= 0) {
    console.log(`Contagem regressiva: ${contador3}`);
    contador3--;
}

// 4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroInformado = prompt('Por favor digite um número: ')
let contador4 = 0;

while(contador4 <= numeroInformado) {
    console.log(`Contagem regressiva: ${contador4}`);
    contador4++;
}