// Array of valid PINs
let validPINs = ["1234", "5678", "9101"];

// Function to update the PIN display
function updatePinDisplay() {
  const pinDisplayDiv = document.getElementById("pin-display");
  pinDisplayDiv.innerHTML = ""; // Clear the existing content

  validPINs.forEach((pin) => {
    const pinElement = document.createElement("div");
    pinElement.className = "pin-item";
    pinElement.textContent = pin;
    pinDisplayDiv.appendChild(pinElement);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const pin = document.getElementById("pin").value;
  const errorMessage = document.getElementById("error-message");

  if (validPINs.includes(pin)) {
    alert("Login successful!");
    // Redirect or perform further actions here
  } else {
    errorMessage.textContent = "Invalid PIN. Please try again.";
  }
}

// Function to handle PIN addition
function handlePinAddition(event) {
  event.preventDefault();

  const pinInput = document.getElementById("pin-input").value;
  const errorMessage = document.getElementById("error-message");

  if (pinInput && !validPINs.includes(pinInput)) {
    validPINs.push(pinInput); // Add new PIN to the array
    updatePinDisplay(); // Update the displayed list of PINs
    document.getElementById("pin-input").value = ""; // Clear the input field
    errorMessage.textContent = ""; // Clear any previous error messages
  } else {
    errorMessage.textContent = "PIN is either empty or already exists.";
  }
}

// Add event listener for form submission
document
  .getElementById("login-form")
  .addEventListener("submit", handleFormSubmit);

// Add event listener for PIN addition
document
  .getElementById("add-pin-form")
  .addEventListener("submit", handlePinAddition);

// Initialize PIN display
updatePinDisplay();
