let rightContainer=document.querySelector(".grid");
let range=document.getElementsByTagName("input")[1];
let color =document.getElementById("inp-color");
let gridCells=document.getElementsByClassName("grid-cells");
let span=document.getElementById("span-range");

gridEventColor(color)
createDiv(16);
// the createDiv(nbr) function creates nbr*nbr grid dependding on the user choice.
function createDiv(nbr){
    rightContainer.innerHTML="";
    span.textContent=`${nbr} x ${nbr}`;
    rightContainer.style.gridTemplateColumns=`repeat(${nbr},1fr)`;
    rightContainer.style.gridTemplateRows=`repeat(${nbr},1fr)`;
    for (let i = Math.pow(nbr,2); i>0; i--) {
        let div=document.createElement("div");
        div.setAttribute("class","grid-cells");
        rightContainer.appendChild(div);
    }
    
}
// end of createDiv() function.
range.addEventListener("click", ()=>{
    createDiv(range.value);
    gridEventColor(color)
});

let colorMode=document.getElementsByTagName("button")[0];
colorMode.addEventListener("click",()=>{
    colorMode.classList.add("active");
    rainbowMode.classList.remove("active");
    eraser.classList.remove("active");  
    gridEventColor(color);
});

let rainbowMode=document.getElementsByTagName("button")[1];
rainbowMode.addEventListener("click",()=>{
    colorMode.classList.remove("active");
    eraser.classList.remove("active");
    rainbowMode.classList.add("active");
});

let eraser=document.getElementsByTagName("button")[2];
eraser.addEventListener("click",()=>{
    eraser.classList.add("active");
    rainbowMode.classList.remove("active");
    colorMode.classList.remove("active");
  });
  eraser.onclick=()=>{
    Array.from(gridCells).forEach((item)=>{
        item.addEventListener("click", ()=>{
            item.style=`background-color:white`;
       });
});
}

let clear=document.getElementsByTagName("button")[3];
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