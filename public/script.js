document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  const dropdown = e.target.closest("[data-dropdown]");

  if (isDropdownButton) {
    if (dropdown) {
      dropdown.classList.toggle("active");
    }
  } else if (!e.target.closest(".dropdown-menu")) {
    const activeDropdowns = document.querySelectorAll(".dropdown.active");
    activeDropdowns.forEach((activeDropdown) => {
      if (activeDropdown !== dropdown) {
        activeDropdown.classList.remove("active");
      }
    });
  }
});