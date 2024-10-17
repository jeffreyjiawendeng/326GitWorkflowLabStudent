let display = document.getElementById("display");

// Append number or operator to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = "";
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

function runNaturalLog() {
    const v = naturalLog(parseFloat(display.value));
    display.value = v;
}

// Execute sine calculation
function runSine() {
    const v = sine(parseFloat(display.value));
    display.value = v;
}

// Execute cosine calculation
function runCosine() {
    const v = cosine(parseFloat(display.value));
    display.value = v;
}

// Execute tangent calculation
function runTangent() {
    const v = tangent(parseFloat(display.value));
    display.value = v;
}

// TODO: Implement run your functions here
// keyboard support
document.addEventListener("keydown", e => {
    const keyName = e.key;
    switch (keyName) {
        case "c":
            clearDisplay();
            break;
        case "Backspace":
            deleteLast();
            break;
        case "Enter":
            calculateResult();
            break;
        case "t":
            runSquareRoot();
            break;
        case "s":
            runSquare();
            break;
        case "r":
            runReciprocal();
            break;
    }
});
