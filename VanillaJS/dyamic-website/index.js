function createCard(title, cName, views, monthOld, duration, thumbnail) {
    //selecting container
    let container = document.querySelector('.container');

    //creating main div for card
    let box = document.createElement('div');
    box.className = 'box';
    container.append(box);

    //creating divs' for thumnail section
    let boxThumb = document.createElement('div');
    boxThumb.className = 'thumbnail';
    box.append(boxThumb);
    let videoDuration = document.createElement('div');
    videoDuration.className = 'duration';
    boxThumb.append(videoDuration);

    //creating divs' for content section
    let boxContent = document.createElement('div');
    boxContent.className = 'content';
    box.append(boxContent);
    let videoTitle = document.createElement('div');
    videoTitle.className = 'title';
    let videoDescription = document.createElement('div');
    videoDescription.className = 'description';
    boxContent.append(videoTitle, videoDescription);
    let channelName = document.createElement('div');
    channelName.className = 'c-name';
    let videoViews = document.createElement('div');
    videoViews.className = 'views';
    let monthsOld = document.createElement('div');
    monthsOld.className = 'months';
    videoDescription.append(channelName, videoViews, monthsOld);

    container.style.width = "95vw";
    container.style.height = "90vh";
    container.style.border = "2px solid black"
    box.style.width = "1070px";
    box.style.height = "140px";
    box.style.margin = "auto";
    box.style.marginTop = "10px";
    box.style.backgroundColor = "black";
    box.style.borderRadius = "12px";
    boxThumb.style.backgroundColor = "skyblue";
    boxThumb.style.width = "200px";
    boxThumb.style.height = "113px";
    boxThumb.style.position = "relative";
    boxThumb.style.overflow = "hidden";
    boxThumb.style.borderRadius = "10px";
    boxContent.style.width = "830px";
    boxContent.style.height = "113px";
    videoTitle.style.width = "810px";
    videoTitle.style.height = "30px";
    videoTitle.style.marginTop = "0";
    channelName.style.width = "90px";
    channelName.style.height = "25px";
    channelName.style.marginRight = "0";
    videoViews.style.width = "35px";
    videoViews.style.height = "25px";
    videoViews.style.marginLeft = "0";
    videoViews.style.marginRight = "0";
    monthsOld.style.width = "90px";
    monthsOld.style.height = "25px";
    monthsOld.style.marginLeft = "0";
    videoDescription.style.marginTop = "0";

    box.style.display = 'flex';
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.gap = "10px";
    videoDescription.style.display = 'flex';
    let img = document.createElement('img');
    img.src = thumbnail;
    img.style.borderRadius = "10px";
    boxThumb.insertAdjacentElement("afterbegin", img);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.display = "block";
    img.style.objectFit = "cover";

    videoDuration.innerText = duration;
    videoDuration.style.backgroundColor = "black";
    videoDuration.style.color = "white";
    videoDuration.style.fontFamily = "Roboto";
    videoDuration.style.fontSize = "12px";
    videoDuration.style.fontWeight = "500";
    // videoDuration.style.textAlign = "center";

    // let title = "Introduction to Backend | Sigma Web Dev video #2";
    videoTitle.innerText = title;
    videoTitle.style.fontFamily = "Roboto";
    videoTitle.style.fontWeight = "500";
    videoTitle.style.fontSize = "16px";
    videoTitle.style.color = "white";
    channelName.innerText = cName;
    channelName.style.color = "white";
    channelName.style.fontFamily = "Roboto";
    channelName.style.fontSize = "12px";
    channelName.style.color = "#8c9595";
    if(views >=1000 && views <= 999999){
        views = `${views/1000}K`;
    }
    else if(views >=1000000 && views <=999999999){
        views = `${views/1000000}M`;
    }
    videoViews.innerText = views;
    videoViews.style.color = "white";
    videoViews.style.fontFamily = "Roboto";
    videoViews.style.fontSize = "12px";
    videoViews.style.color = "#8c9595";
    monthsOld.innerText = monthOld;
    monthsOld.style.color = "white";
    monthsOld.style.fontFamily = "Roboto";
    monthsOld.style.fontSize = "12px";
    monthsOld.style.color = "#8c9595";
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "1000000", "2 months ago", "34:14", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "1000000", "2 months ago", "34:14", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "1000000", "2 months ago", "34:14", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "1000000", "2 months ago", "34:14", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
// createCard();
// createCard();


