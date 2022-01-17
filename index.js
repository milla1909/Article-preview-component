document.getElementById("share-button").addEventListener("click",function(){
    let autor=document.getElementById("social");
    let circle=document.getElementById("share-button");
    let arrow=document.getElementById("arrow");
       autor.classList.toggle("visibility");
       circle.classList.toggle("circle--active");
       arrow.classList.toggle("white-arrow");

})
