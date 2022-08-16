function createGrid() {
    let body =document.getElementsByTagName("body");
    let container=document.createElement("div");
    container.setAttribute("id","container");
    let input=document.getElementById("nbr-square").value;

    for (let i = input; i >0; i--) {
        let row=document.createElement("div");
            row.setAttribute("class","row");
            row.textContent=`i=${i}`;
        for(let j=input-1;j>0;j--){
        let colm=document.createElement("div");
            colm.setAttribute("class","colm");
            colm.textContent=`j=${j}`;
        row.appendChild(colm);
        }
        container.appendChild(row);
    }
    body[0].appendChild(container);
}