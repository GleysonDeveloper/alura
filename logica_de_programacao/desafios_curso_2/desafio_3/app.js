// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculateIMC(altura, peso) {
    let imc = peso / (altura * altura);
}

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculateFactorial(num) {

    if (num === 0 || num === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let numero = 5;
let resultado = calculateFactorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function convertDollarToReal(dollarValue) {
    let exchangeRate = 4.80;
    let valueReal = dollarValue * exchangeRate;
    return valueReal.toFixed(2);
}

let dollarAmount = 100;
let realAmount = convertDollarToReal(dollarAmount);
console.log(`R$ ${dollarAmount} dólares equivalem a R$ ${realAmount} reais.`);

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculateRoomAreaAndPerimeter(height, width) {
    let area = height * width;
    let perimeter = 2 * (height + width);
    console.log(`Área da sala: ${area} m²`);
    console.log(`Perímetro da sala: ${perimeter} m`);
}

let height = 3;
let width = 5;

calculateRoomAreaAndPerimeter(height, width);

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculateCircularRoomAreaAndPerimeter(radius) {
    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius;
    console.log(`Área da sala circular: ${area.toFixed(2)} m²`);
    console.log(`Perímetro da sala circular: ${perimeter.toFixed(2)} m`);
}

let radius = 4;
calculateCircularRoomAreaAndPerimeter(radius);

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function displayMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    console.log(`Tabuada do ${number}:`);
}

let number = 2;
displayMultiplicationTable(number);