let rebour = setInterval(compte, 1000);
let nbr = 6;
function compte() {
    document.getElementById("demo").innerHTML = nbr;
    nbr--;
    if (nbr <0) clearInterval(1);
}