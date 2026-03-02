const form = document.getElementById("searchForm");
const toast = document.getElementById("toast");
const advisorBtn = document.getElementById("advisorBtn");
const cardButtons = document.querySelectorAll(".btn-card");
const checkinInput = document.getElementById("checkin");

const today = new Date().toISOString().split("T")[0];
checkinInput.min = today;
checkinInput.value = today;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2500);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = document.getElementById("city").value.trim();
  const checkin = document.getElementById("checkin").value;
  const duration = document.getElementById("duration").value;

  if (!city || !checkin) {
    showToast("Please enter city and check-in date.");
    return;
  }

  showToast(`Showing hostels in ${city} for ${duration}.`);
});

advisorBtn.addEventListener("click", () => {
  showToast("Advisor callback request received.");
});

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Bed added to booking. Continue to checkout.");
  });
});
