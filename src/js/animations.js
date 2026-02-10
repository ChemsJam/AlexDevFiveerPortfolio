window.addEventListener("load", () => {
  document.querySelectorAll(".translate-up").forEach(card => {
    card.classList.add("show");
  });
  document.querySelectorAll(".translate-left").forEach(card => {
    card.classList.add("show");
  });
  document.querySelectorAll(".translate-right").forEach(card => {
    card.classList.add("show");
  });
});