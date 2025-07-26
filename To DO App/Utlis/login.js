export function showLoginForm() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <input type="email" placeholder="Email" class=" emailInput border p-2 mb-2 w-64 required" />
    <input type="password" placeholder="Password" class=" passwordInput border p-2 mb-4 w-64 required" />
    <button class=" loginLink bg-green-500 text-white px-4 py-2 rounded">Login</button>
    <p class="mt-4 text-sm">
      Don't have an account? 
      <span id="registerLink" class="text-blue-600 cursor-pointer">Register now</span>
    </p>
  `;
}