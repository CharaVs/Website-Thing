let prototypeEngine = false;

function resizeCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rightBox = document.getElementById("rightBox")
    
    canvas.width = rightBox.clientWidth * dpr;
    canvas.height = rightBox.clientHeight * dpr;

    
    ctx.scale(dpr, dpr);
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World",20,60);
    if (prototypeEngine == true) {
        ctx.fillText("Hi", 20, 60);
    };
};

let canvasToResize = document.getElementById("gameCanvas")
resizeCanvas(canvasToResize);
canvasToResize.addEventListener("resize", () => resizeCanvas(canvasToResize));