import {addTextToStory} from "./init.js";
const eventsToRun = [];
let running = true;
let waitingForChoice = false;
let waitingForContinue = false;

function gameLoop() {
    if (!running || waitingForChoice || waitingForContinue) return;
    gameEvents();
    requestAnimationFrame(gameLoop);
}

function gameEvents() {
    if (eventsToRun.length > 0) {
        let currentEvent = eventsToRun[0];
        if (currentEvent.eventSteps.length > 0) {
            doEventStep(currentEvent.eventSteps.shift());
        } else {
            eventsToRun.shift();
        }
    }
}

function doEventStep(eventStep) {
    if (eventStep.type === "dialogue") {
        addTextToStory(eventStep.text);
        waitingForContinue = true;
        document.getElementById("continueButton").style.display = "block";
    } else if (eventStep.type === "choice") {
        displayChoices(eventStep.choices);
        waitingForChoice = true;
    } else if (eventStep.type === "itemCheck") {
        if (playerHasItem(eventStep.item)) {
            addTextToStory(eventStep.successText);
        } else {
            addTextToStory(eventStep.failText);
        }
    } else if (eventStep.type === "realmCheck") {
        if (playerRealm === eventStep.requiredRealm) {
            addTextToStory(eventStep.successText);
        }
    }
}

function displayChoices(choices) {
    let choiceContainer = document.getElementById("storyContainer");
    choices.forEach(choice => {
        let choiceButton = document.createElement("h1");
        choiceButton.textContent = choice.text;
        choiceButton.className = "h1";
        choiceButton.id = "choiceButton";
        choiceButton.style.height = "4vh";
        choiceButton.onclick = () => {
            document.querySelectorAll("[id=choiceButton]").forEach(container => container.remove());
            addTextToStory(choice.resultText);
            if (choice.nextEvent) eventsToRun.push(choice.nextEvent);
            waitingForChoice = false;
            gameLoop();
        };
        choiceContainer.append(choiceButton);
    });
}

document.getElementById("continueButton").addEventListener("click", () => {
    waitingForContinue = false;
    document.getElementById("continueButton").style.display = "none";
    gameLoop();
});

function playerHasItem(item) {
    return document.getElementById("inventoryContainer").textContent.includes(item);
}

// Example event structure
const exampleEvent = {
    eventSteps: [
        { type: "dialogue", text: "You sense a powerful aura approaching." },
        { type: "choice", choices: [
            { text: "Stand your ground", resultText: "The figure nods approvingly.", nextEvent: null },
            { text: "Run away", resultText: "You flee, feeling shame.", nextEvent: null }
        ]},
    ]
};

const startEvent = {
    eventStep: [
        {
            type: "dialogue",
            text: ""
        }
    ]
}

eventsToRun.push(exampleEvent);
gameLoop();




