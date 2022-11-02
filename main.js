const container = document.querySelector(".container");

for (let i=0; i<256; i++) {
    var div = document.createElement("div");
    //console.log(i);
    div.classList.add("grid");

    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

function gridListen(){
    const grids = document.querySelectorAll(".grid");

    grids.forEach(function(grid) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        grid.addEventListener("mouseover", function(evt) {
            console.log("Hello!");
            
            if(isMouseDown){
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                    //e.target.classList.add("hover");
                evt.target.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
        });
    });
}

const black = document.querySelector(".black");

black.addEventListener("click", function(e) {
    const grids = document.querySelectorAll(".grid");

    grids.forEach(function(gid){
        //gid.replaceWith(gid.cloneNode(true));

        gid.addEventListener("mouseover", function(event) {
            if(isMouseDown){
                event.target.style.backgroundColor = "black";
            }
        });
    });

});

const rainbow = document.querySelector(".rainbow");

rainbow.addEventListener("click", function(e) {
    const grids = document.querySelectorAll(".grid");

    gridListen();
});

const body = document.querySelector("body");
let isMouseDown = false;

body.addEventListener("mousedown", function(e) {
    isMouseDown = true;
});

body.addEventListener("mouseup", function(e) {
    isMouseDown = false;
});

const pixels = document.querySelector(".pixels");

pixels.addEventListener("click", function(e) {
    let dimensions = prompt("Enter dimensions: ");

    container.innerHTML = '';

    let iVal = Math.pow(dimensions, 2);
    let newWidth = 480 / dimensions;
    let newHeight = 480 / dimensions;
    for (let i=0; i<iVal; i++) {
        var div = document.createElement("div");
        //console.log(i);
        div.classList.add("grid");
        div.style.width = `${newWidth}px`;
        div.style.height = `${newHeight}px`;
    
        container.appendChild(div);
    }
    gridListen();
    const grids = document.querySelectorAll(".grid");
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", function(e) {
    container.innerHTML = '';

    for (let i=0; i<256; i++) {
        var div = document.createElement("div");
        //console.log(i);
        div.classList.add("grid");
    
        container.appendChild(div);
    }
    gridListen();
    const grids = document.querySelectorAll(".grid");
});

gridListen();
