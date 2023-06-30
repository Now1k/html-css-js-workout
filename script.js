console.log('Hello from Nerdbord!')

// Function to change the border color of the box
const changeColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const box = document.querySelector(".box").style.borderColor = `#${randomColor}`
}

// Function to start changing the border color at regular intervals
const startChange = () => {
    setInterval(changeColor, 3000);
    setTimeout(() => {
        clearInterval(intervalId);
    }, 12000); // Stop after 12 seconds (4 color changes)
}

// Start changing the border color
startChange()