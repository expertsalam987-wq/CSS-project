// Q4: Add interactivity and validation
    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop normal submit

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value.trim();
      const service = document.getElementById("service").value;
      const textArea = document.getElementById("textArea").value.trim();

      // Get error and success elements
      const nameErr = document.getElementById("nameErr");
      const emailErr = document.getElementById("emailErr");
      const dateErr = document.getElementById("dateErr");
      const message = document.getElementById("message");
      const allText = document.getElementById("allText")

      // Reset previous messages
      nameErr.style.display = "none";
      emailErr.style.display = "none";
      dateErr.style.display = "none";
      message.style.display = "none";
      allText.style.display = "none";

      let valid = true;

      // Validation checks
      if (name === "") {
        nameErr.style.display = "block";
        valid = false;
      }

      if (email === "" || !email.includes("@")) {
        emailErr.style.display = "block";
        valid = false;
      }

      if (date === "") {
        dateErr.style.display = "block";
        valid = false;
      }
      if (textArea === "") {
        message.style.display = "block"
      }

      // If valid, show success message
      if (valid) {
        allText.textContent = `Thank you ${name}, your appointment for ${service || "our service"} has been received!`;
        allText.style.display = "block";
        form.reset();
      }
    });