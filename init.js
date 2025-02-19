import {items} from "./items.js";

const realms = {
    "bodyTempering": 10,
    "foundationEstablishment": 20,
    "coreFormation": 30,
    "nascentSoul": 50,
    "soulFormation": 70,
    "soulTransformation": 90,
    "nihility": 100,
    "enlightenment": 120,
    "divinity": 150
};
let playerRealm = "bodyTempering";

let playerMaxHealth = 500;
let playerHealth = 100;

let playerAttack = 20;
let playerDefense = 20;

let playerMaxQi = 300;
let playerQi = 300;

let playerQiAbsorption = 10;

let playerEquippedWeapon = "none";
let playerEquippedArmour = "none";
let playerEquippedAccessory = "none";

document.getElementById("equipBox").addEventListener("click", function () {
    equipItem(document.getElementById("nameBox").textContent);
});

function updateRealm(newRealm) {
    playerRealm = newRealm;
    updateMaxHealth();
    updateHealth(playerMaxHealth);
    updateAttack();
    updateDefense();
    updateMaxQi();
    updateQi(playerMaxQi);
};

function updateHealth(newHealthValue) {
    if (newHealthValue > playerMaxHealth) {
        playerHealth = playerMaxHealth;
    } else {
        playerHealth = newHealthValue;
    }
    document.getElementById("healthContainer").innerHTML = `Health: ${playerHealth}`;
};
var isDoingAnimation = false;
document.isDoingAnimation = isDoingAnimation;

function hideContainers(id, callback) {
    if (isDoingAnimation) return;

    isDoingAnimation = true;
    document.isDoingAnimation = isDoingAnimation;
    let containers = document.querySelectorAll(`[id=${id}]`);
    if (id == "inventoryContainer2") {
        let container = document.getElementById("inventoryContainer");
        if (window.getComputedStyle(container).visibility == "hidden") {
            isDoingAnimation = false;
            document.isDoingAnimation = isDoingAnimation;
            container.style.display = "none";
            container.offsetHeight;
            if (callback) callback();
            return;
        };
        container.style.opacity = 0;
        container.offsetHeight;
        
        function handleTransitionEnd() {
            container.style.visibility = "hidden";
            container.style.display = "none";
            container.removeEventListener("transitionend", handleTransitionEnd);
            if (callback) callback();
        }

        container.addEventListener("transitionend", handleTransitionEnd);
    };

    let completed = 0;
    containers.forEach(container => {
        if (window.getComputedStyle(container).visibility == "hidden") {
            isDoingAnimation = false;
            document.isDoingAnimation = isDoingAnimation;
            container.style.display = "none";
            container.offsetHeight;
            if (callback) callback();
            return;
        };
        container.style.opacity = 0;
        container.offsetHeight;
        
        function handleTransitionEnd() {
            container.style.visibility = "hidden";
            container.style.display = "none";
            container.removeEventListener("transitionend", handleTransitionEnd);

            completed++;
            if (completed === containers.length) {
                isDoingAnimation = false;
                document.isDoingAnimation = isDoingAnimation;
                if (callback) callback();
            }
        }

        container.addEventListener("transitionend", handleTransitionEnd);
    });
    if (containers.length === 0) isDoingAnimation = false;
}

function showContainers(id) {
    if (isDoingAnimation) return;
    if (id == "inventoryContainer2") {
        let container = document.getElementById("inventoryContainer");
        container.style.display = "flex";
        container.style.visibility = "visible";
        container.offsetHeight;
        requestAnimationFrame(() => {
            container.style.opacity = 1; // Waits until the next frame to set the opacity to 1, otherwise it instantly appears. Js is so weird...
        });
        
        function handleTransitionEnd() {
            container.style.opacity = 1;
            isDoingAnimation = false;
            container.removeEventListener("transitionend", handleTransitionEnd);
        }

        container.addEventListener("transitionend", handleTransitionEnd);
    };

    let containers = document.querySelectorAll(`[id=${id}]`);
    containers.forEach(container => {
        if (window.getComputedStyle(container).visibility == "hidden") {
            container.style.display = "flex";
            container.style.visibility = "visible";
            requestAnimationFrame(() => {
                container.style.opacity = 1;
            });

            function handleTransitionEnd() {
                container.removeEventListener("transitionend", handleTransitionEnd);
                container.style.opacity = 1;
                isDoingAnimation = false;
            }
            container.addEventListener("transitionend", handleTransitionEnd);
        } else {
            isDoingAnimation = false;
        }
    });
}

function showSettings() {
    if (isDoingAnimation) {
        setTimeout(() => isDoingAnimation = false, 500);
        return;
    };
    let settings = document.getElementById("settingsContainer");
    settings.offsetHeight;

    if (window.getComputedStyle(settings).visibility == "hidden") {
        hideContainers("relationshipContainer", () => {
            hideContainers("inventoryContainer2", () => {
                showContainers("settingsContainer");
            });
        });
    }
}

function showInventory() {
    if (isDoingAnimation) {
        setTimeout(() => isDoingAnimation = false, 500);
        return;
    };
    let inventory = document.getElementById("inventoryContainer");
    inventory.offsetHeight;

    if (window.getComputedStyle(inventory).visibility == "hidden") {
        hideContainers("relationshipContainer", () => {
            hideContainers("settingsContainer", () => {
                showContainers("inventoryContainer2");
            });
        });
    }
}

function showRelationships() {
    if (isDoingAnimation) {
        setTimeout(() => isDoingAnimation = false, 500);
        return;
    };
    let relationships = document.getElementById("relationshipContainer");
    relationships.offsetHeight;
    if (window.getComputedStyle(relationships).visibility == "hidden") {
        hideContainers("inventoryContainer2", () => {
            hideContainers("settingsContainer", () => {
                showContainers("relationshipContainer");
            });
        });
    };
};

window.showSettings = showSettings;
window.showInventory = showInventory;
window.showRelationships = showRelationships;

function updateMaxHealth() {
    playerMaxHealth = 100 * realms[playerRealm];
};

function updateMaxQi() {
    playerMaxQi = 300 * realms[playerRealm];
};

function updateQi(newQiValue) {
    if (newQiValue > playerMaxQi) {
        playerQi = playerMaxQi;
    } else {
        playerQi = newQiValue;
    };
    document.getElementById("qiContainer").innerHTML = `Qi: ${playerMaxQi}/${playerQi}`;
};

function updateAttack() {
    weaponAddition = items[playerEquippedWeapon]["Attack"] || 0;
    playerAttack = 20 * realms[playerRealm];
};

function updateDefense() {
    armourAddition = items[playerEquippedArmour]["Defense"] || 0;
    playerDefense = (20 * realms[playerRealm]) + armourAddition;
};

function addItemToInventory(itemName) {
    let newItem = document.createElement("h1");
    newItem.textContent = itemName;

    newItem.className = "h1";

    newItem.style.height = "4vh";
    newItem.style["margin-inline"] = "6px";

    newItem.addEventListener("click", function() {
        clickOnItem(newItem.textContent);
    });
    document.getElementById("inventoryContainer").append(newItem);
};
window.addItemToInventory = addItemToInventory;

function clickOnItem(itemName) {
    let nameBox = document.getElementById("nameBox");
    let descriptionBox = document.getElementById("descriptionBox");
    let attackBox = document.getElementById("attackNumberBox");
    let defenseBox = document.getElementById("defenseNumberBox");
    let absorbBox = document.getElementById("absorbNumberBox");

    nameBox.innerText = itemName
    descriptionBox.innerText = `Description: ${items[itemName]["Description"]}`;
    attackBox.innerText = `Attack: ${items[itemName]["Attack"]}`;
    defenseBox.innerText = `Defense: ${items[itemName]["Defense"]}`;
    absorbBox.innerText = `Qi Absorption: ${items[itemName]["Absorption"]}`;
};

function equipItem(itemName) {
    let itemType = items[itemName]["Type"];
    if (itemType == "Weapon") {
        document.getElementById("weaponContainer").innerText = `Weapon: ${itemName}`;
        playerEquippedWeapon = itemName;
    } else if (itemType == "Armour") {
        document.getElementById("armourContainer").innerText = `Armour: ${itemName}`;
        playerEquippedArmour = itemName;
    } else if (itemType == "Accessory") {
        document.getElementById("accessoryContainer").innerText = `Accessory: ${itemName}`;
        playerEquippedAccessory = itemName;
    };
};

window.equipItem = equipItem;