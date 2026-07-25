const sprites = [];

const grid = document.getElementById("spriteGrid");
const completion = document.getElementById("completion");
const collected = document.getElementById("collected");

function render() {

    if (sprites.length === 0) {

        grid.innerHTML = `
            <div class="loading">
                No sprites loaded yet.
            </div>
        `;

        completion.textContent = "0%";
        collected.textContent = "0 / 0";

        return;
    }

}

render();
