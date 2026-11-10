const cards = document.querySelectorAll(".story-card");

cards.forEach(card => {
    card.addEventListener("click", function() {
        window.location.href = `story.html?id=${card.dataset.id}&from=home`;
    });
});