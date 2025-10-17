document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.querySelectorAll('.animar').forEach(el => {
                    el.classList.add('visivel');
                });
            }
        });
    }, {
        threshold: 0.1 
    });

    const secaoInformacoes = document.querySelector('#informacoes');
    if (secaoInformacoes) {
        observer.observe(secaoInformacoes);
    }
});