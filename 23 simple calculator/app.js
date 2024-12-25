document.getElementById('btn').addEventListener('click', function () {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let selectOp = document.getElementById('SelectOp').value;

    // Convert input values to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers.";
    } else {
        // Perform the selected operation
        switch (selectOp) {
            case "plus":
                result.innerHTML = num1 + num2;
                break;
            case "min":
                result.innerHTML = num1 - num2;
                break;
            case "dev":
                if (num2 === 0) {
                    result.innerHTML = "Cannot divide by zero.";
                } else {
                    result.innerHTML = num1 / num2;
                }
                break;
            case "multi": // Corrected typo here from "milti" to "multi"
                result.innerHTML = num1 * num2;
                break;
            default:
                result.innerHTML = "Invalid operation.";
        }
    }
});