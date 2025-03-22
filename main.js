x= 0;
y= 0;
draw_pineapple ="";
draw_apple = "";
draw_banana = "";
draw_orange = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content =="pineapple")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing pineaple";
        draw_pineapple = "set";
    }
    if(content =="Apple")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    }
    if(content =="banana")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing banana";
        draw_banana = "set";
    }
        if(content =="orange")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing orange";
        draw_orange = "set";
    }
}
let img;
let img2;
let img3;
let img4;
function preload() {
    img = loadImage('pineaple.png'); // Replace with your image path
    img2 = loadImage('Apple.webp'); 
    img3 = loadImage('banana.png');
    img4 = loadImage('studio-shot-of-fresh-natural-orange-isolated-on-a-transparent-background-png.webp');
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_pineapple == "set")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
image(img, x, y, 50,50);

    }
    if(draw_apple == "set")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        image(img2, x, y, 50,50);
    }
    if(draw_banana == "set")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        image(img3, x, y, 50,50);
    }
    if(draw_orange == "set")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        image(img4, x, y, 50,50);
    }
}