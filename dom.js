let rightContainer=document.querySelector(".grid");
let range=document.getElementsByTagName("input")[1];
let color =document.getElementById("inp-color");
let gridCells=document.getElementsByClassName("grid-cells");

gridEventColor(color)
createDiv(16);
// the createDiv(nbr) function creates nbr*nbr grid dependding on the user choice.
function createDiv(nbr){
    for (let i = Math.pow(nbr,2); i>0; i--) {
        let div=document.createElement("div");
        div.setAttribute("class","grid-cells");
        rightContainer.appendChild(div);
    }
}
// end of createDiv() function.

// the setToDefault() function sets the grid to a 16x16 grid
function setToDefault() {
    rightContainer.innerHTML="";
    let span=document.getElementById("span-range").textContent=`${range.value} x ${range.value}`;
    rightContainer.style.gridTemplateColumns=`repeat(${range.value},1fr)`;
    rightContainer.style.gridTemplateRows=`repeat(${range.value},1fr)`;
}
// end of the setToDefualt() function
range.addEventListener("click", ()=>{
    setToDefault();    
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
    setToDefault();
    createDiv(16);
});

function gridEventColor(backgroundColor){
Array.from(gridCells).forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.style=`background-color:${backgroundColor.value}`;
   });
});}