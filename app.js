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

        let slotImg = document.createElement('img');

        if (champNom.length === 0) {
            
            return reponseDuChoixpo.textContent = "Ça ne fonctionne qu'avec un nom, pardi !";

        } else if (champNom.length === 8) {


            reponseDuChoixpo.prepend(slotImg);
            slotImg.src = "./images/maxopus.png";

        } else if (champNom.length % 5 === 0 || champNom.length % 3 === 0) {

            reponseDuChoixpo.prepend(slotImg);
            return slotImg.src = "./images/anthorvus.png";
        
        } else if (champNom.charAt(0) === "l" || champNom.charAt(champNom.length - 1) === "x") {

            reponseDuChoixpo.prepend(slotImg);
            return slotImg.src = "./images/lustrix.png"


        } else {

            reponseDuChoixpo.prepend(slotImg);
            return slotImg.src = "./images/darioptera.png"



        };
    















    },

};






// handleSubmit: function (e) {

//     e.preventDefault();

//     let champNom = document.querySelector('input').value;


//     let reponseDuChoixpo = document.querySelector(".speech");
//     reponseDuChoixpo.textContent = "";


//     if (champNom == "") {

//         reponseDuChoixpo.textContent = "Ça ne fonctionne qu'avec un nom, pardi !";

//     } else {



//         let randomNumber = Math.floor(Math.random() * ((4 - 0) + 0));


//         let slotImg = document.createElement('img');

//         for (let nomImage = 0; nomImage < app.houses.length; nomImage++) {


//         }


//         slotImg.src = "./images/" + app.houses[randomNumber] + ".png";

//         reponseDuChoixpo.prepend(slotImg);

//     }

// },



// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);