document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const pin = document.getElementById("pin").value;
    const errorMessage = document.getElementById("error-message");

    // Array of valid PINs for demonstration
    const validPINs = ["1234", "5678", "9101"];

    if (validPINs.includes(pin)) {
      alert("Login successful!");
      // Redirect or perform further actions here
    } else {
      errorMessage.textContent = "Invalid PIN. Please try again.";
    }
  });
