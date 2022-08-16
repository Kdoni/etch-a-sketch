//Simple brushing through the grid container

const grid = document.getElementsByClassName("item");
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", (e) => {
        let value = document.getElementById("favcolor");
        e.target.style.backgroundColor = value.value;
    });
}

//Applying the rainbow color.

let rainbow = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
let pride = document.querySelector(".pride");
// pride.addEventListener("click", (e) => {
//     for (let i = 0; i < rainbow.length; i++) {
//         e.target.style.backgroundColor = rainbow[i];
//     }
// })