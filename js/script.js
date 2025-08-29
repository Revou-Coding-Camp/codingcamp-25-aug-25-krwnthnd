console.log("Hello World");

greet();

/// Greet the user
function greet() {
    /// Prompt for the user's name
    let username = prompt("Please enter your name:");
    
    /// Display the greeting message
    document.getElementById('username').innerText = username;
}


/// Validate the form
function validateForm() {
    /// Get the name input value
    let name = document.getElementById('name-input').value;
    
    /// Validate the name input
    if (name === "") {
        /// Alert if the name is empty
        alert("Name must be filled out");
    } else {
        /// Alert a thank you message
        alert("Thank you, " + name + "!");
    }
}