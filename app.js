// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page



    init: function () {

        
        let btnValidation = document.querySelector(".submit");

        btnValidation.addEventListener("click", app.handleSubmit);
        
    },

    handleSubmit: function (e) {

        e.preventDefault();
        
        let champNom = document.querySelector('input').value;
        

        let reponseDuChoixpo = document.querySelector(".speech");
        reponseDuChoixpo.textContent = "";


        if (champNom == "") {

            reponseDuChoixpo.textContent = "Ça ne fonctionne qu'avec un nom, pardi !";

        } else {



            let randomNumber = Math.floor(Math.random() * ((4 - 0) + 0));


            let slotImg = document.createElement('img');

            for (let nomImage = 0; nomImage < app.houses.length; nomImage++) {


            }


            slotImg.src = "./images/" + app.houses[randomNumber] + ".png";

            reponseDuChoixpo.prepend(slotImg);

        }

    },




}




// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);