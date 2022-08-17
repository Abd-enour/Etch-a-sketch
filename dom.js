function createGrid() {
    let body =document.getElementsByTagName("body");
    let secondTag= document.querySelectorAll("body > *");
    if(secondTag[1] !=undefined){secondTag[1].remove();}
    let container=document.createElement("div");
    container.setAttribute("id","container");
    let input=document.getElementById("nbr-square").value;
    
if (input>50 || input<=0) {
    alert(`you enterd ${input},
           you have to chose a number between 1 and 50`);
}else{
    for (let i = input; i >0; i--) {
        let div=document.createElement("div");
        let row=document.createElement("div");
            row.setAttribute("class","row row"+i);
            div.appendChild(row);
        for(let j=input-1;j>0;j--){
        let colm=document.createElement("div");
            colm.setAttribute("class","colm colm"+j);
        div.appendChild(colm);
        }
        container.appendChild(div);
    }
    body[0].appendChild(container);
}
}