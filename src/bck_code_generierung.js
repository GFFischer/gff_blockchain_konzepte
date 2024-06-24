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
}