const realms = {
    "bodyTempering": 10,
    "foundation": 20,
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

function updateHealth(newHealthValue) {
    if (newHealthValue > playerMaxHealth) {
        playerHealth = playerMaxHealth;
    } else {
        playerHealth = newHealthValue;
    }
    document.getElementById("healthContainer").innerHTML = `Health: ${playerHealth}`;
};

function updateRealm(newRealm) {
    playerRealm = newRealm;
    updateMaxHealth();
    updateAttack();
    updateDefense();
};

function hideSettings() {

    document.querySelectorAll('[id="settingsContainer"]').forEach(container => {
        container.style.display = "none";
    });
};

function showSettings() {
    document.querySelectorAll('[id="settingsContainer"]').forEach(container => {
        container.style.display = 'flex';
    });
}

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
    playerAttack = 20 * realms[playerRealm];
};

function updateDefense() {
    playerDefense = 20 * realms[playerRealm];
};
