document.addEventListener("DOMContentLoaded", () => {
  const servicesContainer = document.querySelector(".dropdown"); // Common container

  if (servicesContainer) {
    const servicesButton = servicesContainer.querySelector("[data-dropdown-button='Services']");
    const dropdownMenu = servicesContainer.querySelector(".dropdown-menu");

    // Show the dropdown menu on hover
    servicesContainer.addEventListener("mouseenter", () => {
      if (dropdownMenu) {
        dropdownMenu.style.opacity = "1";
        dropdownMenu.style.pointerEvents = "auto";
        dropdownMenu.style.transform = "translateY(0)";
      }
    });

    // Hide the dropdown menu when the mouse leaves the container
    servicesContainer.addEventListener("mouseleave", () => {
      if (dropdownMenu) {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.pointerEvents = "none";
        dropdownMenu.style.transform = "translateY(-10px)";
      }
    });
  }
});