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

// join 

window.onscroll = function() {
    const joinButton = document.getElementById("joinButtonContainer");
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        joinButton.classList.remove("hidden");
        joinButton.classList.add("show");
    } else {
        joinButton.classList.remove("show");
        joinButton.classList.add("hidden");
    }
};

window.addEventListener('scroll', function() {
    const stickyJoin = document.getElementById('stickyJoin');
    

    if (window.scrollY > 300) {
        stickyJoin.classList.add('visible');
    } else {
        stickyJoin.classList.remove('visible');
    }
});

