let allCities = ["Faisalabad","Lahore","Gujranwala","Sialkot","Islamabad","Kashmir","Multan"]
let clearInput = () => {
    document.getElementById("inputText").value=""
}
let clearOutput= () => {
    document.getElementById("Output").innerHTML =""
}

let convertToLowercase = () => {
    let value = document.getElementById("inputText").value;
    if (value == "") {
        Toastify({
            text: "Please Enter text.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        document.getElementById("Output").innerText = value.toLowerCase();
    }
}
let convertToUppercase = () => {
    let value = document.getElementById("inputText").value;
    if (value == "") {
        Toastify({
            text: "Please Enter text.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        document.getElementById("Output").innerText = value.toUpperCase();
    }
}
let convertToCaptalized = () => {
    let value = document.getElementById("inputText").value;
    if (value == "") {
        Toastify({
            text: "Please Enter text.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        document.getElementById("Output").innerText = value.charAt(0).toUpperCase() + value.slice(1);
    }
}
let formatting = () => {
    let value = document.getElementById("inputText").value;
    if (value == "") {
        Toastify({
            text: "Please Enter text.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        document.getElementById("Output").innerText = value.replace(/_/g, " ").toLowerCase();
    }
}
let findThisWord = () => {
    let value = document.getElementById("inputText").value;
    if (value == "") {
        Toastify({
            text: "Please Enter text.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        document.getElementById("Output").innerText = allCities.includes(value);
    }
}
let replaceThisWord = () => {
    let value = document.getElementById("inputText").value;
    if (value == "") {
        Toastify({
            text: "Please Enter text.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        document.getElementById("Output").innerText = value.replace(value, value);
    }
}
let printAllCities = () => {
    document.getElementById("Output").innerHTML = ""
    for (let i = 0;i < allCities.length; i++){
        document.getElementById("Output").innerHTML +=  i+1 +")" + allCities[i] + "<br/>";
    }
}
let addNewCity = () => {
    let city = document.getElementById("inputText").value;
    if (city == "") {
        Toastify({
            text: "Please Enter city.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        Toastify({
            text: "Successfully added",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(29, 219, 11),rgb(4, 17, 4))",
            },
            onClick: () => {} // Callback after click
          }).showToast();
          allCities.push(city)
          document.getElementById("Output").innerHTML = "<span style='color : green'>" + city + "</span> Successfully added"
    }

}
let createTable = () => {
    let num = document.getElementById("inputText").value;
    if (num == "") {
        Toastify({
            text: "Please Enter a number.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(255, 0, 0),rgb(56, 1, 1))",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        for (let i = 1; i <= 10;i++) {
            document.getElementById("Output").innerHTML += num + "*" + i +"="+" "+i*num +"<br/>"

    }
    
    }
}