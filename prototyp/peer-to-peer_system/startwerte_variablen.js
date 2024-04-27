function zufallsindizes(anzahl, array) {
    var indizes = new Array(0);
    for (var i = 0; i < anzahl; i++) {
        var a = i - 1;
        while (a < i) {
            var idx = Math.floor(Math.random() * array.length);
            if (!indizes.includes(idx)) {
                indizes.push(idx);
                a += 1;
            }
        }
    }
    return indizes;
};

var name_neu = "Joschi";
var name_auswahl = ["Manuel", "Alphonso", "Eric", "Matthijs", "Joshua", "Aleksandar", "Leon", "Jamal", "Thomas",
    "Leroy", "Harry"];
var indizes_fuer_namen = zufallsindizes(10, name_auswahl);

function getName(index) {
    return name_auswahl[indizes_fuer_namen[index]];
}

var name_knoten1 = getName(0);
var name_knoten2 = name_auswahl[indizes_fuer_namen[1]];
var name_knoten3 = name_auswahl[indizes_fuer_namen[2]];
var name_knoten4 = name_auswahl[indizes_fuer_namen[3]];
var name_knoten5 = name_auswahl[indizes_fuer_namen[4]];
var name_knoten6 = name_auswahl[indizes_fuer_namen[5]];
var name_knoten7 = name_auswahl[indizes_fuer_namen[6]];
var name_knoten8 = name_auswahl[indizes_fuer_namen[7]];
var name_knoten9 = name_auswahl[indizes_fuer_namen[8]];
var name_knoten10 = name_auswahl[indizes_fuer_namen[9]];