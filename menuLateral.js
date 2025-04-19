document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuButton.addEventListener("click", (e) => {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  });


  document.addEventListener("click", (e) => {
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedMenuButton = menuButton.contains(e.target);

    if (!clickedInsideSidebar && !clickedMenuButton) {
      sidebar.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    } else if (e.target.tagName === "A") {
      sidebar.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    }
  });
});