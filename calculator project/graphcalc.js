let display = document.getElementById('display');/*getting input */

function appendToDisplay(value) {/* appending the values*/
    display.value += value;
}

function clearDisplay() {/*for the "C" button in calculator */
    display.value = '';
}

function calculate() {/* i=using evaluate for processing the answer*/
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
