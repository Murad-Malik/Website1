// document.addEventListener("DOMContentLoaded", () => {
//   const servicesContainer = document.querySelector(".dropdown"); // Common container

//   if (servicesContainer) {
//     const servicesButton = servicesContainer.querySelector("[data-dropdown-button='Services']");
//     const dropdownMenu = servicesContainer.querySelector(".dropdown-menu");
//     let isHoveredContainer = false;
//     let isHoveredMenu = false;

//     // Show the dropdown menu on hover
//     servicesContainer.addEventListener("mouseenter", () => {
//       if (dropdownMenu) {
//         dropdownMenu.style.display = "inline";
//         dropdownMenu.style.zIndex = "1"; // Set a higher z-index value
//       }
//     });

//     // Hide the dropdown menu when the mouse leaves the container
//     servicesContainer.addEventListener("mouseleave", () => {
//       if (dropdownMenu && !isHoveredMenu) {
//         dropdownMenu.style.display = "none";
//       }
//     });

//     // Set isHoveredContainer to true on container hover
//     servicesContainer.addEventListener("mouseover", () => {
//       isHoveredContainer = true;
//     });

//     // Set isHoveredMenu to true on menu hover
//     dropdownMenu.addEventListener("mouseover", () => {
//       isHoveredMenu = true;
//       dropdownMenu.style.zIndex = "1"; // Set a higher z-index value
//     });

//     // Set isHoveredMenu to false when leaving the dropdown menu
//     dropdownMenu.addEventListener("mouseleave", () => {
//       isHoveredMenu = false;
//       if (!isHoveredContainer) {
//         dropdownMenu.style.display = "none";
//         dropdownMenu.style.zIndex = ""; // Reset z-index when hiding
//       }
//     });
//   }
// });
