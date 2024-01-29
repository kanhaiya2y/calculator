// Get display element
var displayElement = document.getElementById("display");

// Get all buttons with the "button" class
var buttons = document.querySelectorAll(".button");

// Add click event listener to each button
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.getAttribute("data-value");

        if (value === "=") {
            try {
                var expression = displayElement.textContent;
                var result = eval(expression);
                displayElement.textContent = result;
            } catch (error) {
                displayElement.textContent = "Error";
            }
        } else if (value === "ac") {
            displayElement.textContent = "";
        } else {
            displayElement.textContent += value;
        }
    });
});
