let rebour = setInterval(compte, 1000);
let nbr = prompt("entrez un nombre");

function compte() {
    document.getElementById("compte").innerHTML = nbr;
    nbr--;
    if (nbr <0) {
        clearInterval(1);
    }
}