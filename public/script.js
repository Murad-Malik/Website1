document.addEventListener("DOMContentLoaded", () => {
  const servicesButton = document.querySelector("[data-dropdown-button='Services']");
  const dropdownMenu = servicesButton.nextElementSibling;

  // Show the dropdown menu on hover
  servicesButton.addEventListener("mouseenter", () => {
    dropdownMenu.style.opacity = "1";
    dropdownMenu.style.pointerEvents = "auto";
    dropdownMenu.style.transform = "translateY(0)";
  });

  // Hide the dropdown menu when the mouse leaves the button or the dropdown
  servicesButton.addEventListener("mouseleave", () => {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.pointerEvents = "none";
    dropdownMenu.style.transform = "translateY(-10px)";
  });

  dropdownMenu.addEventListener("mouseenter", () => {
    dropdownMenu.style.opacity = "1";
    dropdownMenu.style.pointerEvents = "auto";
    dropdownMenu.style.transform = "translateY(0)";
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.pointerEvents = "none";
    dropdownMenu.style.transform = "translateY(-10px)";
  });
});