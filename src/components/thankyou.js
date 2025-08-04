function showThankYou() {
  document.getElementById("rsvpForm").style.display = "none";
  document.getElementById("thankYouMessage").textContent =
    "תודה! אישורך התקבל 💖";
  document.getElementById("thankYouMessage").classList.remove("hidden");
}
