<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Project</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script src="init.js"></script>
        <div class="divBox">
            <div class="leftBox">
                <div class="boxContainer">
                    <h1 id="status" class="h1Other">Status</h1>
                </div>
                <hr></hr>
                <div class="boxContainer">
                    <h2 id="healthContainer">Health: 100</h2>
                    <h2>Qi: 100/100</h2>
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
                <div class="boxContainer" id="settingsContainer" style="width: 74vw; display: none;">
                    <h1 class="h1">Save</h1>
                </div>
                <div class="boxContainer" id="settingsContainer" style="width: 74vw; display: none;">
                    <h1 class="h1">Load</h1>
                </div>
                <div class="boxContainer" id="settingsContainer" style="width: 74vw; display: none;">
                    <h1 class="h1Other">Volume - <input type="range" min="0" max="1" step="0.01" id="volume-slider" /></h1>
                </div>
                <!-- END OF SETTINGS CONTAINERS -->

                <!-- BEGINNING OF INVENTORY CONTAINERS -->

                <!-- END OF INVENTORY CONTAINERS -->
            </div>
        </div>
    </body>
</html>