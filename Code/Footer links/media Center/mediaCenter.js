function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModals();
    }
}





document.addEventListener("DOMContentLoaded", function() {
    const posters = document.querySelectorAll('.item');
    const nav = document.querySelector('.nav-overlay');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    posters.forEach(poster => observer.observe(poster));

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
