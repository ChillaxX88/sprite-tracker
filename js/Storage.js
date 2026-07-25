const STORAGE_KEY = "sprite-tracker";

function loadCollection() {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    const collectedIds = JSON.parse(saved);

    sprites.forEach(sprite => {
        sprite.collected = collectedIds.includes(sprite.id);
    });

}

function saveCollection() {

    const collectedIds = sprites
        .filter(sprite => sprite.collected)
        .map(sprite => sprite.id);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(collectedIds)
    );

}
