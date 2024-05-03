/* Die Funktion zufallsindizes wählt zufällig eine bestimmte Anzahl (Paramweter anzahl) an zufälligen Indizes eines 
Arrays (Parameter array) und gibt diese unsortiert als neues Array zurück. Über diese Indizes kann dann auf die 
entsprechenden Elemente in dem als Parameter übergebenen Array zugegriffen und so eine zufällige Auswahl von Werten
aus einem Array von Werten realisert werden. Durch die if-Anweisung wird sichergestellt, dass kein Index im 
zurückgegebenen Array mehrfach vorkommt. */

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

/* In der Variable name_neu wird ein Wert gespeichert, mit dem der neue Knoten im Graphen benannt wird, falls der User
keinen Wert ins Formular eingibt oder bisher eingegeben hat. Das Array name_auswahl ist ein Beispiel für eine Auswahl
an Werten, um damit die Knoten in der Animation zufällig zu benennen (Fans des FC Bayern dürften die Namen bekannt 
vorkommen). In der Variable indizes_fuer_namen wird die Funktion zufallsindizes beispiehaft getestet.
Die Funktion getName würde den Code bei der Benennung der einzelnen Knoten verkürzen, müsste im Original dann aber
als zweiten Parameter den Namen des Arrays, aus dem die Werte (in diesem Fall: die Namen) kommen, und als dritten
Parameter den Namen des Arrays, in dem sich die Indizes der zufällig ausgewählten Werte befinden, bekommen. Ob sie
dann noch einen relevanten Vorteil bringt gegenüber der Art und Weise, wie weiter unten die Namen für die Knoten 2 
bis 10 gefunden werden, erscheint fraglich. */

var name_neu = "Satoshi";
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