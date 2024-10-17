let input = document.querySelector(".inputBox input");
let buttons = document.querySelectorAll("button");

let string = ""; // This will hold the calculation expression
let arr = Array.from(buttons); // Converting NodeList to array

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value == "=") {
            try {
                string = eval(string); // Evaluate the string expression
                input.value = string; // Show result in the input
            } catch (error) {
                input.value = "Error"; // In case of invalid expression
                string = ""; // Reset string
            }
        } else if (value == "C") {
            string = ""; // Clear the input
            input.value = string;
        } 
        else if (value == "Del") {
            string = string.slice(0, -1); // Remove the last character
            input.value = string;
        }
        
        else {
            string += value; // Append button value to string
            input.value = string; // Display the current string in input
        }
    });
});
