function createGrid() {
    let body =document.getElementsByTagName("body");
    let container=document.createElement("div");
    container.setAttribute("id","container");
    let input=document.getElementById("nbr-square").value;

    for (let i = input; i >0; i--) {
        let squar=document.createElement("div");
            squar.setAttribute("class","squar");
            squar.textContent=`i=${i}`;
            container.appendChild(squar);
        for(let j=i;j>0;j--){
        let squar=document.createElement("div");
            squar.setAttribute("class","squar");
            squar.textContent=`j=${j}`;
        container.appendChild(squar);
        }
    }

    body[0].appendChild(container);
}