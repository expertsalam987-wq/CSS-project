    // Q4: Add interactivity and validation
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop normal submit

    // Get values
const fullName = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const date = document.getElementById("date").value.trim();
const service = document.getElementById("service").value;

    // Get error and success elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const dateError = document.getElementById("dateError");
const successMsg = document.getElementById("successMsg");

    // Reset previous messages
nameError.style.display = "none";
emailError.style.display = "none";
dateError.style.display = "none";
successMsg.style.display = "none";

let valid = true;

    // Validation checks
    if (fullName === "") {
        nameError.style.display = "block";
        valid = false;
      }

    if (email === "" || !email.includes("@")) {
        emailError.style.display = "block";
        valid = false;
      }

    if (date === "") {
        dateError.style.display = "block";
        valid = false;
      }

    // If valid, show success message
    if (valid) {
        successMsg.textContent = `Thank you ${fullName}, your appointment for ${service || "our service"} has been received!`;
        successMsg.style.display = "block";
        form.reset();
      }
});