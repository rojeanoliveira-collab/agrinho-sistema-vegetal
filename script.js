document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('manejoForm');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', (event) => {
        // Impede o envio padrão do formulário (recarregar a página)
        event.preventDefault();

        // Pega os valores digitados pelo usuário
        const nome = document.getElementById('nome').value;

        // Exibe uma mensagem de sucesso na tela
        feedback.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem sobre manejo foi recebida com sucesso. Em breve responderemos.`;
        feedback.className = "success"; // Aplica a classe de estilo verde do CSS
        
        // Limpa os campos do formulário
        form.reset();
    });
});