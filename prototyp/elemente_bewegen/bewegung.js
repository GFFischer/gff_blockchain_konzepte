/* Die Funktion bewegeObjekt ist dafür da, ein einzelnes html-Element zu bewegen von einer Startposition (definiert
durch starpos_x und startpos_y), zu einer Zielposition (definiert durch zielpos_x und zielpos_y [jeweils Zahlen, die 
in der Funktion mit der Masseinheit em ergänzt werden]).
Die Geschwindigkeit wird durch tempo_x (horizontale Geschwindigkeit) und tempo_y (vertikale Geschwindigkeit) bestimmt,
jeweils Zahlen, die angeben, um wieviel Masseinheiten die Position des Elements pro Intervall nach rechts (horizontal)
und nach unten (vertikal) verschoben werden soll. Negative Zahlen bedeuten eine Bewgung nach links (horizontal) bzw.
nach oben (vertikal).
Das Intervall, also die Zeit in Millisekunden, nach der die Position des Elements verändert wird, wird über intervall
definiert.
Das Element wird durch die objektID definiert, die Buttons, mit denen die Bewegung abgebrochen werden kann, sind mit
unterbrechungID, abbruchID und neustartID definiert.
Die Bewegung endet durch das Drücken eines Buttons (Unterbrechung, Abbruch, Neustart) oder dann, wenn eine der beiden
Zielpositionen (horizontal oder vertikal) erreicht (oder durch den letzten Intervall-Schritt gegebenenfalls 
überschritten worden ist).
*/

function bewegeObjekt(objektID, unterbrechungID, abbruchID, neustartID, startpos_x, startpos_y, tempo_x, tempo_y, 
                      zielpos_x, zielpos_y) {
    if (tempo_x != 0 || tempo_y != 0) {
        var objekt = document.getElementById(objektID);
        function starteBewegung() {
            document.getElementById(unterbrechungID).addEventListener("click", function() {clearInterval(bewegung)});
            document.getElementById(abbruchID).addEventListener("click", function() {clearInterval(bewegung)});
            document.getElementById(neustartID).addEventListener("click", function() {clearInterval(bewegung);});
            objekt.style.left = startpos_x + "em";
            objekt.style.top = startpos_y + "em";
            startpos_x += tempo_x;
            startpos_y += tempo_y;
            if (tempo_x > 0 && startpos_x >= zielpos_x) {
                clearInterval(bewegung);
            }
            else if (tempo_x < 0 && startpos_x <= zielpos_x) {
                clearInterval(bewegung);
            }
            else if (tempo_y > 0 && startpos_y >= zielpos_y) {
                clearInterval(bewegung);
            }
            else if (tempo_y < 0 && startpos_y <= zielpos_y) {
                clearInterval(bewegung);
            }
        }
        var bewegung = setInterval(starteBewegung, 35);
    }  
}

/* Die Konstanten verzoegerung ist eine Anweisung, die die Ausführung eines Skripts um so viele Millisekunden wie im 
Parameter delay angegeben unterbricht.*/

const verzoegerung = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/* Die Funktionen position_x und position_y geben für html-Elemente, die absolut positioniert sind und deren Position
in der Masseinheit em angegebenen ist, die Werte left (position_x) und top (position_y) als Zahlen zurück. */

function position_x(objektID) {
    var e = document.getElementById(objektID).style.left.lastIndexOf("e");
    return parseFloat(document.getElementById(objektID).style.left.substring(0, e));
}

function position_y(objektID) {
    var e = document.getElementById(objektID).style.top.lastIndexOf("e");
    return parseFloat(document.getElementById(objektID).style.top.substring(0, e));
}