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
