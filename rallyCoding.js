const solve = (time, m) => {
  const splittedTime = time.split(":");
  let minutes = m % 60;
  let hours = parseInt(m / 60);
  if (minutes + parseInt(splittedTime[1]) >= 60) {
    hours += 1;
    minutes = minutes + parseInt(splittedTime[1]) - 60;
  }
  hours = parseInt(splittedTime[0]) + hours;
  minutes === 0 ? (minutes = parseInt(splittedTime[1])) : null;
  hours > 24 ? (hours -= 24) : null;
  return `${hours < 10 ? "0" + hours : hours}:${minutes}`;
};
console.log(solve("15:31", 720));
