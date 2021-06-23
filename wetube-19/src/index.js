import regeneratorRuntime from "regenerator-runtime";

const btn = document.getElementById("btn");
const audio = document.getElementById("result");

let stream;
let recorder;
let audioFile;

const handleDownload = () => {
  btn.removeEventListener("click", handleDownload);
  audio.pause();

  const a = document.createElement("a");
  a.href = audioFile;
  a.download = "MyRecording";
  document.body.appendChild(a);
  a.click();

  btn.innerText = "Start Recording";

  btn.addEventListener("click", handleStart);
};

const handleStart = () => {
  btn.innerText = "Recording";
  btn.disabled = true;
  btn.removeEventListener("click", handleStart);

  recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });

  recorder.start();
  setTimeout(() => {
    recorder.stop();
  }, 5000);

  recorder.ondataavailable = (event) => {
    audioFile = URL.createObjectURL(event.data);
    audio.srcObject = null;
    audio.src = audioFile;
    audio.loop = false;
    audio.play();

    btn.innerText = "Download";
    btn.disabled = false;
    btn.addEventListener("click", handleDownload);
  };
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true
  });
  audio.srcObject = stream;
};

init();

btn.addEventListener("click", handleStart);
