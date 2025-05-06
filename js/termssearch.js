    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".term-card");

  // 搜尋功能
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
    card.style.display = text.includes(keyword) ? "block" : "none";
    });
  });

  // 分類功能
  filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 樣式更新
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            cards.forEach(card => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
  });
