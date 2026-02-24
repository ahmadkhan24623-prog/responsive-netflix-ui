
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

function moveRow(direction) {
    const track = document.getElementById("track");
    const cardWidth = 180 + 14;
    const visibleCards = 6;
    const maxIndex = track.children.length - visibleCards;

    index += direction * visibleCards;

    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    track.style.transform = `translateX(-${index * cardWidth}px)`;
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



