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

// code for Day & Date

const today = new Date();
const day = today.toLocaleString('en-us', { weekday: 'short' });
const formattedDate = today.toLocaleDateString('en-us',{month:'short',day:'numeric',year:'numeric'});
document.getElementById("current-day").innerHTML = day + ',';
document.getElementById("current-date").innerHTML = formattedDate;

// Code for Completed Button

function handleButtonClick(buttonId) {
    
    // Disable the clicked button
    disableBtn('completed-' + buttonId);

    // Increase total count
    totalCount();

    // Decrease task count
    taskCount();
    
    const cardTitle = document.getElementById('title-' + buttonId).innerText;
    sidebarComments(cardTitle);
}
