let input = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let lastInput = '';


function appendToDisplay(value) {
    currentInput += value;
    input.value = currentInput;
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    input.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    input.value = '';
}

function operation(op) {
    if (op === '**') {
        op = '^';
    }
    currentOperation = op;
    lastInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result = 0;
    switch (currentOperation) {
        case '+':
            result = parseFloat(lastInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(lastInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(lastInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(lastInput) / parseFloat(currentInput);
            break;
        case '^':
            result = Math.pow(parseFloat(lastInput), parseFloat(currentInput))
            break;
        case '%':
            result = parseFloat(lastInput) % parseFloat(currentInput);
            break;
    }
    input.value = result;
    currentInput = result.toString();
    currentOperation = '';
    lastInput = '';
}
