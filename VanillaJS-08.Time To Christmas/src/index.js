const clockTitle = document.querySelector(".js-clock");

const SECOND_TO_DAY = 24 * 60 * 60;
const SECOND_TO_HOURS = 60 * 60;
const SECOND_TO_MINITUES = 60;

const getTimeTillDday = (dYear, dMonth, dDay) => {
  const now = new Date();
  const targetDate = new Date(dYear, dMonth - 1, dDay);
  const tillDate = (targetDate - now) / 1000;
  let remainDate = tillDate;

  const day = Math.floor(tillDate / SECOND_TO_DAY);
  remainDate = remainDate - day * SECOND_TO_DAY;
  const hours = Math.floor(remainDate / SECOND_TO_HOURS);
  remainDate = remainDate - hours * SECOND_TO_HOURS;
  const minitues = Math.floor(remainDate / SECOND_TO_MINITUES);
  remainDate = remainDate - minitues * SECOND_TO_MINITUES;
  const seconds = Math.floor(remainDate);

  const stringHours = String(hours).padStart(2, "0");
  const stringMinitues = String(minitues).padStart(2, "0");
  const stringSeconds = String(seconds).padStart(2, "0");

  clockTitle.innerText = `${day}d ${stringHours}h ${stringMinitues}m ${stringSeconds}s`;
};

setInterval(() => {
  getTimeTillDday(2021, 12, 24);
}, 1000);
