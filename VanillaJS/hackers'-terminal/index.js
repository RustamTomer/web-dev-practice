// let container = document.querySelector('.container');

// const display = async (displayText) => {
//     return new Promise((resolve) => {
//         let randomTime = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
//         setTimeout(() => {
//             let box = document.createElement('div');
//             box.innerHTML = displayText;
//             for(let i = 1; i <= 3; i++){
//                 let dot = document.createElement('span');
//                 dot.classList.add("dot", `dot${i}`);
//                 dot.innerText = ".";
//                 box.append(dot);
//             }
//             container.append(box);
//             resolve();
//         }, randomTime);
//     })
// }

// async function main() {
//     await display("Initializing Hacking");
//     await display("Reading your files");
//     await display("Password files detected");
//     await display("Sending all passwords and personal files to server");
//     await display("Cleaning Up");
// }

// main();

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = () => {
    return new Promise((resolve) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}


async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName('div');
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 700);

    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]



    for (const item of text) {
        await addItem(item);
    }

    await randomDelay();
    clearInterval(t);
}

main();


