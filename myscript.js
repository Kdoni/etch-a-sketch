const grid = document.getElementsByClassName("item");
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "blue";
    })
}