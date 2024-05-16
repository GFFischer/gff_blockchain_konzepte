/* Die Hashfunktion ist importiert, daher zunächst die Copyright-Notiz, die im Original angeklickt werden kann.
Die Funktion berechneHash gibt eine achtstelligen Zahl als String (!) zurück.*/

var notiz_copyright = "Berechnet unter Verwendung der JavaScript Implementation von üblichen Hashfunktionen, zur \
Verfügung gestellt von </br>&copy; 2012-2017, Tomas Aparicio und </br>&copy; 1999-2012, Paul Johnston, Angel Marin, \
Jeremy Lin. </br>Quelle: <a href='https://github.com/h2non/jshashes'>GitHub</a>."

function berechneHash(eingabe) {
    var hashwert = new Hashes.SHA256().hex(eingabe).toLowerCase().substring(0, 8);
    return hashwert;
}

/* Umrechnungen von hexadezimalen in binäre in dezimale Zahlen und umgekehrt.
Die Funktion umwandleDezInHashwert ist dafür da, auch Zahlen, die kleiner als 0x10000000 sind, führende Nullen
hinzuzufügen, und Zahlen, die grösser als 0xffffffff sind, durch die Modulo-Operateion zu verkleinern, damit die 
return-Werte auf jeden Fall achtstellig sind. */

function umwandleInDez(zahl, basis) {
    return parseInt(zahl, basis);
}

function umwandleDez(dez_zahl, basis) {
    return dez_zahl.toString(basis);
}

function umwandleDezInHashwert(dez_zahl) {
    dez_zahl = dez_zahl % 4294967295;
    var temp = umwandleDez(dez_zahl, 16);
    laenge = temp.length;
    if (laenge < 8) {
        for (var i = 0; i < (8 - laenge); i++) {
            temp = "0" + temp;
        }
    }
    return temp;
}

function umwandleHexInBin(hex_zahl) {
    return umwandleInDez(hex_zahl, 16).toString(2);
}

function umwandleBinInHex(bin_zahl) {
    return umwandleInDez(bin_zahl, 2).toString(16);
}

// Zeitstempel inklusive Millisekunden als String

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


/* Hier die eigentlichen Skriptzeilen für das Mining. Zunächst werden alle Variablen, die für die Transkation
benötigt werden, mit einem Wert belegt.
Beachte: hash_inhalt1 und hash_inhalt2 müssen sich im Original auf den tatsächlichen Inhalt des Blocks beziehen. */

var zeit1 = zeitstempel();
var nonce1 = "00000001";
var hash_vorheriger_block1 = berechneHash("Hash-Referenz vorheriger Block");
var hash_inhalt1 = berechneHash("Hash-Referenz Inhalt");
var target1 = "0fffffff"
var hashBlock1 = berechneHash(hash_inhalt1 + hash_vorheriger_block1 + zeit1 + target1 + nonce1);

var zeit2 = zeitstempel();
var nonce2 = "5264c509";
var hash_vorheriger_block2 = hashBlock1;
var hash_inhalt2 = berechneHash("Hash-Referenz Inhalt2");
var target2 = "00ffffff"
var hashBlock2 = berechneHash(hash_inhalt2 + hash_vorheriger_block2 + zeit2 + target2 + nonce2);

/* Die Verzögerung wird beim Mining benötigt, dass die neue Nonce und der sich daraus ergebende Hashwert zeitlich
ein wenig verzögert (um 200 Millisekunden) angezeigt werden. */

const verzoegerung = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/* Die Funktion mining hat deshalb so viele Parameter, damit sie auf verschiedene Transaktionen angewendet werden
kann. Bei der letzten Transaktion (de facto der zweiten), für die das Mining in der Animation durchgeführt werden
soll, sind nextStartButtonID und nextTransaktionID die IDs der aktuellen Transaktion, nicht der nächsten.*/

function mining(nonceID, nonce, hashID, hashBlock, target, zeit, hashInhalt, 
        hashVorherigerBlock, intervall, abbruchID, haken, nextStartButtonID, nextTransaktionID) {
    document.getElementById(hashID).innerHTML = hashBlock;
    document.getElementById(nonceID).innerHTML = nonce;
    var targetZahl = umwandleInDez(target, 16);
    var nonce_zahl = umwandleInDez(nonce, 16);
    var hashBlockDez = umwandleInDez(hashBlock, 16);
    if (hashBlockDez < targetZahl) {
        document.getElementById(haken).style = "visibility: visible";
        document.getElementById(nextTransaktionID).style = "visibility: visible";
        document.getElementById(nextStartButtonID).style = "position: absolute; right: 3em; top: 3em; visibility: visible";
        return;
        } 
    async function aendereWert() {
        document.getElementById(abbruchID).addEventListener("click", function() {clearInterval(wertNeu)});  
        nonce_zahl += 1;
        nonce = umwandleDezInHashwert(nonce_zahl);
        document.getElementById(nonceID).innerHTML = nonce;
        hashBlock = berechneHash(hashInhalt + hashVorherigerBlock + zeit + target + nonce);
        hashBlockDez = umwandleInDez(hashBlock, 16);
        await verzoegerung(200);
        document.getElementById(hashID).innerHTML = hashBlock;
        if (hashBlockDez < targetZahl) {
            clearInterval(wertNeu);
            document.getElementById(abbruchID).style = "visibility: hidden";
            document.getElementById(haken).style = "visibility: visible";
            document.getElementById(nextTransaktionID).style = "visibility: visible";
            document.getElementById(nextStartButtonID).style = "position: absolute; right: 3em; top: 3em; visibility: visible";
        }
    }
    var wertNeu = setInterval(aendereWert, intervall);
    
}