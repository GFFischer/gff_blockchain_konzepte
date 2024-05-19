/* Diese Datei erweitert jene aus dem Ordner peer-to-peer_system!

Zunächst die Funktion für die Navigation */

var anim_aktuell = 1;

function oeffne_animation(nummer_oeffnen) {
    oeffne_ID = "anim_" + nummer_oeffnen;
    schliesse_ID = "anim_" + anim_aktuell;
    document.getElementById(oeffne_ID).style="display: inline";
    if (nummer_oeffnen != anim_aktuell) {
        document.getElementById(schliesse_ID).style="display: none";
    }
    anim_aktuell = nummer_oeffnen;
}


/* Die Funktion zufallsindizes wählt zufällig eine bestimmte Anzahl (Paramweter anzahl) an zufälligen Indizes eines 
Arrays (Parameter array) und gibt diese unsortiert als neues Array zurück. Über diese Indizes kann dann auf die 
entsprechenden Elemente in dem als Parameter übergebenen Array zugegriffen und so eine zufällige Auswahl von Werten
aus einem Array von Werten realisert werden. Durch die if-Anweisung wird sichergestellt, dass kein Index im 
zurückgegebenen Array mehrfach vorkommt. */

"use strict";

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

var nameKnotenNeu = "Satoshi";
var nameAuswahl = ["Manuel", "Sven", "Daniel", "Alphonso", "Noussair", "Raphael", "Eric", "Matthijs", "Dayot", "Minjae", 
    "Joshua", "Bouna", "Sacha", "Tarek", "Aleksandar", "Konrad", "Leon", "Jamal", "Thomas", "Serge", "Leroy", 
    "Kingsley", "Bryan", "Mathys", "Eric Maxim", "Harry"];
var indizesFuerNamen = zufallsindizes(10, nameAuswahl);

function getName(index) { return nameAuswahl[indizesFuerNamen[index]]; }

var nameKnoten1 = getName(0);
var nameKnoten2 = getName(1);
var nameKnoten3 = getName(2);
var nameKnoten4 = getName(3)
var nameKnoten5 = getName(4);
var nameKnoten6 = getName(5);
var nameKnoten7 = getName(6);
var nameKnoten8 = getName(7);
var nameKnoten9 = getName(8);
var nameKnoten10 = getName(9);

/* Weil ein Schlüsselpaar (= eine Adresse in der Blockchain) aus den drei Werten e, d und n besteht, wird hier eine
Klasse Adresse geschaffen, um komplette Schlüsselpaare in einem Array speichern zu können. */

class Adresse {
    constructor(e, d, n) {
        this.e = e;
        this.d = d;
        this.n = n;
    }
}

/* In den nächsten 201 Zeilen wird der Array adressenAuswahl erstellt uen mit 200 Schlüsselpaaren gefüllt. Die
Schlüsselpaare dienen zur Auswahl für die 11 Knoten des peer-to-peer-Systems, wo für jedne Knoten zufällig 1 - 3 
Adressen ausgewählt werden. Sie wurden händisch erstellt und werden daher Zeile für Zeile in den Array 
eingegeben. */

var adressenAuswahl = new Array();
adressenAuswahl[0] = new Adresse(51, 151, 253);
adressenAuswahl[1] = new Adresse(61, 101, 253);
adressenAuswahl[2] = new Adresse(71, 31, 253);
adressenAuswahl[3] = new Adresse(61, 13, 299);
adressenAuswahl[4] = new Adresse(71, 119, 299);
adressenAuswahl[5] = new Adresse(61, 325, 377);
adressenAuswahl[6] = new Adresse(51, 283, 391);
adressenAuswahl[7] = new Adresse(61, 277, 391);
adressenAuswahl[8] = new Adresse(71, 119, 391);
adressenAuswahl[9] = new Adresse(51, 123, 493);
adressenAuswahl[10] = new Adresse(61, 213, 493);
adressenAuswahl[11] = new Adresse(71, 183, 493);
adressenAuswahl[12] = new Adresse(61, 181, 527);
adressenAuswahl[13] = new Adresse(71, 311, 527);
adressenAuswahl[14] = new Adresse(61, 13, 437);
adressenAuswahl[15] = new Adresse(71, 251, 437);
adressenAuswahl[16] = new Adresse(61, 157, 551);
adressenAuswahl[17] = new Adresse(61, 301, 589);
adressenAuswahl[18] = new Adresse(71, 251, 589);
adressenAuswahl[19] = new Adresse(61, 85, 703);
adressenAuswahl[20] = new Adresse(71, 575, 703);
adressenAuswahl[21] = new Adresse(51, 459, 667);
adressenAuswahl[22] = new Adresse(61, 101, 667);
adressenAuswahl[23] = new Adresse(71, 295, 667);
adressenAuswahl[24] = new Adresse(61, 541, 713);
adressenAuswahl[25] = new Adresse(71, 251, 713);
adressenAuswahl[26] = new Adresse(61, 13, 851);
adressenAuswahl[27] = new Adresse(71, 647, 851);
adressenAuswahl[28] = new Adresse(51, 811, 943);
adressenAuswahl[29] = new Adresse(61, 101, 943);
adressenAuswahl[30] = new Adresse(71, 471, 943);
adressenAuswahl[31] = new Adresse(61, 661, 899);
adressenAuswahl[32] = new Adresse(61, 661, 1073);
adressenAuswahl[33] = new Adresse(51, 571, 1189);
adressenAuswahl[34] = new Adresse(61, 661, 1189);
adressenAuswahl[35] = new Adresse(71, 631, 1189);
adressenAuswahl[36] = new Adresse(61, 829, 1247);
adressenAuswahl[37] = new Adresse(71, 911, 1247);
adressenAuswahl[38] = new Adresse(61, 301, 1147);
adressenAuswahl[39] = new Adresse(71, 791, 1147);
adressenAuswahl[40] = new Adresse(61, 1141, 1271);
adressenAuswahl[41] = new Adresse(71, 1031, 1271);
adressenAuswahl[42] = new Adresse(61, 661, 1333);
adressenAuswahl[43] = new Adresse(61, 181, 1457);
adressenAuswahl[44] = new Adresse(71, 311, 1457);
adressenAuswahl[45] = new Adresse(71, 791, 1517);
adressenAuswahl[46] = new Adresse(61, 1165, 1591);
adressenAuswahl[47] = new Adresse(71, 575, 1591);
adressenAuswahl[48] = new Adresse(61, 733, 1739);
adressenAuswahl[49] = new Adresse(71, 863, 1739);
adressenAuswahl[50] = new Adresse(61, 1381, 1961);
adressenAuswahl[51] = new Adresse(71, 791, 1961);
adressenAuswahl[52] = new Adresse(51, 1371, 1927);
adressenAuswahl[53] = new Adresse(61, 181, 1927);
adressenAuswahl[54] = new Adresse(71, 311, 1927);
adressenAuswahl[55] = new Adresse(51, 571, 2173);
adressenAuswahl[56] = new Adresse(61, 341, 2173);
adressenAuswahl[57] = new Adresse(71, 791, 2173);
adressenAuswahl[58] = new Adresse(51, 91, 2419);
adressenAuswahl[59] = new Adresse(61, 1141, 2419);
adressenAuswahl[60] = new Adresse(71, 1111, 2419);
adressenAuswahl[61] = new Adresse(61, 1837, 2021);
adressenAuswahl[62] = new Adresse(71, 1415, 2021);
adressenAuswahl[63] = new Adresse(61, 2005, 2279);
adressenAuswahl[64] = new Adresse(71, 1415, 2279);
adressenAuswahl[65] = new Adresse(61, 1837, 2537);
adressenAuswahl[66] = new Adresse(71, 995, 2537);
adressenAuswahl[67] = new Adresse(61, 661, 2623);
adressenAuswahl[68] = new Adresse(51, 1923, 2491);
adressenAuswahl[69] = new Adresse(61, 549, 2491);
adressenAuswahl[70] = new Adresse(71, 1415, 2491);
adressenAuswahl[71] = new Adresse(51, 1831, 2773);
adressenAuswahl[72] = new Adresse(61, 1837, 2773);
adressenAuswahl[73] = new Adresse(71, 1691, 2773);
adressenAuswahl[74] = new Adresse(61, 181, 2867);
adressenAuswahl[75] = new Adresse(71, 311, 2867);
adressenAuswahl[76] = new Adresse(61, 2389, 3149);
adressenAuswahl[77] = new Adresse(71, 1967, 3149);
adressenAuswahl[78] = new Adresse(51, 1715, 3127);
adressenAuswahl[79] = new Adresse(61, 445, 3127);
adressenAuswahl[80] = new Adresse(71, 2039, 3127);
adressenAuswahl[81] = new Adresse(61, 1381, 3233);
adressenAuswahl[82] = new Adresse(71, 791, 3233);
adressenAuswahl[83] = new Adresse(61, 1069, 3551);
adressenAuswahl[84] = new Adresse(71, 3287, 3551);
adressenAuswahl[85] = new Adresse(51, 571, 3763);
adressenAuswahl[86] = new Adresse(61, 3461, 3763);
adressenAuswahl[87] = new Adresse(71, 2871, 3763);
adressenAuswahl[88] = new Adresse(61, 1141, 3599);
adressenAuswahl[89] = new Adresse(71, 3431, 3599);
adressenAuswahl[90] = new Adresse(61, 3577, 3953);
adressenAuswahl[91] = new Adresse(71, 647, 3953);
adressenAuswahl[92] = new Adresse(51, 1831, 4189);
adressenAuswahl[93] = new Adresse(61, 3461, 4189);
adressenAuswahl[94] = new Adresse(71, 3431, 4189);
adressenAuswahl[95] = new Adresse(61, 2533, 4307);
adressenAuswahl[96] = new Adresse(71, 647, 4307);
adressenAuswahl[97] = new Adresse(61, 3181, 4087);
adressenAuswahl[98] = new Adresse(71, 2231, 4087);
adressenAuswahl[99] = new Adresse(61, 2341, 4331);
adressenAuswahl[100] = new Adresse(71, 3431, 4331);
adressenAuswahl[101] = new Adresse(61, 3541, 4453);
adressenAuswahl[102] = new Adresse(71, 791, 4453);
adressenAuswahl[103] = new Adresse(61, 1381, 4819);
adressenAuswahl[104] = new Adresse(71, 791, 4819);
adressenAuswahl[105] = new Adresse(61, 3181, 4757);
adressenAuswahl[106] = new Adresse(71, 911, 4757);
adressenAuswahl[107] = new Adresse(61, 3973, 4891);
adressenAuswahl[108] = new Adresse(71, 3815, 4891);
adressenAuswahl[109] = new Adresse(61, 2785, 5293);
adressenAuswahl[110] = new Adresse(71, 5003, 5293);
adressenAuswahl[111] = new Adresse(61, 1597, 5561);
adressenAuswahl[112] = new Adresse(71, 2363, 5561);
adressenAuswahl[113] = new Adresse(61, 661, 5183);
adressenAuswahl[114] = new Adresse(61, 5281, 5609);
adressenAuswahl[115] = new Adresse(71, 4691, 5609);
adressenAuswahl[116] = new Adresse(51, 2251, 5893);
adressenAuswahl[117] = new Adresse(61, 941, 5893);
adressenAuswahl[118] = new Adresse(71, 1051, 5893);
adressenAuswahl[119] = new Adresse(51, 1691, 6319);
adressenAuswahl[120] = new Adresse(61, 101, 6319);
adressenAuswahl[121] = new Adresse(71, 3991, 6319);
adressenAuswahl[122] = new Adresse(61, 1381, 5767);
adressenAuswahl[123] = new Adresse(71, 791, 5767);
adressenAuswahl[124] = new Adresse(61, 4549, 6059);
adressenAuswahl[125] = new Adresse(71, 4823, 6059);
adressenAuswahl[126] = new Adresse(61, 2389, 6497);
adressenAuswahl[127] = new Adresse(71, 2231, 6497);
adressenAuswahl[128] = new Adresse(61, 1813, 7081);
adressenAuswahl[129] = new Adresse(71, 1655, 7081);
adressenAuswahl[130] = new Adresse(61, 3565, 6557);
adressenAuswahl[131] = new Adresse(71, 5315, 6557);
adressenAuswahl[132] = new Adresse(61, 4501, 7031);
adressenAuswahl[133] = new Adresse(71, 3287, 7031);
adressenAuswahl[134] = new Adresse(61, 6997, 7663);
adressenAuswahl[135] = new Adresse(71, 4535, 7663);
adressenAuswahl[136] = new Adresse(51, 283, 7387);
adressenAuswahl[137] = new Adresse(61, 5205, 7387);
adressenAuswahl[138] = new Adresse(71, 4167, 7387);
adressenAuswahl[139] = new Adresse(61, 2583, 8051);
adressenAuswahl[140] = new Adresse(71, 887, 8051);
adressenAuswahl[141] = new Adresse(61, 277, 8633);
adressenAuswahl[142] = new Adresse(71, 119, 8633);
adressenAuswahl[143] = new Adresse(51, 151, 781);
adressenAuswahl[144] = new Adresse(61, 241, 781);
adressenAuswahl[145] = new Adresse(71, 631, 781);
adressenAuswahl[146] = new Adresse(61, 601, 869);
adressenAuswahl[147] = new Adresse(71, 11, 869);
adressenAuswahl[148] = new Adresse(61, 85, 949);
adressenAuswahl[149] = new Adresse(71, 791, 949);
adressenAuswahl[150] = new Adresse(61, 445, 1027);
adressenAuswahl[151] = new Adresse(71, 791, 1027);
adressenAuswahl[152] = new Adresse(51, 571, 1207);
adressenAuswahl[153] = new Adresse(71, 631, 1207);
adressenAuswahl[154] = new Adresse(71, 503, 1241);
adressenAuswahl[155] = new Adresse(61, 757, 1343);
adressenAuswahl[156] = new Adresse(71, 791, 1343);
adressenAuswahl[157] = new Adresse(61, 85, 1387);
adressenAuswahl[158] = new Adresse(71, 1223, 1387);
adressenAuswahl[159] = new Adresse(61, 1381, 1501);
adressenAuswahl[160] = new Adresse(71, 791, 1501);
adressenAuswahl[161] = new Adresse(51, 151, 1633);
adressenAuswahl[162] = new Adresse(61, 101, 1633);
adressenAuswahl[163] = new Adresse(71, 911, 1633);
adressenAuswahl[164] = new Adresse(61, 805, 1679);
adressenAuswahl[165] = new Adresse(71, 647, 1679);
adressenAuswahl[166] = new Adresse(61, 1069, 1817);
adressenAuswahl[167] = new Adresse(71, 1571, 1817);
adressenAuswahl[168] = new Adresse(51, 1691, 2059);
adressenAuswahl[169] = new Adresse(61, 1221, 2059);
adressenAuswahl[170] = new Adresse(71, 911, 2059);
adressenAuswahl[171] = new Adresse(71, 1079, 2117);
adressenAuswahl[172] = new Adresse(61, 2005, 2291);
adressenAuswahl[173] = new Adresse(71, 1415, 2291);
adressenAuswahl[174] = new Adresse(61, 241, 2201);
adressenAuswahl[175] = new Adresse(71, 1331, 2201);
adressenAuswahl[176] = new Adresse(61, 1381, 2263);
adressenAuswahl[177] = new Adresse(71, 791, 2263);
adressenAuswahl[178] = new Adresse(61, 1381, 2449);
adressenAuswahl[179] = new Adresse(71, 791, 2449);
adressenAuswahl[180] = new Adresse(61, 85, 2701);
adressenAuswahl[181] = new Adresse(71, 2519, 2701);
adressenAuswahl[182] = new Adresse(51, 611, 913);
adressenAuswahl[183] = new Adresse(61, 121, 913);
adressenAuswahl[184] = new Adresse(71, 231, 913);
adressenAuswahl[185] = new Adresse(51, 811, 979);
adressenAuswahl[186] = new Adresse(61, 101, 979);
adressenAuswahl[187] = new Adresse(71, 471, 979);
adressenAuswahl[188] = new Adresse(71, 311, 1067);
adressenAuswahl[189] = new Adresse(61, 613, 1079);
adressenAuswahl[190] = new Adresse(71, 887, 1079);
adressenAuswahl[191] = new Adresse(61, 277, 1157);
adressenAuswahl[192] = new Adresse(71, 119, 1157);
adressenAuswahl[193] = new Adresse(71, 503, 1261);
adressenAuswahl[194] = new Adresse(51, 283, 1411);
adressenAuswahl[195] = new Adresse(61, 1269, 1411);
adressenAuswahl[196] = new Adresse(71, 887, 1411);
adressenAuswahl[197] = new Adresse(51, 635, 1513);
adressenAuswahl[198] = new Adresse(61, 277, 1513);
adressenAuswahl[199] = new Adresse(71, 119, 1513);

/* Nun wird ein Array indizesFuerAdressen geschaffen, um 33 Zahlen ohne Dopplungen in zufälliger Reihenfolge zu
speichern, die jeweils einem Index entsprechen, um damit aus dem Array adressenAuswahl beim Starten der Applikation
33 Adressen auswählen zu können, die maximal auf die 11 Knoten verteilt werden können. */

var indizesFuerAdressen = zufallsindizes(33, adressenAuswahl);

/* Die Funktion getAdresse schafft einen String der Form "e:71, n:151" und gibt damit einen öffentlichen Schlüssel
(= eine Adresse) aus dem Array adressenAuswahl zurück, wobei der Parameter index sich auf den Array
indizesFuerAdressen bezieht. Der Wert, der dort gefunden wird, bestimmt, welche Adresse aus dem Array
adressenAuswahl ausgelesen wird. */

function getAdresse(index) { 
    return "e=" + adressenAuswahl[indizesFuerAdressen[index]].e + 
        ", n=" + adressenAuswahl[indizesFuerAdressen[index]].n; 
}

/* In den folgenden Zeilen werden in einem neuen Array adressenKnoten alle Strings der Form "Kx: e:71, n:151" gespeichert,
die als Adressen für die 11 Knoten dienen. Die ersten drei Indizes sind für den neuen Knoten reserviert, den der User
in der Applikation schaffen kann. Danach gehören jeweils 3 Indizes (Adressen) zu einem Knoten. Die Adresse K1 wird auf
jeden Fall vergeben, danach wird per random entschieden, ob K2 und K3 vergeben werden oder ein leerer String im
Array gespeichert wird. */

var adressenKnoten = new Array();
adressenKnoten[0] = "K1: " + getAdresse(0);
adressenKnoten[1] = "K2: " + getAdresse(1);
adressenKnoten[2] = "K3: " + getAdresse(2);
for (var i = 3; i <= 31; i += 3) {
    adressenKnoten[i] = "K1: " + getAdresse(i);
    var anzahlAdr = Math.floor(Math.random() * 3 + 1);
    if (anzahlAdr == 1) {
        adressenKnoten[i + 1] = "";
        adressenKnoten[i + 2] = "";
    } else if (anzahlAdr == 2) {
        adressenKnoten[i + 1] = "K2: " + getAdresse(i + 1);
        adressenKnoten[i + 2] = "";
    } else {
        adressenKnoten[i + 1] = "K2: " + getAdresse(i + 1);
        adressenKnoten[i + 2] = "K3: " + getAdresse(1 + 2);
    }
}

/* Das folgende Array speichert 33 zufällige Werte von 0 bis 999, die als Guthaben für die verschiedenen Adressen
gebraucht werden */

var guthabenAdressen = new Array();
for (var k = 0; k < 33; k++) {
    guthabenAdressen[k] = Math.floor(Math.random() * 1000);
}

/* Die folgenden Zeilen schaffen ein Array für die drei privaten Schlüssel für den neuen Knoten, die in der Form 
"Kpriv: d=233" gespeichert werden. Die Funktion aendereAnzahlSchluessel wird ausgeführt, wenn durch den User per
Eingabe die Anzahl der zu erstellenden Adressen ausgewählt wird.
Die Funktion pruefeEingabe1bis3 ist dafür da, dass der User in das Formularfeld tatsächlich nur eine ganze Zahl
von 1 bis 3 eingeben kann. */

var privateSchluessel = new Array();
privateSchluessel[0] = "K0priv: d=" + adressenAuswahl[indizesFuerAdressen[0]].d;
privateSchluessel[1] = "K1priv: d=" + adressenAuswahl[indizesFuerAdressen[1]].d;
privateSchluessel[2] = "K2priv: d=" + adressenAuswahl[indizesFuerAdressen[2]].d;

function aendereAnzahlSchluessel(zahl) {
    adressenKnoten[1] = "K2: " + getAdresse(1);
    adressenKnoten[2] = "K3: " + getAdresse(2);
    privateSchluessel[1] = "K1priv: d=" + adressenAuswahl[indizesFuerAdressen[1]].d;
    privateSchluessel[2] = "K2priv: d=" + adressenAuswahl[indizesFuerAdressen[2]].d;
    if (zahl == 1) {
        adressenKnoten[1] = "";
        adressenKnoten[2] = "";
        privateSchluessel[1] = "";
        privateSchluessel[2] = "";
    } else if (zahl == 2) {
        adressenKnoten[2] = "";
        privateSchluessel[2] = "";
    }
}

function pruefeEingabe1bis3(eingabe) {
    var vorgabe = /^[123]$/;
    return vorgabe.test(eingabe);
}

/* Die Funktion tabelleEigeneAdressen erstellt einen String mit dem html-Code für die Tabelle der eigenen Adressen
des Users. Das ist notwendig, damit die Anzeige aktualisiert werden kann, wenn der User in einer anderen Animation
die Anzahl der eigenen Adressen ändert.
Die Funktion tabelleEigeneAdressenOhneSiC tut das gleiche, nur bleiben die Felder für die Eingabe der Kontostände
des Users leer.
Die Funktion pruefeEingabeZahl prüft, ob auch tatsächlich eine Zahl eingegeben worden ist.
  */

function tabelleEigeneAdressen() {
    var htmlCode = "<table class='adressentabelle'><tr><th class='feld'>Eigene Adressen</th><th class='feld'>\
    Key privat</th><th class='feld'>Kontostand</th></tr>";
    for (var i = 0; i < 3; i++) {
        if (privateSchluessel[i] != "") {
            htmlCode += "<tr><td class='feld randlos'>" + getAdresse(i) + "</td><td class='feld randlos'>" 
                + privateSchluessel[i].substr(8,6) + "</td><td class='feld randlos'>" + guthabenAdressen[i] 
                + " SiC</td></tr>";
        } 
    }
    return htmlCode + "</table>";
}

function tabelleEigeneAdressenOhneSic() {
    var htmlCode = "<table class='adressentabelle'><tr><th class='feld'>Eigene Adressen</th><th class='feld'>\
    Key privat</th><th class='feld'>Kontostand</th></tr>";
    for (var i = 0; i < 3; i++) {
        if (privateSchluessel[i] != "") {
            htmlCode += "<tr><td class='feld randlos'>" + getAdresse(i) + "</td><td class='feld randlos'>" 
                + privateSchluessel[i].substr(8,6) + "</td><td id='guthaben" + i + "' class='feld randlos'></td></tr>";
        } 
    }
    return htmlCode + "</table>";
}

function pruefeEingabeZahl(eingabe) {
    var vorgabe = /^\d+$/;
    return vorgabe.test(eingabe);
}

/* Die Funtion eingabeGuthaben erstellt den html-Code und innerhalb dieses html-Codes, indem ein Button erstellt
wird, wieder recht umfangreichen JS-Code, der beim Clicken des Buttons ausgeführt werden soll, alles für das 
Eingabeformular der Guthaben in anim_3. Es hat viele Abhängigkeiten, weshalb der Code sehr umfangreich geworden ist:
1. Dem User sollen nur so viele Eingabefelder zum Eingeben von Guthaben angezeigt werden, wie er Adressen in anim_2
   ausgewählt hat.
2. Der OK-Button soll abhängig davon entweder 1, 2, oder 3 Eingaben prüfen. 
3. Ein Warnhinweis soll erscheinen wenn in einem der max. 3 Eingaben keine Zahl von 0 - 999 eingegeben worden ist.
4. Das Formular soll erst wieder unsichtbar werden, wenn in alle 1, 2 oder 3 Eingaben eine Zahl von 0 - 999 
   eingegeben worden ist.
Beachte: Im Original muss das Element mit der ID warnung im html-Code anders definiert werden, nämlich erstens
optisch (andere CSS-Klasse) und zweitens mit einem OK-Button, das es unsichtbar macht, und drittens soll es,
während es angezeigt wird, das Eingabeformular zumindest grossteils überdecken.*/

function eingabeGuthaben() {
    var htmlCode = "Geben Sie die Kontostände für Ihre Adressen ein";
    for (var i = 0; i < 3; i++) {
        if (privateSchluessel[i] != "") {
            htmlCode += "<br><label>Adresse " + (i + 1) + ":  <input id='kontostand" + (i + 1) + "' \
            class='schrift_einheitsgroesse' type='text' maxlength='3'></label>"
        }
    }
    if (privateSchluessel[1] == "") {
        htmlCode += "<br><button id='submitButton' class='schrift_einheitsgroesse' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                guthabenAdressen[0] = wert1;\
                document.getElementById(`guthaben0`).innerHTML = wert1 + ` SiC`;\
                document.getElementById(`formularb`).style=`visibility: hidden`;\
            } else {\
                document.getElementById(`warnung`).style=`position: fixed; top: 8em; right: 28em; visibility: visible`;\
            }'>OK</button>";
    } else if (privateSchluessel[2] == "") {
        htmlCode += "<br><button id='submitButton' class='schrift_einheitsgroesse' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            var wert2 = document.getElementById(`kontostand2`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                guthabenAdressen[0] = wert1;\
                document.getElementById(`guthaben0`).innerHTML = wert1 + ` SiC`;\
            } else {\
                document.getElementById(`warnung`).style=`position: fixed; top: 8em; right: 28em; visibility: visible`;}\
            if (pruefeEingabeZahl(wert2)) {\
                guthabenAdressen[1] = wert2;\
                document.getElementById(`guthaben1`).innerHTML = wert2 + ` SiC`;\
            } else {\
                document.getElementById(`warnung`).style=`position: fixed; top: 8em; right: 28em; visibility: visible`;}\
            if (pruefeEingabeZahl(wert1) && pruefeEingabeZahl(wert2)) {\
                document.getElementById(`formularb`).style=`visibility: hidden`;\
            }'>OK</button>";
    } else {
        htmlCode += "<br><button id='submitButton' class='schrift_einheitsgroesse' onclick='\
            var wert1 = document.getElementById(`kontostand1`).value;\
            var wert2 = document.getElementById(`kontostand2`).value;\
            var wert3 = document.getElementById(`kontostand3`).value;\
            if (pruefeEingabeZahl(wert1)) {\
                guthabenAdressen[0] = wert1;\
                document.getElementById(`guthaben0`).innerHTML = wert1 + ` SiC`;\
            } else {\
                document.getElementById(`warnung`).style=`position: fixed; top: 8em; right: 28em; visibility: visible`;}\
            if (pruefeEingabeZahl(wert2)) {\
                guthabenAdressen[1] = wert2;\
                document.getElementById(`guthaben1`).innerHTML = wert2 + ` SiC`;\
            } else {\
                document.getElementById(`warnung`).style=`position: fixed; top: 8em; right: 28em; visibility: visible`;}\
            if (pruefeEingabeZahl(wert3)) {\
                guthabenAdressen[2] = wert3;\
                document.getElementById(`guthaben2`).innerHTML = wert3 + ` SiC`;\
            } else {\
                document.getElementById(`warnung`).style=`position: fixed; top: 8em; right: 28em; visibility: visible`;}\
            if (pruefeEingabeZahl(wert1) && pruefeEingabeZahl(wert2) && pruefeEingabeZahl(wert3)) {\
                document.getElementById(`formularb`).style=`visibility: hidden`;\
            }'>OK</button>";
    }
    return htmlCode 
}