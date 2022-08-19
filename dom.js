let rightContainer=document.querySelector(".grid");
let range=document.getElementsByTagName("input")[1];

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
    let color =document.getElementsByClassName("inp")[0];  
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

let colorMode=document.getElementsByClassName("inp")[1];
colorMode.addEventListener("click",()=>{
    colorMode.setAttribute("class","fo inp");
    let color =document.getElementsByClassName("inp")[0];
    let gridCells=document.getElementsByClassName("grid-cells");
    Array.from(gridCells).forEach((item)=>{
        item.addEventListener("click", ()=>{
            item.style=`background-color:${color.value}`;
       });
    });

});




let rainbowMode=document.getElementsByClassName("inp")[2];
rainbowMode.addEventListener("click",()=>{
    rainbowMode.setAttribute("class","fo inp");
});

let eraser=document.getElementsByClassName("inp")[3];
eraser.addEventListener("click",()=>{
    eraser.setAttribute("class","fo inp");
});

let clear=document.getElementsByClassName("inp")[4];
clear.addEventListener("click",()=>{
    clear.setAttribute("class","fo inp");
});