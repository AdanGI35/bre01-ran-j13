window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
/*    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];

  
    let body = document.querySelector("body");

   
    let liste = document.createElement("ul");


    for(let i = 0; i < pokemons.length; i++) {
        
        let elementListe = document.createElement("li");

        elementListe.textContent = pokemons[i];

        liste.appendChild(elementListe);
    }

    body.appendChild(liste);*/
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];

    let body = document.querySelector("body");

    let ul = document.createElement("ul");

    for(let i = 0; i < pokemons.length; i++)
    {
        let li = document.createElement("li");
        let liText = document.createTextNode(pokemons[i]);
        li.appendChild(liText);
        ul.appendChild(li);
    }

    body.appendChild(ul);
});
});