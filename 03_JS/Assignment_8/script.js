let randomId = () => Math.random().toString(36).slice(2);
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
let addUser = () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailInput = document.getElementById("emailInput").value;
    let dateInput = document.getElementById("dateInput").value;
    if (!firstName || !lastName || !emailInput || !dateInput) {
        toastError("Please fill all the fields");
        return
    }
    let user = {
        firstName: firstName,
        lastName: lastName,
        emailInput: emailInput,
        dateInput: dateInput,
        ID: randomId()
    }
    localStorage.setItem("user", JSON.stringify(user));
    Toastify({
        text: "User Added Successfully",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,rgba(47, 255, 75, 1),rgba(0, 39, 16, 1))",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
let showImage = () => {
    output.innerHTML = "<img src='download.jpg'> "
}
let showUsersInConsole = () => {
    let users = JSON.parse(localStorage.getItem("user")) || []
    console.log(users)
}