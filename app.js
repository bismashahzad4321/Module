const userInput = document.querySelector(".userInput"); //get
const addBtn = document.querySelector(".addBtn"); //get
const newItem = document.querySelector(".newItem");   //get
import { deleteButtonFuntion } from '/delte.js';

addBtn.addEventListener("click", () => {
    const userValue = userInput.value;
    if (userValue !== "") {
        const newContainer = document.createElement("div")
        newContainer.classList.add("bg-white", "text-black", "px-4", "py-2", "rounded-md",
            "my-2", "w-64", "flex", "justify-between", "items-center");

        const paraText = document.createElement("p");
        paraText.textContent = userValue;

        const buttonDlete = deleteButtonFuntion(newContainer);
        newContainer.appendChild(paraText)
        newContainer.appendChild(buttonDlete);

        newItem.appendChild(newContainer);
        userInput = "";

    };
});
