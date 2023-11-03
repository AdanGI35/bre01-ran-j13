window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let task = document.getElementById("newTask");
    let form = document.querySelector("body > form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let ul = document.getElementById("todo-list");

        let li = document.createElement("li");
        let liText = document.createTextNode(task.value);

        li.appendChild(liText);
        ul.appendChild(li);
    });
});