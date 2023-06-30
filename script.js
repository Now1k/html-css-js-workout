console.log('Hello from Nerdbord!')

const changeColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const box = document.querySelector(".box").style.borderColor = `#${randomColor}`
}

const startChange = () => {
    setInterval(changeColor, 3000)
}

startChange()