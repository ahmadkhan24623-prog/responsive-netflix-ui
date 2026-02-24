
const signupForms = document.querySelectorAll('.signup-container');

signupForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const button = form.querySelector('button');

        if (emailInput.checkValidity()) {
            const originalContent = button.innerHTML;
            button.innerHTML = "Processing...";

            setTimeout(() => {
                const emailValue = encodeURIComponent(emailInput.value);
                // window.location.href = `getStarted.html?email=${emailValue}`;
                window.location.href = `Account/step_1/getStarted.html?email=${emailValue}`;
            }, 1000);
        } else {
            emailInput.reportValidity();
        }
    });
});


let index = 0;

function scrollSlider(event, direction) {
    const btn = event.target;
    const slider = btn.parentElement.querySelector('.slider');
    
    if (slider) {
        const scrollAmount = 460; 
        
        slider.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');

    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(el => el.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});



