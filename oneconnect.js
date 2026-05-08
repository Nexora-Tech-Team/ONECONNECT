const menuGroups = Array.from(document.querySelectorAll(".side-menu__group"));
const mobileQuery = window.matchMedia("(max-width: 760px)");

function closeMenuGroups(exceptGroup = null) {
  menuGroups.forEach((group) => {
    if (group === exceptGroup) return;

    group.classList.remove("is-open");
    const trigger = group.querySelector(".side-menu__item");
    trigger?.setAttribute("aria-expanded", "false");
  });
}

menuGroups.forEach((group) => {
  const trigger = group.querySelector(".side-menu__item");
  const submenu = group.querySelector(".submenu-panel");

  if (!trigger || !submenu) return;

  trigger.addEventListener("click", (event) => {
    if (!mobileQuery.matches) return;

    event.preventDefault();
    const shouldOpen = !group.classList.contains("is-open");
    closeMenuGroups(group);
    group.classList.toggle("is-open", shouldOpen);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!mobileQuery.matches) return;
  if (event.target.closest(".side-menu__group")) return;

  closeMenuGroups();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenuGroups();
});

mobileQuery.addEventListener("change", () => {
  closeMenuGroups();
});

