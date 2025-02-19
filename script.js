function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Function to change the background color
  function changeTheme(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('themeColor', color); // Save the color in local storage
}

// Load the saved theme color from local storage
window.onload = function() {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};


