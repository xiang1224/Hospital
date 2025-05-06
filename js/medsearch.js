  const searchInput = document.getElementById("med-search");
  const tagButtons = document.querySelectorAll(".tag-btn");
  const medCards = document.querySelectorAll(".med-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    medCards.forEach(card => {
      const text = card.textContent.toLowerCase();
  card.style.display = text.includes(query) ? "block" : "none";
    });
  });

  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tagButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category;

      medCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });