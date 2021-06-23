const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullscreenBtn = document.getElementById("fullscreen");
const videoContainer = document.getElementById("videoContainer");

let volumeValue = 0.5;
video.volume = volumeValue;

const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const handlePlay = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

const handleMute = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (e) => {
  const {
    target: { value }
  } = e;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;
};

const handleLoadeddata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeupdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};

const handleTimelineChage = (event) => {
  const {
    target: { value }
  } = event;
  video.currentTime = value;
};

const handleFullscreen = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
  return;
};
const handleKeydown = (event) => {
  const fullscreen = document.fullscreenElement;
  switch (event.code) {
    case "KeyF":
      if (!fullscreen) {
        videoContainer.requestFullscreen();
      }
      break;
    case "Space":
      video.pause();
      playBtn.innerText = "Play";
      break;
    case "Escape":
      if (fullscreen) {
        document.exitFullscreen();
      }
      break;
    default:
      break;
  }
};

const handleFullscreenchange = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    fullscreenBtn.innerText = "Exit Fullscreen";
  } else {
    fullscreenBtn.innerText = "Enter Fullscreen";
  }
};

playBtn.addEventListener("click", handlePlay);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeChange);
video.addEventListener("loadedmetadata", handleLoadeddata);
video.addEventListener("timeupdate", handleTimeupdate);
timeline.addEventListener("input", handleTimelineChage);
fullscreenBtn.addEventListener("click", handleFullscreen);
document.addEventListener("keydown", handleKeydown);
document.addEventListener("fullscreenchange", handleFullscreenchange);
