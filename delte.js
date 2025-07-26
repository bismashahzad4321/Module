export function deleteButtonFuntion(newContainer){
    const deltBtn=document.createElement("button");
    deltBtn.textContent="Delete";
    deltBtn.classList.add("bg-red-600", "px-4", "py-2", "rounded-md", "text-white");

    deltBtn.addEventListener("click", ()=>{
        newContainer.remove();
    });
    return deltBtn;
}