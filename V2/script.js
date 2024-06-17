
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded");

    // Select all button elements within the buttons-container
    const buttons = document.querySelectorAll('button');
    const screen2 = document.getElementById('inputs1');
    const equalBtn = document.getElementById('equals');

    buttons.forEach(button => {

        button.addEventListener('click', function() {
            const buttonValue = this.value;
            console.log(buttonValue);

            // Outputs the value of the clicked button
    const inputField = document.getElementById('inputs2');
    inputField.value += buttonValue;
        });
    });

});
