// Get the necessary elements
const navbar = document.getElementById("navbar");
const barsBtn = document.getElementById("bar");
const closeBtn = document.getElementById("close");
const accountIcon = document.getElementById("lg-bag");

// Function to toggle the navbar
function toggleNavbar() {
  const isSmallScreen = window.innerWidth <= 799;

  if (isSmallScreen) {
    if (navbar.style.right === "-300px") {
      navbar.style.right = "0";
      closeBtn.style.display = "initial";
    } else {
      navbar.style.right = "-300px";
      closeBtn.style.display = "none";
    }
  }
}

// Function to check window width and apply responsive styles
function checkWidth() {
  const windowWidth = window.innerWidth;
  const isSmallScreen = windowWidth <= 799;
  const isExtraSmallScreen = windowWidth <= 477;

  navbar.style.right = isSmallScreen ? "-300px" : "0";
  closeBtn.style.display = isSmallScreen ? "none" : "initial";
  accountIcon.style.display = isSmallScreen ? "none" : "initial";
  closeBtn.style.display = isExtraSmallScreen ? "initial" : "none";
}

// Add event listeners
barsBtn.addEventListener("click", toggleNavbar);
closeBtn.addEventListener("click", toggleNavbar);

// Call the checkWidth function on page load and window resize events
window.addEventListener("load", checkWidth);
window.addEventListener("resize", checkWidth);
