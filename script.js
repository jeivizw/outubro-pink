document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visivel' a todos os elementos com a classe 'animar' dentro da seção
                entry.target.querySelectorAll('.animar').forEach(el => {
                    el.classList.add('visivel');
                });
            }
        });
    }, {
        threshold: 0.1 // A animação dispara quando 10% da seção estiver visível
    });

    // Observa a segunda seção
    const secaoInformacoes = document.querySelector('#informacoes');
    if (secaoInformacoes) {
        observer.observe(secaoInformacoes);
    }
});