let clearOutput = () => {
    document.getElementById("Output").innerHTML = ""
}
let output = document.querySelector("#Output");
let ifElse = () => {
    let day = new Date().getDay();
    if (day === 0 || day === 6) {
        output.innerHTML = "It's the weekend!";
    } else {
        output.innerHTML = "It's a weekday.";
    }
}

let switchCase = () => {
    let day = new Date().getDay();
    let dayName;
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown";
    }
    output.innerHTML = "Today is " + dayName;
}

let keepAsking = () => {
    let userName = "";
    do {
        userName = prompt("Please enter your name (or type 'cancel' to stop):");
    } while (userName === "" || (userName !== null && userName.toLowerCase() !== "cancel" && userName.trim() === ""));

    if (userName === null || userName.toLowerCase() === "cancel") {
        output.innerHTML = "Process cancelled.";
    } else {
        output.innerHTML = "Hello, " + userName + "!";
    }
}