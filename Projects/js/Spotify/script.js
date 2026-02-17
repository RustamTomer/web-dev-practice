async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify/songs/");
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    console.log(div);
    let as = div.getElementsByTagName('a');
    console.log(as);
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith('.mp3')) {
            // 1. Decode the entire URL first to handle %20 and special characters
            let decodedURI = decodeURIComponent(element.href);
            // 2. Split by both / and \ (using a Regular Expression)
            let parts = decodedURI.split(/\/|\\/);
            // 3. Take the very last part of that split (the filename)
            let fileName = parts.pop();
            // 4. Push it directly into your final songs array
            songs.push(fileName);
        }
    }
    return songs;
}

async function main() {
    // Get the list of cleaned song URLs
    let songs = await getSongs();
    console.log(songs);
}

main();