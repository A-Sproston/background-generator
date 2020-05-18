const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#gradient");
const random = document.querySelector("#random");

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

setGradient();

random.addEventListener("click", function(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
})

function randomColor(){
    return "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
}