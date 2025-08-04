const name = new URLSearchParams(window.location.search).get("name") || "אורח";
document.getElementById("guestName").textContent = name;

// שליחת פתיחה אוטומטית
fetch(
  "https://script.google.com/macros/s/AKfycby00HzY0Kz0L5DD66AxRGpPBZ-4-qjSTKLD7ZU_KqykIp32Cmwi14eqnrSRwmW2kezxXg/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      name,
      opened: true,
      timestamp: new Date().toISOString(),
    }),
  }
);

// הצגת שדה כמות אורחים
document.getElementById("status").addEventListener("change", (e) => {
  document.getElementById("guestsWrapper").style.display =
    e.target.value === "מגיע/ה" ? "block" : "none";
});

// שליחת אישור הגעה
document.getElementById("rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const status = document.getElementById("status").value;
  const guests =
    status === "מגיע/ה"
      ? Number(document.getElementById("guestCount").value || 1)
      : 0;

  fetch(
    "https://script.google.com/macros/s/AKfycby00HzY0Kz0L5DD66AxRGpPBZ-4-qjSTKLD7ZU_KqykIp32Cmwi14eqnrSRwmW2kezxXg/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        status,
        guests,
        timestamp: new Date().toISOString(),
      }),
    }
  );

  alert("תודה! אישורך התקבל ❤️");
});
