<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Project</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script src="particles.js"></script>
        <div class="divBox">
            <div class="leftBox">
                <div class="boxContainer" id="selectButton">
                    <h1 id="status" class="h1Select">Select</h1>
                </div>
                <hr></hr>
                <div class="boxContainer" id="projects">
                    <h1 class="h1">Prototype Engine</h1>
                </div>
            </div>
            <div class="rightBox" id="rightBox">
            <canvas id="gameCanvas" width="200px" height="100px" style="border:1px solid #000000;">
                <script src="canvas.js"></script>
            </canvas>
            </div>
        </div>
    </body>
</html>