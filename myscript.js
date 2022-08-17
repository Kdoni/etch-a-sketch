//Simple brushing through the grid container

const picasso = document.querySelector(".drawing");
const grid = document.getElementsByClassName("item");
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", (e) => {
        if (pride.classList.contains("clicked")) {
            for (let x = 0; x < rainbow.length; x++) {
                grid[i].style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
            }
        } else if (eraser.classList.contains("toggled")) {
            grid[i].style.backgroundColor = "white";
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
    eraser.classList.remove("toggled");
    pride.classList.toggle("clicked");

});

//Resetting the color;

var reset = document.querySelector(".reseto");
reset.addEventListener("click", (e) => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = "white";
    }
})

//Eraser settings.

var eraser = document.querySelector(".eraser");
eraser.addEventListener("click", (e) => {
    pride.classList.remove("clicked");
    eraser.classList.toggle("toggled");
    // if (eraser.classList.contains("toggled")) {
    //     grid.addEventListener("mouseover", (e) => {
    //         e.style.backgroundColor = "white";
    //     })
    // }
})

/*Just to remove classes from other elements*/

var palette = document.querySelector(".palette");
palette.addEventListener("click", (e) => {
    pride.classList.remove("clicked");
    eraser.classList.remove("toggled");
});

//Dividing the drawing board into multiple divs//
var dimensions = document.querySelector(".dimensions");
var numerons = document.querySelector("input[type=range]");
dimensions.innerHTML = `${numerons.value} X ${numerons.value}`;

numerons.addEventListener("input", (e) => {
    dimensions.innerHTML = `${numerons.value} X ${numerons.value}`;
});


