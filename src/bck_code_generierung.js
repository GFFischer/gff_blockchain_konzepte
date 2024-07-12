function a1b_inhaltBlock3() {
    a1b_block3Hash = berechneHash("Block 3" + a1a_block3Inhalt);
    document.getElementById("a1b_block3Hash").innerHTML = a1b_block3Hash;
    document.getElementById("a1b_block3Inhalt").innerHTML = a1a_block3Inhalt;
}

function a1c_inhalteBloecke() {
    a1b_block3Hash = berechneHash("Block 3" + a1a_block3Inhalt);
    document.getElementById("a1c_block3Hash").innerHTML = a1b_block3Hash;
    document.getElementById("a1c_block3Inhalt").innerHTML = a1a_block3Inhalt;
    a1b_block4Hash = berechneHash("Block 4" + a1b_block4Inhalt);
    document.getElementById("a1c_block4Hash").innerHTML = a1b_block4Hash;
    document.getElementById("a1c_block4Inhalt").innerHTML = a1b_block4Inhalt;
    document.getElementById("a1c_block3HashVorh").innerHTML = a1b_block3Hash;
    document.getElementById("a1c_block4HashVorh").innerHTML = a1b_block4Hash;
    document.getElementById('a1c_inputHashBlock5Vorh').value = a1b_block4Hash;
}

function a1d_inhalteBloecke() {
    a1b_block3Hash = berechneHash("Block 3" + a1a_block3Inhalt);
    document.getElementById("a1d_block3Hash").innerHTML = a1b_block3Hash;
    document.getElementById("a1d_block3InhaltText").innerHTML = a1a_block3Inhalt;
    a1b_block4Hash = berechneHash("Block 4" + a1b_block4Inhalt);
    document.getElementById("a1d_block4Hash").innerHTML = a1b_block4Hash;
    document.getElementById("a1d_block4InhaltText").innerHTML = a1b_block4Inhalt;
    document.getElementById("a1d_block3HashVorh").innerHTML = a1b_block3Hash;
    document.getElementById("a1d_block4HashVorh").innerHTML = a1b_block4Hash;
    a1c_block5Hash = berechneHash("Block 5" + a1c_block5Inhalt);
    document.getElementById("a1d_block5Hash").innerHTML = a1c_block5Hash;
    document.getElementById("a1d_block5InhaltText").innerHTML = a1c_block5Inhalt;
}

/* Die folgende Möglichkeit ist eine Lösung, in der die Elemente mit der CSS-Eigenschaft transition bewegt
werden, indem der Wert von margin-top verändert wird. Diese Lösung wäre verhältnismässig elegant, allerdings
sehe ich dabei keine Möglichkeit, die Animation zu unterbrechen, nach der Unterbrechung wieder fortzusetzen
oder abzubrechen.

async function a1d_bewegteElemente() {
    document.getElementById('a1d_block1Inhalt').style = 'margin-top: 10em; transition: all 2s linear 0s';
    document.getElementById('a1d_block1').style = 'position: absolute; left: 2em; top: 5em; height: 16em';
    await verzoegerung(2000);
    document.getElementById('a1d_block1HashInhalt').style =
        'position: absolute; left: 2.5em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil1').style = 
        'position: absolute; top:20.8em; left: 7.5em; height: 6em; visibility: visible';
    await verzoegerung(1000);
    document.getElementById('a1d_block2Inhalt').style = 'margin-top: 10em; transition: all 2s linear 0s';
    document.getElementById('a1d_block2').style = 'position: absolute; left: 15.5em; top: 5em; height: 16em';
    await verzoegerung(2000);
    document.getElementById('a1d_block2HashInhalt').style =
        'position: absolute; left: 16em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil2').style = 
        'position: absolute; top:20.8em; left: 21em; height: 6em; visibility: visible';
    await verzoegerung(1000);
    document.getElementById('a1d_block3Inhalt').style = 'margin-top: 10em; transition: all 2s linear 0s';
    document.getElementById('a1d_block3').style = 'position: absolute; left: 29em; top: 5em; height: 16em';
    await verzoegerung(2000);
    document.getElementById('a1d_block3HashInhalt').style =
        'position: absolute; left: 29.5em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil3').style = 
        'position: absolute; top:20.8em; left: 34.5em; height: 6em; visibility: visible';
    await verzoegerung(1000);
    document.getElementById('a1d_block4Inhalt').style = 'margin-top: 10em; transition: all 2s linear 0s';
    document.getElementById('a1d_block4').style = 'position: absolute; left: 42.5em; top: 5em; height: 16em';
    await verzoegerung(2000);
    document.getElementById('a1d_block4HashInhalt').style =
        'position: absolute; left: 43em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil4').style = 
        'position: absolute; top:20.8em; left: 48em; height: 6em; visibility: visible';
    await verzoegerung(1000);
    document.getElementById('a1d_block5Inhalt').style = 'margin-top: 10em; transition: all 2s linear 0s';
    document.getElementById('a1d_block5').style = 'position: absolute; left: 56em; top: 5em; height: 16em';
    await verzoegerung(2000);
    document.getElementById('a1d_block5HashInhalt').style =
        'position: absolute; left: 56.5em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil5').style = 
        'position: absolute; top:20.8em; left: 61em; height: 6em; visibility: visible';
    document.getElementById('a1d_infoimg1').style = 'visibility: visible; position: absolute; top: 34.5em; left: 60em';
    document.getElementById('a1d_hintergButton').style = 
        'visibility: visible; position: absolute; top: 36.5em; left: 2em';
} */

var a1d_verstricheneZeit = 0;
var a1d_delay = 0

async function a1d_bewegteBloecke() {
    
    var posX_Block1 = positionX("a1d_block1Inhalt");
    var posY_Block1 = positionY("a1d_block1Inhalt");
    var posX_Block2 = positionX("a1d_block2Inhalt");
    var posY_Block2 = positionY("a1d_block2Inhalt");
    var posX_Block3 = positionX("a1d_block3Inhalt");
    var posY_Block3 = positionY("a1d_block3Inhalt");
    var posX_Block4 = positionX("a1d_block4Inhalt");
    var posY_Block4 = positionY("a1d_block4Inhalt");
    var posX_Block5 = positionX("a1d_block5Inhalt");
    var posY_Block5 = positionY("a1d_block5Inhalt");
    var a1d_unterbrochen = false;

    document.getElementById("a1d_abbruch").addEventListener("click", () => {
        a1d_unterbrochen = true;
        a1d_verstricheneZeit = 0;
        document.getElementById("a1d_block1Inhalt").style="position: absolute; left: 2.5em; top: 26.4em;";
        document.getElementById("a1d_block2Inhalt").style="position: absolute; left: 16em; top: 26.4em;";
        document.getElementById("a1d_block3Inhalt").style="position: absolute; left: 29.5em; top: 26.4em;";
        document.getElementById("a1d_block4Inhalt").style="position: absolute; left: 43em; top: 26.4em;";
        document.getElementById("a1d_block5Inhalt").style="position: absolute; left: 56.5em; top: 26.4em;";
        document.getElementById("a1d_pfeil1").style = 
            "position: absolute; top:20.8em; left: 7.5em; height: 6.5em; visibility: visible";
        document.getElementById("a1d_pfeil2").style = 
            "position: absolute; top:20.8em; left: 21em; height: 6.5em; visibility: visible";
        document.getElementById("a1d_pfeil3").style = 
            "position: absolute; top:20.8em; left: 34.5em; height: 6.5em; visibility: visible";
        document.getElementById("a1d_pfeil4").style =
            "position: absolute; top:20.8em; left: 48em; height: 6.5em; visibility: visible";
        document.getElementById("a1d_pfeil5").style = 
            "position: absolute; top:20.8em; left: 61em; height: 6.5em; visibility: visible";
        document.getElementById("a1d_block1HashInhalt").style = 
            "position: absolute; left: 2.5em; top: 16.4em; visibility: visible";
        document.getElementById("a1d_block2HashInhalt").style =
            "position: absolute; left: 16em; top: 16.4em; visibility: visible";
        document.getElementById("a1d_block3HashInhalt").style =
            "position: absolute; left: 29.5em; top: 16.4em; visibility: visible";
        document.getElementById("a1d_block4HashInhalt").style =
            "position: absolute; left: 43em; top: 16.4em; visibility: visible";
        document.getElementById("a1d_block5HashInhalt").style =
            "position: absolute; left: 56.5em; top: 16.4em; visibility: visible";
        document.getElementById('a1d_block1').style.height = '16em';
        document.getElementById('a1d_block2').style.height = '16em';
        document.getElementById('a1d_block3').style.height = '16em';
        document.getElementById('a1d_block4').style.height = '16em';
        document.getElementById('a1d_block5').style.height = '16em';
        document.getElementById("a1d_infoimg1").style = 
            "visibility: visible; position: absolute; top: 34.5em; left: 60em;"
        document.getElementById("a1d_abbruch").style="visibility: hidden";
        document.getElementById("a1d_unterbrechung").style="visibility: hidden";
        document.getElementById("a1d_fortsetzung").style="visibility: hidden";
        document.getElementById("a1d_neustart").style=
            "position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a1d_hintergButton").style =
            "visibility: visible; position: absolute; top: 36.5em; left: 2em"});

    document.getElementById("a1d_unterbrechung").addEventListener("click", () => {
        a1d_unterbrochen = true;
        document.getElementById("a1d_fortsetzung").style="position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a1d_fortsetzung").addEventListener("click", () => {
        a1d_unterbrochen = false;});

    document.getElementById("a1d_neustart").addEventListener("click", () => {
        a1d_unterbrochen = true;});

    bewegeObjekt("a1d_block1Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block1, posY_Block1, 0, 0.25, 0, 26.5);
    document.getElementById('a1d_block1').style.height = '16em';
    if (a1d_verstricheneZeit < 2500) {a1d_verstricheneZeit += 2500; a1d_delay = 2500;}
    else {a1d_delay = 0;}
    await verzoegerung(a1d_delay);
    document.getElementById('a1d_block1HashInhalt').style =
        'position: absolute; left: 2.5em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil1').style = 
        'position: absolute; top:20.8em; left: 7.5em; height: 6.5em; visibility: visible';
    if (a1d_verstricheneZeit < 3000) {a1d_verstricheneZeit += 500; a1d_delay = 500;}
    else {a1d_delay = 0;}
        await verzoegerung(a1d_delay);
    if (!a1d_unterbrochen) {
        bewegeObjekt("a1d_block2Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block2, posY_Block2, 0, 0.25, 0, 26.5);
        document.getElementById('a1d_block2').style.height = '16em';
        if (a1d_verstricheneZeit < 5500) {a1d_verstricheneZeit += 2500; a1d_delay = 2500;}
        else {a1d_delay = 0;}
        await verzoegerung(a1d_delay);
        document.getElementById('a1d_block2HashInhalt').style =
            'position: absolute; left: 16em; top: 16.4em; visibility: visible';
        document.getElementById('a1d_pfeil2').style = 
            'position: absolute; top:20.8em; left: 21em; height: 6.5em; visibility: visible';
        if (a1d_verstricheneZeit < 6000) {a1d_verstricheneZeit += 500; a1d_delay = 500;}
        else {a1d_delay = 0;}
        await verzoegerung(a1d_delay);
        if (!a1d_unterbrochen) {
            bewegeObjekt("a1d_block3Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block3, posY_Block3, 0, 0.25, 0, 26.5);
            document.getElementById('a1d_block3').style.height = '16em';
            if (a1d_verstricheneZeit < 8500) {a1d_verstricheneZeit += 2500; a1d_delay = 2500;}
            else {a1d_delay = 0;}
            await verzoegerung(a1d_delay);
            document.getElementById('a1d_block3HashInhalt').style =
                'position: absolute; left: 29.5em; top: 16.4em; visibility: visible';
            document.getElementById('a1d_pfeil3').style = 
                'position: absolute; top:20.8em; left: 34.5em; height: 6.5em; visibility: visible';
            if (a1d_verstricheneZeit < 9000) {a1d_verstricheneZeit += 500; a1d_delay = 500;}
            else {a1d_delay = 0;}
            await verzoegerung(a1d_delay);
            if (!a1d_unterbrochen) {
                bewegeObjekt("a1d_block4Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block4, posY_Block4, 0, 0.25, 0, 26.5);
                document.getElementById('a1d_block4').style.height = '16em';
                if (a1d_verstricheneZeit < 11500) {a1d_verstricheneZeit += 2500; a1d_delay = 2500;}
                else {a1d_delay = 0;}
                await verzoegerung(a1d_delay);
                document.getElementById('a1d_block4HashInhalt').style =
                    'position: absolute; left: 43em; top: 16.4em; visibility: visible';
                document.getElementById('a1d_pfeil4').style = 
                    'position: absolute; top:20.8em; left: 48em; height: 6.5em; visibility: visible';
                if (a1d_verstricheneZeit < 12000) {a1d_verstricheneZeit += 500; a1d_delay = 500;}
                else {a1d_delay = 0;}
                await verzoegerung(a1d_delay);
                if (!a1d_unterbrochen) {
                    bewegeObjekt("a1d_block5Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block5, posY_Block5, 0, 0.25, 0, 26.5);
                    document.getElementById('a1d_block5').style.height = '16em';
                    if (a1d_verstricheneZeit < 14500) {a1d_verstricheneZeit += 2500; a1d_delay = 2500;}
                    else {a1d_delay = 0;}
                    await verzoegerung(a1d_delay);
                    document.getElementById('a1d_block5HashInhalt').style =
                        'position: absolute; left: 56.5em; top: 16.4em; visibility: visible';
                    document.getElementById('a1d_pfeil5').style = 
                        'position: absolute; top:20.8em; left: 61em; height: 6.5em; visibility: visible';
                    if (!a1d_unterbrochen) {
                        document.getElementById("a1d_infoimg1").style="visibility: visible; position: absolute; top: 34.5em; left: 60em;";
                        document.getElementById("a1d_abbruch").style="visibility: hidden";
                        document.getElementById("a1d_unterbrechung").style="visibility: hidden";
                        document.getElementById("a1d_neustart").style="position: absolute; right: 2em; top: 1em; visibility: visible";
                        document.getElementById("a1d_hintergButton").style ="visibility: visible; position: absolute; top: 36.5em; left: 2em"
                        a1d_verstricheneZeit = 0;
                    }
                }
            }
        }
    }
}

function a2b_nameKnotenNeu() {
    document.getElementById("a2b_knotenNeuInhalt").innerHTML = a2a_nameKnotenNeu;
    document.getElementById('a2b_knotenNeu').innerHTML = '<br> <b>' + a2a_nameKnotenNeu + '</b> <br>' + 
        a2b_adressenKnoten[0] + '<br>' + a2b_adressenKnoten[1] + '<br>' + a2b_adressenKnoten[2];
}

function a2b_aendereAnzahlSchluessel(zahl) {
    a2b_adressenKnoten[1] = "K2: " + getAdresse(1);
    a2b_adressenKnoten[2] = "K3: " + getAdresse(2);
    a2b_privateSchluessel[1] = "K2<sub>priv</sub>: d=" + adressenAuswahl[indizesFuerAdressen[1]].d;
    a2b_privateSchluessel[2] = "K3<sub>priv</sub>: d=" + adressenAuswahl[indizesFuerAdressen[2]].d;
    if (zahl == 1) {
        a2b_adressenKnoten[1] = "";
        a2b_adressenKnoten[2] = "";
        a2b_privateSchluessel[1] = "";
        a2b_privateSchluessel[2] = "";
    } else if (zahl == 2) {
        a2b_adressenKnoten[2] = "";
        a2b_privateSchluessel[2] = "";
    }
}

function a2b_schluessel() {
    var htmlcode = "Private Schluessel: <br>" + a2b_privateSchluessel[0];
    if (a2b_privateSchluessel[1] != "") {
        htmlcode += "<br>" + a2b_privateSchluessel[1];
    }
    if (a2b_privateSchluessel[2] != "") {
        htmlcode += "<br>" + a2b_privateSchluessel[2];
    }
    return htmlcode; 
}

function a2c_inhaltKnotenNeu() {
    document.getElementById('a2c_privateSchluessel').innerHTML = a2b_schluessel();
    document.getElementById('a2c_knotenNeu').innerHTML = '<br> <b>' + a2a_nameKnotenNeu + '</b> <br>' + 
        a2b_adressenKnoten[0] + '<br>' + a2b_adressenKnoten[1] + '<br>' + a2b_adressenKnoten[2];
}

async function a2c_verschwindendeNamen() {
    document.getElementById('a2c_knotenNeu').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[0] + '<br>' + a2b_adressenKnoten[1] + '<br>' + a2b_adressenKnoten[2];
    await verzoegerung(500);
    document.getElementById('a2c_knoten1').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[3] + '<br>' + a2b_adressenKnoten[4] + '<br>' + a2b_adressenKnoten[5];
    await verzoegerung(500);
    document.getElementById('a2c_knoten2').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[6] + '<br>' + a2b_adressenKnoten[7] + '<br>' + a2b_adressenKnoten[8];
    await verzoegerung(500);
    document.getElementById('a2c_knoten3').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[9] + '<br>' + a2b_adressenKnoten[10] + '<br>' + a2b_adressenKnoten[11];
    await verzoegerung(500);
    document.getElementById('a2c_knoten4').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[12] + '<br>' + a2b_adressenKnoten[13] + '<br>' + a2b_adressenKnoten[14];
    await verzoegerung(500);
    document.getElementById('a2c_knoten5').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[15] + '<br>' + a2b_adressenKnoten[16] + '<br>' + a2b_adressenKnoten[17];
    await verzoegerung(500);
    document.getElementById('a2c_knoten6').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[18] + '<br>' + a2b_adressenKnoten[19] + '<br>' + a2b_adressenKnoten[20];
    await verzoegerung(500);
    document.getElementById('a2c_knoten7').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[21] + '<br>' + a2b_adressenKnoten[22] + '<br>' + a2b_adressenKnoten[23];
    await verzoegerung(500);
    document.getElementById('a2c_knoten8').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[24] + '<br>' + a2b_adressenKnoten[25] + '<br>' + a2b_adressenKnoten[26];
    await verzoegerung(500);
    document.getElementById('a2c_knoten9').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[27] + '<br>' + a2b_adressenKnoten[28] + '<br>' + a2b_adressenKnoten[29];
    await verzoegerung(500);
    document.getElementById('a2c_knoten10').innerHTML = '<br> <br>' + 
        a2b_adressenKnoten[30] + '<br>' + a2b_adressenKnoten[31] + '<br>' + a2b_adressenKnoten[32];
    await verzoegerung(500);
    document.getElementById('a2c_infoimg1').style = 'visibility: visible; position: absolute; top: 39.5em; left: 5em';
    document.getElementById('a2c_hintergButton').style = 
        'visibility: visible; position: absolute; top: 44.5em; left: 2em';
}

function a3a_tabelleAdressenKnotenNeu() {
    var htmlCode = "<table class='tabelle tabEigeneAdressen'><tr><th class='tabFeldTitel'>Eigene Adressen</th>\
    <th class='tabFeldTitel'>Key privat</th><th class='tabFeldTitel'>Kontostand</th></tr>";
    for (var i = 0; i < 3; i++) {
        if (a2b_privateSchluessel[i] != "") {
            htmlCode += "<tr><td class='tabFeld'>" + getAdresse(i) + "</td><td class='tabFeld'>" 
                + a2b_privateSchluessel[i].substr(19,6) + "</td><td class='tabFeld' id='guth" + i +"'></td></tr>";
        } 
    }
    htmlCode += "</table>";
    document.getElementById("a3a_tabelleEigeneAdressen").innerHTML = htmlCode;
}

function a3a_eingabeGuthaben() {
    var htmlCode = "<p> Gib die Kontostände für deine Adressen ein: <br> (0 bis 999 SiC) </p>";
    for (var i = 0; i < 3; i++) {
        if (a2b_privateSchluessel[i] != "") {
            htmlCode += "<p><label>Adresse " + (i + 1) + ":&nbsp&nbsp&nbsp<input id='kontostand" + (i + 1) + "' \
            type='text' maxlength='3' style='width: 3em'></label>&nbsp SiC</p>"
        }
    }
    if (a2b_privateSchluessel[1] == "") {
        htmlCode += "<button id='a3a_formularButton' class='formularbutton' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                a3a_guthabenAdressen[0] = wert1;\
                document.getElementById(`guth0`).innerHTML = wert1 + ` SiC`;\
                document.getElementById(`a3a_formular`).style=`visibility: hidden`;\
                document.getElementById(`a3a_infoimg1`).style=\
                    `visibility: visible; position: absolute; top: 14em; left: 13em`;\
                document.getElementById(`a3a_hintergButton`).style=\
                    `visibility: visible; position: absolute; top: 26.5em; left: 2em`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;\
            }'>OK</button>";
    } else if (a2b_privateSchluessel[2] == "") {
        htmlCode += "<button id='a3a_formularButton' class='formularbutton' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            var wert2 = document.getElementById(`kontostand2`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                a3a_guthabenAdressen[0] = wert1;\
                document.getElementById(`guth0`).innerHTML = wert1 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert2)) {\
                a3a_guthabenAdressen[1] = wert2;\
                document.getElementById(`guth1`).innerHTML = wert2 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert1) && pruefeEingabeZahl(wert2)) {\
                document.getElementById(`a3a_formular`).style=`visibility: hidden`;\
                 document.getElementById(`a3a_infoimg1`).style=\
                    `visibility: visible; position: absolute; top: 14em; left: 13em`;\
                document.getElementById(`a3a_hintergButton`).style=\
                    `visibility: visible; position: absolute; top: 26.5em; left: 2em`;\
            }'>OK</button>";
    } else {
        htmlCode += "<button id='a3a_formularbutton' class='formularbutton' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            var wert2 = document.getElementById(`kontostand2`).value;\
            var wert3 = document.getElementById(`kontostand3`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                a3a_guthabenAdressen[0] = wert1;\
                document.getElementById(`guth0`).innerHTML = wert1 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert2)) {\
                a3a_guthabenAdressen[1] = wert2;\
                document.getElementById(`guth1`).innerHTML = wert2 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert3)) {\
                a3a_guthabenAdressen[2] = wert3;\
                document.getElementById(`guth2`).innerHTML = wert3 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert1) && pruefeEingabeZahl(wert2) && pruefeEingabeZahl(wert3)) {\
                document.getElementById(`a3a_formular`).style=`visibility: hidden`;\
                document.getElementById(`a3a_infoimg1`).style=\
                    `visibility: visible; position: absolute; top: 14em; left: 13em`;\
                document.getElementById(`a3a_hintergButton`).style=\
                    `visibility: visible; position: absolute; top: 26.5em; left: 2em`;\
            }'>OK</button>";
    }
    document.getElementById("a3a_formular").innerHTML = htmlCode;
}

function a3b_tabelleAdressenKnotenNeuMitGuthaben() {
    var htmlCode = "<table class='tabelle tabEigeneAdressen'><tr><th class='tabFeldTitel'>Eigene Adressen</th>\
    <th class='tabFeldTitel'>Key privat</th><th class='tabFeldTitel'>Kontostand</th></tr>";
    for (var i = 0; i < 3; i++) {
        if (a2b_privateSchluessel[i] != "") {
            htmlCode += "<tr><td class='tabFeld'>" + getAdresse(i) + "</td><td class='tabFeld'>" 
                + a2b_privateSchluessel[i].substr(19,6) + "</td><td class='tabFeld' id='guthaben" + i +"'>"
                + a3a_guthabenAdressen[i] + " SiC</td></tr>";
        } 
    }
    htmlCode += "</table>";
    document.getElementById("a3b_tabelleEigeneAdressen").innerHTML = htmlCode;
}

function a3b_tabelleAdressenFremdeKnoten() {
    var htmlCode = "<table class='tabelle tabFremdeAdressen'><tr><th class='tabFeldTitel'>Fremde Adressen</th>\
    <th class='tabFeldTitel'>Kontostand</th></tr>" 
    for (var i = 3; i < a3a_guthabenAdressen.length; i++) {
        if (a2b_adressenKnoten[i] != "") {
            htmlCode += "<tr><td class='tabFeld'>" + getAdresse(i) 
            + "</td><td class='tabFeld' id='fremdbetrag" + i + "'>" + a3a_guthabenAdressen[i] + " SiC</td></tr>";
        } 
    }
    htmlCode += "</table>";
    document.getElementById("a3b_tabelleFremdeAdressen").innerHTML = htmlCode;
}

function a3b_auswahllisteAuftraggeber() {
    var htmlCode = "";
    for (var i = 0; i < 3; i++) {
        if (a2b_privateSchluessel[i] != "") {
            htmlCode += "<option value='" + i + "'>" + a2b_adressenKnoten[i] + "</option>"
        }
    }
    return htmlCode
}

function a3b_pruefeEingabeAdresseEmpfaenger(adresse) {
    for (var i = 0; i < a2b_adressenKnoten.length; i++) {
        if (a2b_adressenKnoten[i] != "" && adresse === a2b_adressenKnoten[i].substr(4)) {
            return i;
        }
    }
    return -1
}

function a3c_tabelleTransaktion() {
    document.getElementById("a3c_auftraggeber").innerHTML = a3b_senderTransaktion;
    document.getElementById("a3c_empfaenger").innerHTML = a3b_empfaengerTransaktion;
    document.getElementById("a3c_betrag").innerHTML = a3b_betragTransaktion + " SiC";
    document.getElementById("a3c_gebuehr").innerHTML = a3b_gebuehrTransaktion + " SiC";
    document.getElementById("a3c_zeitstempel").innerHTML = a3b_zeitTransaktion;
    document.getElementById("a3c_hashwert").innerHTML = a3b_hashTransaktion;
}

function a3c_erstelleSignatur(hashTransaktion, idxAdresse) {
    a3c_hashTeil1 = hashTransaktion.substr(0,2);
    a3c_hashTeil2 = hashTransaktion.substr(2,2);
    a3c_hashTeil3 = hashTransaktion.substr(4,2);
    a3c_hashTeil4 = hashTransaktion.substr(6,2);
    a3c_dKey = adressenAuswahl[indizesFuerAdressen[idxAdresse]].d;
    a3c_nKey = adressenAuswahl[indizesFuerAdressen[idxAdresse]].n;
    a3c_signaturTeil1 = berechneSignatur(umwandleInDez(a3c_hashTeil1, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTeil2 = berechneSignatur(umwandleInDez(a3c_hashTeil2, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTeil3 = berechneSignatur(umwandleInDez(a3c_hashTeil3, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTeil4 = berechneSignatur(umwandleInDez(a3c_hashTeil4, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTransaktion = a3c_signaturTeil1 + " " + a3c_signaturTeil2 + " " + a3c_signaturTeil3 
        + " " + a3c_signaturTeil4;
    document.getElementById("a3c_hashT1").innerHTML = a3c_hashTeil1;
    document.getElementById("a3c_hashT2").innerHTML = a3c_hashTeil2;
    document.getElementById("a3c_hashT3").innerHTML = a3c_hashTeil3;
    document.getElementById("a3c_hashT4").innerHTML = a3c_hashTeil4;
    document.getElementById("a3c_binT1").innerHTML = ergaenzeNullen8(umwandleHexInBin(a3c_hashTeil1));
    document.getElementById("a3c_binT2").innerHTML = ergaenzeNullen8(umwandleHexInBin(a3c_hashTeil2));
    document.getElementById("a3c_binT3").innerHTML = ergaenzeNullen8(umwandleHexInBin(a3c_hashTeil3));
    document.getElementById("a3c_binT4").innerHTML = ergaenzeNullen8(umwandleHexInBin(a3c_hashTeil4));
    document.getElementById("a3c_dezT1").innerHTML = umwandleInDez(a3c_hashTeil1, 16);
    document.getElementById("a3c_dezT2").innerHTML = umwandleInDez(a3c_hashTeil2, 16);
    document.getElementById("a3c_dezT3").innerHTML = umwandleInDez(a3c_hashTeil3, 16);
    document.getElementById("a3c_dezT4").innerHTML = umwandleInDez(a3c_hashTeil4, 16);
    document.getElementById("a3c_digSigT1").innerHTML = a3c_signaturTeil1;
    document.getElementById("a3c_digSigT2").innerHTML = a3c_signaturTeil2;
    document.getElementById("a3c_digSigT3").innerHTML = a3c_signaturTeil3;
    document.getElementById("a3c_digSigT4").innerHTML = a3c_signaturTeil4;
}

function a3c_clear() {
    document.getElementById("a3c_signaturTabelle").style.visibility = "hidden";
    document.getElementById('a3c_hashTitel').classList.add('tabHervorgehoben');
    document.getElementById('a3c_digSigTitel').classList.remove('tabHervorgehoben');
    document.getElementById('a3c_hashT1').classList.add('tabHervorgehoben');
    document.getElementById('a3c_hashT2').classList.add('tabHervorgehoben');
    document.getElementById('a3c_hashT3').classList.add('tabHervorgehoben');
    document.getElementById('a3c_hashT4').classList.add('tabHervorgehoben');
    document.getElementById('a3c_digSigTabFeld').classList.remove('tabHervorgehoben');
    document.getElementById('a3c_dezT1').style.visibility = "hidden";
    document.getElementById('a3c_dezT2').style.visibility = "hidden";
    document.getElementById('a3c_dezT3').style.visibility = "hidden";
    document.getElementById('a3c_dezT4').style.visibility = "hidden";
    document.getElementById('a3c_binT1').style.visibility = "hidden";
    document.getElementById('a3c_binT2').style.visibility = "hidden";
    document.getElementById('a3c_binT3').style.visibility = "hidden";
    document.getElementById('a3c_binT4').style.visibility = "hidden";
    document.getElementById('a3c_digSigT1').style.visibility = 'hidden';
    document.getElementById('a3c_digSigT2').style.visibility = 'hidden';
    document.getElementById('a3c_digSigT3').style.visibility = 'hidden';
    document.getElementById('a3c_digSigT4').style.visibility = 'hidden';
    document.getElementById('a3c_infoimg1').style.visibility = "hidden";
    document.getElementById('a3c_hintergButton').style.visibility = "hidden";
}


function a3d_tabelleTransaktion() {
    document.getElementById("a3d_auftraggeber").innerHTML = a3b_senderTransaktion;
    document.getElementById("a3d_empfaenger").innerHTML = a3b_empfaengerTransaktion;
    document.getElementById("a3d_betrag").innerHTML = a3b_betragTransaktion + " SiC";
    document.getElementById("a3d_gebuehr").innerHTML = a3b_gebuehrTransaktion + " SiC";
    document.getElementById("a3d_zeitstempel").innerHTML = a3b_zeitTransaktion;
    document.getElementById("a3d_hashwert").innerHTML = a3b_hashTransaktion;
    document.getElementById('a3d_digitaleSignatur').innerHTML = a3c_signaturTransaktion;
}

async function a3d_pruefeTransaktion() {
    document.getElementById("a3d_haken1").style.visibility = "visible";
    await verzoegerung(1500);
    document.getElementById("a3d_haken2").style.visibility = "visible";
    await verzoegerung(1500);
    document.getElementById("a3d_haken3").style.visibility = "visible";
    await verzoegerung(1500);
    if (a3a_guthabenAdressen[a3c_idxAdresseSender] < 0) {
        document.getElementById("a3d_kreuz1").style.visibility = "visible";
        await verzoegerung(1500)
        document.getElementById("a3d_zurueckgewieseneTrans").style.visibility = "visible";
        document.getElementById("a3d_neustartButton").style.visibility = "visible";
        document.getElementById('a3d_infoimg1').style = 
            'position: absolute; left: 32em; top: 32em; visibility: visible;';
        document.getElementById('a3d_hintergButton').style = 
            'position: absolute; left: 2em; top: 34.5em; visibility: visible;';
    } else {
        document.getElementById("a3d_haken4").style.visibility = "visible";
        await verzoegerung(1500);
        document.getElementById("a3d_signaturTabelle").style.visibility = "visible";
        document.getElementById("a3d_buttonBerechnung1").style.visibility = "visible";
    }
    document.getElementById("a3d_startButton").style.visibility = "hidden";
}

function a3d_pruefeSignatur(hashTransaktion, idxAdresse) {
    a3c_hashTeil1 = hashTransaktion.substr(0,2);
    a3c_hashTeil2 = hashTransaktion.substr(2,2);
    a3c_hashTeil3 = hashTransaktion.substr(4,2);
    a3c_hashTeil4 = hashTransaktion.substr(6,2);
    a3d_eKey = adressenAuswahl[indizesFuerAdressen[idxAdresse]].e;
    a3c_dKey = adressenAuswahl[indizesFuerAdressen[idxAdresse]].d;
    a3c_nKey = adressenAuswahl[indizesFuerAdressen[idxAdresse]].n;
    a3c_signaturTeil1 = berechneSignatur(umwandleInDez(a3c_hashTeil1, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTeil2 = berechneSignatur(umwandleInDez(a3c_hashTeil2, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTeil3 = berechneSignatur(umwandleInDez(a3c_hashTeil3, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTeil4 = berechneSignatur(umwandleInDez(a3c_hashTeil4, 16), a3c_dKey, a3c_nKey);
    a3c_signaturTransaktion = a3c_signaturTeil1 + " " + a3c_signaturTeil2 + " " + a3c_signaturTeil3 
        + " " + a3c_signaturTeil4;
    document.getElementById("a3d_digitaleSignatur").innerHTML = a3c_signaturTransaktion;
    a3d_entschluesseltTeil1 = berechneSignatur(a3c_signaturTeil1, a3d_eKey, a3c_nKey);
    a3d_entschluesseltTeil2 = berechneSignatur(a3c_signaturTeil2, a3d_eKey, a3c_nKey);
    a3d_entschluesseltTeil3 = berechneSignatur(a3c_signaturTeil3, a3d_eKey, a3c_nKey);
    a3d_entschluesseltTeil4 = berechneSignatur(a3c_signaturTeil4, a3d_eKey, a3c_nKey);
    document.getElementById("a3d_digSigT1").innerHTML = a3c_signaturTeil1;
    document.getElementById("a3d_digSigT2").innerHTML = a3c_signaturTeil2;
    document.getElementById("a3d_digSigT3").innerHTML = a3c_signaturTeil3;
    document.getElementById("a3d_digSigT4").innerHTML = a3c_signaturTeil4;
    document.getElementById("a3d_dezT1").innerHTML = a3d_entschluesseltTeil1;
    document.getElementById("a3d_dezT2").innerHTML = a3d_entschluesseltTeil2;
    document.getElementById("a3d_dezT3").innerHTML = a3d_entschluesseltTeil3;
    document.getElementById("a3d_dezT4").innerHTML = a3d_entschluesseltTeil4;
    document.getElementById("a3d_binT1").innerHTML = ergaenzeNullen8(umwandleDez(a3d_entschluesseltTeil1, 2));
    document.getElementById("a3d_binT2").innerHTML = ergaenzeNullen8(umwandleDez(a3d_entschluesseltTeil2, 2));
    document.getElementById("a3d_binT3").innerHTML = ergaenzeNullen8(umwandleDez(a3d_entschluesseltTeil3, 2));
    document.getElementById("a3d_binT4").innerHTML = ergaenzeNullen8(umwandleDez(a3d_entschluesseltTeil4, 2));
    document.getElementById("a3d_hashT1").innerHTML = ergaenzeNullen2(umwandleDez(a3d_entschluesseltTeil1, 16));
    document.getElementById("a3d_hashT2").innerHTML = ergaenzeNullen2(umwandleDez(a3d_entschluesseltTeil2, 16));
    document.getElementById("a3d_hashT3").innerHTML = ergaenzeNullen2(umwandleDez(a3d_entschluesseltTeil3, 16));
    document.getElementById("a3d_hashT4").innerHTML = ergaenzeNullen2(umwandleDez(a3d_entschluesseltTeil4, 16));
}

function a3d_clear() {
    document.getElementById("a3d_haken1").style.visibility = "hidden";
    document.getElementById("a3d_haken2").style.visibility = "hidden";
    document.getElementById("a3d_haken3").style.visibility = "hidden";
    document.getElementById("a3d_haken4").style.visibility = "hidden";
    document.getElementById("a3d_kreuz1").style.visibility = "hidden";
    document.getElementById("a3d_zurueckgewieseneTrans").style.visibility = "hidden";
    document.getElementById("a3d_gueltigeTrans").style.visibility = "hidden";
    document.getElementById("a3d_signaturTabelle").style.visibility = "hidden";
    document.getElementById('a3d_dezT1').style.visibility = "hidden";
    document.getElementById('a3d_dezT2').style.visibility = "hidden";
    document.getElementById('a3d_dezT3').style.visibility = "hidden";
    document.getElementById('a3d_dezT4').style.visibility = "hidden";
    document.getElementById('a3d_binT1').style.visibility = "hidden";
    document.getElementById('a3d_binT2').style.visibility = "hidden";
    document.getElementById('a3d_binT3').style.visibility = "hidden";
    document.getElementById('a3d_binT4').style.visibility = "hidden";
    document.getElementById('a3d_hashT1').style.visibility = "hidden";
    document.getElementById('a3d_hashT2').style.visibility = "hidden";
    document.getElementById('a3d_hashT3').style.visibility = "hidden";
    document.getElementById('a3d_hashT4').style.visibility = "hidden";
    document.getElementById('a3d_hashTitel').classList.remove('tabHervorgehoben');
    document.getElementById('a3d_hashwertTabFeld').classList.remove('tabHervorgehoben');
    document.getElementById('a3d_infoimg1').style.visibility = "hidden";
    document.getElementById('a3d_hintergButton').style.visibility = "hidden";
}

function a4a_datenTransaktion() {
    document.getElementById("a4a_auftraggeber4").innerHTML = a3b_senderTransaktion;
    document.getElementById("a4a_empfaenger4").innerHTML = a3b_empfaengerTransaktion;
    document.getElementById("a4a_betrag4").innerHTML = a3b_betragTransaktion + " SiC";
    document.getElementById("a4a_gebuehr4").innerHTML = a3b_gebuehrTransaktion + " SiC";
    document.getElementById("a4a_zeitstempel4").innerHTML = a3b_zeitTransaktion;
    document.getElementById("a4a_hashwert4").innerHTML = a3b_hashTransaktion;
    document.getElementById("a4a_digitaleSignatur4").innerHTML = a3c_signaturTransaktion;
    a4a_referenz45 = a3b_hashTransaktion + " " + a4a_hashTransaktion;
    a4a_hashReferenz45 = berechneHash(a4a_referenz45);
    document.getElementById("a4a_refTrans45").innerHTML = a4a_referenz45;
    document.getElementById("a4a_hashTrans45").innerHTML = a4a_hashReferenz45;
    document.getElementById("a4a_hashRefTrans45").innerHTML = a4a_hashReferenz45;
}

var a4a_verstricheneZeit = 0;
var a4a_delay = 0;

async function a4a_bewegteReferenzen() {
    
    var posX_Referenz1 = positionX("a4a_tabelleHashRef4");
    var posY_Referenz1 = positionY("a4a_tabelleHashRef4");
    var posX_Referenz2 = positionX("a4a_tabelleHashRef5");
    var posY_Referenz2 = positionY("a4a_tabelleHashRef5");
    
    var a4a_unterbrochen = false;

    document.getElementById("a4a_abbruch").addEventListener("click", () => {
        a4a_unterbrochen = true;
        document.getElementById("a4a_tabelleHashRef4").style="position: absolute; left: 3em; top: 6.7em;";
        document.getElementById("a4a_tabelleHashRef5").style="position: absolute; left: 18em; top: 6.7em;";
        document.getElementById("a4a_pfeil1").style.visibility = "visible";
        document.getElementById("a4a_pfeil2").style.visibility = "visible";
        document.getElementById("a4a_pfeil3").style.visibility = "visible";
        document.getElementById("a4a_pfeil4").style.visibility = "visible";
        document.getElementById("a4a_refTrans45").style.visibility = "visible";
        document.getElementById("a4a_hashRefTrans45").style.visibility = "visible";
        document.getElementById("a4a_feldHashRef45").style.visibility = "visible";
        document.getElementById("a4a_refTrans45").classList.remove("geaendeterWert");
        document.getElementById("a4a_hashRef4").classList.remove("geaendeterWert");
        document.getElementById("a4a_hashRef5").classList.remove("geaendeterWert");
        document.getElementById("a4a_hashRefTrans45").classList.add("geaendeterWert");
        document.getElementById("a4a_hashTrans45").classList.add("geaendeterWert");
        document.getElementById("a4a_infoimg1").style = 
            "visibility: visible; position: absolute; top: 28em; left: 40em;"
        document.getElementById("a4a_abbruch").style="visibility: hidden";
        document.getElementById("a4a_unterbrechung").style="visibility: hidden";
        document.getElementById("a4a_fortsetzung").style="visibility: hidden";
        document.getElementById("a4a_neustart").style=
            "position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a4a_hintergButton").style =
            "visibility: visible; position: absolute; top: 40.5em; left: 2em"});

    document.getElementById("a4a_unterbrechung").addEventListener("click", () => {
        a4a_unterbrochen = true;
        document.getElementById("a4a_fortsetzung").style = 
            "position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a4a_fortsetzung").addEventListener("click", () => {
        a4a_unterbrochen = false;});

    document.getElementById("a4a_neustart").addEventListener("click", () => {
        a4a_unterbrochen = true;
        a4a_verstricheneZeit = 0;});

    bewegeObjekt("a4a_tabelleHashRef4", "a4a_unterbrechung", "a4a_abbruch", "a4a_neustart", posX_Referenz1, posY_Referenz1, 0, -0.5, 0, 6.5);
    if (a4a_verstricheneZeit < 2400) {a4a_verstricheneZeit += 2400; a4a_delay = 2400;}
    else {a4a_delay = 0;}
    await verzoegerung(a4a_delay);
    if (!a4a_unterbrochen) {
        document.getElementById('a4a_pfeil1').style.visibility = 'visible';
        if (a4a_verstricheneZeit < 2900) {a4a_verstricheneZeit += 500; a4a_delay = 500;}
        else {a4a_delay = 0;}
        await verzoegerung(a4a_delay);
        if (!a4a_unterbrochen) {
            bewegeObjekt("a4a_tabelleHashRef5", "a4a_unterbrechung", "a4a_abbruch", "a4a_neustart", posX_Referenz2, posY_Referenz2, 0, -0.5, 0, 6.5);
            if (a4a_verstricheneZeit < 4400) {a4a_verstricheneZeit += 2400; a4a_delay = 2400;}
            else {a4a_delay = 0;}
            await verzoegerung(a4a_delay);
            if (!a4a_unterbrochen) {
                document.getElementById('a4a_pfeil2').style.visibility = 'visible';
                if (a4a_verstricheneZeit < 6800) {a4a_verstricheneZeit += 1500; a4a_delay = 1500;}
                else {a4a_delay = 0;}
                await verzoegerung(a4a_delay);
                if (!a4a_unterbrochen) {
                    document.getElementById("a4a_refTrans45").style.visibility = "visible";
                    document.getElementById("a4a_refTrans45").classList.add("geaendeterWert");
                    document.getElementById("a4a_hashRef4").classList.add("geaendeterWert");
                    document.getElementById("a4a_hashRef5").classList.add("geaendeterWert");
                    if (a4a_verstricheneZeit < 8300) {a4a_verstricheneZeit += 1500; a4a_delay = 1500;}
                    else {a4a_delay = 0;}
                    await verzoegerung(a4a_delay);
                    if (!a4a_unterbrochen) {
                        document.getElementById("a4a_refTrans45").classList.remove("geaendeterWert");
                        document.getElementById("a4a_hashRef4").classList.remove("geaendeterWert");
                        document.getElementById("a4a_hashRef5").classList.remove("geaendeterWert");
                        document.getElementById("a4a_hashRefTrans45").style.visibility = "visible";
                        document.getElementById("a4a_hashRefTrans45").classList.add("geaendeterWert");
                        document.getElementById("a4a_hashTrans45").classList.add("geaendeterWert");
                        if (a4a_verstricheneZeit < 9800) {a4a_verstricheneZeit += 1500; a4a_delay = 1500;}
                        else {a4a_delay = 0;}
                        await verzoegerung(a4a_delay);
                        if (!a4a_unterbrochen) {
                            document.getElementById('a4a_pfeil3').style.visibility = 'visible';
                            document.getElementById('a4a_pfeil4').style.visibility = 'visible';
                            document.getElementById("a4a_feldHashRef45").style.visibility = "visible";
                            if (!a4a_unterbrochen) {
                                document.getElementById("a4a_infoimg1").style =
                                    "visibility: visible; position: absolute; top: 28em; left: 40em;";
                                document.getElementById("a4a_abbruch").style = "visibility: hidden";
                                document.getElementById("a4a_unterbrechung").style = "visibility: hidden";
                                document.getElementById("a4a_neustart").style =
                                    "position: absolute; right: 2em; top: 1em; visibility: visible";
                                document.getElementById("a4a_hintergButton").style = 
                                    "visibility: visible; position: absolute; top: 40.5em; left: 2em"
                                a4a_verstricheneZeit = 0;
                            }
                        }  
                    }
                }
            }
        }
    }
}

function a4b_datenMerkleTree() {
    document.getElementById("a4b_auftraggeber4").innerHTML = a3b_senderTransaktion;
    document.getElementById("a4b_empfaenger4").innerHTML = a3b_empfaengerTransaktion;
    document.getElementById("a4b_betrag4").innerHTML = a3b_betragTransaktion + " SiC";
    document.getElementById("a4b_gebuehr4").innerHTML = a3b_gebuehrTransaktion + " SiC";
    document.getElementById("a4b_zeitstempel4").innerHTML = a3b_zeitTransaktion;
    document.getElementById("a4b_hashwert4").innerHTML = a3b_hashTransaktion;
    document.getElementById("a4b_digitaleSignatur4").innerHTML = a3c_signaturTransaktion;
    document.getElementById("a4b_auftraggeber5").innerHTML = a4a_senderTransaktion;
    document.getElementById("a4b_hashTrans4").innerHTML = a3b_hashTransaktion;
    a4a_referenz45 = a3b_hashTransaktion + " " + a4a_hashTransaktion;
    a4a_hashReferenz45 = berechneHash(a4a_referenz45);
    document.getElementById("a4b_hashTrans45").innerHTML = a4a_hashReferenz45;
    a4b_hashReferenz4567 = berechneHash(a4a_hashReferenz45 + a4b_hashReferenz67);
    document.getElementById("a4b_hashTrans4567").innerHTML = a4b_hashReferenz4567;
    document.getElementById("a4b_block2HashRef").innerHTML = a4b_hashReferenz4567;
    a4b_hashBlock2 = berechneHash(a4b_hashBlock1 + a4b_hashReferenz4567);
    document.getElementById("a4b_block2Hash").innerHTML = a4b_hashBlock2;
    document.getElementById("a4b_block3VorhBlock").innerHTML = a4b_hashBlock2;
    a4b_hashBlock3 = berechneHash(a4b_hashBlock2 + a4b_hashReferenz89AB);
    document.getElementById("a4b_block3Hash").innerHTML = a4b_hashBlock3;
    document.getElementById("a4b_block4VorhBlock").innerHTML = a4b_hashBlock3;
    a4b_hashBlock4 = berechneHash(a4b_hashBlock3 + a4b_hashReferenzCDEF);
    document.getElementById("a4b_block4Hash").innerHTML = a4b_hashBlock4;
}

var a4b_verstricheneZeit = 0;
var a4b_delay = 0;

async function a4b_wachsendeBlockchain() {
    
    var a4b_unterbrochen = false;

    document.getElementById("a4b_abbruch").addEventListener("click", () => {
        a4b_unterbrochen = true;
        document.getElementById("a4b_feldHashRef8").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef9").style.visibility = "visible";
        document.getElementById("a4b_feldHashRefA").style.visibility = "visible";
        document.getElementById("a4b_feldHashRefB").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef45").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef67").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef89").style.visibility = "visible";
        document.getElementById("a4b_feldHashRefAB").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef0123").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef4567").style.visibility = "visible";
        document.getElementById("a4b_feldHashRef89AB").style.visibility = "visible";
        document.getElementById("a4b_feldHashRefCDEF").style.visibility = "visible";
        document.getElementById("a4b_block1").style.visibility = "visible";
        document.getElementById("a4b_block2").style.visibility = "visible";
        document.getElementById("a4b_block3").style.visibility = "visible";
        document.getElementById("a4b_block4").style.visibility = "visible";
        document.getElementById("a4b_trans8").style.visibility = "visible";
        document.getElementById("a4b_trans9").style.visibility = "visible";
        document.getElementById("a4b_transA").style.visibility = "visible";
        document.getElementById("a4b_transB").style.visibility = "visible";
        document.getElementById("a4b_pfeil05").style.visibility = "visible";
        document.getElementById("a4b_pfeil06").style.visibility = "visible";
        document.getElementById("a4b_pfeil07").style.visibility = "visible";
        document.getElementById("a4b_pfeil08").style.visibility = "visible";
        document.getElementById("a4b_pfeil11").style.visibility = "visible";
        document.getElementById("a4b_pfeil12").style.visibility = "visible";
        document.getElementById("a4b_pfeil13").style.visibility = "visible";
        document.getElementById("a4b_pfeil14").style.visibility = "visible";
        document.getElementById("a4b_pfeil15").style.visibility = "visible";
        document.getElementById("a4b_pfeil16").style.visibility = "visible";
        document.getElementById("a4b_pfeil17").style.visibility = "visible";
        document.getElementById("a4b_pfeil18").style.visibility = "visible";
        document.getElementById("a4b_pfeil21").style.visibility = "visible";
        document.getElementById("a4b_pfeil22").style.visibility = "visible";
        document.getElementById("a4b_pfeil23").style.visibility = "visible";
        document.getElementById("a4b_pfeil24").style.visibility = "visible";
        document.getElementById("a4b_pfeil31").style.visibility = "visible";
        document.getElementById("a4b_pfeil32").style.visibility = "visible";
        document.getElementById("a4b_pfeil33").style.visibility = "visible";
        document.getElementById("a4b_pfeil34").style.visibility = "visible";
        document.getElementById("a4b_pfeil41").style.visibility = "visible";
        document.getElementById("a4b_pfeil42").style.visibility = "visible";
        document.getElementById("a4b_pfeil43").style.visibility = "visible";
        document.getElementById("a4b_infoimg1").style = 
            "visibility: visible; position: absolute; top: 40em; left: 30em;"
        document.getElementById("a4b_abbruch").style="visibility: hidden";
        document.getElementById("a4b_unterbrechung").style="visibility: hidden";
        document.getElementById("a4b_fortsetzung").style="visibility: hidden";
        document.getElementById("a4b_neustart").style=
            "position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a4b_hintergButton").style =
            "visibility: visible; position: absolute; top: 51.5em; left: 2em"});

    document.getElementById("a4b_unterbrechung").addEventListener("click", () => {
        a4b_unterbrochen = true;
        document.getElementById("a4b_fortsetzung").style = 
            "position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a4b_fortsetzung").addEventListener("click", () => {
        a4b_unterbrochen = false;});

    document.getElementById("a4a_neustart").addEventListener("click", () => {
        a4b_unterbrochen = true;
        a4b_verstricheneZeit = 0;});
    
    document.getElementById("a4b_pfeil11").style.visibility = "visible";
    document.getElementById("a4b_pfeil12").style.visibility = "visible";
    if (a4b_verstricheneZeit < 1000) {a4b_verstricheneZeit += 1000; a4b_delay = 1000;}
    else {a4b_delay = 0;}
    await verzoegerung(a4b_delay);
    if (!a4b_unterbrochen) {
        document.getElementById("a4b_feldHashRef45").style.visibility = "visible";
        if (a4b_verstricheneZeit < 2500) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
        else {a4b_delay = 0;}
        await verzoegerung(a4b_delay);
        if (!a4b_unterbrochen) {
            document.getElementById("a4b_pfeil13").style.visibility = "visible";
            document.getElementById("a4b_pfeil14").style.visibility = "visible";
            if (a4b_verstricheneZeit < 3500) {a4b_verstricheneZeit += 1000; a4b_delay = 1000;}
            else {a4b_delay = 0;}
            await verzoegerung(a4b_delay);
            if (!a4b_unterbrochen) {
                document.getElementById("a4b_feldHashRef67").style.visibility = "visible";
                if (a4b_verstricheneZeit < 5000) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                else {a4b_delay = 0;}
                await verzoegerung(a4b_delay);
                if (!a4b_unterbrochen) {
                    document.getElementById("a4b_pfeil21").style.visibility = "visible";
                    document.getElementById("a4b_pfeil22").style.visibility = "visible";
                    if (a4b_verstricheneZeit < 6000) {a4b_verstricheneZeit += 1000; a4b_delay = 1000;}
                    else {a4b_delay = 0;}
                    await verzoegerung(a4b_delay);
                    if (!a4b_unterbrochen) {
                        document.getElementById("a4b_feldHashRef4567").style.visibility = "visible";
                        if (a4b_verstricheneZeit < 7500) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                        else {a4b_delay = 0;}
                        await verzoegerung(a4b_delay);
                        if (!a4b_unterbrochen) {
                            document.getElementById("a4b_pfeil05").style.visibility = "visible";
                            document.getElementById("a4b_pfeil06").style.visibility = "visible";
                            document.getElementById("a4b_pfeil07").style.visibility = "visible";
                            document.getElementById("a4b_pfeil08").style.visibility = "visible";
                            document.getElementById("a4b_trans8").style.visibility = "visible";
                            document.getElementById("a4b_trans9").style.visibility = "visible";
                            document.getElementById("a4b_transA").style.visibility = "visible";
                            document.getElementById("a4b_transB").style.visibility = "visible";
                            document.getElementById("a4b_feldHashRef8").style.visibility = "visible";
                            document.getElementById("a4b_feldHashRef9").style.visibility = "visible";
                            document.getElementById("a4b_feldHashRefA").style.visibility = "visible";
                            document.getElementById("a4b_feldHashRefB").style.visibility = "visible";
                            if (a4b_verstricheneZeit < 8500) {a4b_verstricheneZeit += 1000; a4b_delay = 1000;}
                            else {a4b_delay = 0;}
                            await verzoegerung(a4b_delay);
                            if (!a4b_unterbrochen) {
                                document.getElementById("a4b_pfeil15").style.visibility = "visible";
                                document.getElementById("a4b_pfeil16").style.visibility = "visible";
                                document.getElementById("a4b_pfeil17").style.visibility = "visible";
                                document.getElementById("a4b_pfeil18").style.visibility = "visible";
                                if (a4b_verstricheneZeit < 9300) {a4b_verstricheneZeit += 800; a4b_delay = 800;}
                                else {a4b_delay = 0;}
                                await verzoegerung(a4b_delay);
                                if (!a4b_unterbrochen) {
                                    document.getElementById("a4b_feldHashRef89").style.visibility = "visible";
                                    document.getElementById("a4b_feldHashRefAB").style.visibility = "visible";
                                    if (a4b_verstricheneZeit < 10300) {a4b_verstricheneZeit += 1000; a4b_delay = 1000;}
                                    else {a4b_delay = 0;}
                                    await verzoegerung(a4b_delay);
                                    if (!a4b_unterbrochen) {
                                        document.getElementById("a4b_pfeil23").style.visibility = "visible";
                                        document.getElementById("a4b_pfeil24").style.visibility = "visible";
                                        if (a4b_verstricheneZeit < 11100) {a4b_verstricheneZeit += 800; a4b_delay = 800;}
                                        else {a4b_delay = 0;}
                                        await verzoegerung(a4b_delay);
                                        if (!a4b_unterbrochen) {
                                            document.getElementById("a4b_feldHashRef89AB").style.visibility = "visible";
                                            if (a4b_verstricheneZeit < 12600) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                                            else {a4b_delay = 0;}
                                            await verzoegerung(a4b_delay);
                                            if (!a4b_unterbrochen) {
                                                document.getElementById("a4b_feldHashRef0123").style.visibility = "visible";
                                                document.getElementById("a4b_feldHashRefCDEF").style.visibility = "visible";
                                                if (a4b_verstricheneZeit < 14100) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                                                else {a4b_delay = 0;}
                                                await verzoegerung(a4b_delay);
                                                if (!a4b_unterbrochen) {
                                                    document.getElementById("a4b_block1").style.visibility = "visible";
                                                    document.getElementById("a4b_pfeil31").style.visibility = "visible";
                                                    if (a4b_verstricheneZeit < 15600) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                                                    else {a4b_delay = 0;}
                                                    await verzoegerung(a4b_delay);
                                                    if (!a4b_unterbrochen) {
                                                        document.getElementById("a4b_block2").style.visibility = "visible";
                                                        document.getElementById("a4b_pfeil32").style.visibility = "visible";
                                                        document.getElementById("a4b_pfeil41").style.visibility = "visible";
                                                        if (a4b_verstricheneZeit < 17100) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                                                        else {a4b_delay = 0;}
                                                        await verzoegerung(a4b_delay);
                                                        if (!a4b_unterbrochen) {
                                                            document.getElementById("a4b_block3").style.visibility = "visible";
                                                            document.getElementById("a4b_pfeil33").style.visibility = "visible";
                                                            document.getElementById("a4b_pfeil43").style.visibility = "visible";
                                                            if (a4b_verstricheneZeit < 18600) {a4b_verstricheneZeit += 1500; a4b_delay = 1500;}
                                                            else {a4b_delay = 0;}
                                                            await verzoegerung(a4b_delay);
                                                            if (!a4b_unterbrochen) {
                                                                document.getElementById("a4b_block4").style.visibility = "visible";
                                                                document.getElementById("a4b_pfeil34").style.visibility = "visible";
                                                                document.getElementById("a4b_pfeil42").style.visibility = "visible";
                                                                document.getElementById("a4b_infoimg1").style = 
                                                                    "visibility: visible; position: absolute; top: 40em; left: 30em;"
                                                                document.getElementById("a4b_abbruch").style="visibility: hidden";
                                                                document.getElementById("a4b_unterbrechung").style="visibility: hidden";
                                                                document.getElementById("a4b_fortsetzung").style="visibility: hidden";
                                                                document.getElementById("a4b_neustart").style=
                                                                    "position: absolute; right: 2em; top: 1em; visibility: visible";
                                                                document.getElementById("a4b_hintergButton").style =
                                                                    "visibility: visible; position: absolute; top: 51.5em; left: 2em"
                                                                a4b_verstricheneZeit = 0;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function a4c_datenMerkleTree() {
    document.getElementById("a4c_auftraggeber4").innerHTML = a3b_senderTransaktion;
    document.getElementById("a4c_empfaenger4").innerHTML = a3b_empfaengerTransaktion;
    document.getElementById("a4c_betrag4").innerHTML = a3b_betragTransaktion + " SiC";
    document.getElementById("a4c_gebuehr4").innerHTML = a3b_gebuehrTransaktion + " SiC";
    document.getElementById("a4c_zeitstempel4").innerHTML = a3b_zeitTransaktion;
    document.getElementById("a4c_hashwert4").innerHTML = a3b_hashTransaktion;
    document.getElementById("a4c_digitaleSignatur4").innerHTML = a3c_signaturTransaktion;
    document.getElementById("a4c_auftraggeber5").innerHTML = a4a_senderTransaktion;
    document.getElementById("a4c_hashTrans4").innerHTML = a3b_hashTransaktion;
    a4a_referenz45 = a3b_hashTransaktion + " " + a4a_hashTransaktion;
    a4a_hashReferenz45 = berechneHash(a4a_referenz45);
    document.getElementById("a4c_hashTrans45").innerHTML = a4a_hashReferenz45;
    a4b_hashReferenz4567 = berechneHash(a4a_hashReferenz45 + a4b_hashReferenz67);
    document.getElementById("a4c_hashTrans4567").innerHTML = a4b_hashReferenz4567;
    document.getElementById("a4c_block2HashRef").innerHTML = a4b_hashReferenz4567;
    a4b_hashBlock2 = berechneHash(a4b_hashBlock1 + a4b_hashReferenz4567);
    document.getElementById("a4c_block2Hash").innerHTML = a4b_hashBlock2;
    document.getElementById("a4c_block3VorhBlock").innerHTML = a4b_hashBlock2;
    a4b_hashBlock3 = berechneHash(a4b_hashBlock2 + a4b_hashReferenz89AB);
    document.getElementById("a4c_block3Hash").innerHTML = a4b_hashBlock3;
    document.getElementById("a4c_block4VorhBlock").innerHTML = a4b_hashBlock3;
    a4b_hashBlock4 = berechneHash(a4b_hashBlock3 + a4b_hashReferenzCDEF);
    document.getElementById("a4c_block4Hash").innerHTML = a4b_hashBlock4;
}

async function a4c_aendereDaten() {
    var a4c_wert1 = "e=" + document.getElementById('a4c_eingabeE4').value + ", n="
        + document.getElementById('a4c_eingabeN4').value;
    var a4c_wert2 = document.getElementById('a4c_betragTransaktion4').value;
    var a4c_wert3 = "e=" + document.getElementById('a4c_eingabeE5').value + ", n="
        + document.getElementById('a4c_eingabeN5').value;
    var a4c_wert4 = document.getElementById('a4c_betragTransaktion5').value;
    if (!(a4c_wert1 == "e=, n=")) {
        document.getElementById('a4c_empfaenger4').innerHTML = a4c_wert1;
        document.getElementById('a4c_empfaenger4').classList.add('geaendeterWert');
    }
    if (!(a4c_wert2 == "")) {
        document.getElementById('a4c_betrag4').innerHTML = a4c_wert2 + ' SiC';
        document.getElementById('a4c_betrag4').classList.add('geaendeterWert');
    }
    if (!(a4c_wert3 == "e=, n=")) {
        document.getElementById('a4c_empfaenger5').innerHTML = a4c_wert3;
        document.getElementById('a4c_empfaenger5').classList.add('geaendeterWert');
    }
    if (!(a4c_wert4 == "")) {
        document.getElementById('a4c_betrag5').innerHTML = a4c_wert4 + ' SiC';
        document.getElementById('a4c_betrag5').classList.add('geaendeterWert');
    }
    await verzoegerung(1000);
    if (!(a4c_wert1 == "e=, n=") || !(a4c_wert2 == "")) {
        document.getElementById('a4c_hashTrans4').innerHTML = berechneHash(a4c_wert1 + a4c_wert2);
        document.getElementById("a4c_hashTrans4").classList.add('geaendeterWert');
    }
    if (!(a4c_wert3 == "e=, n=") || !(a4c_wert4 == "")) {
        document.getElementById('a4c_hashTrans5').innerHTML = berechneHash(a4c_wert3 + a4c_wert4);
        document.getElementById("a4c_hashTrans5").classList.add('geaendeterWert');
    }
    await verzoegerung(1000);
    if (!(a4c_wert1 == "e=, n=") || !(a4c_wert2 == "") || !(a4c_wert3 == "e=, n=") || !(a4c_wert4 == "")) {
        document.getElementById('a4c_hashTrans45').innerHTML = 
            berechneHash(a4c_wert1 + a4c_wert2 + a4c_wert3 + a4c_wert4);
        document.getElementById("a4c_hashTrans45").classList.add('geaendeterWert');
        await verzoegerung(1000);
        document.getElementById('a4c_hashTrans4567').innerHTML = 
            berechneHash(a4c_wert1 + a4c_wert2 + a4c_wert3 + a4c_wert4 + a4b_hashReferenz67);
        document.getElementById("a4c_hashTrans4567").classList.add('geaendeterWert');
        await verzoegerung(1000);
        document.getElementById('a4c_block2HashRef').innerHTML = 
            berechneHash(a4c_wert1 + a4c_wert2 + a4c_wert3 + a4c_wert4 + a4b_hashReferenz67);
        document.getElementById("a4c_block2HashRef").classList.add('geaendeterWert');
        await verzoegerung(1000);
        document.getElementById('a4c_block2Hash').innerHTML = 
            berechneHash(a4c_wert1 + a4c_wert2 + a4c_wert3 + a4c_wert4 + a4b_hashReferenz67 + a4b_hashBlock1);
        document.getElementById("a4c_block2Hash").classList.add('geaendeterWert');
        await verzoegerung(1000);
        document.getElementById('a4c_pfeil43').style.visibility = 'hidden';
        document.getElementById('a4c_pfeil44').style.visibility = 'visible';
        document.getElementById('a4c_fragezeichen').style.visibility = 'visible';
        document.getElementById("a4c_infoimg1").style = 
            "visibility: visible; position: absolute; top: 40em; left: 30em;";
        document.getElementById("a4c_hintergButton").style =
            "visibility: visible; position: absolute; top: 51.5em; left: 2em";
    }
}

function a5ab_datenBloecke() {
    a5a_hashVorhBlock = a4b_hashBlock1;
    document.getElementById("a5ab_vorhBlockHash1").innerHTML = a5a_hashVorhBlock;
    a5a_hashInhalt = a4b_hashReferenz4567;
    document.getElementById("a5ab_inhaltHash1").innerHTML = a5a_hashInhalt;
}

function a5ab_mining(nonceID, nonce, hashID, hashBlock, target, zeit, hashInhalt, 
    hashVorherigerBlock, intervall, abbruchID, hakenID, zaehlerID, zaehler, nextStartButtonID, nextBlockID) {
    document.getElementById(hashID).innerHTML = hashBlock;
    document.getElementById(nonceID).innerHTML = nonce;
    var targetZahl = umwandleInDez(target, 16);
    var nonceZahl = umwandleInDez(nonce, 16);
    var hashBlockDez = umwandleInDez(hashBlock, 16);
    if (hashBlockDez < targetZahl) {
        document.getElementById(hakenID).style.visibility = "visible";
        document.getElementById(nextBlockID).style.visibility = "visible";
        document.getElementById(nextStartButtonID).style.visibility = "visible";
        return;
        } 
    async function aendereWert() {
        document.getElementById(abbruchID).addEventListener("click", function() {clearInterval(wertNeu)});
        zaehler += 1;
        document.getElementById(zaehlerID).innerHTML = zaehler;
        nonceZahl += 1;
        nonce = umwandleDezInHashwert(nonceZahl);
        document.getElementById(nonceID).innerHTML = nonce;
        hashBlock = berechneHash(hashInhalt + hashVorherigerBlock + zeit + target + nonce);
        hashBlockDez = umwandleInDez(hashBlock, 16);
        await verzoegerung(200);
        document.getElementById(hashID).innerHTML = hashBlock;
        if (hashBlockDez < targetZahl) {
            clearInterval(wertNeu);
            document.getElementById(abbruchID).style.visibility = "hidden";
            document.getElementById(hakenID).style.visibility = "visible";
            document.getElementById(nextBlockID).style.visibility = "visible";
            document.getElementById(nextStartButtonID).style.visibility = "visible";
        }
    }
    var wertNeu = setInterval(aendereWert, intervall);
}

function a6a_inhaltKnotenNeu() {
    document.getElementById('a6a_privateSchluessel').innerHTML = a2b_schluessel();
    document.getElementById('a6a_knotenNeu').innerHTML = '<br>' + a2b_adressenKnoten[0] + '<br>' + 
        a2b_adressenKnoten[1] + '<br>' + a2b_adressenKnoten[2] + "<br><b>Transaktion 4</b>";
}

var a6a_verstricheneZeit = 0;
var a6a_delay = 0;

async function a6a_verteileTransaktion() {

    var a6a_unterbrochen = false;

    document.getElementById("a6a_abbruch").addEventListener("click", () => {
        a6a_unterbrochen = true;
        document.getElementById("a6a_graph_6").style.visibility = "visible";
        document.getElementById("a6a_graph_start").style.visibility = "hidden";
        document.getElementById("a6a_graph_1").style.visibility = "hidden";
        document.getElementById("a6a_graph_2").style.visibility = "hidden";
        document.getElementById("a6a_graph_3").style.visibility = "hidden";
        document.getElementById("a6a_graph_4").style.visibility = "hidden";
        document.getElementById("a6a_graph_5").style.visibility = "hidden";
        document.getElementById("a6a_knoten1").innerHTML = "<br>" + a2b_adressenKnoten[3] + "<br>" 
            + a2b_adressenKnoten[4] + "<br>" + a2b_adressenKnoten[5] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten2").innerHTML = "<br>" + a2b_adressenKnoten[6] + "<br>" 
            + a2b_adressenKnoten[7] + "<br>" + a2b_adressenKnoten[8] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten3").innerHTML = "<br>" + a2b_adressenKnoten[9] + "<br>" 
            + a2b_adressenKnoten[10] + "<br>" + a2b_adressenKnoten[11] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten4").innerHTML = "<br>" + a2b_adressenKnoten[12] + "<br>" 
            + a2b_adressenKnoten[13] + "<br>" + a2b_adressenKnoten[14] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten5").innerHTML = "<br>" + a2b_adressenKnoten[15] + "<br>" 
            + a2b_adressenKnoten[16] + "<br>" + a2b_adressenKnoten[17] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten6").innerHTML = "<br>" + a2b_adressenKnoten[18] + "<br>" 
            + a2b_adressenKnoten[19] + "<br>" + a2b_adressenKnoten[20] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten7").innerHTML = "<br>" + a2b_adressenKnoten[21] + "<br>" 
            + a2b_adressenKnoten[22] + "<br>" + a2b_adressenKnoten[23] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten8").innerHTML = "<br>" + a2b_adressenKnoten[24] + "<br>" 
            + a2b_adressenKnoten[25] + "<br>" + a2b_adressenKnoten[26] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten9").innerHTML = "<br>" + a2b_adressenKnoten[27] + "<br>" 
            + a2b_adressenKnoten[28] + "<br>" + a2b_adressenKnoten[29] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten10").innerHTML = "<br>" + a2b_adressenKnoten[30] + "<br>" 
            + a2b_adressenKnoten[31] + "<br>" + a2b_adressenKnoten[32] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten1").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten2").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten3").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten4").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten5").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten6").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten7").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten8").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten9").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten10").classList.add("gruenerHintergrund");
        document.getElementById("a6a_infoimg1").style = 
            "visibility: visible; position: absolute; top: 39.5em; left: 5em"
        document.getElementById("a6a_abbruch").style="visibility: hidden";
        document.getElementById("a6a_unterbrechung").style="visibility: hidden";
        document.getElementById("a6a_fortsetzung").style="visibility: hidden";
        document.getElementById("a6a_neustart").style=
            "position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a6a_hintergButton").style =
            "visibility: visible; position: absolute; top: 44.5em; left: 2em"});
    
    document.getElementById("a6a_unterbrechung").addEventListener("click", () => {
        a6a_unterbrochen = true;
        document.getElementById("a6a_fortsetzung").style = 
            "position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a6a_fortsetzung").addEventListener("click", () => {
        a6a_unterbrochen = false;});

    document.getElementById("a6a_neustart").addEventListener("click", () => {
        a6a_unterbrochen = false;
        a6a_verstricheneZeit = 0;});
    
    document.getElementById("a6a_graph_1").style.visibility = "visible";
    document.getElementById("a6a_graph_start").style.visibility = "hidden";
    if (a6a_verstricheneZeit < 1000) {a6a_verstricheneZeit += 1000; a6a_delay = 1000;}
    else {a6a_delay = 0;}
    await verzoegerung(a6a_delay);
    if (!a6a_unterbrochen) {
        document.getElementById("a6a_knoten1").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten1").innerHTML = "<br>" + a2b_adressenKnoten[3] + "<br>" 
            + a2b_adressenKnoten[4] + "<br>" + a2b_adressenKnoten[5] + "<br><b>Transaktion 4<b>";
        document.getElementById("a6a_knoten8").classList.add("gruenerHintergrund");
        document.getElementById("a6a_knoten8").innerHTML = "<br>" + a2b_adressenKnoten[24] + "<br>" 
            + a2b_adressenKnoten[25] + "<br>" + a2b_adressenKnoten[26] + "<br><b>Transaktion 4<b>";
        if (a6a_verstricheneZeit < 2500) {a6a_verstricheneZeit += 1500; a6a_delay = 1500;}
        else {a6a_delay = 0;}
        await verzoegerung(a6a_delay);
        if (!a6a_unterbrochen) {
            document.getElementById("a6a_graph_2").style.visibility = "visible";
            document.getElementById("a6a_graph_1").style.visibility = "hidden";
            if (a6a_verstricheneZeit < 3500) {a6a_verstricheneZeit += 1000; a6a_delay = 1000;}
            else {a6a_delay = 0;}
            await verzoegerung(a6a_delay);
            if (!a6a_unterbrochen) {
                document.getElementById("a6a_knoten4").classList.add("gruenerHintergrund");
                document.getElementById("a6a_knoten4").innerHTML = "<br>" + a2b_adressenKnoten[12] + "<br>" 
                    + a2b_adressenKnoten[13] + "<br>" + a2b_adressenKnoten[14] + "<br><b>Transaktion 4<b>";
                document.getElementById("a6a_knoten9").classList.add("gruenerHintergrund");
                document.getElementById("a6a_knoten9").innerHTML = "<br>" + a2b_adressenKnoten[27] + "<br>" 
                    + a2b_adressenKnoten[28] + "<br>" + a2b_adressenKnoten[29] + "<br><b>Transaktion 4<b>";
                if (a6a_verstricheneZeit < 5000) {a6a_verstricheneZeit += 1500; a6a_delay = 1500;}
                else {a6a_delay = 0;}
                await verzoegerung(a6a_delay);
                if (!a6a_unterbrochen) {
                    document.getElementById("a6a_graph_3").style.visibility = "visible";
                    document.getElementById("a6a_graph_2").style.visibility = "hidden";
                    if (a6a_verstricheneZeit < 6000) {a6a_verstricheneZeit += 1000; a6a_delay = 1000;}
                    else {a6a_delay = 0;}
                    await verzoegerung(a6a_delay);
                    if (!a6a_unterbrochen) {
                        document.getElementById("a6a_knoten3").classList.add("gruenerHintergrund");
                        document.getElementById("a6a_knoten3").innerHTML = "<br>" + a2b_adressenKnoten[9] + "<br>" 
                            + a2b_adressenKnoten[10] + "<br>" + a2b_adressenKnoten[11] + "<br><b>Transaktion 4<b>";
                        document.getElementById("a6a_knoten10").classList.add("gruenerHintergrund");
                        document.getElementById("a6a_knoten10").innerHTML = "<br>" + a2b_adressenKnoten[30] + "<br>" 
                            + a2b_adressenKnoten[31] + "<br>" + a2b_adressenKnoten[32] + "<br><b>Transaktion 4<b>";
                        if (a6a_verstricheneZeit < 7500) {a6a_verstricheneZeit += 1500; a6a_delay = 1500;}
                        else {a6a_delay = 0;}
                        await verzoegerung(a6a_delay);
                        if (!a6a_unterbrochen) {
                            document.getElementById("a6a_graph_4").style.visibility = "visible";
                            document.getElementById("a6a_graph_3").style.visibility = "hidden";
                            if (a6a_verstricheneZeit < 8500) {a6a_verstricheneZeit += 1000; a6a_delay = 1000;}
                            else {a6a_delay = 0;}
                            await verzoegerung(a6a_delay);
                            if (!a6a_unterbrochen) {
                                document.getElementById("a6a_knoten6").classList.add("gruenerHintergrund");
                                document.getElementById("a6a_knoten6").innerHTML = "<br>" + a2b_adressenKnoten[18] + "<br>" 
                                    + a2b_adressenKnoten[19] + "<br>" + a2b_adressenKnoten[20] + "<br><b>Transaktion 4<b>";
                                document.getElementById("a6a_knoten7").classList.add("gruenerHintergrund");
                                document.getElementById("a6a_knoten7").innerHTML = "<br>" + a2b_adressenKnoten[21] + "<br>" 
                                    + a2b_adressenKnoten[22] + "<br>" + a2b_adressenKnoten[23] + "<br><b>Transaktion 4<b>";
                                if (a6a_verstricheneZeit < 10000) {a6a_verstricheneZeit += 1500; a6a_delay = 1500;}
                                else {a6a_delay = 0;}
                                await verzoegerung(a6a_delay);
                                if (!a6a_unterbrochen) {
                                    document.getElementById("a6a_graph_5").style.visibility = "visible";
                                    document.getElementById("a6a_graph_4").style.visibility = "hidden";
                                    if (a6a_verstricheneZeit < 11000) {a6a_verstricheneZeit += 1000; a6a_delay = 1000;}
                                    else {a6a_delay = 0;}
                                    await verzoegerung(a6a_delay);
                                    if (!a6a_unterbrochen) {
                                        document.getElementById("a6a_knoten2").classList.add("gruenerHintergrund");
                                        document.getElementById("a6a_knoten2").innerHTML = "<br>" + a2b_adressenKnoten[6] + "<br>" 
                                            + a2b_adressenKnoten[7] + "<br>" + a2b_adressenKnoten[8] + "<br><b>Transaktion 4<b>";
                                        document.getElementById("a6a_knoten5").classList.add("gruenerHintergrund");
                                        document.getElementById("a6a_knoten5").innerHTML = "<br>" + a2b_adressenKnoten[15] + "<br>" 
                                            + a2b_adressenKnoten[16] + "<br>" + a2b_adressenKnoten[17] + "<br><b>Transaktion 4<b>";
                                        if (a6a_verstricheneZeit < 12500) {a6a_verstricheneZeit += 1500; a6a_delay = 1500;}
                                        else {a6a_delay = 0;}
                                        await verzoegerung(a6a_delay);
                                        if (!a6a_unterbrochen) {
                                            document.getElementById("a6a_graph_6").style.visibility = "visible";
                                            document.getElementById("a6a_graph_5").style.visibility = "hidden";
                                            document.getElementById("a6a_unterbrechung").style.visibility = "hidden";
                                            document.getElementById("a6a_abbruch").style.visibility = "hidden";
                                            document.getElementById("a6a_neustart").style =
                                                "position: absolute; right: 2em; top: 1em; visibility: visible";
                                            document.getElementById('a6a_infoimg1').style = 
                                                "visibility: visible; position: absolute; top: 39.5em; left: 5em";
                                            document.getElementById('a6a_hintergButton').style = 
                                                "visibility: visible; position: absolute; top: 44.5em; left: 2em";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function a6b_preStart() {
    return "<br><br><span class='hash teileBlockGruen'>01d33512</span><p><b>T 4 &nbsp; T5</b></p>";
}

var a6b_verstricheneZeit = 0;
var a6b_delay = 0;

async function a6b_verteileBlock() {
    
    var a6b_unterbrochen = false;
    var a6b_knotenInhaltNeu = "<br><br><span class='hash teileBlockGruen'>01d33512</span><p><b>T 4 &nbsp; T5</b></p>"

    document.getElementById("a6b_abbruch").addEventListener("click", () => {
        a6b_unterbrochen = true;
        document.getElementById("a6b_graph_6").style.visibility = "visible";
        document.getElementById("a6b_graph_start").style.visibility = "hidden";
        document.getElementById("a6b_graph_1").style.visibility = "hidden";
        document.getElementById("a6b_graph_2").style.visibility = "hidden";
        document.getElementById("a6b_graph_3").style.visibility = "hidden";
        document.getElementById("a6b_graph_4").style.visibility = "hidden";
        document.getElementById("a6b_graph_5").style.visibility = "hidden";
        document.getElementById("a6b_knotenNeu").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten1").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten2").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten3").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten4").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten5").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten6").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten7").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten8").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten9").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten10").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_infoimg1").style = 
            "visibility: visible; position: absolute; top: 39.5em; left: 5em"
        document.getElementById("a6b_abbruch").style="visibility: hidden";
        document.getElementById("a6b_unterbrechung").style="visibility: hidden";
        document.getElementById("a6b_fortsetzung").style="visibility: hidden";
        document.getElementById("a6b_neustart").style=
            "position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a6b_hintergButton").style =
            "visibility: visible; position: absolute; top: 44.5em; left: 2em"});
    
    document.getElementById("a6b_unterbrechung").addEventListener("click", () => {
        a6b_unterbrochen = true;
        document.getElementById("a6b_fortsetzung").style = 
            "position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a6b_fortsetzung").addEventListener("click", () => {
        a6b_unterbrochen = false;});

    document.getElementById("a6b_neustart").addEventListener("click", () => {
        a6b_unterbrochen = false;
        a6b_verstricheneZeit = 0;
        document.getElementById('a6b_knotenNeu').innerHTML =
            "<br><br><span class='hash teileBlockGruen'>01d33512</span><p><b>T 4 &nbsp; T5</b></p>";});
    
    document.getElementById("a6b_graph_1").style.visibility = "visible";
    document.getElementById("a6b_graph_start").style.visibility = "hidden";
    document.getElementById("a6b_knoten1").innerHTML = a6b_knotenInhaltNeu;
    document.getElementById("a6b_knoten8").innerHTML = a6b_knotenInhaltNeu;
    if (a6b_verstricheneZeit < 1500) {a6b_verstricheneZeit += 1500; a6b_delay = 1500;}
    else {a6b_delay = 0;}
    await verzoegerung(a6b_delay);
    if (!a6b_unterbrochen) {
        document.getElementById("a6b_graph_2").style.visibility = "visible";
        document.getElementById("a6b_graph_1").style.visibility = "hidden";
        document.getElementById("a6b_knoten4").innerHTML = a6b_knotenInhaltNeu;
        document.getElementById("a6b_knoten9").innerHTML = a6b_knotenInhaltNeu;
        if (a6b_verstricheneZeit < 3000) {a6b_verstricheneZeit += 1500; a6b_delay = 1500;}
        else {a6b_delay = 0;}
        await verzoegerung(a6b_delay);
        if (!a6b_unterbrochen) {
            document.getElementById("a6b_graph_3").style.visibility = "visible";
            document.getElementById("a6b_graph_2").style.visibility = "hidden";
            document.getElementById("a6b_knoten3").innerHTML = a6b_knotenInhaltNeu;
            document.getElementById("a6b_knoten10").innerHTML = a6b_knotenInhaltNeu;
            if (a6b_verstricheneZeit < 4500) {a6b_verstricheneZeit += 1000; a6b_delay = 1000;}
            else {a6b_delay = 0;}
            await verzoegerung(a6b_delay);
            if (!a6b_unterbrochen) {
                document.getElementById("a6b_graph_4").style.visibility = "visible";
                document.getElementById("a6b_graph_3").style.visibility = "hidden";
                document.getElementById("a6b_knoten6").innerHTML = a6b_knotenInhaltNeu;
                document.getElementById("a6b_knoten7").innerHTML = a6b_knotenInhaltNeu;
                if (a6b_verstricheneZeit < 6000) {a6b_verstricheneZeit += 1500; a6b_delay = 1500;}
                else {a6b_delay = 0;}
                await verzoegerung(a6b_delay);
                if (!a6b_unterbrochen) {
                    document.getElementById("a6b_graph_5").style.visibility = "visible";
                    document.getElementById("a6b_graph_4").style.visibility = "hidden";
                    document.getElementById("a6b_knoten2").innerHTML = a6b_knotenInhaltNeu;
                    document.getElementById("a6b_knoten5").innerHTML = a6b_knotenInhaltNeu;
                    if (a6b_verstricheneZeit < 7500) {a6b_verstricheneZeit += 1000; a6b_delay = 1000;}
                    else {a6b_delay = 0;}
                    await verzoegerung(a6b_delay);
                    if (!a6b_unterbrochen) {
                        document.getElementById("a6b_graph_6").style.visibility = "visible";
                        document.getElementById("a6b_graph_5").style.visibility = "hidden";
                        document.getElementById("a6b_unterbrechung").style.visibility = "hidden";
                        document.getElementById("a6b_abbruch").style.visibility = "hidden";
                        document.getElementById("a6b_neustart").style =
                            "position: absolute; right: 2em; top: 1em; visibility: visible";
                        document.getElementById('a6b_infoimg1').style = 
                            "visibility: visible; position: absolute; top: 39.5em; left: 5em";
                        document.getElementById('a6b_hintergButton').style = 
                            "visibility: visible; position: absolute; top: 44.5em; left: 2em";
                    }
                }
            }
        }
    }
}

async function a6c_preStart() {
    document.getElementById('a6c_knotenNeu').innerHTML = 
        "<br><br><span class='hash teileBlockGruen'>01d33512</span><p><b>T 4 &nbsp; T 5</b></p>";
    await verzoegerung(500);
    document.getElementById('a6c_knoten2').innerHTML = 
        "<br><br><span class='hash teileBlockBlau'>0f75b449</span><p><b>T 0 &nbsp; T 1</b></p>";
}

var a6c_verstricheneZeit = 0;
var a6c_delay = 0;

async function a6c_verteileBloecke() {
    
    var a6c_unterbrochen = false;
    var a6c_knotenInhaltA = "<br><br><span class='hash teileBlockGruen'>01d33512</span><p><b>T 4 &nbsp; T5</b></p>";
    var a6c_knotenInhaltB = "<br><br><span class='hash teileBlockBlau'>0f75b449</span><p><b>T 0 &nbsp; T 1</b></p>";
    var a6c_knotenInhaltAB = "<p style='margin: 0.6em;'></p><br><span class='hash teileBlockGruen'>01d33512</span>\
        <br><br><span class='hash teileBlockBlau'>0f75b449</span>";
    var a6c_knotenInhaltBA = "<p style='margin: 0.6em;'></p><br><span class='hash teileBlockBlau'>0f75b449</span>\
        <br><br><span class='hash teileBlockGruen'>01d33512</span>";
    
    document.getElementById("a6c_abbruch").addEventListener("click", () => {
        a6c_unterbrochen = true;
        document.getElementById("a6c_graph_6").style.visibility = "visible";
        document.getElementById("a6c_graph_start").style.visibility = "hidden";
        document.getElementById("a6c_graph_1").style.visibility = "hidden";
        document.getElementById("a6c_graph_2").style.visibility = "hidden";
        document.getElementById("a6c_graph_3").style.visibility = "hidden";
        document.getElementById("a6c_graph_4").style.visibility = "hidden";
        document.getElementById("a6c_graph_5").style.visibility = "hidden";
        document.getElementById("a6c_knotenNeu").innerHTML = a6c_knotenInhaltAB;
        document.getElementById("a6c_knoten1").innerHTML = a6c_knotenInhaltAB;
        document.getElementById("a6c_knoten2").innerHTML = a6c_knotenInhaltBA;
        document.getElementById("a6c_knoten3").innerHTML = a6c_knotenInhaltBA;
        document.getElementById("a6c_knoten4").innerHTML = a6c_knotenInhaltAB;
        document.getElementById("a6c_knoten5").innerHTML = a6c_knotenInhaltBA;
        document.getElementById("a6c_knoten6").innerHTML = a6c_knotenInhaltBA;
        document.getElementById("a6c_knoten7").innerHTML = a6c_knotenInhaltBA;
        document.getElementById("a6c_knoten8").innerHTML = a6c_knotenInhaltAB;
        document.getElementById("a6c_knoten9").innerHTML = a6c_knotenInhaltAB;
        document.getElementById("a6c_knoten10").innerHTML = a6c_knotenInhaltBA;
        document.getElementById("a6c_infoimg1").style = 
            "visibility: visible; position: absolute; top: 39.5em; left: 5em"
        document.getElementById("a6c_abbruch").style="visibility: hidden";
        document.getElementById("a6c_unterbrechung").style="visibility: hidden";
        document.getElementById("a6c_fortsetzung").style="visibility: hidden";
        document.getElementById("a6c_neustart").style=
            "position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a6c_hintergButton").style =
            "visibility: visible; position: absolute; top: 44.5em; left: 2em"});
    
    document.getElementById("a6c_unterbrechung").addEventListener("click", () => {
        a6c_unterbrochen = true;
        document.getElementById("a6c_fortsetzung").style = 
            "position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a6c_fortsetzung").addEventListener("click", () => {
        a6c_unterbrochen = false;});

    document.getElementById("a6c_neustart").addEventListener("click", () => {
        a6c_unterbrochen = false;
        a6c_verstricheneZeit = 0;
        document.getElementById('a6c_knotenNeu').innerHTML = a6c_knotenInhaltA;
        document.getElementById('a6c_knoten2').innerHTML = a6c_knotenInhaltB;});

    document.getElementById("a6c_graph_1").style.visibility = "visible";
    document.getElementById("a6c_graph_start").style.visibility = "hidden";
    if (a6c_verstricheneZeit < 1500) {a6c_verstricheneZeit += 1500; a6c_delay = 1500;}
    else {a6c_delay = 0;}
    await verzoegerung(a6c_delay);
    if (!a6c_unterbrochen) {
        document.getElementById("a6c_knoten1").innerHTML = a6c_knotenInhaltA;
        document.getElementById("a6c_knoten8").innerHTML = a6c_knotenInhaltA;
        await verzoegerung(500);
        a6c_verstricheneZeit += 500;
        document.getElementById("a6c_knoten5").innerHTML = a6c_knotenInhaltB;
        document.getElementById("a6c_knoten6").innerHTML = a6c_knotenInhaltB;
        await verzoegerung(1000);
        a6c_verstricheneZeit += 1000;
        document.getElementById("a6c_graph_2").style.visibility = "visible";
        document.getElementById("a6c_graph_1").style.visibility = "hidden";
        if (a6c_verstricheneZeit < 4500) {a6c_verstricheneZeit += 1500; a6c_delay = 1500;}
        else {a6c_delay = 0;}
        await verzoegerung(a6c_delay);
        if (!a6c_unterbrochen) {
            document.getElementById("a6c_knoten4").innerHTML = a6c_knotenInhaltA;
            document.getElementById("a6c_knoten9").innerHTML = a6c_knotenInhaltA;
            await verzoegerung(500);
            a6c_verstricheneZeit += 500;
            document.getElementById("a6c_knoten3").innerHTML = a6c_knotenInhaltB;
            document.getElementById("a6c_knoten7").innerHTML = a6c_knotenInhaltB;
            document.getElementById("a6c_knoten10").innerHTML = a6c_knotenInhaltB;
            await verzoegerung(1000);
            a6c_verstricheneZeit += 1000;
            document.getElementById("a6c_graph_3").style.visibility = "visible";
            document.getElementById("a6c_graph_2").style.visibility = "hidden";
            if (a6c_verstricheneZeit < 7500) {a6c_verstricheneZeit += 1500; a6c_delay = 1500;}
            else {a6c_delay = 0;}
            await verzoegerung(a6c_delay);
            if (!a6c_unterbrochen) {
                document.getElementById("a6c_knoten3").innerHTML = a6c_knotenInhaltBA;
                document.getElementById("a6c_knoten10").innerHTML = a6c_knotenInhaltBA;
                await verzoegerung(500);
                a6c_verstricheneZeit += 500;
                document.getElementById("a6c_knoten4").innerHTML = a6c_knotenInhaltAB;
                document.getElementById("a6c_knoten9").innerHTML = a6c_knotenInhaltAB;
                await verzoegerung(1000);
                a6c_verstricheneZeit += 1000;
                document.getElementById("a6c_graph_4").style.visibility = "visible";
                document.getElementById("a6c_graph_3").style.visibility = "hidden";
                if (a6c_verstricheneZeit < 10500) {a6c_verstricheneZeit += 1500; a6c_delay = 1500;}
                else {a6c_delay = 0;}
                await verzoegerung(a6c_delay);
                if (!a6c_unterbrochen) {
                    document.getElementById("a6c_knoten6").innerHTML = a6c_knotenInhaltBA;
                    document.getElementById("a6c_knoten7").innerHTML = a6c_knotenInhaltBA;
                    await verzoegerung(500);
                    a6c_verstricheneZeit += 500;
                    document.getElementById("a6c_knoten1").innerHTML = a6c_knotenInhaltAB;
                    document.getElementById("a6c_knoten8").innerHTML = a6c_knotenInhaltAB;
                    await verzoegerung(1000);
                    a6c_verstricheneZeit += 1000;
                    document.getElementById("a6c_graph_5").style.visibility = "visible";
                    document.getElementById("a6c_graph_4").style.visibility = "hidden";
                    if (a6c_verstricheneZeit < 13500) {a6c_verstricheneZeit += 1500; a6c_delay = 1500;}
                    else {a6c_delay = 0;}
                    await verzoegerung(a6c_delay);
                    if (!a6c_unterbrochen) {
                        document.getElementById("a6c_knoten2").innerHTML = a6c_knotenInhaltBA;
                        document.getElementById("a6c_knoten5").innerHTML = a6c_knotenInhaltBA;
                        await verzoegerung(500);
                        a6c_verstricheneZeit += 500;
                        document.getElementById("a6c_knotenNeu").innerHTML = a6c_knotenInhaltAB;
                        await verzoegerung(1000);
                        a6c_verstricheneZeit += 1000;
                        document.getElementById("a6c_graph_6").style.visibility = "visible";
                        document.getElementById("a6c_graph_5").style.visibility = "hidden";
                        document.getElementById("a6c_unterbrechung").style.visibility = "hidden";
                        document.getElementById("a6c_abbruch").style.visibility = "hidden";
                        document.getElementById("a6c_neustart").style =
                            "position: absolute; right: 2em; top: 1em; visibility: visible";
                        document.getElementById('a6c_infoimg1').style = 
                            "visibility: visible; position: absolute; top: 39.5em; left: 5em";
                        document.getElementById('a6c_hintergButton').style = 
                            "visibility: visible; position: absolute; top: 44.5em; left: 2em";
                    }
                }
            }
        }
    }
}

async function a7a_bildeBlockchain() {
    var a7a_abgebrochen = false;
    document.getElementById("a7a_abbruch").addEventListener("click", () => {
        a7a_abgebrochen = true;});
    document.getElementById('a7_pfeil2').style.visibility = 'visible';
    document.getElementById('a7_block2').style.visibility = 'visible';
    if (!a7a_abgebrochen) {await verzoegerung(1500);}
    document.getElementById('a7_pfeil3').style.visibility = 'visible';
    document.getElementById('a7_block3').style.visibility = 'visible';
    document.getElementById('a7_pfeil4').style.visibility = 'visible';
    document.getElementById('a7_block4').style.visibility = 'visible';
    if (!a7a_abgebrochen) {await verzoegerung(1000);}
    document.getElementById('a7_fragezeichen1').style.visibility = 'visible';
    if (!a7a_abgebrochen) {await verzoegerung(1500);}
    document.getElementById('a7_pfeil5').style.visibility = 'visible';
    document.getElementById('a7_block5').style.visibility = 'visible';
    document.getElementById('a7_pfeil6').style.visibility = 'visible';
    document.getElementById('a7_block6').style.visibility = 'visible';
    document.getElementById('a7b_startButton').style.visibility = 'visible';
    document.getElementById('a7a_abbruch').style.visibility = 'hidden';
    document.getElementById('a7a_neustart').style.visibility = 'visible';
}

async function a7b_bildeBlockchain() {
    var a7b_abgebrochen = false;
    document.getElementById("a7b_abbruch").addEventListener("click", () => {
        a7b_abgebrochen = true;
        document.getElementById("a7_fragezeichen2").style.visibility = "visible";});
    document.getElementById('a7b_abbruch').style.visibility = 'visible';
    document.getElementById('a7_fragezeichen1').style.visibility = 'hidden';
    document.getElementById('a7_haken1').style.visibility = 'visible';
    document.getElementById('a7_kreuz1').style.visibility = 'visible';
    document.getElementById('a7_block3').classList.add('gruenerHintergrund');
    document.getElementById('a7_block3Inhalt').classList.add('gruenerHintergrund');
    document.getElementById('a7_block3Target').classList.add('gruenerHintergrund');
    document.getElementById('a7_block5').classList.add('gruenerHintergrund');
    document.getElementById('a7_block5Inhalt').classList.add('gruenerHintergrund');
    document.getElementById('a7_block5Target').classList.add('gruenerHintergrund');
    if (!a7b_abgebrochen) {await verzoegerung(1500);}
    document.getElementById('a7_block8').style.visibility = 'visible';
    document.getElementById('a7_pfeil8').style.visibility = 'visible';
    if (!a7b_abgebrochen) {await verzoegerung(1500);}
    document.getElementById('a7_block7').style.visibility = 'visible';
    document.getElementById('a7_pfeil7').style.visibility = 'visible';
    document.getElementById('a7_block9').style.visibility = 'visible';
    document.getElementById('a7_pfeil9').style.visibility = 'visible';
    if (!a7b_abgebrochen) {document.getElementById('a7_fragezeichen2').style.visibility = 'visible';}
    document.getElementById('a7b_entscheidung').style.visibility = 'visible';
    document.getElementById('a7b_neustart').style.visibility = 'visible';
    document.getElementById('a7b_abbruch').style.visibility = 'hidden';
}