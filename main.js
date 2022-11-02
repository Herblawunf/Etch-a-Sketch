const container = document.querySelector(".container");

for (let i=0; i<255; i++) {
    var div = document.createElement("div");
    //console.log(i);
    div.classList.add("grid");

    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

grids.forEach(function(grid) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    grid.addEventListener("mouseover", function(e) {
        console.log("Hello!");
        
        if(isMouseDown){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
                //e.target.classList.add("hover");
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
    });
});

const body = document.querySelector("body");
let isMouseDown = false;

body.addEventListener("mousedown", function(e) {
    isMouseDown = true;
});

body.addEventListener("mouseup", function(e) {
    isMouseDown = false;
});
