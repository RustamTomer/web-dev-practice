// let adj = prompt("Enter adj");
// let b_name = prompt("Enter name");
// let suffix = prompt("Enter Suffix");

// alert(`${adj} ${b_name} ${suffix}`);

let random = Math.random()
let first, second, third;
if(random < 0.33){
    first = "Crazy";
}
else if(random < 0.66 && random >= 0.33){
    first = "Amzing";
}
else{
    first = "Fire";
}

random = Math.random()
if(random < 0.33){
    second = "Foods";
}
else if(random < 0.66 && random >= 0.33){
    second = "Engine";
}
else{
    second = "Garments";
}

random = Math.random()
if(random < 0.33){
    third = "Ltd";
}
else if(random < 0.66 && random >= 0.33){
    third = "Bros";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);
