let n = 6;
let j = n;
let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = j;
    j--;
}

let fact = arr.reduce((a,b)=>{
    return a*b;
})

// let fact = 1; 
// for(let i = n; i > 0; i--){
//     fact = fact * i;
// }



console.log(fact);

