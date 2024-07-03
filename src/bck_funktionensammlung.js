/* Funktion für die Navigation - der aktuell sichtbare div-Kontainer wird verborgen, der div-Kontainer mit der ID
"anim_" + eingegebener Parameter wird sichtbar gemacht. */

var animAktuell = 0;

function oeffneAnimation(nummer) {
    oeffneID = "anim_" + nummer;
    schliesseID = "anim_" + animAktuell;
    document.getElementById(oeffneID).style="display: inline";
    if (nummer != animAktuell) {
        document.getElementById(schliesseID).style="display: none";
    }
    animAktuell = nummer;
}

/* Funktion für das Navigationsmenü - die Buttons der den einzelnen Animationen untergeordneten Teil-Animationen 
werden ausgeklappt, die bisher sichtbaren Buttons der untergeordneten Teil-Animationen werden auf unsichtbar
gesetzt */

function ausklappenMenu(oeffneID) {
    document.getElementById(oeffneID).style = 'visibility: visible; height: auto';
    var pruefID = "anim";
    for (var i = 1; i <= 7; i++) {
        pruefID = "anim" + i + "_menu";
        if (pruefID != oeffneID) {
            document.getElementById(pruefID).style = 'visibility: hidden; height: 0em';
        }
    }
}

/* Funktionen für das Umrechnen von Zahlen aus den und in die verschiedenen Zahlensysteme (binär, dezimal, 
hexadezimal) sowie für das Umrechnen einer Dezimalzahl in einen achtstelligen hexadezimalen Hashwert mit führenden
Nullen und das Ergänzen von führenden Nullen bei zweistelligen und achtstelligen Zahlen*/

function umwandleInDez(zahl, basis) {
    return parseInt(zahl, basis);
}

function umwandleDez(dezZahl, basis) {
    return dezZahl.toString(basis);
}

function umwandleDezInHashwert(dezZahl) {
    dezZahl = dezZahl % 4294967295;
    var temp = umwandleDez(dezZahl, 16);
    laenge = temp.length;
    if (laenge < 8) {
        for (var i = 0; i < (8 - laenge); i++) {
            temp = "0" + temp;
        }
    }
    return temp;
}

function ergaenzeNullen2(wert) {
    temp = wert;
    if (wert.length < 2) {
        for (var i = 0; i < (2 - wert.length); i++) {
            temp = "0" + temp;
        }
    }
    return temp;
}

function ergaenzeNullen8(wert) {
    temp = wert;
    if (wert.length < 8) {
        for (var i = 0; i < (8 - wert.length); i++) {
            temp = "0" + temp;
        }
    }
    return temp;
}

function umwandleHexInBin(hexZahl) {
    return umwandleInDez(hexZahl, 16).toString(2);
}

function umwandleBinInHex(binZahl) {
    return umwandleInDez(binZahl, 2).toString(16);
}

/* Funktionen für das Prüfen von Eingaben des Users (ausschliesslich Text bzw. Ziffern? Ziffer von 1 - 3?) */

function pruefeEingabeText(eingabe) {
    var vorgabe = /^[\w\.\,\s\?\!\ö\ä\ü\Ö\Ä\Ü\ß]+$/;
    return vorgabe.test(eingabe);
}

function pruefeEingabeZahl(eingabe) {
    var vorgabe = /^\d+$/;
    return vorgabe.test(eingabe);
}

function pruefeEingabe1bis3(eingabe) {
    var vorgabe = /^[123]$/;
    return vorgabe.test(eingabe);
}

/* Funktion, die einen Zeitstempel inklusive Millisekunden als String zurückgibt */

function zeitstempel() {
    var a = new Date();
    var tag = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
    var monat = a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1;
    var jahr = a.getFullYear();
    var stunde = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
    var minute = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    var sekunde = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
    var millisek = a % 1000 < 100 ? "0" + a % 1000 : a % 1000;
    return (tag + "." + monat + "." + jahr + " " + stunde + ":" + minute + ":" + sekunde + "," + millisek);
}

/* Funktion, die mithilfe der SHA256-Funktion aus der Datei hash.js einen achtstelligen Hashwert als String
zurückgibt */

function berechneHash(eingabe) {
    var hashwert = new Hashes.SHA256().hex(eingabe).toLowerCase().substring(0, 8);
    return hashwert;
}

/* Funktion, die in einer Schleife schrittweise die Gleichung "basis hoch exp modulo n" berechnet. Sie 
nimmt ganze Dezimalzahlen entgegen und gibt eine ganze Dezimalzahl zurück */

function berechneSignatur(basis, exp, n) {
    var ergebnis = 1;
    for (var i = 0; i < exp; i++) {
        ergebnis *= basis;
        ergebnis = ergebnis % n;
    }
    return ergebnis;
}

/* Funktion für das Animieren (Bewegen) eines html-Elements inkl. Hilfsfunktionen, welche die X- und Y-Positionen
eines html-Elements als reine Zahl zurückgeben*/

function bewegeObjekt(objektID, unterbrechungID, abbruchID, neustartID, startposX, startposY, tempoX, tempoY, 
                      zielposX, zielposY) {

    if (tempoX != 0 || tempoY != 0) {
        var objekt = document.getElementById(objektID);
        function starteBewegung() {
            document.getElementById(unterbrechungID).addEventListener("click", function() {clearInterval(bewegung)});
            document.getElementById(abbruchID).addEventListener("click", function() {clearInterval(bewegung)});
            document.getElementById(neustartID).addEventListener("click", function() {clearInterval(bewegung)});
            objekt.style.left = startposX + "em";
            objekt.style.top = startposY + "em";
            startposX += tempoX;
            startposY += tempoY;
            if (tempoX > 0 && startposX >= zielposX) {
                clearInterval(bewegung);
            }
            else if (tempoX < 0 && startposX <= zielposY) {
                clearInterval(bewegung);
            }
            else if (tempoY > 0 && startposY >= zielposY) {
                clearInterval(bewegung);
            }
            else if (tempoY < 0 && startposY <= zielposY) {
                clearInterval(bewegung);
            }
        }
        var bewegung = setInterval(starteBewegung, 40);
    }  
}

function positionX(objektID) {
    var e = document.getElementById(objektID).style.left.lastIndexOf("e");
    return parseFloat(document.getElementById(objektID).style.left.substring(0, e));
}

function positionY(objektID) {
    var e = document.getElementById(objektID).style.top.lastIndexOf("e");
    return parseFloat(document.getElementById(objektID).style.top.substring(0, e));
}

/* Konstante, die für die Funktion setTimeOut() benötigt wird, um die Ausführung eines Skripts um eine als
Parameter eingegebene Zahl an Millisekunden zu unterbrechen */

const verzoegerung = (delay) => new Promise((resolve) => setTimeout(resolve, delay));