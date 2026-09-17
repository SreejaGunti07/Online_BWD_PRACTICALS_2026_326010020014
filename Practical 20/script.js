// Welcome message
function welcomeMessage() {
    alert("Welcome to ABC College!");
}


// Contact form validation
function validateContactForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Your message has been submitted successfully!");

    return true;
}