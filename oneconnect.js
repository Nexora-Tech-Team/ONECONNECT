const menuGroups = Array.from(document.querySelectorAll(".side-menu__group"));
const mobileQuery = window.matchMedia("(max-width: 760px)");

function closeMenuGroups(exceptGroup) {
  menuGroups.forEach(function (group) {
    if (group === exceptGroup) return;

    group.classList.remove("is-open");
    const trigger = group.querySelector(".side-menu__item");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

menuGroups.forEach(function (group) {
  const trigger = group.querySelector(".side-menu__item");
  const submenu = group.querySelector(".submenu-panel");
  let touchedRecently = false;

  if (!trigger || !submenu) return;

  function toggleSubmenu(event) {
    event.preventDefault();
    const shouldOpen = !group.classList.contains("is-open");
    closeMenuGroups(group);
    group.classList.toggle("is-open", shouldOpen);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
  }

  trigger.addEventListener("click", function (event) {
    if (touchedRecently) {
      event.preventDefault();
      return;
    }

    toggleSubmenu(event);
  });
  trigger.addEventListener("touchstart", function (event) {
    touchedRecently = true;
    toggleSubmenu(event);
    window.setTimeout(function () {
      touchedRecently = false;
    }, 450);
  }, { passive: false });
});

document.addEventListener("click", function (event) {
  if (!mobileQuery.matches) return;
  if (event.target.closest(".side-menu__group")) return;

  closeMenuGroups();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeMenuGroups();
});

if (typeof mobileQuery.addEventListener === "function") {
  mobileQuery.addEventListener("change", function () {
    closeMenuGroups();
  });
} else if (typeof mobileQuery.addListener === "function") {
  mobileQuery.addListener(function () {
    closeMenuGroups();
  });
}
