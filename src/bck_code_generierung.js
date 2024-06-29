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

async function a1d_bewegteBloecke() {
    
    const a1d_startzeit = Date.now();
    var a1d_aktuelleZeit = a1d_startzeit;
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
        a1d_aktuelleZeit = Date.now();
        document.getElementById("a1d_fortsetzung").style="position: absolute; right: 25.9em; top: 1em; visibility: visible";});
    
    document.getElementById("a1d_fortsetzung").addEventListener("click", () => {
        a1d_unterbrochen = false;
        a1d_verstricheneZeit = a1d_aktuelleZeit - a1d_startzeit;
        document.getElementById("a1d_fortsetzung").style="visibility: hidden";
        a1d_bewegteBloecke()});

    document.getElementById("a1d_neustart").addEventListener("click", () => {
        a1d_unterbrochen = true;
        a1d_verstricheneZeit = 0;
        document.getElementById("a1d_unterbrechung").style = 
            "position: absolute; right: 13.3em; top: 1em; visibility: visible";
        document.getElementById("a1d_abbruch").style="position: absolute; right: 2em; top: 1em; visibility: visible";
        document.getElementById("a1d_fortsetzung").style="visibility: visible";
        document.getElementById("a1d_neustart").style="visibility: hidden";
        document.getElementById("a1d_infoimg1").style="visibility:hidden";
        document.getElementById("a1d_hintergButton").style ="visibility: hidden";
        document.getElementById("a1d_block1Inhalt").style="position: absolute; left: 2.5em; top: 16.4em;";
        document.getElementById("a1d_block2Inhalt").style="position: absolute; left: 16em; top: 16.4em;";
        document.getElementById("a1d_block3Inhalt").style="position: absolute; left: 29.5em; top: 16.4em;";
        document.getElementById("a1d_block4Inhalt").style="position: absolute; left: 43em; top: 16.4em;";
        document.getElementById("a1d_block5Inhalt").style="position: absolute; left: 56.5em; top: 16.4em;";
        document.getElementById("a1d_pfeil1").style.visibility = "hidden";
        document.getElementById("a1d_pfeil2").style.visibility = "hidden";
        document.getElementById("a1d_pfeil3").style.visibility = "hidden";
        document.getElementById("a1d_pfeil4").style.visibility = "hidden";
        document.getElementById("a1d_pfeil5").style.visibility = "hidden";
        document.getElementById("a1d_block1HashInhalt").style.visibility = "hidden";
        document.getElementById("a1d_block2HashInhalt").style.visibility = "hidden";
        document.getElementById("a1d_block3HashInhalt").style.visibility = "hidden";
        document.getElementById("a1d_block4HashInhalt").style.visibility = "hidden";
        document.getElementById("a1d_block5HashInhalt").style.visibility = "hidden";
        document.getElementById('a1d_block1').style.height = '19em';
        document.getElementById('a1d_block2').style.height = '19em';
        document.getElementById('a1d_block3').style.height = '19em';
        document.getElementById('a1d_block4').style.height = '19em';
        document.getElementById('a1d_block5').style.height = '19em';
        a1d_bewegteBloecke();});

    bewegeObjekt("a1d_block1Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block1, posY_Block1, 0, 0.25, 0, 26.5);
    document.getElementById('a1d_block1').style.height = '16em';
    await verzoegerung(2500 - a1d_verstricheneZeit);
    document.getElementById('a1d_block1HashInhalt').style =
        'position: absolute; left: 2.5em; top: 16.4em; visibility: visible';
    document.getElementById('a1d_pfeil1').style = 
        'position: absolute; top:20.8em; left: 7.5em; height: 6.5em; visibility: visible';
    await verzoegerung(500);
    if (!a1d_unterbrochen) {
        bewegeObjekt("a1d_block2Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block2, posY_Block2, 0, 0.25, 0, 26.5);
        document.getElementById('a1d_block2').style.height = '16em';
        await verzoegerung(2500 - a1d_verstricheneZeit);
        document.getElementById('a1d_block2HashInhalt').style =
            'position: absolute; left: 16em; top: 16.4em; visibility: visible';
        document.getElementById('a1d_pfeil2').style = 
            'position: absolute; top:20.8em; left: 21em; height: 6.5em; visibility: visible';
        await verzoegerung(500);
        if (!a1d_unterbrochen) {
            bewegeObjekt("a1d_block3Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block3, posY_Block3, 0, 0.25, 0, 26.5);
            document.getElementById('a1d_block3').style.height = '16em';
            await verzoegerung(2500 - a1d_verstricheneZeit);
            document.getElementById('a1d_block3HashInhalt').style =
                'position: absolute; left: 29.5em; top: 16.4em; visibility: visible';
            document.getElementById('a1d_pfeil3').style = 
                'position: absolute; top:20.8em; left: 34.5em; height: 6.5em; visibility: visible';
            await verzoegerung(500);
            if (!a1d_unterbrochen) {
                bewegeObjekt("a1d_block4Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block4, posY_Block4, 0, 0.25, 0, 26.5);
                document.getElementById('a1d_block4').style.height = '16em';
                await verzoegerung(2500 - a1d_verstricheneZeit);
                document.getElementById('a1d_block4HashInhalt').style =
                    'position: absolute; left: 43em; top: 16.4em; visibility: visible';
                document.getElementById('a1d_pfeil4').style = 
                    'position: absolute; top:20.8em; left: 48em; height: 6.5em; visibility: visible';
                await verzoegerung(500);
                if (!a1d_unterbrochen) {
                    bewegeObjekt("a1d_block5Inhalt", "a1d_unterbrechung", "a1d_abbruch", "a1d_neustart", posX_Block5, posY_Block5, 0, 0.25, 0, 26.5);
                    document.getElementById('a1d_block5').style.height = '16em';
                    await verzoegerung(2500);
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
                + a2b_privateSchluessel[i].substr(19,6) + "</td><td class='tabFeld' id='guthaben" + i +"'></td></tr>";
        } 
    }
    htmlCode += "</table>";
    document.getElementById("a3a_tabelleEigeneAdressen").innerHTML = htmlCode;
}

function a3a_eingabeGuthaben() {
    var htmlCode = "<p> Gib die Kontostände für deine Adressen ein: <br> (0 bis 999 SiC) </p>";
    for (var i = 0; i < 3; i++) {
        if (a2b_privateSchluessel[i] != "") {
            htmlCode += "<p><label>Adresse " + (i + 1) + ":</p><input id='kontostand" + (i + 1) + "' \
            type='text' maxlength='3'></label> SiC"
        }
    }
    if (a2b_privateSchluessel[1] == "") {
        htmlCode += "<button id='a3a_formularButton' class='formularbutton' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                a3a_guthabenAdressen[0] = wert1;\
                document.getElementById(`guthaben0`).innerHTML = wert1 + ` SiC`;\
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
                document.getElementById(`guthaben0`).innerHTML = wert1 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert2)) {\
                a3a_guthabenAdressen[1] = wert2;\
                document.getElementById(`guthaben1`).innerHTML = wert2 + ` SiC`;\
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
                document.getElementById(`guthaben0`).innerHTML = wert1 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert2)) {\
                a3a_guthabenAdressen[1] = wert2;\
                document.getElementById(`guthaben1`).innerHTML = wert2 + ` SiC`;\
            } else {\
                document.getElementById(`a3a_warnung`).style=`visibility: visible; top: 7em; right: 6em; z-index: 83`;}\
            if (pruefeEingabeZahl(wert3)) {\
                a3a_guthabenAdressen[2] = wert3;\
                document.getElementById(`guthaben2`).innerHTML = wert3 + ` SiC`;\
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