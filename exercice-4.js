window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];

  
    let body = document.querySelector("body");

   
    let liste = document.createElement("ul");


    for(let i = 0; i < pokemons.length; i++) {
        
        let elementListe = document.createElement("li");

        elementListe.textContent = pokemons[i];

        liste.appendChild(elementListe);
    }

    body.appendChild(liste);

});