let textLeft = () => {
    document.getElementById("Output").className = " "
}
let textCenter = () => {
    document.getElementById("Output").className = "text-center"
}
document.getElementById("concatenateString").onclick = () => {
    textCenter()
    document.getElementById("Statement").innerHTML = "'Rana' + ' ' + 'Abdul' + ' ' + 'Rehman' + ' ' + 'Rauf' "
    document.getElementById("Output").innerHTML = 'Rana' + ' ' + 'Abdul' + ' ' + 'Rehman' + ' ' + 'Rauf'
}
document.getElementById("askName").onclick = () => {
    textCenter()
    let userName = prompt("Enter Your Name.")
    document.getElementById("Statement").innerHTML = 'prompt("Enter Your Name.")' 
    document.getElementById("Output").innerHTML = userName
}
document.getElementById("comparisonOperators").onclick = () =>{
    textLeft()
    document.getElementById("Output").innerHTML = ' <ol > <li>==  (Equal)</li> <li> === (Strict)</li><li> !=  (NotEqual)</li><li> !==  (SNotEqual) </li><li> > (Greater than)</li><li> <   (Less than)</li><li> >=   (GEqual)</li><li>  <=   (LEqual)</li></ol>'
}
document.getElementById("ifElse").onclick = () => {
    textCenter()
    let userNumber = prompt("Enter your number out of 100 .I will give you your grade")
    if ( userNumber <= "40") {
        document.getElementById("Output").innerText = "Your are fail"
    } else if ( userNumber <= "50") {
        document.getElementById("Output").innerText = "Your grade is D"
    } else if ( userNumber <= "60") {
        document.getElementById("Output").innerText = "Your grade is C"
    } else if ( userNumber <= "70") {
        document.getElementById("Output").innerText = "Your grade is B"
    } else if ( userNumber <= "80") {
        document.getElementById("Output").innerText = "Your grade is A"
    } else {
        document.getElementById("Output").innerText = "Your grade is A+"
    }

}
document.getElementById("condition").onclick = () => {
    textCenter()
    let userAge = prompt("Enter your age")
    let userWieght = prompt("Enter your wieght")
    if (userAge >= 18 && userWieght <= 70) {
        alert("You ara a smart man")
        document.getElementById("Statement").innerHTML = "Your Age: " + userAge + "<br>Your Weight: " + userWieght;
        document.getElementById("Output").innerHTML = "You ara a smart man 👨‍💻"
    } else if (userAge >= 18 && userWieght > 70) {
        alert("You are a fat guy")
        document.getElementById("Statement").innerHTML = "Your Age: " + userAge + "<br>Your Weight: " + userWieght;
        document.getElementById("Output").innerHTML = "You ara a fat guy 🙎"
    } else {
        alert("You ara baby")
        document.getElementById("Statement").innerHTML = "Your Age" + " " + userAge
        document.getElementById("Output").innerHTML = "You ara a baby 👶"
    }
}
document.getElementById("ifNested").onclick = () => {
    textCenter()
    let userAge = prompt("Enter Your Age.")
    if (userAge < 18) {
        alert("You ara baby")
        document.getElementById("Statement").innerHTML = "Your Age" + " " + userAge
        document.getElementById("Output").innerHTML = "You ara a baby 👶"
        }
    if (userAge >= 18 ) {
            let userWeight = prompt("Enter your weight")
            if (userWeight <= 70) {
                alert("You ara a smart man")
            } else {
                alert("You ara a fat guy")
            }
            document.getElementById("Statement").innerHTML = "Your Age: " + userAge + "<br>Your Weight: " + userWeight;
            document.getElementById("Output").innerHTML = "You ara a smart man 👨‍💻"
    } 
}
document.getElementById("Login").onclick = () => {
    textCenter()
    let username = prompt("Enter your username.")
    let pass = prompt("Ente your password.")
    if (username =="admin" && pass == "1234") {
        alert("You Successfully Login.")
        document.getElementById("Output").innerHTML = "You Successfully Login."
    } else {
        alert("Username or Password are invalid.")
        document.getElementById("Output").innerHTML = "Username or Password are invalid."
    }
}
document.getElementById("Check").onclick = () => {
    textCenter()
    let userNumber = prompt("Enter your number out of 100 .I will give you your grade")
    if ( userNumber <= "40") {
        document.getElementById("Output").innerText = "Your are fail"
    } else if ( userNumber <= "50") {
        document.getElementById("Output").innerText = "Your grade is D"
    } else if ( userNumber <= "60") {
        document.getElementById("Output").innerText = "Your grade is C"
    } else if ( userNumber <= "70") {
        document.getElementById("Output").innerText = "Your grade is B"
    } else if ( userNumber <= "80") {
        document.getElementById("Output").innerText = "Your grade is A"
    } else {
        document.getElementById("Output").innerText = "Your grade is A+"
    }
}
document.getElementById("buttonOutput").onclick =()=>{
    document.getElementById("Output").innerText=""
}
document.getElementById("buttonStatment").onclick =() => {
    document.getElementById("Statement").innerText=""
}