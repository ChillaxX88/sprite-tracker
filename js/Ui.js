function renderSprites() {

    grid.innerHTML = "";

    sprites.forEach(sprite => {

        const card = document.createElement("div");

        card.className = "sprite-card";

        card.innerHTML = `
            <h3>${sprite.name}</h3>

            <p>${sprite.rarity}</p>

            <button>
                ${sprite.collected ? "Collected ✓" : "Missing"}
            </button>
        `;

        const button = card.querySelector("button");

        button.addEventListener("click", () => {

            sprite.collected = !sprite.collected;

            saveCollection();

            renderSprites();

            updateStats();

        });

        grid.appendChild(card);

    });

}
