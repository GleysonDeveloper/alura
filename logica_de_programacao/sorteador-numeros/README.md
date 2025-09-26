# 🎯 Sorteador de Número

**Sorteador de Número** é uma aplicação web desenvolvida com **HTML**, **CSS** e **JavaScript puro**, que permite gerar números aleatórios de forma rápida, segura e sem repetições. Ideal para sorteios, rifas ou qualquer situação em que você precise sortear números únicos entre um intervalo definido.

---

## 📸 Preview

> Interface amigável com campos para entrada de dados, exibição do resultado e botão de reinício.

---

## ⚙️ Funcionalidades

- Geração de números aleatórios entre um intervalo definido
- Sorteios com números únicos (sem repetições)
- Validação inteligente dos campos de entrada
- Interface com botão dinâmico de reinício
- Feedback visual com os números sorteados

---

## 🧠 Como funciona

A lógica da aplicação segue os seguintes passos:

1. **Captura de dados** dos campos:
   - Quantidade de números a serem sorteados
   - Intervalo entre os campos “De” e “Até”

2. **Validação de entrada**:
   - Verifica se os valores são números inteiros
   - Garante que o valor “De” não seja maior ou igual ao valor “Até”
   - Garante que a quantidade não exceda o intervalo de números possíveis

3. **Geração de números aleatórios únicos**:
   - Utiliza `Math.random()` dentro de uma função `obeterNumeroAleatorio(min, max)`
   - Verifica se o número já foi sorteado usando `Array.includes()`

4. **Exibição do resultado**:
   - Mostra os números sorteados no HTML

5. **Reinício do sorteio**:
   - Limpa os campos, zera os dados e alterna o estado do botão

---

## 💻 Código-fonte Principal

```javascript
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

🧰 Tecnologias Utilizadas
HTML5 – estrutura da aplicação

CSS3 – estilização da interface

JavaScript (Vanilla) – lógica de sorteio, validação e manipulação do DOM

▶️ Como Executar
Clone o repositório:

git clone https://github.com/seu-usuario/sorteador-de-numero.git

Abra o arquivo index.html em seu navegador.

📈 Melhorias Futuras (Ideias)
Responsividade para dispositivos móveis

Histórico de sorteios anteriores

Animações para cada número sorteado

Exportar lista para .txt ou .csv

Tema escuro (dark mode)

👤 Autor
Desenvolvido por Gleyson Alves
📧 Email: gleysondev@yahoo.com
🌐 GitHub: https://github.com/GleysonDeveloper