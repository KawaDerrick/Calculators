document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded");

    // Select all button elements within the buttons-container
    const buttons = document.querySelectorAll('.buttons-container button');

    // References to the input fields
    const inputField = document.getElementById('inputs2');
    const resultField = document.getElementById('inputs1');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.value;
            console.log(buttonValue); // Outputs the value of the clicked button

            if (buttonValue === '=') {
                // Evaluate the expression and display the result
                try {
                    const result = eval(expression);
                    resultField.value = result;
                    expression = result.toString();  // Update the expression with the result for further calculations
                } catch (error) {
                    resultField.value = 'Error';
                    expression = '';
                }
                inputField.value = expression; // Ensure the expression is updated on the small screen
            } else if (buttonValue === 'c') {
                // Clear both input and result fields
                expression = '';
                inputField.value = '';
                resultField.value = '';
            } else if (buttonValue === 'DEL') {
                // Remove the last character from the expression
                expression = expression.slice(0, -1);
                inputField.value = expression;
            } else if (buttonValue === '%') {
                // Replace percentage symbol with division by 100
                if (expression !== '') {
                    expression = (parseFloat(expression) / 100).toString();
                    inputField.value = expression;
                }
            } else {
                // Append number or operator to the expression
                expression += buttonValue;
                inputField.value = expression;
            }
        });
    });
});
