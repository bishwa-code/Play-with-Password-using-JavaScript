// show and hide password

let eyeIcon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.innerText = "hide";
        eyeIcon.style.backgroundColor = "#fc036c";
    } else {
        password.type = "password";
        eyeIcon.innerText = "show";
        eyeIcon.style.backgroundColor = "#14e6a7";
    }
});

// Rndm password generate

let passwordBox = document.querySelector("#generated-password");
let copyBtn = document.querySelector("#copy-icon");
let getBtn = document.querySelector("#getBtn");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let lowerCase = upperCase.toLowerCase();
let numbers = "0123456789";
let symbols = "~@#$%^&*()_-+={]}[|/<>";
let allItems = upperCase + lowerCase + numbers + symbols;


getBtn.addEventListener("click", () => {
    let passwordLength = 12;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += allItems[Math.floor(Math.random() * allItems.length)];      
    }
    passwordBox.value = `${password}`;
});

copyBtn.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
});


// password strength by using passLength

let message = document.getElementById("msg");
let strength = document.getElementById("strength");
let pasBox = document.getElementsByClassName("strength-check");

password.addEventListener("input", () => {
    if (password.value.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }

    if (password.value.length < 4) {
        strength.innerText = "Weak";
        pasBox[0].style.border = "2px solid #fb501d";
        message.style.color = "#fb501d";
    } else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerText = "Medium";
        pasBox[0].style.border = "2px solid yellow";
        message.style.color = "yellow";
    } else if (password.value.length >= 8) {
        strength.innerText = "Strong";
        pasBox[0].style.border = "2px solid #1ed828";
        message.style.color = "#1ed828";
    }
});
