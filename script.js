// Countdown Timer
const countdownEl = document.getElementById("countdownText");
const weddingDate = new Date("2025-09-09T19:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff < 0) {
    countdownEl.textContent = "🎉 היום הגדול הגיע!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    countdownEl.textContent = `נותרו ${days} ימים לאירוע`;
  } else if (hours > 0) {
    countdownEl.textContent = `נותרו ${hours} שעות לאירוע`;
  } else {
    countdownEl.textContent = `נותרו ${minutes} דקות לאירוע`;
  }
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 60000); // Update every minute

// Guest name from URL
const name = new URLSearchParams(window.location.search).get("name") || "אורח";
document.getElementById("guestName").textContent = name;

// Form interactions
document.getElementById("status").addEventListener("change", (e) => {
  const guestsWrapper = document.getElementById("guestsWrapper");
  if (e.target.value === "מגיע/ה") {
    guestsWrapper.classList.remove("hidden");
    guestsWrapper.classList.add("animate__animated", "animate__fadeIn");
  } else {
    guestsWrapper.classList.add("hidden");
  }
});

// Form submission with enhanced animation
document.getElementById("rsvpForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  // Show loading state
  submitButton.textContent = "שולח... 💫";
  submitButton.disabled = true;

  const status = document.getElementById("status").value;
  const guests =
    status === "מגיע/ה"
      ? Number(document.getElementById("guestCount").value || 1)
      : 0;
  const blessing = document.getElementById("blessing").value;

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycby00HzY0Kz0L5DD66AxRGpPBZ-4-qjSTKLD7ZU_KqykIp32Cmwi14eqnrSRwmW2kezxXg/exec",
      {
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
      }
    );

    // Show success animation
    submitButton.textContent = "נשלח בהצלחה! ✅";
    submitButton.classList.remove(
      "from-pink-500",
      "to-purple-500",
      "hover:from-pink-600",
      "hover:to-purple-600"
    );
    submitButton.classList.add("from-green-500", "to-green-600");

    // Hide form and show thank you message
    setTimeout(() => {
      document
        .getElementById("rsvpForm")
        .classList.add("animate__animated", "animate__fadeOut");
      setTimeout(() => {
        document.getElementById("rsvpForm").style.display = "none";
        document.getElementById("thankYouMessage").classList.remove("hidden");
        document
          .getElementById("thankYouMessage")
          .classList.add("animate__animated", "animate__fadeIn");
      }, 500);
    }, 1000);
  } catch (error) {
    // Show error state
    submitButton.textContent = "שגיאה, נסו שוב";
    submitButton.classList.remove("from-pink-500", "to-purple-500");
    submitButton.classList.add("from-red-500", "to-red-600");

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.classList.remove("from-red-500", "to-red-600");
      submitButton.classList.add("from-pink-500", "to-purple-500");
    }, 2000);
  }
});

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to form elements
  const formElements = document.querySelectorAll("select, input, textarea");
  formElements.forEach((element) => {
    element.addEventListener("focus", () => {
      element.parentElement.classList.add(
        "animate__animated",
        "animate__pulse"
      );
    });
    element.addEventListener("blur", () => {
      element.parentElement.classList.remove(
        "animate__animated",
        "animate__pulse"
      );
    });
  });
});
