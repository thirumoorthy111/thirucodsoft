let displayValue = '0';
let pendingValue;
let operation;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    pendingValue = undefined;
    operation = undefined;
    updateDisplay();
}

function setOperation(op) {
    if (operation !== undefined) {
        calculate();
    }
    pendingValue = displayValue;
    displayValue = '0';
    operation = op;
}

function calculate() {
    let result;
    const current = parseFloat(displayValue);
    const previous = parseFloat(pendingValue);
    
    switch (operation) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }
    
    displayValue = result.toString();
    pendingValue = undefined;
    operation = undefined;
    updateDisplay();
}
