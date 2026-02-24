// document.addEventListener('DOMContentLoaded', () => {

//     const params = new URLSearchParams(window.location.search);
//     const email = params.get('email');

//     if (email) {
//         document.getElementById('userEmail').textContent = email;
//     }

//     document.getElementById('nextBtn').addEventListener('click', () => {
//         window.location.href = "step3.html"; 
//     });
// });


document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    
    const userEmail = params.get('email');

    const emailDisplayElement = document.getElementById('userEmail');

    if (userEmail) {
        emailDisplayElement.textContent = userEmail;
    } else {
        emailDisplayElement.textContent = "No email provided";
    }
});

document.querySelector('.nextBtn').addEventListener('click', function () {
    window.location.href = '../../Payment/Membership/selectMemberShip.html';
});
