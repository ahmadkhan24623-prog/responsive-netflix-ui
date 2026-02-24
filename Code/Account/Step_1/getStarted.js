document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    
    if (email) {
        document.getElementById('userEmail').innerText = email;
    }
});

const nextForm = document.querySelector('form'); 

if (nextForm) {
    nextForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        window.location.href = "../Step 2/getStarted2.html";
    });
}