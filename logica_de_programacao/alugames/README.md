🎮 Controle de Aluguel de Jogos
Este projeto é uma interface simples para controle de aluguel e devolução de jogos, utilizando JavaScript e elementos do DOM. Ele permite que o usuário alterne o status de um jogo (alugado ou disponível) e exibe a quantidade total de jogos alugados no console.

📋 Funcionalidades
Marcar jogos como alugados ou disponíveis.

Exibir em tempo real no console o total de jogos alugados.

Exibir uma confirmação de devolução ao devolver um jogo.

Ordenar e exibir três números passados como exemplo (ordenarNumeros(3, 1, 5)).

🧠 Como funciona
1. alterarStatus(id)
Função chamada quando o usuário interage com um botão de "Alugar/Devolver". Ela:

Localiza o jogo no DOM pelo id.

Verifica o status (alugado ou não).

Altera as classes e textos para refletir o novo status.

Atualiza a contagem total de jogos alugados.

2. contarEExibirJogosAlugados()
Exibe no console o número de jogos atualmente alugados.

3. ordenarNumeros(a, b, c)
Ordena e exibe três números passados como argumento. Usado como exemplo prático no console.

4. DOMContentLoaded
Ao carregar a página, verifica quantos jogos estão marcados como alugados inicialmente (baseado na classe CSS dashboard__item__img--rented) e exibe o total no console.

💻 Pré-requisitos
HTML com estrutura compatível, contendo elementos com:

IDs no formato game-[id]

Classes: .dashboard__item__img, .dashboard__item__img--rented, .dashboard__item__button, .dashboard__item__button--return, .dashboard__item__name

📁 Estrutura esperada no HTML
Exemplo de um item de jogo:

html
Copiar
Editar
<div id="game-1" class="dashboard__item">
  <img class="dashboard__item__img" src="jogo.jpg" />
  <span class="dashboard__item__name">Nome do Jogo</span>
  <button class="dashboard__item__button" onclick="alterarStatus(1)">Alugar</button>
</div>
🧪 Exemplo no Console
yaml
Copiar
Editar
Números ordenados: 1, 3, 5
Total de jogos alugados: 2
📦 Uso
Ao clicar em “Alugar”, o jogo muda de status e é contabilizado como alugado.

Ao clicar em “Devolver”, o sistema solicita confirmação. Se confirmada, o jogo é devolvido e removido da contagem.

A cada mudança, o total é exibido no console.

📄 Licença
Código livre para estudos, uso pessoal e acadêmico. 🚀