document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const email = document.getElementById("email").value.trim();
    const messageBox = document.getElementById("message-box");

    let errors = [];

    // Username Validation
    if (!/^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(username)) {
        errors.push("Username must start with a letter and be 3-20 characters long. Allowed: letters, numbers, - and _.");
    }

    // Password Validation
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'\",.<>?/`~]).{8,}$/.test(password)) {
        errors.push("Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character.");
    }

    // Confirm Password
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Email Validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.push("Invalid email format.");
    }

    // Show Errors or Proceed
    if (errors.length > 0) {
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "#ffcccc";
        messageBox.innerHTML = errors.join("<br>");
    } else {
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "#ccffcc";
        messageBox.innerHTML = "Signup successful! Redirecting...";

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
});
