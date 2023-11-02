window.addEventListener("DOMContentLoaded", function(){
    let paragraphe = document.querySelector("p");
    let link = document.createElement("a");
    
    link.text ="ici";
    link.href="https://google.com";
    
    paragraphe.appendChild(link);
});