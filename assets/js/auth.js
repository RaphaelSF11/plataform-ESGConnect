document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        // Substitua esta URL pela URL real da sua API de login
        const response = await fetch('https://sua-api.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Login bem-sucedido
            localStorage.setItem('token', data.token); // Armazena o token JWT
            window.location.href = 'dashboard.html'; // Redireciona para a página protegida
        } else {
            // Exibe mensagem de erro
            document.getElementById('message').textContent = data.message || 'Erro no login';
        }
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('message').textContent = 'Erro ao conectar com o servidor';
    }
});