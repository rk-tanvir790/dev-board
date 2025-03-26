// function for button. this button will change body color randomly

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById('color-btn');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();

    
        // const color1 = getRandomColor();
        // const color2 = getRandomColor();
        // document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
   
});


