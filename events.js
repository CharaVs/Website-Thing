const eventsToRun = [];

let running = true

function gameLoop() {
    if (!running) return;

    gameEvents();

    requestAnimationFrame(gameLoop);
}

function gameEvents() {
    if (eventsToRun.length > 0) {
        while (eventsToRun[0].eventSteps.length > 0) {

        }
    }
};

function doEventStep(eventStep) {

};

// Using recursion instead of a while loop for the game events
//requestAnimationFrame(gameLoop);