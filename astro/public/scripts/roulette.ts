let round = 0;

// increment round and update DOM
function pullTrigger() {
    let barrel = Math.floor(Math.random() * 6) + 1;

    console.log(barrel);
    if(barrel === 6) {
        window.api.shutdown();
    }

    // Update round counter
    round++;
    const el = document.querySelector("#rounds h2");
    if (el) el.textContent = `You Survived ${round} Rounds! :3333`;
}

// expose globally so the page can call it
window.pullTrigger = pullTrigger;

// Space bar triggers next round
window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        window.pullTrigger();
    }
});
