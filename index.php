<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Project</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script type="module" src="init.js"></script>
        <div class="divBox">
            <div class="leftBox">
                <div class="boxContainer">
                    <h1 id="status" class="h1Other">Status</h1>
                </div>
                <hr></hr>
                <div class="boxContainer">
                    <h2 id="healthContainer">Health: 100</h2>
                    <h2 id="qiContainer">Qi: 100/100</h2>
                </div>
                <div class="boxContainer">
                    <h2 id="weaponContainer">Weapon: None</h2>
                </div>
                <div class="boxContainer">
                    <h2 id="armourContainer">Armour: None</h2>
                </div>
                <div class="boxContainer">
                    <h2 id="accessoryContainer">Accessory: None</h2>
                </div>
                <div class="boxContainer">
                    <h2 id="sectContainer">Sect: None</h2>
                </div>
            </div>
            <div class="rightBox">
                <div class="boxContainer" style="width: 74vw;">
                    <h1 class="h1" onclick="showStory()">Story</h1>
                    <h1 class="h1" onclick="showRelationships()">Relationships</h1>
                    <h1 class="h1" onclick="showInventory()">Inventory</h1>
                    <h1 class="h1" onclick="showSettings()">Settings</h1>
                </div>
                <hr></hr>
                <!-- Splitting the different containers up using comments, otherwise it'd be very very annoying to read. -->

                <!-- BEGINNING OF SETTINGS CONTAINERS -->
                <div class="boxContainer" id="settingsContainer" style="width: 74vw; visibility: hidden;">
                    <h1 class="h1">Save</h1>
                </div>
                <div class="boxContainer" id="settingsContainer" style="width: 74vw; visibility: hidden;">
                    <h1 class="h1">Load</h1>
                </div>
                <div class="boxContainer" id="settingsContainer" style="width: 74vw; visibility: hidden;">
                    <h1 class="h1Other">Volume - <input type="range" min="0" max="1" step="0.01" id="volume-slider" /></h1>
                </div>
                <!-- END OF SETTINGS CONTAINERS -->

                <!-- BEGINNING OF INVENTORY CONTAINERS -->
                <div class="boxContainer" id="inventoryContainer" style="width: 74vw; visibility: hidden; height: 40vh; border: 3px solid white; justify-content: left; flex-wrap: wrap; overflow-y: auto; margin-bottom: 6px;">
                </div>

                <div class="boxContainer" id="inventoryContainer2" style="width: 74vw; height: 10vh; visibility: hidden;">
                    <h1 class="h1Other" id="nameBox">Name</h1>
                </div>
                <div class="boxContainer" id="inventoryContainer2" style="width: 74vw; height: 10vh; visibility: hidden; justify-content: center; flex-flow: column wrap;">
                    <h1 class="h1Other" id="descriptionBox">Description</h1>
                </div>
                <div class="boxContainer" id="inventoryContainer2" style="width: 74vw; height: 10vh; visibility: hidden; justify-content: center;">
                    <h1 class="h1Other" id="attackNumberBox" style="margin-inline: 6px;">Attack</h1>
                    <h1 class="h1Other" id="defenseNumberBox" style="margin-inline: 6px;">Defense</h1>
                    <h1 class="h1Other" id="absorbNumberBox" style="margin-inline: 6px;">Qi Absorption</h1>
                </div>
                <div class="boxContainer" id="inventoryContainer2" style="width: 74vw; visibility: hidden; height: 10vh;">
                    <h1 class="h1" id="equipBox">Equip</h1>
                </div>
                <!-- END OF INVENTORY CONTAINERS -->

                <!-- BEGINNING OF RELATIONSHIP CONTAINERS -->
                <div class="boxContainer" id="relationshipContainer" style="width: 74vw; visibility: hidden; height: 40vh; border: 3px solid white; justify-content: left; flex-wrap: wrap; overflow-y: auto; margin-bottom: 6px;">
                    <h1 class="h1Other" style="height: 10vh;"> -- Not Added Yet </h1>
                </div>
                 <!-- END OF RELATIONSHIP CONTAINERS -->
            </div>
        </div>
    </body>
</html>