window.addEventListener("DOMContentLoaded", function(){

        
        
        let deuxiemeSection = document.querySelector("body > section:last-of-type");



        let titreSection = document.createElement('h2');
        let titreTexte = document.createTextNode("Le titre de la deuxième section");
        titreSection.appendChild(titreTexte);


        let paragrapheDeuxiemeSection = document.createElement('p');
        let paragrapheTexte = document.createTextNode("Le paragraphe de la deuxième section");
        paragrapheDeuxiemeSection.appendChild(paragrapheTexte);

 
        deuxiemeSection.appendChild(titreSection);
        deuxiemeSection.appendChild(paragrapheDeuxiemeSection);

});