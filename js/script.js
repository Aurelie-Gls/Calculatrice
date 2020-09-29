/* ********** Variables ********** */

/* Valeurs */

var nombre1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var nombre2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operation;
var resultat;

/* Elements*/

var boutonsChiffres = document.querySelectorAll(".nb");
var affichage = document.querySelector(".affichage");
var boutonsOperateurs = document.querySelectorAll(".ope");
var boutonResultat = document.querySelector(".egal");
var boutonNettoyage = document.querySelector(".ac");

/* ********** Fonctions ********** */

function addition(nombre1, nombre2) {
  return parseFloat(nombre1) + parseFloat(nombre2);
}

function soustraction(nombre1, nombre2) {
  return parseFloat(nombre1) - parseFloat(nombre2);
}

function multiplication(nombre1, nombre2) {
  return parseFloat(nombre1) * parseFloat(nombre2);
}

function division(nombre1, nombre2) {
  return parseFloat(nombre1) / parseFloat(nombre2);
}
// dans la fonction, le script ne lit pas le nombre en tant que tel mais en tant que string ("nombre1" ou "nombre2"), parseFloat permet donc de le lire en tant que nombre
function nettoyage() {
  nombre1 = "";
  nombre2 = ""; 
  operation = "";

  affichage.value = "0";
}

/* ********** Exécution ********** */

nettoyage();

/* Saisie d'un nombre */
boutonsChiffres.forEach(function (boutonChiffre) {
  boutonChiffre.addEventListener("click", function (e) {
    if (affichage.value == "0") {
      affichage.value = "";
    }

    if (!operation) {
      if (e.target.value == "." && nombre1.indexOf(".") != -1) {
        return;
      }

      nombre1 += e.target.value;
      affichage.value += e.target.value;
    } else {
      if (e.target.value == "." && nombre2.indexOf(".") != -1) {
        return;
      }

      nombre2 += e.target.value;
      affichage.value += e.target.value;
    }
  });
});

/* Saisie d'une operation */
boutonsOperateurs.forEach(function (boutonOperateur) {
  boutonOperateur.addEventListener("click", function (e) {
    if (nombre2 == "") {
      if (operation) {
        affichage.value = affichage.value.slice(0, -1);
      }

      operation = e.target.value;
      affichage.value += operation;
    }
  });
});

/* Calcul du resultat */
boutonResultat.addEventListener("click", function () {
  switch (operation) {
    case "+":
      resultat = addition(nombre1, nombre2);
      break;
    case "-":
      resultat = soustraction(nombre1, nombre2);
      break;
    case "*":
      resultat = multiplication(nombre1, nombre2);
      break;
    case "/":
      resultat = division(nombre1, nombre2);
      break;
  }

  affichage.value = resultat;

  nombre1 = resultat;
  nombre2 = "";
  operation = "";
});

/* Nettoyage */
boutonNettoyage.addEventListener("click", function () {
  nettoyage();
});
