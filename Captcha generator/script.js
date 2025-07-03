const canvas = document.getElementById("captcha");
const ctx = canvas.getContext("2d");
const captchaInput = document.getElementById("captcha-input");
const reloadCaptcha = document.getElementById("reload-captcha");
const form = document.getElementById("contact-form");
const captchaError = document.getElementById("captcha-error");

let captchaText = "";

// Function to generate a random captcha
function generateCaptcha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    captchaText = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6-character random string

    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(captchaText, 20, 35);
}

// Verify captcha
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (captchaInput.value.toUpperCase() === captchaText) {
        alert("CAPTCHA Verified! Form Submitted.");
        form.reset();
        generateCaptcha();
    } else {
        captchaError.textContent = "Invalid CAPTCHA. Try again!";
        generateCaptcha();
    }
});

// Reload captcha when button is clicked
reloadCaptcha.addEventListener("click", generateCaptcha);

// Initial captcha load
generateCaptcha();
