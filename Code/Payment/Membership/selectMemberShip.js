// function selectPlan(index) {

//     const selectors = document.querySelectorAll('.plan-selector');
//     selectors.forEach(s => s.classList.remove('active'));
//     selectors[index].classList.add('active');


//     const rows = document.querySelectorAll('.plan-table .table-row');
//     rows.forEach(row => {
//         const cells = row.querySelectorAll('.plan-data');
//         cells.forEach(cell => cell.classList.remove('active-text'));
//         if(cells[index]) {
//             cells[index].classList.add('active-text');
//         }
//     });
// }

function select(card) {
    const allCards = document.querySelectorAll('.plan-card');
    allCards.forEach(c => {
        c.classList.remove('active');
    });
    card.classList.add('active');
}

document.querySelector('.next-btn').addEventListener('click', function() {

    const selectedCard = document.querySelector('.plan-card.active');

    if (selectedCard) {

        window.location.href = '../select_payment_mood/choosePayment.html'; 
    } else {

        alert("Please select a plan to continue.");
        document.getElementById('error-msg').style.display = 'block';
    }
});