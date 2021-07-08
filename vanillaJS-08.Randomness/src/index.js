const button = document.querySelector("button");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const handleClick = () => {
  const random1 = Math.round(Math.random() * colors.length);
  let random2 = "";
  do {
    random2 = Math.round(Math.random() * colors.length);
  } while (random1 === random2);
  const body = document.querySelector("body");
  body.style.background = `linear-gradient(90deg,${colors[random1]}, ${colors[random2]})`;
};

button.addEventListener("click", handleClick);
