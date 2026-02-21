setInterval(()=>{
    document.querySelector("#originalText").innerHTML = new Date()
})
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
        return
    }
    let startDate = new Date()
    let bornDate = new Date(input())
    let DaysLived= Math.floor((startDate - bornDate) / (1000 * 60 * 60 * 24))
    output.innerHTML= "You lived <span style='color:green;'>" +DaysLived+"</span> days"
}
let  getNextBirthday = () => {
    const bornDate = new Date(input())
    const today = new Date();
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, bornDate.getMonth() , bornDate.getDate());

    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, bornDate.getMonth(), bornDate.getDate());
    }
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let month= Number(nextBirthday.getMonth())+1

    output.innerHTML = nextBirthday.getFullYear() +"/"+ month +"/"+ nextBirthday.getDate() + "  and " +days[nextBirthday.getDay()];
}