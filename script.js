let nbr = +prompt("Entrez un nombre");
let valeur =  document.getElementById("compte");

if (nbr === parseInt(nbr)) {
    while (nbr >= 0) {
        valeur.innerHTML += nbr + "<br>";
        nbr--;
    }
}

else {
    alert("Met un nombre!")
}