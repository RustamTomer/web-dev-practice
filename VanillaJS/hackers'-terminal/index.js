let container = document.querySelector('.container');

const display = async (displayText) => {
    return new Promise((resolve) => {
        let randomTime = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
        setTimeout(() => {
            let box = document.createElement('div');
            box.innerHTML = displayText;
            for(let i = 1; i <= 3; i++){
                let dot = document.createElement('span');
                dot.classList.add("dot", `dot${i}`);
                dot.innerText = ".";
                box.append(dot);
            }
            container.append(box);
            resolve();
        }, randomTime);
    })
}

async function main() {
    await display("Initializing Hacking");
    await display("Reading your files");
    await display("Password files detected");
    await display("Sending all passwords and personal files to server");
    await display("Cleaning Up");
}

main();