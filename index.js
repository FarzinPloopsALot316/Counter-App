//Farzin's Stupid Counter System
let count = document.getElementById("count-el");
count.innerText = 0;
var previous = document.createElement("p");
previous.innerHTML = "Previous Entries:"
document.body.appendChild(previous);

function increment() {
    count.innerText++;
    if (count.innerText == "33") {
        document.getElementById("count-el").remove();
        document.getElementById("header2").remove();
        document.getElementById("increment-btn").remove();
        document.getElementById("save-btn").remove();
        document.getElementById("silly").remove();
        var image = document.createElement("img");
        image.src = "spooky.png";
        image.setAttribute("style", "height: 1000px");
        image.setAttribute("style", "width: 1000px");
        document.body.appendChild(image);
        var sound = document.createElement("audio");
        sound.src="aaa.mp3";
        sound.play();
    }
}

function save() {
    var previous = document.createElement("p");
    previous.innerHTML = count.innerHTML;
    document.body.appendChild(previous);
}