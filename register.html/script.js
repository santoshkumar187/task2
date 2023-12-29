function registerUser(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform registration logic (you would replace this with server-side code)
    // For example, you can use AJAX to send data to the server and handle the response
    // Here, we are just displaying a message for demonstration purposes
    document.getElementById("registrationMessage").innerText = "Registration successful!";
}

function loginUser(event) {
    event.preventDefault();

    // Get form values
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Perform login logic (you would replace this with server-side code)
    // Here, we are just displaying a message for demonstration purposes
    document.getElementById("loginMessage").innerText = "Login successful!";
}