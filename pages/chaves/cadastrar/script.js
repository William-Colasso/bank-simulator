document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('main .button');
    const confirmButton = document.querySelector('a.confirmar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(!button.classList.contains('selected')){
                buttons.forEach(btn => {
                    btn.classList.remove('selected');
                    btn.querySelector('.description').style.display = 'none';
                });

                button.classList.add('selected');
                button.querySelector('.description').style.display = 'block';

                confirmButton.classList.add('active');
            } else if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                button.querySelector('.description').style.display = 'none';
                confirmButton.classList.remove('active');
            }
        });
    });

    confirmButton.addEventListener('click', () => {
        if (document.querySelector('main .button.selected')) {
            window.location.href = '../index.html'; // Testando
        } else {
            confirmButton.classList.remove('active');
        }
    });
});
