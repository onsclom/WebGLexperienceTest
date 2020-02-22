let timeBetween = 3;
let currentTime = timeBetween;

let curMsg = 0;
let messages = ["", "hello", "what is life?", "why am i doing this?"];

let canvasOpacity = 0;

function onLoad()
{
    update();
}

function update()
{
    currentTime += .2;

    if (currentTime >= timeBetween)
    {
        currentTime = 0;
        curMsg += 1;
        document.getElementById("mainText").textContent = messages[curMsg];
    }

    document.getElementById("mainText").style.opacity = (timeBetween-currentTime)/timeBetween;

    if (curMsg <= messages.length-1)
    {
        setTimeout(update, 200);
    }
    else
    {
        console.log("canvas fade in");
        document.getElementById("unityContainer").style.height = "100vh";
        document.getElementById("unityContainer").style.width = "100vw";
        canvasFadeIn();
    }
}

function canvasFadeIn()
{
    canvasOpacity += .02;
    document.getElementById("unityContainer").style.opacity = canvasOpacity;
    if (canvasOpacity < 1)
    {
        setTimeout(canvasFadeIn, 200);
    }
}