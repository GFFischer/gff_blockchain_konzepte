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