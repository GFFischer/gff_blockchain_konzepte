/* Folgende Funktion funktioniert nur dann, wenn die IDs der Animationen einheitlich bezeichnet werden und zwar mit
"anim_" gefolgt von einer Zahl.
In der Variable anim_aktuell wird die Zahl gespeichert, die angibt, welche Animation aktuell sichtbar ist. (Alle
anderen Animationen sind geladen, werden aber nicht angezeigt.) Die Funktion oeffne_animation nimmt als Parameter die
Nummer der zu öffnenden Animation entgegen. Die aktuelle Animation wird auf display: none gesetzt, die zu öffnende
Animation auf display: inline. Der Variable anim_aktuell wird die Nummer der zu öffnenden Animation zugewiesen.

Beachte: Im Original ist "display: inline" vielleicht nicht korrekt, falls das rekursive Design mit flexbox realisiert
wird! */

var anim_aktuell = 0;

function oeffne_animation(nummer_oeffnen) {
    oeffne_ID = "anim_" + nummer_oeffnen;
    schliesse_ID = "anim_" + anim_aktuell;
    document.getElementById(oeffne_ID).style="display: inline";
    if (nummer_oeffnen != anim_aktuell) {
        document.getElementById(schliesse_ID).style="display: none";
    }
    anim_aktuell = nummer_oeffnen;
}
