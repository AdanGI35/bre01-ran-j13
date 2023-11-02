window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    
        
        
        let deuxiemeSection = document.querySelectorAll('section')[1];


        let titreSection = document.createElement('h2');
        let titreTexte = document.createTextNode("Le titre de la deuxième section");
        titreSection.appendChild(titreTexte);


        let paragrapheDeuxiemeSection = document.createElement('p');
        let paragrapheTexte = document.createTextNode("Le paragraphe de la deuxième section");
        paragrapheDeuxiemeSection.appendChild(paragrapheTexte);

 
        deuxiemeSection.appendChild(titreSection);
        deuxiemeSection.appendChild(paragrapheDeuxiemeSection);

});