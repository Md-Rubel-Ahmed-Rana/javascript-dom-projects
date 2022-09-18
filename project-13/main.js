// load all the videos from json file
const loadVideos = async() => {
    const url = await `./data.json`;
    const res = await fetch(url);
    const data = await res.json();
    showVideos(data.videos)
}

// display videos one by one to the UI
const showVideos = (videos) => {
    const playNextBtn = document.getElementById("play-next");
    const playPrevBtn = document.getElementById("play-prev");
    const pauseBtn = document.getElementById("pause");
    let videoNumber = 0;
    const videoFile = document.getElementById("video-file");
    videoFile.src = videos[videoNumber].videoFile;
    const songName = document.getElementById("song-name");
    songName.innerText = videos[videoNumber].videoName

    const singerName = document.getElementById("singer-name");
    singerName.innerText = videos[videoNumber].singer;

    const developer = document.getElementById("developer");
    developer.innerText = videos[videoNumber].developer;

    playNextBtn.addEventListener("click",() => {
        videoNumber++;
        if (videoNumber > videos.length - 1) {
            videoNumber = 0;
        }
            videoFile.src = videos[videoNumber].videoFile;
            songName.innerText = videos[videoNumber].videoName;
            singerName.innerText = videos[videoNumber].singer;
            developer.innerText = videos[videoNumber].developer;
    })

    playPrevBtn.addEventListener("click",() => {
        videoNumber--;
        if (videoNumber < 0) {
            videoNumber = videos.length - 1;
        }
        videoFile.src = videos[videoNumber].videoFile;
        songName.innerText = videos[videoNumber].videoName;
        singerName.innerText = videos[videoNumber].singer;
        developer.innerText = videos[videoNumber].developer;
    })

    pauseBtn.addEventListener("click", () => {
        const videoFile = document.getElementById("video-file");
        const playPause = document.getElementById("play-pause");
        if (videoFile.paused === true && playPause.classList.contains("fa-play")){
            videoFile.play();
            playPause.classList.remove("fa-play")
            playPause.classList.add("fa-pause")
        }else{
            videoFile.pause();
            playPause.classList.add("fa-play")
            playPause.classList.remove("fa-pause")
        }
    })
}

loadVideos()
