document.querySelector("#originalText").innerHTML = new Date()
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
let input=()=> document.querySelector("#inputText").value;
let getTodayName =()=>{
    let today = new Date();
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    output.innerHTML = days[today.getDay()]
}
let getDaysFromBorn = () => {
    if (!input()) {
        toastError("please give your date of birth")
    }
    let 
}