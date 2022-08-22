const defaultMode="color";
const defaultSize=16;
const defaultColor="#404040";

let curentMode=defaultMode;
let curentSize=defaultSize;
let curentColor=defaultColor;

let rightContainer=document.querySelector(".grid");
let gridCells=document.getElementsByClassName("grid-cells");
// 
let color =document.getElementById("inp-color");
let span=document.getElementById("span-range");
let range=document.getElementById("range");
let colorMode=document.getElementById("color-btn");
let rainbowMode=document.getElementById("rainbow-btn");
let eraser=document.getElementById("eraser-btn");
let clear=document.getElementById("clear-btn");

function setCurentSize(newSize) {
    curentSize=newSize;
    span.textContent=`${range.value} x ${range.value}`;
}

function setCurentColor(newColor) {
    curentColor=newColor;
}
color.oninput=(e)=>setCurentColor(e.target.value);
colorMode.onclick=()=>setCurentMode("color");
rainbowMode.onclick=()=>setCurentMode("rainbow");
eraser.onclick=()=>setCurentMode("eraser");
range.onmousemove=(e)=>setCurentSize(e.target.value);
range.onclick=(e)=>updateCurentSize(e.target.value);

function updateCurentSize(){
    createDiv(curentSize)
}

let mouseDown=false;
rightContainer.onmousedown=()=>{mouseDown=true};
rightContainer.onmouseup=()=>{mouseDown=false};

// the createDiv(nbr) function creates nbr*nbr grid dependding on the user choice.
function createDiv(nbr){
    rightContainer.innerHTML="";
    rightContainer.style.gridTemplateColumns=`repeat(${nbr},1fr)`;
    rightContainer.style.gridTemplateRows=`repeat(${nbr},1fr)`;
    for (let i = Math.pow(nbr,2); i>0; i--) {
        let div=document.createElement("div");
        div.setAttribute("class","grid-cells");
        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColor)
        rightContainer.appendChild(div);
    }
}
// end of createDiv() function.
function setCurentMode(newMode) {
    activateBtn(newMode);
    curentMode=newMode;
}
clear.addEventListener("click",()=>{
    createDiv(range.value);
    gridEventColor(color);
});

function gridEventColor(backgroundColor){
Array.from(gridCells).forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.style=`background-color:${backgroundColor.value}`;
   });
});}

function changeColor(evt) {
    if (evt.type ==="mouseover" && !mouseDown) return
    if(curentMode==="color"){
        evt.target.style.backgroundColor=color.value;
    }else if (curentMode==="rainbow") {
        let randomR=Math.floor(Math.random()*256);
        let randomG=Math.floor(Math.random()*256);
        let randomB=Math.floor(Math.random()*256);
        evt.target.style.backgroundColor=`RGB(${randomR},${randomG},${randomB})`;
    }else if (curentMode==="eraser") {
        evt.target.style.backgroundColor="white";
    }
}

function activateBtn(newMode){
    if (curentMode==="color") {
        colorMode.classList.remove("active");
    }else if(curentMode==="rainbow"){
        rainbowMode.classList.remove("active");
    }else if (curentMode==="eraser"){
        eraser.classList.remove("active");
    }

     if (newMode==="color") {
        colorMode.classList.add("active");
    }else if(newMode==="rainbow"){
        rainbowMode.classList.add("active");
    }else if (newMode==="eraser"){
        eraser.classList.add("active");
    }
}

window.onload=()=>createDiv(16)