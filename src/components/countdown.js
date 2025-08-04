const countdownEl = document.getElementById("countdown");
const weddingDate = new Date("2025-09-09T19:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff < 0) {
    countdownEl.textContent = "🎉 היום הגדול הגיע!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = `נותרו ${days} ימים לאירוע`;
}

updateCountdown();
setInterval(updateCountdown, 86400000); // פעם ביום
