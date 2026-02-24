document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputField = document.getElementById('userIdentifier');
    const errorMsg = document.getElementById('error-msg');
    const value = inputField.value.trim();
    const isValid = value.includes('@') || /^\d{10,}$/.test(value);

    if (!isValid) {

        errorMsg.style.display = 'block';
        inputField.classList.add('input-error');
    } else {

        errorMsg.style.display = 'none';
        inputField.classList.remove('input-error');
        console.log("Valid input, proceeding..."); 
    }
});


document.getElementById('learnMore').addEventListener('click', function(e) {
    e.preventDefault();
    alert("This info is hidden by default on the real Netflix site until clicked.");
});


const home = document.getElementById('home-page');
        const signin = document.getElementById('signin-page');
        const btn = document.getElementById('showSignIn');

        btn.addEventListener('click', () => {
            home.style.display = 'none';
            signin.style.display = 'flex';
        });