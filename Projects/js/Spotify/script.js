async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify/songs/");
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split('%5Csongs%5C')[1]);
        }
    }
    return songs;
}

async function main() {
    //get the list of all the songs    
    let songs = await getSongs();

    // show all the songs in the playlist
    let songUl = document.querySelector('.songList').getElementsByTagName('ul')[0];
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
                            <img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Vicky</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>
                        </li>`
    }

    
}

main();