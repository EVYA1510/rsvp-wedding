const name = new URLSearchParams(window.location.search).get("name") || "אורח";
document.getElementById("guestName").textContent = name;

document.getElementById("status").addEventListener("change", (e) => {
  document.getElementById("guestsWrapper").style.display =
    e.target.value === "מגיע/ה" ? "block" : "none";
});

document.getElementById("rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("status").value;
  const guests = status === "מגיע/ה" ? Number(document.getElementById("guestCount").value || 1) : 0;
  const blessing = document.getElementById("blessing").value;

  fetch("https://script.google.com/macros/s/AKfycby00HzY0Kz0L5DD66AxRGpPBZ-4-qjSTKLD7ZU_KqykIp32Cmwi14eqnrSRwmW2kezxXg/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      status,
      guests,
      blessing,
      timestamp: new Date().toISOString(),
    }),
  });

  alert("תודה! אישורך התקבל ❤️");
});