
export function showRegisterForm() {
    const app = document.querySelector("#app");
    app.innerHTML = `

     <h2>Register</h2>
    <input type="text" placeholder="Name" class="nameInput border p-2 mb-2 block required" />
    <input type="email" placeholder="Email" class="emailInput border p-2 mb-2 block required" />
    <input type="password" placeholder="Password" class="passwordInput border p-2 mb-2 block required" />
    <button class=" register bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    <p>
      Already have an account?
      <span class=" loginLink text-blue-600 cursor-pointer">Login now</span>
    </p>

`
};