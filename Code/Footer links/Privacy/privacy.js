document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item.has-arrow');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
                        parent.classList.toggle('open');
            
            
        });
    });
});


function toggleAccordion(element) {
    const parent = element.parentElement;
    
    const isOpen = parent.classList.contains('active');
        document.querySelectorAll('.nav-group').forEach(group => {
        group.classList.remove('active');
    });
    if (!isOpen) {
        parent.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', (e) => {
        const header = e.target.closest('.nav-item.has-arrow');
        
        if (header) {
            const parent = header.parentElement;
            const isOpen = parent.classList.contains('active');

            document.querySelectorAll('.nav-group').forEach(group => {
                group.classList.remove('active');
            });
            if (!isOpen) {
                parent.classList.add('active');
            }
        }
    });

    const submenuLinks = document.querySelectorAll('.submenu a');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    if (window.innerWidth < 950) {
                        link.closest('.nav-group').classList.remove('active');
                    }
                }
            }
        });
    });

    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
});