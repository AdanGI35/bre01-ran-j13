window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];

    let table = document.querySelector("body > table > tbody");

    for(let i = 0; i < users.length; i++)
    {
        let tr = document.createElement("tr");

        let prenom = document.createElment("td");
        let prenomText = document.createTextNode(users[i][0]);
        prenom.appendChild(prenomText);
        tr.appendChild(prenom);

        let nom = document.createElment("td");
        let nomText = document.createTextNode(users[i][1]);
        nom.appendChild(nomText);
        tr.appendChild(nom);

        table.appendChild(tr);
    }
});