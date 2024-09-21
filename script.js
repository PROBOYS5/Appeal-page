document.getElementById("appealForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (email && message) {
    const emailTo = "sihamurrahmanlabib2013@gmail.com";
    const mailtoLink = `mailto:${emailTo}?subject=Apology from ${email}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    document.getElementById("success-message").textContent = "Thank you for your submission!";
    document.getElementById("appealForm").reset();
  }
});