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
        threshold: 0.15
    });

    const sectionsToAnimate = document.querySelectorAll('#o-que-e, #importancia');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

});