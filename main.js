// main.js
import { showRegisterForm } from './To DO App/Utlis/register.js';
import { showLoginForm } from './To DO App/Utlis/login.js';


loadRegister();

function loadRegister() {
    showRegisterForm();

    document.querySelector(".register").addEventListener("click", () => {
        const name = document.querySelector(".nameInput").value;
        const email = document.querySelector(".emailInput").value;
        const password = document.querySelector(".passwordInput").value;

        console.log("Registered:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        alert("Registered Successfully!");

    });

    document.querySelector(".loginLink").addEventListener("click", loadLogin);
}

function loadLogin() {
    showLoginForm();

    document.querySelector(".loginLink").addEventListener("click", () => {
        const email = document.querySelector(".emailInput").value;
        const password = document.querySelector(".passwordInput").value;

        console.log("Logged In:");
        console.log("Email:", email);
        console.log("Password:", password);
         alert("Login Successfully!");
    });

    document.getElementById("registerLink").addEventListener("click", loadRegister);
}
