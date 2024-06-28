/* Animation 1 */

var a1a_block3Inhalt = "wenn man sich darauf einlässt, dann ...";

var a1b_block4Inhalt = "öffnet sich eine Tür zu vielen ...";
var a1b_block1Hash = berechneHash("Block 1 Informatik ist vielleicht nicht von allen ...");
var a1b_block2Hash = berechneHash("Block 2 das Lieblingsfach Nummer eins, aber ...");
var a1b_block3Hash = berechneHash("Block 3" + a1a_block3Inhalt);
var a1b_block4Hash = berechneHash("Block 4" + a1b_block4Inhalt);

var a1c_block5Inhalt = "raffinierten Ideen und Konzepten.";
var a1c_block5Hash = berechneHash("Block 5" + a1c_block5Inhalt);

var a1d_inhaltBlock1Hash = berechneHash("Informatik ist vielleicht nicht von allen ...");
var a1d_inhaltBlock2Hash = berechneHash("das Lieblingsfach Nummer eins, aber ...");
var a1d_inhaltBlock3Hash = berechneHash(a1a_block3Inhalt);
var a1d_inhaltBlock4Hash = berechneHash(a1b_block4Inhalt);
var a1d_inhaltBlock5Hash = berechneHash(a1c_block5Inhalt);

/* Animation 2 */

var a2a_nameKnotenNeu = "Satoshi";

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

var nameAuswahl = ['Aleksandar', 'Andreas', 'Arthur', 'Alex', 'Alice', 'Andrea', 'Ada', 'Alina', 'Alphonso', 'Ariane', 
    'Bernd', 'Bernhard', 'Belinda', 'Bob', 'Barbara', 'Berta', 'Bernadette', 'Bettina', 'Bouna', 'Bryan', 'Cäsar',
    'Charles', 'Chiara', 'Christian', 'Christof', 'Christa', 'Claire', 'Carlotta', 'Daniel', 'Dean', 'Desiree',
    'Diana', 'Doris', 'Dayot', 'Deborah', 'Denise', 'Elisa', 'Elisabeth', 'Eric', 'Eric Maxim', 'Erika', 'Elena',
    'Ezra', 'Emmerich', 'Erich', 'Eduard', 'Franz', 'Ferdinand', 'Florian', 'Fridolin', 'Fritz', 'Franca', 'Frieda',
    'Felicitas', 'Franziska', 'Fabienne', 'Georg', 'Gregor', 'Gudrun', 'Gabriele', 'Gebhard', 'Günther', 'Gerda',
    'Gertrud', 'Harry', 'Helmut', 'Hans', 'Herbert', 'Heinrich', 'Helena', 'Antonia', 'Henriette', 'Hannah', 'Helga', 
    'Ida', 'Irene', 'Ilga', 'Isolde', 'Immanuel', 'Isidor', 'Irenäus', 'Ivan', 'Jodok', 'Jakob', 'Jonathan', 'Janine',
    'Jamal', 'Johanna', 'Josefina', 'Josefa', 'Joshua', 'Kurt', 'Karl', 'Kreszenzia', 'Kira', 'Kingsley', 'Klara', 
    'Klaudia', 'Konrad', 'Liam', 'Levin', 'Leonhard', 'Laura', 'Laurina', 'Lara', 'Leon', 'Leroy', 'Lisa', 'Lore', 
    'Manuel', 'Maria', 'Marc', 'Monika', 'Magdalena', 'Martina', 'Mathys', 'Matthijs', 'Melina', 'Michaela', 'Minjae', 
    'Nina', 'Nadine', 'Nathalie', 'Noreen', 'Nino', 'Nathanael', 'Norbert', 'Nero', 'Noussair', 'Otto', 'Ottilie',
    'Ophelia', 'Oswald', 'Paul', 'Peter', 'Priska', 'Paola', 'Pablo', 'Peppa', 'Peregrin', 'Pauline', 'Quirin',
    'Corbinian', 'Remo', 'Reinhard', 'Robert', 'Roland', 'Rainer', 'Rosa', 'Reinelde', 'Raphaela', 'Roberta',
    'Raphael', 'Renate', 'Sabine', 'Sabrina', 'Salome', 'Selma', 'Sandro', 'Sigismund', 'Sacha', 'Sandra', 'Saskia', 
    'Serge', 'Sven', 'Tina', 'Tusnelda', 'Tamara', 'Tanja', 'Tarek', 'Tatjana', 'Thomas', 'Tom', 'Tasso', 'Tim',
    'Uwe', 'Udo', 'Urs', 'Ulf', 'Ulla', 'Uma', 'Ursula', 'Uschi', 'Volker', 'Volkmar', 'Vera', 'Vivianne', 'Valentin',
    'Valentina', 'Vanessa', 'Werner', 'Wolfgang', 'Wendelin', 'Wanda', 'Waldemar', 'Waltraud', 'Wilma', 'Xaver',
    'Zvonimir', 'Gundula', 'Zora'];

var indizesFuerNamen = zufallsindizes(10, nameAuswahl);

function getName(index) { return nameAuswahl[indizesFuerNamen[index]]; }

var a2a_nameKnoten1 = getName(0);
var a2a_nameKnoten2 = getName(1);
var a2a_nameKnoten3 = getName(2);
var a2a_nameKnoten4 = getName(3)
var a2a_nameKnoten5 = getName(4);
var a2a_nameKnoten6 = getName(5);
var a2a_nameKnoten7 = getName(6);
var a2a_nameKnoten8 = getName(7);
var a2a_nameKnoten9 = getName(8);
var a2a_nameKnoten10 = getName(9);

class Adresse {
    constructor(e, d, n) {
        this.e = e;
        this.d = d;
        this.n = n;
    }
}

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

var indizesFuerAdressen = zufallsindizes(33, adressenAuswahl);

function getAdresse(index) { 
    return "e=" + adressenAuswahl[indizesFuerAdressen[index]].e + 
        ", n=" + adressenAuswahl[indizesFuerAdressen[index]].n; 
}

var a2b_adressenKnoten = new Array();
a2b_adressenKnoten[0] = "K1: " + getAdresse(0);
a2b_adressenKnoten[1] = "K2: " + getAdresse(1);
a2b_adressenKnoten[2] = "K3: " + getAdresse(2);
for (var i = 3; i <= 31; i += 3) {
    a2b_adressenKnoten[i] = "K1: " + getAdresse(i);
    var anzahlAdr = Math.floor(Math.random() * 3 + 1);
    if (anzahlAdr == 1) {
        a2b_adressenKnoten[i + 1] = "";
        a2b_adressenKnoten[i + 2] = "";
    } else if (anzahlAdr == 2) {
        a2b_adressenKnoten[i + 1] = "K2: " + getAdresse(i + 1);
        a2b_adressenKnoten[i + 2] = "";
    } else {
        a2b_adressenKnoten[i + 1] = "K2: " + getAdresse(i + 1);
        a2b_adressenKnoten[i + 2] = "K3: " + getAdresse(i + 2);
    }
}

var a2b_privateSchluessel = new Array();
a2b_privateSchluessel[0] = "K1<sub>priv</sub>: d=" + adressenAuswahl[indizesFuerAdressen[0]].d;
a2b_privateSchluessel[1] = "K2<sub>priv</sub>: d=" + adressenAuswahl[indizesFuerAdressen[1]].d;
a2b_privateSchluessel[2] = "K3<sub>priv</sub>: d=" + adressenAuswahl[indizesFuerAdressen[2]].d;
