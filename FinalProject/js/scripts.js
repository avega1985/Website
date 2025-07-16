document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("hobbyBuddyUser");
  if (user) {
    const header = document.querySelector("header");
    const userBox = document.createElement("div");
    userBox.className = "user-box";
    userBox.innerHTML = `Logged in as: ${user} <button id="logoutBtn">Log out</button>`;
    header?.appendChild(userBox);

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("hobbyBuddyUser");
      window.location.reload();
    });
  }

  const locationForm = document.getElementById("locationForm");
  if (locationForm) {
    locationForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const state = document.getElementById("state").value;
      const city = document.getElementById("city").value;
      const interest = document.getElementById("interest").value;
      const message = document.querySelector("textarea[name='message']").value;
      alert(`You selected:\nState: ${state}\nCity: ${city}\nInterest: ${interest || 'N/A'}\nMessage: ${message || 'N/A'}`);
    });
  }

  window.addEventListener('load', function () {
  if (!localStorage.getItem('hasSeenWarning')) {
      alert("This website has limited functionality and some parts have broken.");
      localStorage.setItem('hasSeenWarning', 'true');
    }}
  );
});
