document.querySelectorAll(".publication-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const detail = targetId ? document.getElementById(targetId) : null;
    const symbol = button.querySelector(".publication-toggle-symbol");

    if (!detail || !symbol) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    symbol.textContent = isOpen ? "+" : "−";
    detail.hidden = isOpen;
  });
});
