window.addEventListener("DOMContentLoaded", function(){
    let p = document.querySelector("body > p");
    
    let a = document.createElement("a");
    let aText = document.createTextNode("ici");
    a.appendChild(aText);

    a.setAttribute("href", "https://google.com");

    p.appendChild(a);
});