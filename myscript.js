//Defining global variables.

const picasso = document.querySelector(".drawing");
var dimensions = document.querySelector(".dimensions");
var numerons = document.querySelector("input[type=range]");

//Dynamically setting up the rows and columns of the grid-container.



//Simple brushing through the grid container

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

//Displays the text range of the slider.

dimensions.innerHTML = `${numerons.value} X ${numerons.value}`;



//Dividing the drawing board into multiple divs

function populateGrid() {
    dimensions.innerHTML = `${numerons.value} X ${numerons.value}`;
    picasso.style.gridTemplateColumns = `repeat(${numerons.value},1fr)`;
    picasso.style.gridTemplateRows = `repeat(${numerons.value},1fr)`;
    while (picasso.firstChild) {
        picasso.removeChild(picasso.firstChild)
    }
    for (let i = 0; i < numerons.value ** 2; i++) {
        const item = document.createElement("div")
        item.setAttribute("class", "item");
        picasso.appendChild(item);
        item.addEventListener("mouseover", (e) => {
            if (pride.classList.contains("clicked")) {
                for (let x = 0; x < rainbow.length; x++) {
                    item.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
                }
            } else if (eraser.classList.contains("toggled")) {
                item.style.backgroundColor = "white";
            } else {
                let value = document.getElementById("favcolor");
                e.target.style.backgroundColor = value.value;
            }
        });
    }
}
populateGrid();

numerons.addEventListener("change", (e) => {
    populateGrid();
})

//When clicking on a grid-item it should progressively darken

// function LightenDarkenColor(col, amt) {
//     var num = parseInt(col, 16);
//     var r = (num >> 16) + amt;
//     var b = ((num >> 8) & 0x00FF) + amt;
//     var g = (num & 0x0000FF) + amt;
//     var newColor = g | (b << 8) | (r << 16);
//     return newColor.toString(16);
// }

// var darken = document.querySelector(".item");
// darken.addEventListener("click", (e) => {
//     let value = document.getElementById("favcolor");
//     LightenDarkenColor(value.value, -40);
// })
