const userInput = document.querySelector(".userInput"); //get
const addBtn = document.querySelector(".addBtn"); //get
const newItem = document.querySelector(".newItem");   //get

addBtn.addEventListener("click", () => {
    // get userInput 
    const userValue = document.userInput.value;
    //apply function to user Input if this is not empty
    if (userValue !== " ") {
        //creat constainer for userInput
        const newTaskItem = document.createElement("div");
        //apply Css to above container
        newTaskItem.classList.add("bg-white", "text-black", "px-4", "py-2", "rounded-md",
            "my-2", "w-64", "flex", "justify-between", "items-center");
        //after creat container 
        //creat para and button in html
        newTaskItem.innerHTML = `
        <p>${userValue}</p> <button class="addBtn bg-blue-700 px-6 py-2 rounded-md text-white">
            Add Task
        </button>`
        //applu function to button which is delete or remove 
        addBtn.addEventListener("click", ()=>{
            newTaskItem.remove();
        });
        //newtaskItem add to existing element
        newTaskItem.appendChild(newItem);
        
        userInput.value="";

    }

});

