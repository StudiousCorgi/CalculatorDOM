//--simple Calculator--
let display = document.getElementById("display");

function appendNumber(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}


function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if ("+-*/**".includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function backspace() {
    display.textContent = display.textContent.length > 1
        ? display.textContent.slice(0, -1)
        : "0";
}

function calculate() {
    try {
        const equation = display.textContent;
        const result = eval(equation);
        display.textContent = result;
        console.log(`Equation: ${equation} = ${result}`);
    } catch {
        display.textContent = "Error";
        console.log("Invalid equation attempted");
    }
}

// Event listeners for buttons 

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || key === ".") {
        appendNumber(key);
    } else if ("+-*/**".includes(key)) {
        appendOperator(key);
    } else if (key === "^") {
        appendOperator("**");
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
