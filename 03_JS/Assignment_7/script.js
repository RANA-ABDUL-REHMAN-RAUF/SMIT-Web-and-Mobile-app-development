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

