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
        return;
    }

    let user = {
        firstName,
        lastName,
        emailInput,
        dateInput,
        ID: randomId()
    };

    // Store as an array
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    Toastify({
        text: "User Added Successfully",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right,rgba(47, 255, 75, 1),rgba(0, 39, 16, 1))",
        }
    }).showToast();

    // Clear inputs
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("dateInput").value = "";
}

let showImage = () => {
    output.innerHTML = "<div class='text-center'><img src='download.jpg' class='img-fluid'></div>";
}

let showUsersInConsole = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
}

let showTable = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        output.innerHTML = "<div class='alert alert-info'>No users found. Please add a user first.</div>";
        return;
    }

    let tableHTML = `<div class='table-responsive'>
        <table class='table table-bordered table-striped'>
            <thead class='table-dark'>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>`;

    users.forEach((user, index) => {
        tableHTML += `<tr>
            <td>${index + 1}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.emailInput}</td>
            <td>${user.dateInput}</td>
            <td><code>${user.ID}</code></td>
        </tr>`;
    });

    tableHTML += `</tbody></table></div>`;
    output.innerHTML = tableHTML;
}   