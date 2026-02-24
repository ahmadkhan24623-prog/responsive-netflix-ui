document.getElementById('completeRegistrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('displayEmail').value;
    const password = document.getElementById('newPassword').value;

    if (email.includes('@') && password.length > 0) {
        
        window.location.href = `../Account created/AccountCreated.html?email=${encodeURIComponent(email)}`;
    } else {
        alert("Please enter a valid email and password.");
    }
});