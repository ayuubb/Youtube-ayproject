function updateClock() {
  const container = document.getElementById("clock-container");
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  container.textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock(); // Initial update
