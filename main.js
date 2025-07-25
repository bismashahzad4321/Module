
import { add, subtract, multilpy, divide } from './todo.js';
import { showResult } from './ui.js';


const button1 = document.querySelector(".add");
button1.addEventListener("click" , ()=> {
    const number1 = Number(document.querySelector(".number1").value);
    const number2 = Number(document.querySelector(".number2").value);
    showResult(add(number1, number2));
});

const button2 = document.querySelector(".subtract");
button2.addEventListener("click" , ()=> {
    const number1 = Number(document.querySelector(".number1").value);
    const number2 = Number(document.querySelector(".number2").value);
    showResult(subtract(number1, number2));
});

const button3 = document.querySelector(".multiply");
button3.addEventListener("click" , ()=> {
    const number1 = Number(document.querySelector(".number1").value);
    const number2 = Number(document.querySelector(".number2").value);
    showResult(multilpy(number1, number2));
});

const button4 = document.querySelector(".divide");
button4.addEventListener("click" , ()=> {
    const number1 = Number(document.querySelector(".number1").value);
    const number2 = Number(document.querySelector(".number2").value);
    showResult(divide(number1,  number2));
});