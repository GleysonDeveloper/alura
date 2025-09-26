// Desafios - Modulo 4

// 1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Seja bem vindo!');

// 2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'Gleyson';

console.log(`Olá, ${nome}`);

// 3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome1 = 'Gleyson';

alert(`Olá, ${nome1}`);

// 4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemFavorita = prompt(`Qual a linguagem de programação que você mais gosta? `);

console.log(linguagemFavorita);

// 5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 25;
let valor2 = 100;
let resultado = '';

resultado = parseInt(valor1) + parseInt(valor2);

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valores1 = 100;
let valores2 = 25;
let resultados = '';

resultados = parseInt(valores1) - parseInt(valores2);

console.log(`A diferença entre ${valores1} e ${valores2} é igual a ${resultados}.`);

// 7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt('Digite sua idade: ');

if (idade >= 18) {
    console.log(`Legal voce ja é uma pessoa maior de idade.`)
} else {
    console.log(`Opa verificamos que ainda nao seu momento, voce ainda é menor de idade.`);
}

// 8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Digite um número: ');

if (numero > 0) {
    alert(`O número digitado ${numero} e um positivo.`);
} else {
    alert(`O número digitado ${numero} e um negativo.`);
}

// 9 - Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 0;

while(contador <= 10) {
    console.log(`Contagem ${contador}`);
    contador++
}

// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 9;

if (nota >= 7) {
    console.log(`Parabéns! Sua nota final foi ${nota}, com isso você foi aprovado!!!`);
} else {
    console.log(`Que triste! Sua nota final foi ${nota}, com isso você não foi aprovado!!!`);
}

// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorioRandom = Math.random();

console.log(`Isso é um número aleatório: ${numeroAleatorioRandom}`);

// 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatorioRandomEntre = parseInt(Math.random() * 10 + 1);

console.log(`Isso é um número aleatório de 1 a 10: ${numeroAleatorioRandomEntre}`);

// 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numeroAleatorio = parseInt(Math.random() * 100 + 1);

console.log(`Isso é um número aleatório de 1 a 100: ${numeroAleatorio}`);