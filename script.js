// Function to show a specific page
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show the selected page
  document.getElementById(pageId).classList.add('active');
}

// Set default page on load
window.onload = () => {
  showPage('suggestions');
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

    // Add new rant to the top of the list
    rantList.prepend(newRant);

    // Clear input after posting
    input.value = "";
  } else {
    alert("Please type something before posting.");
  }
}
