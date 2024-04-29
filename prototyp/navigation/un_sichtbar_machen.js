var anim_aktuell = 1;

function oeffne_animation(nummer_oeffnen, nummer_schliessen) {
    oeffne_ID = "anim_" + nummer_oeffnen;
    schliesse_ID = "anim_" + nummer_schliessen;
    document.getElementById(oeffne_ID).style="display: inline";
    if (nummer_oeffnen != nummer_schliessen) {
        document.getElementById(schliesse_ID).style="display: none";
    }
    anim_aktuell = nummer_oeffnen;
}
