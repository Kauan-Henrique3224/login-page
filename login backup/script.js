const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    // 1. Impede o navegador de recarregar a página
    event.preventDefault();

    // 2. Captura os valores dos inputs
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // 3. Simulação de validação (Em um app real, aqui você usaria fetch() para o Back-end)
    if (user === "admin" && pass === "1234") {
        message.style.color = "green";
        message.innerText = "Login realizado com sucesso! Redirecionando...";
        
        // Simula redirecionamento após 2 segundos
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    } else {
        message.style.color = "red";
        message.innerText = "Usuário ou senha incorretos.";
    }
});