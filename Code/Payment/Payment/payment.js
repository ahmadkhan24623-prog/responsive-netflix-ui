
const savedPlan = localStorage.getItem('userSelectedPlan') || "Basic";
const savedPrice = localStorage.getItem('userSelectedPrice') || "Rs 450/month";

document.getElementById('displayPlan').innerText = savedPlan;
document.getElementById('displayPrice').innerText = savedPrice;