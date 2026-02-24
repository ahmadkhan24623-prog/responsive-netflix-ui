document.addEventListener("DOMContentLoaded", () => {
    const speedNum = document.getElementById("speed-number");
    const refreshBtn = document.getElementById("refresh-btn");
    const needle = document.getElementById("needle");
    let testInterval;

    function runTest() {
        clearInterval(testInterval);
        
        // Pick a random target between 30 and 85
        const target = Math.floor(Math.random() * 55) + 30; 
        let current = 0;
        
        speedNum.style.color = "#818181"; // Gray while running

        testInterval = setInterval(() => {
            current += Math.floor(Math.random() * 6) + 1;
            
            if (current >= target) {
                current = target;
                speedNum.style.color = "#000"; // Black when finished
                clearInterval(testInterval);
            }

            speedNum.innerText = current;

            // Needle rotation logic: starts at -90deg and moves to 90deg
            const rotation = -90 + (current / 100) * 180;
            needle.style.transform = `rotate(${rotation}deg)`;

        }, 60);
    }

    refreshBtn.addEventListener("click", runTest);
    runTest(); // Start automatically
});


