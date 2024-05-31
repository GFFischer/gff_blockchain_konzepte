# Technische Dokumentation

| Version | Projektname                       | Autor         | Status         | Datum      | Kommentar |
| ------- | --------------------------------- | ------------- | -------------- | ---------- | --------- |
|   0.1   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 19.04.2024 | Template erstellt |
|   0.2   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 20.04.2024 | Pkt 1.1 bis 1.2 bearbeitet |
|   0.3   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 22.04.2024 | Pkt 2 bis 4 bearbeitet |
|   0.4   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 23.05.2024 | Pkt 5.1 bearbeitet |
|   0.4   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 27.05.2024 | Pkt 5.1 bearbeitet |
|   0.5   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 31.05.2024 | Pkt 5.1 bearbeitet |


# 1 Einführung

## 1.1 Zweck 

Das **Ziel** dieses Dokuments ist es, die technische Umsetzung der im Pflichtenheft formulierten Einzelanforderungen (/F10/
bis /F111/) und den dazugehörenden dargestellten Use-cases (Use-case 1 bis Use-case 23) so präzise zu beschreiben, dass
beim Programmieren selbst möglichst keine offenen Fragen mehr bestehen.

Der **Zweck** dieses Dokuments ist,
* einen Überblick über die einzelnen Teile der Applikation sowie deren Interaktion zu schaffen
* festzulegen, wie die Applikation aufgebaut ist und wie zu den verschiedenen Inhalten der Applikation navigiert werden
  kann *(/F30/ bis /F32/)*
* zu klären, wie das responsive Erscheinungsbild der Webapplikation realisiert wird *(/F10/)* und wie die einzelnen
  Anforderungen an das responsive Erscheinungsbild konkret umgesetzt werden *(/F11/ bis /F14/)*
* die technische Umsetzung der einzelnen Animationen und deren Steuerung zu klären *(/F20/ bis /F22/)*
* zu klären, wie das Aufpoppen der erklärenden und weiterführenden Texte zu den Animationen realisiert und optisch
  gestaltet wird *(/F40/ bis /F43/)*
* für die einzelnen Animationen die notwenigen Variablen inklusive deren initialer Belegung sowie die benötigten
  Funktionen zu bestimmen *(/F50/ bis /F111/)*
* zu klären, wie es umgesetzt werden kann, dass einmal gemachte Eingaben und berechnete Werte (z.B. Hashreferenzen) in der
  Applikation verfügbar bleiben, solange sich der User durch die Applikation bewegt *(/LQF10/)*
* die Farben zu bestimmen, die in der Applikation für Texte, Menüs, Symbole, Animationen, Hintergründe verwendet werden
  *(/LQB40/)*
  
Dieses Dokument kann, wenn man es mit dem Bau eines Hauses vergleicht, als "Polierplan" verstanden werden, also als ein
Plan, bei dem schon möglichst alle Details geklärt sind, sodass mit dem Bau des Hauses begonnen werden kann. Er richtet 
sich demzufolge in erster Linie an die Ausführenden, bei der Softwareentwicklung also an die Programmierenden. Im konkreten
Spezialfall der Entwicklung dieser Applikation als "individuelles Projekt" im Rahmen des Studienprogramms GymInf handelt
es sich dabei um den Autor, der in Personalunion gleichzeitig Auftraggeber, Designer und Programmierer ist. Gleichzeitig 
richtet sich dieses Dokument an alle Entwickler*innen, die gegebenenfalls diese Applikation warten und/oder erweitern 
möchten, sowie im konkreten Fall auch an alle, die dieses Projekt zu bewerten und zu beurteilen haben.


## 1.2 Beziehung zu anderen Dokumenten

Dieses Dokument bezieht sich auf die im **Lastenheft** formulierten funktionalen und Qualitätsanforderungen und die im
**Pflichtenheft** formulierten und mit Use-cases detailliert beschriebenen Einzelanforderungen. Ebenso steht dieses 
Dokument in Beziehung zu den einzelnen Dateien, die als **Prototyp** für einzelne Aspekte der Applikation parallel zu diesem
Dokument entwickelt werden.


# 2. Systemübersicht

Die Applikation ist webbasiert und veranschaulicht fundamentale Konzepte der Blockchain-Datenstruktur mithilfe von 
insgesamt sieben Animationen, die aus bis zu vier Teilen bestehen. Bei fünf dieser Animationen ist es für den User 
möglich, interaktiv die Gestaltung der Animationen zu beeinflussen, bei allen Animationen ist es für ihn möglich, den 
Ablauf der Animationen zu steuern *(/LV10/, /F20/ bis /F22/)*. Ebenfalls ist es für den User möglich, zu allen Teilen 
aller Animationen direkt oder über "weiter"- und "zurück"- Buttons zu navigieren *(/F30/bis /F32/)*.

Konkret handelt es sich um folgende sieben Konzepte der Blockchain-Datenstruktur, die jeweils Inhalt der sieben
Animationen sind *(/LK20/ bis /LK80/, /F50/ bis /F111/)*:
* Aufbau einer Blockchain-Datenstruktur
* Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System
* Durchführung einer Transaktion
* Speichern von Transaktionen und Erstellen von neuen Blöcken
* Schützen der Blöcke durch Proof-of-Work
* Verteilen neuer Transaktionen und Blöcke
* Validieren eines Blocks

Die Applikation bietet dem User vor dem Start und/oder nach Beendigung bzw. Abbruch eines Teils einer Animation die 
Möglichkeit, dass durch das Klicken auf Symbole oder Buttons erklärende oder weiterführende Texte aufpoppen
*(/F40/ bis /F44/)*.

Insgesamt soll die Anwendung der Applikation dazu führen, dass es für Lernende ohne Vorwissen einfacher ist, die
fundamentalen Konzepte einer Blockchain zu verstehen, als wenn ihnen dieselben Erklärungen lediglich als Text mit 
unbewegten Grafiken und ohne die Möglichkeit zur Interaktion zur Verfügung stehen *(/LV 20/)*.


# 3. Designziele

## Primäre Ziele
* **Übersicht:** Das Design soll dazu führen, dass der Aufbau der Applikation (Komponenten, Schnittstellen, Code)
  nachvollziehbar wird, in erster Linie im konkreten Fall für alle, die dieses Projekt zu bewerten und zu beurteilen
  haben, in zweiter Linie gegebenenfalls für alle Entwickler*innen, die diese Applikation warten und/oder erweitern
  möchten.
* **Festlegung von Details:** Das Design soll dazu führen, dass die Entwicklungszeit minimiert wird, indem es dem
  Programmierer möglich ist, die Vorgaben in Code zu überführen, ohne selbst Entscheidungen über Details (z.B. Namen und
  erwartete Rückgabewerte von Funktionen, Namen und initiale Belegung von Variablen, verwendete Farben, Symbole,
  Schriftarten für die optische Gestaltung, ...) treffen zu müssen.

## Untergeordnete Ziele
* **Portabilität:** Das Design soll, wo es möglich ist, dazu führen, dass die Applikation auch auf einem kleinen Screen
  (z.B. Smartphone) so dargestellt wird, dass das Erfassen der wesentlichen Aspekte leicht möglich ist.
* **Wartbarkeit, Wiederverwendbarkeit:** Das Design soll künftige Veränderungen bzw. Erweiterungen der Applikation
  ermöglichen.

## Nicht relevante Ziele
* **Effizienz:** Da die Applikation nicht mit grossen Datenmengen hantieren, keine komplexen Berechnungen durchführen und
  auch sonst keine aufwändigen Operationen durchführen muss, hat der effiziente Umgang mit den Ressourcen Laufzeit und
  Speicherbedarf in diesem Design nur nachrangige Bedeutung.
* **Kostenminimierung:** Da die Entwicklung dieser Applikation als "individuelles Projekt" im Rahmen des Studienprogramms
  GymInf keine monetären Kosten verursacht, ist dieses Ziel für das Design der Applikation irrelevant.


# 4. Systemverhalten

* Das **optische Erscheinungsbild** der Applikation ist responsiv, ab einer Bildschirmbreite von weniger als 960 Pixeln
  verschwindet das Navigationsmenü aus dem Vordergrund und wird ausklappbar, Schriftarten werden verkleinert, die Grösse der
  Animationen passt sich der Bildschirmbreite an.
* Die **Navigation** zu den einzelnen Animationen bzw. deren Teilen erfolgt sowohl direkt über ein Navigationsmenü als
  auch zwischen den einzelnen Teilen der Animationen über "weiter"- und "zurück"-Buttons.
* Die **Steuerung der Animationen** erfolgt über Buttons, mit denen es möglich ist, die Animationen zu starten, abzubrechen,
  in einigen Fällen zu unterbrechen und nach einer Unterbrechung fortzusetzen.
* Beim **Start der Applikation** wird eine Startseite, die eine kurze Einführung in die Applikation und eine Erklärung der
  Unterschiede von erklärenden und weiterführenden Texten sowie den dafür verwendeten Symbolen und Buttons enthält, geladen.
* **Erklärende und weiterführende Texte** zu den Animationen können durch das Klicken auf ein Symbol oder einen Button vor
  dem Start und/oder nach Beendigung bzw. Abbruch der Animation geöffnet werden.
* **Eingaben durch den User** über Formulare sind in den Animationen insgesamt an acht Stellen möglich. Die Applikation
  überprüft die Gültigkeit der Eingaben und weist Eingaben, die nicht den Vorgaben entsprechen, zurück.
* Eingaben bewirken eine **Veränderung der Inhalte der Animationen**. Auf Eingaben wird gelegentlich in anderen
  Animationen zurückgegriffen. Für den Fall, dass der User auf diese Eingaben verzichtet oder direkt zu Animationen
  navigiert, die auf davor gemachte Eingaben zurückgreifen, weist die Applikation beim Start allen betreffenden Variablen
  einen zum Teil zufällig gewählten Wert zu, der durch die Eingaben des Users auf jeden Fall überschrieben wird.


# 5. Design

## 5.1 Statik
### HTML
**blockchainkonzepte.html**

Die Applikation und all ihre Teile werden zusammengefügt in einer einzigen html-Datei, wobei die Navigation zwischen den
einzelnen Animationen sowie das Aufpoppen von Warnhinweisen, erklärenden und weiterführenden Texten usw. ausschliesslich
über das Sichtbar-Machen und Verstecken von einzelnen html-Kontainern bzw. html-Elementen geregelt wird.

Dabei ist es so, dass die Startseite sowie jede einzelne Animation in einem eigenen <div>-Kontainer zusammengefasst
werden. Diese Kontainer bekommen die CSS-Klasse *.animation* zugewiesen, deren wichtigste Eigenschaften *display: none*
(damit wird der ganze Kontainer standardmässig nicht angezeigt) und *position: relative* (damit alle absolut
positionierten html-Elemente in den Animationen sich an der Position dieses übergeordneten Kontainers orientieren)
sind. Innerhalb dieser <div>-Kontainer wird die Sichtbarkeit der einzelnen html-Elemente über die CSS-Eigenschaft 
*visibility* geregelt.

Diese IDs dieser Kontainer werden nach folgenden Regeln gebildet:
* Alle IDs beginnen mit "anim_".
* Es folgt die Nummer der Animation, wie sie in den Use-cases im Pflichtenheft vergeben worden ist.
* Die Startseite bekommt die ID "anim_0".


### JavaScript

**bjk_funktionensammlung.js**

In dieser Datei befinden sich alle Funktionen, die beim Anwenden der Applikation mehrmals verwendet werden und sich nicht 
nur auf eine konkrete Animation beziehen.

* **umwandleInDez**(zahl, basis) <br>
  Diese Funktion bekommt eine Zahl und deren Basis (z.B. 2 für eine binäre Zahl, 16 für eine hexadezimale Zahl) übergeben
  und gibt die entsprechende Dezimalzahl zurück.
* **umwandleDez**(dezZahl, basis) <br>
  Diese Funktion bekommt eine Dezimalzahl und die Basis a des a-adischen Zahlensystems, in das die Dezimalzahl umgewandelt
  werden soll, übergeben und gibt die umgewandelte Zahl als String zurück.
* **umwandleDezInHashwert**(dezZahl) <br>
  Diese Funktion bekommt eine Dezimalzahl übergeben und gibt eine achtstellige, hexadezimale Zahl als String zurück, der
  führende Nullen hinzugefügt werden, falls die übergebene Zahl kleiner als 16<sup>7</sup> ist. Ist die übergebene Zahl
  grösser oder gleich 16<sup>8</sup, wird sie vor der Umwandlung modulo 168 gerechnet.
* **umwandleHexInBin**(hexZahl) <br>
  Diese Funktion bekommt eine hexadezimale Zahl übergeben und gibt die entsprechende binäre Zahl zurück.
* **umwandleBinInHex**(binZahl) <br>
  Diese Funktion bekommt eine binäre Zahl übergeben und gibt die entsprechende hexadezimale Zahl zurück.
* **pruefeEingabeText**(eingabe) <br>
  Diese Funktion prüft, ob der als Parameter übergebene String (*eingabe*) ausschliesslich aus Buchstaben, Leerzeichen sowie
  den Satzzeichen . , ! ? besteht.
* **pruefeEingabeZahl**(eingabe) <br>
  Diese Funktion prüft, ob der als Parameter übergebene String (*eingabe*) ausschliesslich aus Ziffern besteht.
* **pruefeEingabe1bis3**(eingabe) <br>
  Diese Funktion prüft, ob es sich bei dem als Parameter übergebenen String (*eingabe*) entweder um die Ziffer 1 oder die
  Ziffer 2 oder die Ziffer 3 handelt.
* **zeitstempel**() <br>
  Diese Funktion gibt bei ihrer Ausführung das aktuelle Datum und die aktuelle Uhrzeit als String in der Form dd.mm.jjjj
  hh:mm:ss,ttt zurück, wobei t für Tausendstelsekunden (Millisekunden) steht.
* **berechneHash**(eingabe) <br>
  Diese Funktion nimmt einen String (*eingabe*) entgegen und berechnet mithilfe der Implementation des SHA256-Algorithmus in
  den Dateien jshashes.js und hash.js einen Hashwert auf den eingegebenen String. Vom errechneten Wert, der als hexadezimale
  Zahl dargestellt wird, werden die ersten acht Zeichen als String zurückgegeben, wobei sämtliche Buchstaben in den
  hexadezimalen Zahlen als Kleinbuchstaben dargestellt werden.
* **bewegeObjekt**(objektID, unterbrechungID, abbruchID, neustartID, startposX, startposY, tempoX, tempoY, zielposX, zielposY) <br>
  Dies ist die zentrale Funktion, mit der absolut positionierte html-Elemente animiert, d.h. bewegt werden. Sie bekommt zunächst
  die IDs des Elements, das bewegt werden soll (*objektID*), übergeben. <br>
  Die nächsten Parameter sind die IDs der Buttons, mit denen die Bewegung unterbrochen, abgebrochen oder neu gestartet werden
  kann (*unterbrechungID, abbruchID, neustartID*). Allen Buttons wird in der Funktion ein Event Listener hinzugefügt, sodass
  beim Klicken eines dieser Buttons mit *clearInterval(bewegung)* die der mit *setInterval* der Variablen *bewegung*
  zugewiesene Bewegung stoppt. <br>
  Die nächsten Parameter betreffen die Werte, mit denen die CSS-Anweisungen left (*starposX*) und top (*startposY*) zu Beginn der
  Bewegung des Elements belegt sind. Die übergebenen Werte sind Zahlen, die beim Ausführen der Funktion zu einem String konvertiert
  werden, dem die Masseinheit *em* angehängt wird. <br>
  Die Parameter *tempoX* und *tempoY* sind ebenfalls Zahlen, die angeben, um wieviel die Werte von *left* und *top* pro Intervall
  geändert werden sollen. Werden positive Zahlen übergeben, bewegt sich das Element nach rechts bzw. unten, werden negative Zahlen
  übergeben, bewegt sich das Element nach links bzw. oben. <br>
  Die Parameter *zielposX* und *zielposY*  geben an, wann die Bewegung des Elements gestoppt wird, wobei die Bewegung bereits
  stoppt, wenn einer dieser beiden Parameter erreicht wird. Wie bei *startposX* und *startposY* werden auch hier Zahlen übergeben,
  welche die Position in der Masseinheit *em* angeben. <br>
  Anzumerken ist, dass für jede Animation, in der ein oder mehrere Elemente miteinander oder automatisch nacheinander bewegt werden,
  eine eigene asynchrone Funktion erstellt werden muss, in der genau bestimmt wird, was beim Klicken auf einen Button geschieht
  (z.B. welche andere Buttons oder sonstige Elemente sichtbar werden oder verschwinden, oder wie beim Abbruch alle zu bewegenden
  Elemente die Zielposition einnehmen, oder wie nach einer Unterbrechung die Bewegung des Elements an genau der gleichen Position
  fortgesetzt wird, …) oder welche Elemente in welcher Reihenfolge und mit welchem zeitlichen Abstand miteinander oder
  hintereinander bewegt werden.
* **positionX**(objektID) <br>
  Diese Funktion bekommt die ID eines absolut positionierten html-Elements übergeben (*objektID*), liest den Wert, mit dem in der
  Masseinheit *em* die CSS-Eigenschaft *left* belegt ist, aus und gibt diesen Wert als reine Zahl ohne Masseinheit zurück.
* **positionY**(objektID) <br>
  Diese Funktion bekommt die ID eines absolut positionierten html-Elements übergeben (*objektID*)  liest den Wert, mit dem in der
  Masseinheit *em* die CSS-Eigenschaft *top* belegt ist, aus und gibt diesen Wert als reine Zahl ohne Masseinheit zurück.
* **const verzoegerung** <br>
  Die Konstante *verzoegerung* ist eine Anweisung, der ein Parameter *delay* übergeben wird, sodass die Ausführung eines Skripts
  um so viele Millisekunden wie im Parameter *delay* angegeben unterbrochen wird. Es handelt sich um eine Hilfskonstruktion, in der
  über die Anweisung *setTimeout* die Möglichkeit geschaffen wird, die Ausführung der nächsten Anweisung des Skripts um eine
  gewisse Zeit zu verzögern. Sie wird in der asynchronen Funktion, mit welcher der Ablauf der gesamten Bewegung in der Animation
  festgelegt wird, mit der Anweisung *await* verwendet.

**jshashes.js, hash.js**

Beide Dateien beinhalten die JavaScript Implementation von üblichen Hashfunktionen, zur Verfügung gestellt von Tomas Aparicio, 
Paul Johnston und Angel Martin, welche unter https://github.com/h2non/jshashes zu finden ist. Ihre Verwendung ist bei der Angabe 
eines Copyright-Hinweises gestattet. Konkret daraus verwendet wird in der Applikation die Implementierung des SHA256-Algorithmus.

**bjk_variablen.js**

Diese Datei beinhaltet alle Variablen, deren Werte bei jedem Laden der Seite einen Anfangswert bekommen. Dieser Anfangswert wird 
entweder zufällig generiert oder aus einer vorgegebenen Auswahl zufällig ausgewählt. Daher befinden sich in dieser Datei auch 
alle zur Auswahl stehenden Werte und alle Funktionen, die diese zufällige Auswahl durchführen und die entsprechenden Werte den 
Variablen zuweisen.

Ebenso findet sich in dieser Datei die initiale Zuweisung von Werten an alle Variablen, deren Inhalt bei der Ausführung der
Applikation durch den User geändert werden kann und auf die in mehreren Animationen zugegriffen wird. Der Grund für diese
Initialisierungen liegt in der Möglichkeit, dass der User direkt zu allen Animationen navigieren kann und diese auch dann
funktionieren sollen, wenn der User davor noch keinen Wert für die verwendeten Variablen eingegeben hat.

**bjk_erklaerende_texte.js**

In dieser Datei befindet sich der html-Code für alle erklärenden und weiterführenden Texte, die in der Applikation aufgepoppt 
werden können, wobei jeder einzelne Text einer gesonderten Variable zugewiesen wird. Die Auslagerung der Texte in eine eigene 
js-Datei dient einerseits dazu, den Code in der html-Datei *blockchainkonzepte.html* übersichtlicher zu gestalten, und 
andererseits dazu, die Wartbarkeit der Applikation zu fördern, weil dadurch die einzelnen Texte ohne grossen Aufwand gefunden
und gegebenenfalls verändert oder ersetzt werden können.

Die Namen der Variablen werden nach folgenden Regeln vergeben:
* Alle Namen beginnen mit "a".
* Es folgt die Nummer der Animation, wie sie in den Use-cases im Pflichtenheft vergeben worden ist.
* Danach folgt als Trennzeichen ein Unterstrich ("_").
* Zur Identifikation, ob es sich um einen erklärenden oder um einen weiterführenden Text handelt, folgt dann entweder "info" oder
  "hintergr".
* Abgeschlossen wird der Variablenname mit einer fortlaufenden Nummer, beginnend bei 1.

Beispiele: a3c_info1, a4b_hinterg1, a1c_info2, …

In der Datei selbst sind die Variablennamen alphabetisch sortiert. Ganz am Ende befindet sich noch eine Variable mit dem Namen 
*copyright_hashes*, welcher der html-Code des Copyright-Hinweises für die Implementierung der verwendeten Hash-Funktion in
JavaScript, der bei jeder Animation aufgepoppt werden kann, wo die Hashfunktion verwendet wird, zugewiesen wird.

**bjk_code_generierung.js**

Beim Starten der Applikation durch das Laden der html-Seite *blockchainkonzepte.html* wird der gesamte Code geladen. Damit 
Eingaben des Users auch Auswirkungen auf die Animationen haben, müssen Teile des html-Codes während der Anwendung der Applikation 
angepasst und verändert werden. Die Lösung dieses Problems liegt darin, dass die betreffenden Teile des html-Codes durch das 
Ausführen von JavaScript-Funktionen beim Navigieren zu den betreffenden Animationen neu generiert werden und dabei die Werte in 
den Variablen neu ausgelesen und verarbeitet werden.

Da sich der jeweilige html-Code jeweils auf eine konkrete Animation bezieht, haben die Funktionen keine Parameter, und die Namen 
der Funktionen in dieser Datei werden gemäss folgenden Regeln gebildet:
* Alle Namen beginnen mit "a".
* Es folgt die Nummer der Animation, wie sie in den Use-cases im Pflichtenheft vergeben worden sind.
* Danach folgt als Trennzeichen ein Unterstrich ("_").
* Schliesslich folgt ein Name, der beschreibt, welcher Teil des Codes durch diese Funktion generiert wird.

Ganz am Ende der Datei befindet sich die Funktion *mining()*, mit der in den Animationen 5a und 5b das Schützen der Blöcke durch
Proof-of-Work simuliert wird. Auch sie generiert html-Code, indem sie die sich ändernde Nonce und den jeweils berechneten
Hashwert in den in der Animation dargestellten Blöcken ausgibt.

* **a1b_inhaltBlock3**() <br>
  Neu generiert wird der Inhalt des dritten Blocks (Variable xxxxxx), der vom User in Animation 1a eingegeben oder verändert
  werden kann und der daraus berechnete Hashwert.
* **a1c_inhalteBloecke**() <br>
  Neu generiert werden die Inhalte des dritten und vierten Blocks (Variablen xxxxxxxxxxxx und xxxxxxxxxxx), die vom User in den
  Animationen 1a und 1b eingegeben oder verändert werden können, die daraus berechneten Hashwerte sowie die Hashwerte der
  jeweils vorherigen Blöcke.
* **a1d_inhalteBloecke**() <br>
  Neu generiert werden die Inhalte des dritten, vierten und fünften Blocks (Variablen xxxxxxxxxxxx, xxxxxxxxxxxxxxx und xxxxxxxxxxx),
  die vom User in den Animationen 1a, 1b und 1c eingegeben oder verändert werden können, die daraus berechneten Hashwerte sowie die
  Hashwerte der jeweils vorherigen Blöcke.
* **a2b_nameKnotenNeu**() <br>
  Neu generiert wird der Name des in Animation 2a neu hinzugefügten Knotens (Variable xxxxxxx).
* **a2c_inhaltKnotenNeu**() <br>
  Neu generiert wird der Name des in Animation 2a neu hinzugefügten Knotens (Variable xxxxxxx) sowie die dem neuen Knoten
  zugewiesenen Adressen, abhängig von der in Animation 2b eingegebenen Anzahl (Variable xxxxxxxxxxxxxx).
* **a3a_tabelleAdressenKnotenNeu**() <br>
  Neu generiert wird die Tabelle mit den Adressen des neuen Knotens und jeweils dem dazugehörenden privaten Schlüssel, abhängig
  von der in Animation 2b eingegebenen Anzahl von Adressen (Variable xxxxxxxxxxxxx).
* **a3a_eingabeGuthaben**() <br>
  Neu generiert wird der html-Code für das Eingabeformular der Kontostände, abhängig von der in Animation 2b eingegebenen
  Anzahl (Variable xxxxxxxxxxxxxx).
* **a3b_tabelleAdressenKnotenNeuMitGuthaben**() <br>
  Neu generiert wird die Tabelle mit den Adressen des neuen Knotens, dem jeweils dazugehörenden privaten Schlüssel und den
  "Kontoständen" der Adressen, abhängig der in Animation 2b eingegebenen Anzahl (Variable xxxxxxxxx) und den in Animation 3a
  eingegebenen Kontoständen (Array-Werte xxxxxxxxxxxxxxxxxxx).
* **a3b_tabelleAdressenFremdeKnoten**() <br>
  Neu generiert wird eine Tabelle mit den Adressen aller Knoten ausgenommen des neuen Knotens.
* **a3b_auswahllisteAuftraggeber**() <br>
  Neu generiert wird die Auswahlliste der zur Verfügung stehenden Adressen für das Formular zur Eingabe von Daten für eine
  Transaktion, abhängig von der in Animation 2b eingegebenen Anzahl von Adressen (Variable xxxxxxxxxxxxx).
* **a3b_errechneTransaktionsgebuehr**(betrag) <br>
  Diese Funktion bekommt als Parameter einen Betrag für eine Transaktion (*betrag*) übergeben, errechnet abhängig von der
  Höhe des eingegebenen Betrags eine Transaktionsgebühr und gibt diese als ganze Zahl zurück. Mindestgebühr für jede
  Transaktion sind 3 SiC, ab einem Betrag von 100 SiC werden 3 Prozent des Betrags (abgerundet auf eine ganze Zahl) als
  Transaktionsgebühr zurückgegeben.
* **a3b_stringTransaktion**() <br>
  Diese Funktion gibt die Konkatenation der Werte der Variablen xxxxxxxxxxxxxxxxxxxxx als String zurück, um daraus den
  Hashwert der Transaktion zu berechnen.
* **a3b_pruefeEingabeAdresseEmpfaenger**() <br>
  Diese Funktion prüft, ob die vom User eingegebenen Daten auch tatsächlich unter den Adressen der Knoten des
  Peer-to-Peer-Netzwerkes zu finden sind und gibt entweder des Index der Adresse im Array xxxxxxxxxxxxxxxx oder,
  falls die Adressen in diesem Array nicht vorhanden ist, -1 zurück.
* **a3c_berechneSignatur**(basis, exp, n) <br>
  Diese Hilfsfunktion errechnet in einer Schleife schrittweise den Wert der Gleichung *basis<sup>exp</sup> mod n* und
  gibt diesen als Dezimalzahl zurück.
* **a3c_erstelleDigitaleSignatur**(hashTransaktion, idxAdresse) <br>
  Diese Funktion generiert den html-Code für einzelnen Felder der Tabelle, in der das Errechnen einer digitalen Signatur
  veranschaulicht wird. Sie übernimmt den Hashcode für die Transaktion (*hashTransaktion*), teilt ihn in vier Teile und
  berechnet für jeden Teil des hexadezimalen Codes die entsprechende binäre Zahl, die entsprechende Dezimalzahl und
  verschlüsselt diese mit der Funktion *a3c_berechneSignatur()*. Für die Werte des privaten Schlüssels (d, n) bekommt die
  Funktion einen Index (ganze Zahl von 0 bis 2) übergeben, mit dem aus dem Array *adressenAuswahl* die Werte für d und n
  ausgewählt werden.
* **a3d_pruefeDigitaleSignatur**(hashTransaktion, idxAdresse) <br>
  Diese Funktion generiert den html-Code für einzelnen Felder der Tabelle, in der das Prüfen einer digitalen Signatur
  veranschaulicht wird. Sie übernimmt den Hashcode für die Transaktion (*hashTransaktion*), teilt ihn in vier Teile,
  berechnet für jeden Teil die entsprechende Dezimalzahl und entschlüsselt diese mit der Funktion *a3c_berechneSignatur()*.
  Für die Werte des öffentlichen Schlüssels (e, n) bekommt die Funktion einen Index (ganze Zahl von 0 bis 2) übergeben,
  mit dem aus dem Array *adressenAuswahl* die Werte für e und n ausgewählt werden.


* **mining**(nonceID, nonce, hashID, hashBlock, target, zeit, hashInhalt, hashVorherigerBlock, intervall, abbruchID, hakenID,
  nextStartButtonID, nextBlockID) <br>
  Diese Funktion bewirkt, dass für die übergebenen Werte eines Blocks einer Blockchain in einem bestimmten zeitlichen Intervall
  eine neue Nonce geschaffen und ein neuer Hashwert berechnet und im in der Animation dargestellten Block ausgegeben wird und
  sobald ein vorgegebenes Target unterschritten wird, ein Haken unterhalb des Blocks in der Animation angezeigt und die Funktion
  beendet wird. <br>
  Im Parameter *nonceID* wird die ID des html-Elements übergeben, in dem die Nonce des Blocks ausgegeben wird. Der Parameter
  *nonce* ist eine achtstellige hexadezimale Zahl als String, der die Nonce repräsentiert, mit der das Mining gestartet werden
  soll. <br>
  Im Parameter *hashID* wir die ID des html-Elements übergeben, in dem der Hashwert des Blocks ausgegeben wird. Der Parameter
  *hashBlock* ist ein Hashwert (achtstellige hexadezimale Zahl mit führenden Nullen als String), wobei vorgesehen ist, dass
  dieser Hashwert bereits aus den Werten des Blocks zuvor berechnet worden ist. <br>
  Der Parameter *target* ist eine achtstellige hexadezimale Zahl mit führenden Nullen als String, welche die Schwierigkeit des
  Hashpuzzles angibt. Das bedeutet, dass der in der Funktion errechnete Hashwert kleiner sein muss als diese Zahl, damit die
  Funktion beendet wird. <br>
  Der Parameter *zeit* enthält einen Zeitstempel, an dem mit dem Mining begonnen worden ist, als String. <br>
  Der Parameter *hashInhalt* beinhaltet die Hash-Referenz auf den Inhalt des Blocks. Der Parameter *hashVorherigerBlock*
  beinhaltet die Hash-Referenz auf den vorherigen Block der dargestellten Blockchain. Beide Werte sind achtstellige hexadezimale
  Zahlen als String. <br>
  Der Parameter *intervall* ist eine Zahl, mit der in Millisekunden angegeben wird, in welchem Abstand eine neue Nonce generiert
  und ein neuer Hashwert berechnet und ausgegeben werden soll. <br>
  Der Parameter *abbruchID* beinhaltet die ID des Buttons, mit dem der Mining-Vorgang abgebrochen und die Funktion vorzeitig
  beendet werden kann. <br>
  Der Parameter *hakenID* beinhaltet die ID des Bildes eines Hakens, der angezeigt wird, wenn das Mining erfolgreich
  abgeschlossen ist. <br>
  Der Parameter *nextStartButtonID* beinhaltet die ID des Buttons, der nach dem Mining angezeigt wird und mit dem das Mining für
  den nächsten dargestellten Block gestartet werden kann. <br>
  Der Parameter *nextBlockID* beinhaltet die ID des nächsten dargestellten Blocks, für den im Anschluss die Mining-Funktion
  ausgeführt werden kann.



### CSS

## 5.2 Dynamik
An dieser Stelle sollten die dynamische Aspekte, zum Beispiel mit Hilfe von UML Sequenz/Kollaborationsdiagrammen, oder Akivitätsdiagrammen beschrieben werden.

## 5.3 Logik 
An dieser Stelle können noch logische Aspekte, wie zum Beispiel logische Einschränkungen spezifiziert werden. Hierzu kann zum Beispiel OCL verwendet werden.
