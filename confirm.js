const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const values = document.getElementById("values");
const submitBtn = document.getElementById("submitBtn");

function checkPassword() {
    if (password.value === "" || confirmPassword.value === "") {
        values.innerHTML = "";
        submitBtn.disabled = true;
    }
    else if (password.value.length < 8) {
        values.innerHTML = "❌ Password must be at least 8 characters.";
        values.style.color = "red";
        submitBtn.disabled = true;
    }
    else if (password.value === confirmPassword.value) {
        values.innerHTML = "✅ Password Match";
        values.style.color = "green";
        submitBtn.disabled = false;
    }
    else {
        values.innerHTML = "❌ Password does not match";
        values.style.color = "red";
        submitBtn.disabled = true;
    }
}
// function checkPassword() {
//     if (password.value === "" || confirmpassword.value === "") {
//             values.innerHTML = "";
//             submitBtn.disabled = true;
//         }
//         else if (password.value === confirmpassword.value) {
//             values.innerHTML = "✅ Password Match";
//             values.style.color = "green";
//             submitBtn.disabled = false;
//         }
//         else {
//                 values.innerHTML = "❌ Password does not match";
//                 values.style.color = "red";
//                 submitBtn.disabled = true;
//         }
// } 
password.addEventListener("keyup", checkPassword);
confirmpassword.addEventListener("keyup", checkPassword);
