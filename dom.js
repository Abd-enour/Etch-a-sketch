let color =document.getElementsByClassName("inp")[0];
console.log(color.value);


let range=document.getElementsByTagName("input")[1];
range.addEventListener("click", ()=>{
    let span=document.getElementById("span-range").textContent=`${range.value} x ${range.value}`;
    let rightContainer=document.getElementById("right-container");
    rightContainer.style.gridTemplateColumns=`repeat(${range.value},1fr)`;
    rightContainer.style.gridTemplateRows=`repeat(${range.value},1fr)`;
    for (let i = range.value; i>0; i-) {
        let div
        
    }
});

let rightContainer=document.getElementById("right-container");

let colorMode=document.getElementsByClassName("inp")[1];
colorMode.addEventListener("click",()=>{
    colorMode.setAttribute("class","fo inp");
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