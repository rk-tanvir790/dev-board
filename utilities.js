// Re-useable Function For Total Count

function totalCount() {
    const totalCountBtn = document.getElementById("total-count");
    const convertedTotalCount = parseInt(totalCountBtn.innerText);
    const sum = convertedTotalCount + 1;
        totalCountBtn.innerText = sum;
}

// Re-useable Function For Task

function taskCount() {
    const totalTaskCountBtn = document.getElementById("task-count");
    const convertedTotalTaskCount = parseInt(totalTaskCountBtn.innerText);
    const sum = convertedTotalTaskCount - 1;
        totalTaskCountBtn.innerText = sum;
}

// Re-useable Function For Button Disable

function disableBtn(id) {
    const getBtn = document.getElementById(id);
    getBtn.disabled = true;
    getBtn.style.backgroundColor='#E3E8FF';
    getBtn.style.cursor='not-allowed';
}

// Current Time code for sidebar section

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Ensure 2 digits for minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;

// Re-useable Function For Sidebar Section

function sidebarComments(title) {
    const commentsElement = document.getElementById("comments-list");

    const commentWrapper = document.createElement("div");
    commentWrapper.classList.add("comment-wrapper");

    const commentItem = document.createElement("li");
    commentItem.innerText = `You Have Complete The Task ${title} at ${currentTime}`;

    commentWrapper.appendChild(commentItem);
    commentsElement.appendChild(commentWrapper);
}