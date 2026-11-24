const spinningContainer = document.getElementById("vinylnoac.svg");
const staticContainer = document.getElementById("vinylac.svg");
const Container = document.getElementById("vinyl-container");

function moveSVGs() { 
    spinningContainer.style.position = 'absolute';
    spinningContainer.style.right = '40%';
    staticContainer.style.position = 'absolute';
    staticContainer.style.right = '37%';
}

moveSVGs();