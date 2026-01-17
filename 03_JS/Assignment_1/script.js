let namea = "Abdul Rehman";
let num1 = 5;
let num2 = 35;
let sum = num1 + num2;
let subtract= num1 - num2;
let multiply= num1 * num2;
let divide = num1 / num2;
let calculate = 2-5+8*33/5 ;
document.getElementById("alertName").onclick = () => {
  alert(namea);
}
document.getElementById("alertNumber").onclick = () => {
  alert("123");
}
document.getElementById("showVariableNames").onclick = () => {
    document.getElementById("Output").className = ""; 
    document.getElementById("Output").innerHTML ="<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";
}
document.getElementById("buttonOutput").onclick =()=>{
    document.getElementById("Output").innerText=""
}
document.getElementById("buttonStatment").onclick =() => {
    document.getElementById("Statement").innerText=""
}
document.getElementById("camelCase").onclick = ()=>{
    document.getElementById("Output").className = ""; 
    document.getElementById("Output").innerHTML = "<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
}
document.getElementById("sum").onclick =()=>{
    document.getElementById("Output").className = "text-center"; 
    document.getElementById("Statement").innerHTML="let num1 = 5; <br>let num2 = 35;<br>let sum = num1 + num2;"
    document.getElementById("Output").innerText=sum
}
document.getElementById("subtract").onclick = ()=>{
    document.getElementById("Output").className = "text-center"; 
    document.getElementById("Statement").innerHTML="let num1 = 5; <br>let num2 = 35;<br>let subtract= num1 - num2;"
    document.getElementById("Output").innerText=subtract
}
document.getElementById("multiply").onclick = ()=>{
    document.getElementById("Output").className = "text-center"; 
    document.getElementById("Statement").innerHTML="let num1 = 5; <br>let num2 = 35;<br>let multiply= num1 * num2;"
    document.getElementById("Output").innerText=multiply
}
document.getElementById("divide").onclick = ()=>{
    document.getElementById("Output").className = "text-center"; 
    document.getElementById("Statement").innerHTML="let num1 = 5; <br>let num2 = 35;<br>let divide = num1 / num2;"
    document.getElementById("Output").innerText=divide
}
document.getElementById("calculate").onclick = ()=>{
    document.getElementById("Output").className = "text-center"; 
    document.getElementById("Statement").innerHTML="let num1 = 5; <br>let num2 = 35;<br>let calculate = 2-5+8*33/5 ;"
    document.getElementById("Output").innerText=calculate
}