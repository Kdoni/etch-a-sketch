const toggle = document.querySelector(".toggleBtn input");
toggle.addEventListener("click", () =>{
    const onOff = toggle.parentNode.querySelector(".onOff");
    onOff.textContent = toggle.checked ? "Drawing: ON" : " Drawing: OFF";
})

const board = document.querySelector(".board");
for (let i=0;i<4096;i++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    board.appendChild(pixel);
}
