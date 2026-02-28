let rendomId = () => Math.random().toString(36).slice(2);
let clearOutput = () => {
    document.getElementById("Output").innerHTML = ""
}
let output = document.querySelector("#Output");