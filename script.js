// Function to get valid PINs from localStorage
function getValidPINs() {
  const storedPINs = localStorage.getItem("validPINs");
  return storedPINs ? JSON.parse(storedPINs) : ["1234", "5678", "9101"]; // Default PINs
}

// Function to save valid PINs to localStorage
function saveValidPINs(pins) {
  localStorage.setItem("validPINs", JSON.stringify(pins));
}

// Function to update PIN display
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
    saveValidPINs(validPINs); // Save updated PINs to localStorage
    updatePinDisplay(); // Update the displayed list of PINs
    document.getElementById("pin-input").value = ""; // Clear the input field
    errorMessage.textContent = ""; // Clear any previous error messages
  } else {
    errorMessage.textContent = "PIN is already in use";
  }
}

// Initialize valid PINs from localStorage
let validPINs = getValidPINs();

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
