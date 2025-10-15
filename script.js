// Function to show a specific page
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// Set default page on load
window.onload = () => {
  showPage('suggestions');
  loadRants(); // ⬅️ Load saved messages on page load
};

// Function to post a rant/message
function postRant() {
  const input = document.getElementById("rantInput");
  const rantText = input.value.trim();

  if (rantText !== "") {
    const rantList = document.getElementById("rantList");

    const newRant = document.createElement("div");
    newRant.classList.add("rant-message");
    newRant.textContent = rantText;

    rantList.prepend(newRant);
    input.value = "";

    saveRant(rantText); // ⬅️ Save the message
  } else {
    alert("Please type something before posting.");
  }
}

// Save rants to localStorage
function saveRant(rant) {
  let rants = JSON.parse(localStorage.getItem("rants")) || [];
  rants.unshift(rant); // add to top
  localStorage.setItem("rants", JSON.stringify(rants));
}

// Load saved rants from localStorage
function loadRants() {
  const rantList = document.getElementById("rantList");
  const rants = JSON.parse(localStorage.getItem("rants")) || [];

  rants.forEach(rantText => {
    const rantDiv = document.createElement("div");
    rantDiv.classList.add("rant-message");
    rantDiv.textContent = rantText;
    rantList.appendChild(rantDiv);
  });
}
