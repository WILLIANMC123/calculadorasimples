let currentInput = '';
const resultScreen = document.getElementById('result');

function appendValue(value) {
    currentInput += value;
    resultScreen.value = currentInput;
}

function clearResult() {
    currentInput = '';
    resultScreen.value = '';
}

function calculate() {
    try {
        const result = eval(currentInput);
        resultScreen.value = result;
        currentInput = result;
    } catch (e) {
        resultScreen.value = 'Erro';
        currentInput = '';
    }
}
