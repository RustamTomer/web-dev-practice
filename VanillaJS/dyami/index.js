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
    let boxImg = document.createElement('div');
    boxImg.className = 'image';
    boxThumb.append(boxImg);
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
    box.style.width = "90em";
    box.style.height = "10.5em";
    box.style.margin = "auto";
    box.style.marginTop = "10px";
    box.style.backgroundColor = "black";
    box.style.borderRadius = "10px";
    // boxThumb.style.backgroundColor = "skyblue";
    boxThumb.style.width = "268px";
    boxThumb.style.height = "160px";
    boxThumb.style.position = "relative";
    // boxImg.style.backgroundColor = "red";
    boxImg.style.width = "257px";
    boxImg.style.height = "148px";
    // boxContent.style.backgroundColor = "yellow";
    boxContent.style.width = "1140px";
    boxContent.style.height = "158px";
    // videoTitle.style.backgroundColor = "green";
    videoTitle.style.width = "1130px";
    videoTitle.style.height = "30px";
    videoTitle.style.marginTop = "15px";
    // channelName.style.backgroundColor = "blue";
    channelName.style.width = "120px";
    channelName.style.height = "25px";
    // videoViews.style.backgroundColor = "blue";
    videoViews.style.width = "120px";
    videoViews.style.height = "25px";
    // monthsOld.style.backgroundColor = "blue";
    monthsOld.style.width = "120px";
    monthsOld.style.height = "25px";

    box.style.display = 'flex';
    videoDescription.style.display = 'flex';
    boxImg.style.overflow = "hidden";
    let img = document.createElement('img');
    img.src = thumbnail;
    img.style.borderRadius = "10px";
    boxImg.insertAdjacentElement("afterbegin", img);

    videoDuration.innerText = duration;
    videoDuration.style.backgroundColor = "black";
    videoDuration.style.color = "white";
    videoDuration.style.fontFamily = "sans-serif";
    videoDuration.style.fontSize = "14px";
    videoDuration.style.textAlign = "center";

    // let title = "Introduction to Backend | Sigma Web Dev video #2";
    videoTitle.innerText = title;
    videoTitle.style.fontFamily = "sans-serif";
    videoTitle.style.fontWeight = "600";
    videoTitle.style.color = "white";
    channelName.innerText = cName;
    channelName.style.color = "white";
    videoViews.innerText = views;
    videoViews.style.color = "white";
    monthsOld.innerText = monthOld;
    monthsOld.style.color = "white";
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "560K", "2 months ago", "34:14", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard();
createCard();


// params
// title, cName, views, monthOld, duration, thumbnail


// //selecting container
// let container = document.querySelector('.container');

// //creating main div for card
// let box = document.createElement('div');
// box.className = 'box';
// container.append(box);

// //creating divs' for thumnail section
// let boxThumb = document.createElement('div');
// boxThumb.className = 'thumbnail';
// box.append(boxThumb);
// let boxImg = document.createElement('div');
// boxImg.className = 'image';
// boxThumb.append(boxImg);
// let videoDuration = document.createElement('div');
// videoDuration.className = 'duration';
// boxThumb.append(videoDuration);

// //creating divs' for content section
// let boxContent = document.createElement('div');
// boxContent.className = 'content';
// box.append(boxContent);
// let videoTitle = document.createElement('div');
// videoTitle.className = 'title';
// let videoDescription = document.createElement('div');
// videoDescription.className = 'description';
// boxContent.append(videoTitle, videoDescription);
// let channelName = document.createElement('div');
// channelName.className = 'c-name';
// let videoViews = document.createElement('div');
// videoViews.className = 'views';
// let monthsOld = document.createElement('div');
// monthsOld.className = 'months';
// videoDescription.append(channelName, videoViews, monthsOld);


// box.style.display = 'flex';
// videoDescription.style.display = 'flex';
// boxImg.style.overflow = "hidden";
// let img = document.createElement('img');
// img.src = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw";
// boxImg.insertAdjacentElement("afterbegin", img);

// videoDuration.innerHTML = "<div>34:14</div>";
// videoDuration.style.backgroundColor = "black";
// videoDuration.style.color = "white";
// videoDuration.style.fontFamily = "sans-serif";
// videoDuration.style.fontSize = "14px";
// videoDuration.firstChild.style.marginTop = "2px";
// videoDuration.firstChild.style.marginLeft = "7px";

// let title = "Introduction to Backend | Sigma Web Dev video #2";
// videoTitle.innerText = title;
// videoTitle.style.fontFamily = "sans-serif";
// videoTitle.style.fontWeight = "600";
// videoTitle.style.color = "white";
// let channel = "CodeWithHarry";
// channelName.innerText = channel;
// channelName.style.color = "white";
// let vidViews = "560K";
// videoViews.innerText = vidViews;
// let dateUploaded = "2 months ago";
// monthsOld.innerText = dateUploaded;










// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")