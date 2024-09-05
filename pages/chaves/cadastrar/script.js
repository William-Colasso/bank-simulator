document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('main .button');
    const confirmButton = document.querySelector('a.confirmar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'selected' de todos os botões
            buttons.forEach(btn => btn.classList.remove('selected'));

            // Adiciona a classe 'selected' ao botão clicado
            button.classList.add('selected');

            // Adiciona a classe 'active' ao botão confirmar
            confirmButton.classList.add('active');
        });
    });

    // Adiciona a lógica para o botão "CONFIRMAR" ser desativado se nenhum botão for selecionado
    confirmButton.addEventListener('click', () => {
        if (!document.querySelector('main .button.selected')) {
            confirmButton.classList.remove('active');
        }
    });
});
