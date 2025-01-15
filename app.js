function activateTab(element, sectionId) {
  // Remove "active" class from all navigation tabs
  document.querySelectorAll('.bottom-nav a').forEach(tab => tab.classList.remove('active'));

  // Add "active" class to the clicked tab
  element.classList.add('active');

  // Hide all sections
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

  // Show the selected section
  document.getElementById(sectionId).classList.add('active');
}