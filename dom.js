function createGrid() {
    let body =document.getElementsByTagName("body");
    // let hh= body.children;
    // if(hh[1]!= undefined){hh[1].remove();}
    let container=document.createElement("div");
    container.setAttribute("id","container");
    let input=document.getElementById("nbr-square").value;
    
if (input>=100 || input<=0) {
    alert(`you enterd ${input},
           you have to chose a number between 0 and 100`);
}else{
    for (let i = input; i >0; i--) {
        let div=document.createElement("div");
        let row=document.createElement("div");
            row.setAttribute("class","row");
            row.textContent=`i=${i}`;
            div.appendChild(row);
        for(let j=input-1;j>0;j--){
        let colm=document.createElement("div");
            colm.setAttribute("class","colm");
            colm.textContent=`j=${j}`;
        div.appendChild(colm);
        }
        container.appendChild(div);
    }
    body[0].appendChild(container);
}
}