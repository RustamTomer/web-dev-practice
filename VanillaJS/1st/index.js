let random = Math.random();

let a = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter operation");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*"
}

if (random > 0.1){
    alert(`the answer is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    alert(`the answer is ${eval(`${a} ${c} ${b}`)}`);
}