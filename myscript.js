//Simple brushing through the grid container

const grid = document.getElementsByClassName("item");
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", (e) => {
        if (pride.classList.contains("clicked")) {
            for (let x = 0; x < rainbow.length; x++) {
                grid[i].style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
            }
        } else {
            let value = document.getElementById("favcolor");
            e.target.style.backgroundColor = value.value;
        }
    });
}

//Applying the rainbow color.

let rainbow = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
var pride = document.querySelector(".prido");
pride.addEventListener("click", (e) => {
    pride.classList.toggle("clicked");

});