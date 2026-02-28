let rendomId = () => Math.random().toString(36).slice(2);
let clearOutput = () => {
    document.getElementById("Output").innerHTML = ""
}
let output = document.querySelector("#Output");
let toastError = (alert) => {
    Toastify({
        text: alert,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,rgb(255, 0, 0),rgb(0, 0, 0))",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}