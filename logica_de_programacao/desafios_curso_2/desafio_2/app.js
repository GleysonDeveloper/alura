// 1 - Criar uma função que exibe "Olá, mundo!" no console.

// Chama a função para exibir a mensagem
showHelloWorld();

function showHelloWorld() {
    console.log("Olá, mundo!");
}

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

showOnTheUsers('Gleyson');

function showOnTheUsers(name) {
    console.log(`Olá, ${name}!`);
}

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

let number = doubleNumber(5);

console.log(`O dobro do número é: ${number}`);

function doubleNumber(number) {
    return number * 2;
}

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

let average = calculateAverage(10, 20, 30);

console.log(`A média dos números é: ${average}`);

function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

let maxNumber = findMax(15, 25);

console.log(`O maior número é: ${maxNumber}`);

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

let numberSend = squaredNumber(4);

console.log(`O quadrado do número é: ${numberSend}`);

function squaredNumber(number) {
    return number * number;
}