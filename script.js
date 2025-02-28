let myEmojis = ["🦠","🦖","🦈","🏀","🏊",
    "🐶","🦕","🐕","🍌"];

let urlAnimate =()=> {
    window.location.hash = 
    myEmojis[Math.floor(Date.now()/100) % myEmojis.length];
    setTimeout(urlAnimate, 300);
}

urlAnimate();

function DinosaurRun() {
    var img = document.createElement("img");
    img.setAttribute("src","imgs/dinosour.png");
    // img.setAttribute("alt","Dinosaur");
    img.setAttribute("class","dinosaur");
    document.body.appendChild(img);
}

function DinosaurRemove() {
    var dinosaur = document.querySelector(".dinosaur");
    if (dinosaur) {
        dinosaur.remove();
    }
}