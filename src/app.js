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
