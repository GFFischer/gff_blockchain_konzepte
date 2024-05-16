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

/* Prüfen, ob die Eingaben den Vorgaben entsprechen (z.B. Text, Zahl, Grösse der Zahl).
Beachte! Die maximale Länge der Eingabe wird als Attribut maxlength="" dem html-Tag input mitgegeben! */

function pruefeEingabeText(eingabe) {
    var vorgabe = /^[\w\.\,\s\?\!]+$/;
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
