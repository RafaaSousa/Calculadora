// Declaração de uma variável para armazenar o valor a ser exibido no display da calculadora.
let displayValue = "";

// Função que adiciona um caractere (número ou operador) ao valor atual do display.
function appendCharacter(char) {
    displayValue += char; // Concatena o caractere ao valor atual do display.
    updateDisplay(); // Chama a função para atualizar a exibição do campo de texto.
}

// Função que limpa o display, resetando o valor para uma string vazia.
function clearDisplay() {
    displayValue = ""; // Reseta o valor do display para uma string vazia.
    updateDisplay(); // Chama a função para atualizar a exibição do campo de texto.
}

// Função que remove o último caractere do valor do display.
function deleteChar() {
    displayValue = displayValue.slice(0, -1); // Remove o último caractere da string do display.
    updateDisplay(); // Chama a função para atualizar a exibição do campo de texto.
}

// Função que calcula o resultado da expressão matemática inserida no display.
function calculateResult() {
    try {
        const result = eval(displayValue); //Usa a função eval() para calcular a expressão.
        displayValue = result.toString(); // Converte o resultado para uma string e armazena no display.
        updateDisplay(); // Chama a função para atualizar a exibição no campo de texto.
    } catch (error) {
        displayValue = "Error"; // Se ocorrer algum erro na expressão, exibe "Error" no display.
        updateDisplay(); // Chama a função para atualizar a exibição no campo de texto.
    }
}

// Função para atualizar o campo de texto do display com o valor atual.
function updateDisplay() {
    document.getElementById("display").value = displayValue; // Atribui o valor atual ao campo de texto.
}