
// const cookieLink = document.getElementById('open-cookies');
// const modal = document.getElementById('cookie-modal');
// const closeBtn = document.getElementById('close-cookies');
// const saveBtn = document.getElementById('save-cookies');

// cookieLink.onclick = function() {
//     modal.style.display = "flex";
// }


// closeBtn.onclick = function() {
//     modal.style.display = "none";
// }

// saveBtn.onclick = function() {
//     modal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }




const cookieLink = document.getElementById('open-cookies');
const modal = document.getElementById('cookie-modal');
const closeBtn = document.getElementById('close-cookies');
const saveBtn = document.getElementById('save-cookies');


const tabs = document.querySelectorAll('.tab-link');
const titleArea = document.querySelector('.description-area h3');
const descArea = document.querySelector('.description-area p');
cookieLink.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
saveBtn.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

const contentData = {
    "General Description": "This tool will help you understand the use of cookies on the Netflix service and how you can control them.",
    "Essential Cookies": "These cookies are strictly necessary to provide our service. For example, we and our Service Providers may use these cookies to authenticate and identify our members when they use our websites.",
    "Performance Cookies": "These cookies help us to customize and enhance your online experience with Netflix. For example, they help us to remember your preferences and prevent you from having to re-enter information you previously provided."
};


tabs.forEach(tab => {
    tab.onclick = function() {

        tabs.forEach(t => t.classList.remove('active'));
        

        this.classList.add('active');

        const tabName = this.innerText;
        titleArea.innerText = tabName;
        descArea.innerText = contentData[tabName];
    };
});