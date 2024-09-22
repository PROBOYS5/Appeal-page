document.getElementById("appealForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        // Send email using EmailJS
        emailjs.send("service_ukr0c0k", "template_0d52sxg", {
            user_email: email,
            user_message: message
        })
        .then(function(response) {
            document.getElementById("success-message").textContent = "Your apology has been sent successfully!";
            document.getElementById("success-message").style.color = "#2ECC71";
            document.getElementById("appealForm").reset();
        }, function(error) {
            document.getElementById("success-message").textContent = "Failed to send your apology. Please try again.";
            document.getElementById("success-message").style.color = "#E74C3C";
            console.error("FAILED...", error);
        });
    }
});