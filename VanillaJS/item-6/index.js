// function callback(script){
//     alert('script is loaded');
//     alert(script.src);
// }

// function loadScript(src, hello){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => hello(script);
//     document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js', (script) => {
//     alert('script is loaded');
//     alert(script.src);
// });

// let prom = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.4) {
//         reject('not done');
//     }
//     else {
//         setTimeout(() => {
//             resolve('done');
//         }, 2000);
//     }
// })

// prom.then(alert).catch(alert);

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        
        script.onload = () =>{
            let a = Math.random();
            if(a<0.4){
                resolve(script);
            }
            else{
                reject(new Error('SCRIPT FAILED TO LOAD'));
            }
        }
        
        script.onerror = () => reject(new Error('Script failed to load'));

        document.head.append(script);
    })
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js').then((scipt) => {
    alert('script is loaded');
    alert(scipt.src);
}).catch((error) => {
    alert(error.message);
})




