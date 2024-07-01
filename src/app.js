const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-closed");
  sidebar.classList.toggle("sidebar-open");
});

if (window.innerWidth > 1024) {
  sidebar.classList.remove("sidebar-closed");
  sidebar.classList.add("sidebar-open");
}

// Dropdown functionality
const sections = ["announcements", "trending", "projects"];

sections.forEach((section) => {
  const header = document.getElementById(`${section}-header`);
  const content = document.getElementById(`${section}-content`);
  const chevron = header.querySelector("img");

  header.addEventListener("click", () => {
    content.classList.toggle("open");
    chevron.classList.toggle("rotate-180");
  });
});
