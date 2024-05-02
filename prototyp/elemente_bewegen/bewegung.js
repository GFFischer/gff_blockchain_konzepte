function bewegeObjekt(objektID, unterbrechungID, abbruchID, neustartID, startpos_x, startpos_y, tempo_x, tempo_y, zielpos_x, zielpos_y, intervall) {
    if (tempo_x != 0 || tempo_y != 0) {
        var objekt = document.getElementById(objektID);
        function starteBewegung() {
            document.getElementById(unterbrechungID).addEventListener("click", function() {clearInterval(bewegung)});
            document.getElementById(abbruchID).addEventListener("click", function() {clearInterval(bewegung)});
            document.getElementById(neustartID).addEventListener("click", function() {clearInterval(bewegung)});
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
        var bewegung = setInterval(starteBewegung, intervall);
    }  
}

const verzoegerung = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function position_x(objektID) {
    var e = document.getElementById(objektID).style.left.lastIndexOf("e");
    return parseFloat(document.getElementById(objektID).style.left.substring(0, e));
}

function position_y(objektID) {
    var e = document.getElementById(objektID).style.top.lastIndexOf("e");
    return parseFloat(document.getElementById(objektID).style.top.substring(0, e));
}