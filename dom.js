let rightContainer=document.querySelector(".grid");
let range=document.getElementsByTagName("input")[1];
let color =document.getElementById("inp-color");

// the createDiv(nbr) function creates X*X grid dependding on the user choice.
createDiv(16);
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
    /*  i think the code below is repeating .
        so i need to put it inside a function.
        i will do this next time inchllh. 
    */
    let gridCells=document.getElementsByClassName("grid-cells");
    Array.from(gridCells).forEach((item)=>{
        item.addEventListener("click", ()=>{
            item.style=`background-color:${color.value}`;
       });
    });  
    // end of the repeating code. :)
});

let colorMode=document.getElementsByTagName("button")[0];
colorMode.addEventListener("click",()=>{
    let gridCells=document.getElementsByClassName("grid-cells");
    Array.from(gridCells).forEach((item)=>{
        item.addEventListener("click", ()=>{
            item.style=`background-color:${color.value}`;
       });
    });

});

let rainbowMode=document.getElementsByTagName("button")[1];
rainbowMode.addEventListener("click",()=>{
    
});

let eraser=document.getElementsByTagName("button")[2];
eraser.addEventListener("click",()=>{
    eraser.classList.toggle("active");
});

let clear=document.getElementsByTagName("button")[3];
clear.addEventListener("click",()=>{
    setToDefault();
});