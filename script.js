const board = document.querySelector(".board");
for (let i=0;i<4096;i++){
    var pixel = document.createElement("div");
    pixel.classList.add("pixel");
    board.appendChild(pixel);
    console.log(board)
}