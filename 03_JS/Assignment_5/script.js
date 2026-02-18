let clearInput = () => {
    document.getElementById("inputText").value=""
}
let clearOutput= () => {
    document.getElementById("Output").innerHTML =""
}
let toastError=(alert)=>{
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
        onClick: function(){} // Callback after click
      }).showToast();
}
let output=document.querySelector("#Output");
let input=()=> document.getElementById("inputText").value;
let roundANum = () => {
    if (!input()) {
        toastError("Please enter a number.")
        return
    }
    output.innerHTML = Math.round(input())
}
let ceilANum= ()=>{
    if (!input()) {
        toastError("Please enter a number.")
        return
    }
    output.innerHTML = Math.ceil(input())
}
let floorANum = ()=>{
    if (!input()) {
        toastError("Please enter a number.")
        return
    }
    output.innerHTML = Math.floor(input())
}
let randomNum = ()=>{
    output.innerHTML = Math.round(Math.random() * 100)
}
let throwADice = () => {
    output.innerHTML = Math.floor((Math.random() * 6)+1)
}
let generateAStrongPass = () => {
    if (!input()) {
        toastError("Give a limit.")
        return
    }
    let limit = input()
    let pass = ""
    let cAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphabets = cAlphabets.toLocaleLowerCase()
    let symbol = "!@#$%^&*()"
    let num = "1234567890"
    let total = cAlphabets + alphabets + symbol + num;
    for (let i = 0;i < limit;i++) {
        pass += total.charAt(Math.random() * total.length) 
    }
    output.innerHTML = pass
}
let convertingString= ()=>{
    let num = "25.12345"
    console.log(num);
    console.log(typeof num);
    let Cnum= Number(num)
    console.log(Cnum);
    console.log(typeof Cnum);
}
let controllingLength = ()=>{
    if (!input()) {
        toastError("Give a limit.")
        return
    }
    let num = 25.12345
    let Fnum = num.toFixed(input())
    output.innerHTML = Fnum
}
let calculateGST = ()=>{
    if (!input()) {
        toastError("Give a number.")
        return
    }
    let num = Number(input())
    let GST = num * (18/100)/100
    output.innerHTML = GST
}