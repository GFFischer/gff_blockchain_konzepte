# Pflichtenheft
#####  (Nach Ludewig und Lichter, 351-358)

| Version | Autor | Quelle | Status | Datum | Kommentar |
| ------- | ----- | ------ | ------ | ----- | --------- |
|  0.1    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 19.03.2024 | Datei erstellt |
|  0.2    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 20.03.2024 | Pkt. 1.1 - 1.3 bearbeitet |
|  0.3    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 21.03.2024 | Pkt. 1.4 - 2.5 (ausgenommen 2.2) bearbeitet |
|  0.4    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 22.03.2024 | Pkt. 2.2 bearbeitet |
|  0.5    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 23.03.2024 | Use-case 1 (Anhang) hinzugefügt |
|  0.6    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 10.04.2024 | Use-case 2 bis 7 (Anhang) hinzugefügt |
|  0.7    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 11.04.2024 | Pkt. 4 bearbeitet, Pkt. 3 begonnen |
|  0.8    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 12.04.2024 | Pkt. 3 bearbeitet, Use-case 8 bis 12 (Anhang) hinzugefügt |
|  0.9    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 13.04.2024 | Use-case 13 (Anhang) hinzugefügt |
|  0.10   |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 15.04.2024 | Pkt. 3 bearbeitet, Use-case 14 bis 15 (Anhang) hinzugefügt |
|  0.11   |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 16.04.2024 | Pkt. 3 bearbeitet, Use-case 15 bis 17 (Anhang) hinzugefügt |
|  0.12   |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 17.04.2024 | Pkt. 3 fertig bearbeitet, Use-case 17 bis 19 (Anhang) hinzugefügt |
|  1.0    |  Georg Fischer   | lastenheft.md | abgeschlossen   | 18.04.2024 | Use-case 20 bis 23 (Anhang) hinzugefügt |
|  1.1    |  Georg Fischer   | lastenheft.md | abgeschlossen   | 04.05.2024 | Anpassungen bei Use-case 2, 21 und 22 vorgenommen |


## 1. Einleitung

### 1.1 Zweck

Der **Zweck** dieses Pflichtenhefts ist es, die Anforderungen, die sich aus dem Lastenheft ergeben, aus der Sicht des
Programmierers zu präzisieren, Anwendungsfälle ("Use-cases") inklusive etwaiger Ausnahmen und Sonderfälle zu 
definieren, sodass darauf aufbauend das Design der Applikation erstellt und die technischen Spezifikationen
vorgenommen werden können. Der **Leserkreis** eines Pflichtenhefts wäre im Regelfall der Auftraggeber, im konkreten 
Spezialfall dieses Projekts ist es der Autor (Programmierer) selbst.

### 1.2 Einsatzbereich und Ziele

Der **vorrangige Einsatzbereich** der Applikation soll der Informatikunterricht an der gymnasialen 
Oberstufe sein. Die **Ziele** sind, dass Lernenden ohne Vorwissen die fundamentalen Konzepte einer Blockchain 
vermittelt werden und es dabei für die Lernenden die Möglichkeit gibt, an bestimmten Stellen interaktiv einzugreifen. 
Die **Vision** hinter diesen Zielen ist, dass durch die Anwendung der Applikation die fundamentalen Konzepte einer 
Blockchein schneller und effizienter verstanden und gelernt werden können. Daher ist es ein weiteres Ziel, dass die
Applikation optisch ansprechend gestaltet ist.

Ein **weiterer Einsatzbereich** ist die selbstständige Anwendung der Applikation durch User ausserhalb des Unterrichts,
ohne formellen Rahmen und ohne vermittelnde Lehrperson. Daher ist es ein weiteres **Ziel**, dass die Applikation
selbsterklärend und intuitiv bedienbar ist.

Was die Applikation **nicht leisten** kann, ist, dass den Lernenden sämtliche Konzepte einer Blockchain detailliert und
vollständig vermittelt werden. Sie werden nach der Anwendung nicht in der Lage sein, selbst eine Blockchain-Anwendung zu
programmieren, es geht auch nicht darum, Wissen oder Kompetenzen zu erlangen, wie man eine konkrete existierende
Blockchain-Anwendung (z.B. die Bitcoin-Blockchain) verwendet, d.h. welche Software dafür installiert und wie diese
bedient werden muss.

### 1.3 Definitionen

| **Begriff** | **Erklärung** |
| ----------- | ------------- |
| Adresse | eine eindeutig identifizierbare, pseudonyme Identität eines Knotens einer Blockchain, bestehend aus dem öffentlichen Schlüssel eines zufällig erzeugten Schlüsselpaars |
| asymmetrische Verschlüsselung | Verschlüsselungsverfahren, bei dem für die Verschlüsselung und die Entschlüsselung zwei unterschiedliche Schlüssel verwendet werden |
| Block | Einheit von Daten in einer Blockchain-Datenstruktur, bestehend aus einem Block-Header und einem Merkle-Tree mit Hash-Referenzen auf die Transaktionsdaten ("Inhalt") |
| Blockchain-Datenstruktur | Organisation von Transaktionsdaten in miteinander verketteten Einheiten ("Blöcken") |
| Block-Header | Kopf eines Blocks einer Blockchain, bestehend (zumindest) aus der Hash-Referenz auf den vorherigen Block-Header, der Wurzel eines Merkle-Trees, dem Schwierigkeitsgrad für das Hashpuzzle ("Target"), einem Zeitstempel und einer Nonce |
| digitale Signatur | ein mit dem privaten Schlüssel verschlüsselter und zusammen mit einer Nachricht verschickter Hashwert der Nachricht, der die Authentifizierung der Nachricht ermöglicht |
| Hash-Referenz | ein Hashwert, der auf Daten (z.B. Transaktionsdaten) verweist, die an einem anderen Ort gespeichert sind |
| Hashpuzzle | eine Berechnungsaufgabe, bei der ein Hashwert mit einem bestimmten Target gesucht wird und die nur durch die Trial-and-Error-Methode zu lösen ist, indem den Daten, die gehasht werden, eine sich ständig ändernde Nonce hinzugefügt wird |
| Hashwert | eine Zahl mit fixer Länge, die von einer Hashfunktion bzw. einem Hashalgorithmus aus Daten unterschiedlicher Länge berechnet wird |
| Merkle-Tree | ein Binär-Baum, dessen Blätter Transaktionsdaten enthalten und dessen Knoten erzeugt werden, indem man Hashwerte aus den jeweils darunterliegenden Teilbäumen kombiniert und daraus einen neuen Hashwert generiert; die Wurzel des Baumes ist ebenfalls ein Hashwert |
| Mining | der Versuch, ein Hashpuzzle zu lösen, um einen neuen Block an die Blockchain anfügen zu können; im Erfolgsfall gibt es für die bereitgestellte Rechnerleistung in der Regel eine Entlohnung |
| Nonce | eine einmalige Zahlenfolge ("Number used once"), die einem Block-Header hinzugefügt und dazu benötigt wird, das Hashpuzzle zu lösen |
| Peer-to-Peer System | ein verteiltes Softwaresystem aus Einzelcomputern ("Knoten"), die sich ihre Berechnungsressourcen teilen und bei denen jeder Knoten die gleiche Funktionalität und Verantwortung hat |
| Proof-of-Work | ein Algorithmus, der dazu führt, dass unter den einzelnen Knoten des Peer-to-Peer-Systems ein Konsens über die Gültigkeit eines neuen Blocks gefunden wird, indem die Lösung eines Hashpuzzles als Beweis für die Gültigkeit des Blocks und als Arbeitsnachweis dient |
| Schlüsselpaar | in einem asymmetrischen Verschlüsselungsverfahren ein Paar aus einem öffentlichen und einem privaten Schlüssel |
| SiC (= Simulation Coin) | eine eigens für die Webapplikation erfundene fiktive Kryptowährung|
| Target | der Schwierigkeitsgrad eines Hashpuzzles, angegeben durch eine Zahl; der gesuchte Hashwert (die Zahl, die das Hashpuzzle löst) muss kleiner sein als diese Zahl |
| Transaktion | Übertragung von Werten innerhalb einer Blockchain von einer Adresse zu einer anderen Adresse |
| User | jede Person, welche die Applikation anwendet, gleichgültig in welchem Einsatzbereich | 

### 1.4 Referenzierte Dokumente

Das **Lastenheft** mit den Anforderungen an die Applikation aus der Sicht des Auftraggebers.

### 1.5 Überblick

* In **Pkt. 2** dieses Pflichtenhefts wird die Applikation allgemein beschrieben.
* In **Pkt. 3** werden die im Lastenheft formulierten Anforderungen detailliert aufgelistet. Unterstützend dafür finden
sich im Anhang skizzierte und beschriebene Use-cases.
* **Pkt. 4** ist aufgrund der speziellen Situation, dass es sich um das "individuelle Projekt" im Rahmen des 
Studienprogramms GymInf handelt und es keinen Auftraggeber im eigentlichen Sinn gibt, der am Ende das fertige
Produkt abnimmt, verhältnismässig kurz gehalten.
* Im **Anhang** finden sich die Use-cases, die sich aus dem Lastenheft (/LK10/ bis /LK80/ sowie /LF10/ bis /LF40/
und /LQF10/ bis /LQE10/) ergeben.


## 2. Allgemeine Beschreibung

### 2.1 Einbettung

* Die Applikation steht für sich selbst, ist nicht Teil einer grösseren Anwendung und auch nicht von anderen Anwendungen
  abhängig.
* Die Realisierung erfolgt als Web-Applikation, für die Umsetzung werden HTML, CSS und JavaScript verwendet.
* Die Ausführung der Applikation sowie der eingebetteten Skripte erfolgt auf der Client-Seite.

### 2.2 Funktionen

* Die Applikation besteht aus einer Anzahl von animierten Grafiken, über die a) durch das Klicken von "weiter"- und
  "zurück"-Buttons navigiert werden kann oder die b) über ein Navigationsmenü direkt angesteuert werden können.
* Alle animierten Grafiken können vom User durch das Klicken von Buttons gestartet oder abgebrochen, gegebenenfalls
  unterbrochen und wieder fortgesetzt werden.
* Bei allen animierten Grafiken gibt es (vor dem Start und/oder nach Beendigung bzw. Abbruch der Animation) die Möglichkeit,
  dass durch das Klicken auf ein intuitiv verständliches Symbol erklärende Texte aufpoppen. Dabei wird optisch unterschieden
  zwischen Erklärungen, die sich direkt auf das in der Animation Gezeigte beziehen, und weiterführenden Texten, die über das
  in der Animation Gezeigte hinausgehen.
* Bei bestimmten Animationen gibt es für den User die Möglichkeit, durch (Text-)Eingaben über ein Formular die Gestaltung
  der Animationen interaktiv zu beeinflussen, wobei einmal getätigte Eingaben auch Auswirkungen auf die Gestaltung danach
  folgender Animationen haben können.

### 2.3 Benutzerprofile

* **Schülerinnen und Schüler der gymnasialen Oberstufe:** eine informatische Grundbildung, die in der Sekundarstufe
  erfolgt, kann vorausgesetzt werden; es wird davon ausgegangen, dass keine Kenntnisse über Blockchains, Hashfunktionen
  und asymmetrische Verschlüsselungsverfahren vorhanden sind
* **"freie" User:** eine etwaige informatische Vorbildung kann nicht vorausgesetzt werden, trotzdem wird davon
  ausgegangen, dass diese vergleichbar mit jener von Schülerinnen und Schülern der gymnasialen Oberstufe ist

Für alle User gilt die Voraussetzung, dass sie der deutschen Sprache mächtig sind.

### 2.4 Einschränkungen
* Die Applikation soll lediglich in deutscher Sprache zur Verfügung stehen, es sind keine Übersetzungen geplant.
* Es ist möglich, dass einige Animationen so gross werden, dass sie auf einem kleinen, hochformatigen Bildschirm (z.B.
  Smartphone) nicht zur Gänze darstellbar sind.
* Das "individuelle Projekt" im Studienprogramm GymInf dient dazu, dass Studierenden ihre im Studium erworbenen Kenntnisse
  in die Praxis umsetzen. Daher versucht der Autor (Programmierer), soweit das möglich ist, den notwendigen Code
  eigenhändig zu schreiben und auf Bibliotheken, Templates, APIs, ... weitestgehend zu verzichten. Es ergibt sich von
  selbst, dass das zu einer Einschränkung in der Qualität der Applikation führt.

### 2.5 Annahmen und Abhängigkeiten
* Angenommen wird, dass die User moderne Browser verwenden, die HTML5, CSS3 und JavaScript beherrschen.
* Bei der Konzeption der Animationen wird angenommen, dass die User die Applikation mehrheitlich auf grösseren,
  querformatigen Bildschirmen anwenden.
* Es bestehen keine Abhängigkeiten zu anderen Systemen oder anderer Software.


## 3. Einzelanforderungen

* **/F10/** Das Design der Webapplikation *muss* responsiv sein. *(vgl. /LQB10/)*
  * /F11/ Bei einer Bildschirmbreite von weniger als 960 Pixeln *soll* das bei grösseren Bildschirmbreiten angezeigte
    Navigationsmenü verschwinden und über ein "Hamburger-Menü-Icon" ausklappbar sein.
  * /F12/ Die aufpoppenden erklärenden bzw. weiterführenden Texte *müssen* bei einer Bildschirmbreite von mindestens
    540 Pixeln ohne horizontales Scrollen lesbar sein. *(vgl. Use-case 3)*
  * /F13/ Die verwendeten Schriftarten sollen bei einer Bildschirmbreite von weniger als 960 Pixeln um 25 - 35 Prozent
    kleiner werden.
  * /F14/ Die Grösse der Animationen *sollte sich eventuell* dynamisch an die Bildschirmbreite anpassen.
* **/F20/** Die Applikation *muss* dem User die Möglichkeit geben, die Animationen selbstständig zu starten, abzubrechen,
  zu unterbrechen und nach einer Unterbrechung fortzusetzen. *(vgl. Use-case 1, /LF10/)*
  * /F21/ Bei jeder Animation *muss* der User durch das Klicken jeweils eines Buttons die Animation starten und abbrechen
    können.
  * /F22/ Bei jenen Animationen, die länger als 3 Sekunden dauern, *muss* der User durch das Klicken jeweils eines Buttons
    die Animation unterbrechen und nach einer Unterbrechung fortsetzen können.
* **/F30/** Eine einfache Navigation über die einzelnen Animationen *soll* in der gesamten Applikation mittels eines Menüs
  und mithilfe von Buttons ermöglicht werden. *(vgl. Use-case 2, /LF20/, /LQB30/)*
  * /F31/ Die Applikation *muss* dem User die Möglichkeit geben, über "weiter"- und "zurück"-Buttons zwischen den
    einzelnen Animationen nach vor und zurück zu springen.
  * /F32/ Die Applikation *muss* dem User die Möglichkeit geben, über ein eigenes Navigationsmenü direkt zu den einzelnen
    Animationen zu navigieren.
* **/F40/** Die Applikation *muss* dem User die Möglichkeit geben, durch das Klicken auf ein Symbol oder einen Button
  vor dem Start und/oder nach Beendigung bzw. Abbruch der Animation erklärende und/oder weiterführende Texte zu den
  einzelnen Animationen zu öffnen. *(vgl. Use-case 3, /LF30/)*
  * /F41/ Die erklärenden Texte *sollen* durch das Klicken auf ein intuitiv verständliches Symbol (z.B. i in einem Kreis),
    das sich an einer oder mehreren Stellen im Bereich einer Animation befindet, aufpoppen. *(vgl. /LQB20/)*
  * /F42/ Die weiterführenden Texte *sollen* durch das Klicken auf einen Button (z.B. "Hintergrundwissen"), der sich
    unterhalb der Animation befindet, aufpoppen.
  * /F43/ Die erklärenden und die weiterführenden Texte sollen sich farblich unterscheiden. *(vgl. /LBQ40/)*
  * /F44/ Die erklärenden Texte *sollen* leicht verständlich geschrieben und ausgewogen bezüglich Kürze und inhaltlicher
    Tiefe sein. *(vgl. /LQE10/)*
* **/F50/** Die Applikation *soll* dem User die Möglichkeit geben, interaktiv in die Gestaltung von Animation 1
  ("Aufbau einer Blockchain-Datenstruktur") einzugreifen. *(vgl. /LK20/, /LF40/, /LF41/)*
  * /F51/ Die Animationen 1a, 1b und 1c *sollen* schrittweise detaillierter zeigen, wie einer Blockchain neue Blöcke
    hinzugefügt werden, wobei die Inhalte dieser neuen Blöcke die vom User eingegebenen Texte sind. *(vgl. Use-case 4
    bis Use-case 5)*
  * /F52/ Der User soll die Möglichkeit haben, bei Animation 1a einen kurzen Text (maximal ca. 50 Zeichen, bestehend aus
    ausschliesslich Gross- und Kleinbuchstaben, Umlauten und Ziffern) einzugeben, bei Animation 1b und 1c einen ebensolchen
    kurzen Text einzugeben und die Berechnung eines Hashwerts durch das Klicken eines Buttons zu starten. *(vgl. Use-case
    4 bis Use-case 6)*
  * /F53/ Die ausgegebenen Hashwerte *sollen* das Ergebnis einer Hashfunktion und demgemäss vom eingegebenen Text
    abhängig sein.
  * /F54/ Die Animation 1d *soll* zeigen, wie Block-Header und Inhalt getrennt und durch eine Hash-Referenz im
    Block-Header miteinander verknüpft werden. *(vgl. Use-case 7)*
* **/F60/** Die Applikation *soll* dem User die Möglichkeit geben, interaktiv in die Gestaltung von Animation 2
  ("Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System") einzugreifen. *(vgl. /LK30/ /LF40/, /LF42/)*
  * /F61/ Die Animationen 2a und 2b *sollen* zeigen, wie ein neuer Knoten zu einem als ungerichteter Graph modellierten
    Peer-to-Peer-System hinzugefügt wird und wie für diesen Knoten ein Wallet mit einem, zwei oder drei Schlüsselpaaren
    ("Adressen") eingerichtet wird, wobei der User dem Knoten einen vorläufigen Namen zuweisen und die Anzahl der
    Adressen bestimmen kann. *(vgl. Use-case 8 und Use-case 9)*
  * /F62/ Der User *soll* die Möglichkeit haben, bei Animation 2a einen Namen (maximal 20 Zeichen, bestehend aus
    ausschliesslich Gross- und Kleinbuchstaben, Umlauten und Ziffern) einzugeben. *(vgl. Use-case 8)*
  * /F63/ Der User *soll* die Möglichkeit haben, bei Animation 2b die Anzahl der dem neuen Knoten zugewiesenen Adressen
    (mindestens 1, maximal 3 Adressen) einzugeben. *(vgl. Use-case 9)*
  * /F64/ Die Zuweisung der vorläufigen Namen der Knoten in Animation 2a sowie der Anzahl der Adressen als auch der
    Adressen selbst in Animation 2b *soll* bei jedem Start der Applikation aus einer vorgegebenen Auswahl (ca. 200 Namen
    und ca. 200 Adressen, Anzahl von 1 bis 3) zufällig gewählt werden.
  * /F65/ Die Animation 2c soll zeigen, wie die Namen der Knoten verschwinden und als pseudonyme Identifikation
    ausschliesslich die Adressen übrig bleiben. *(vgl. Use-case 10)*
* **/F70/** Die Applikation *soll* dem User die Möglichkeit geben, interaktiv in die Gestaltung von Animation 3
  ("Durchführung einer Transaktion") einzugreifen. *(vgl. /LK40/, /LF40/, /LF43/)*
  * /F71/ Der User *soll* die Möglichkeit haben, in Animation 3a für die in Animation 2b erstellten Adressen jeweils
    fiktive Kontostände im Bereich von 0 bis 999 SiC einzugeben. *(vgl. Use-case 11)*
  * /F72/ Die Zuweisung der Kontostände im Bereich von 0 bis 999 SiC zu allen anderen Adressen der Knoten aus Animation
    2c *soll* bei jedem Start der Applikation zufällig bestimmt werden.
  * /F73/ Der User *soll* die Möglichkeit haben, in Animation 3b eine fiktive Transaktion zu erstellen, indem er über ein
    Formular aus den ein bis drei Adressen seines "eigenen" Knotens eine Auftraggeber-Adresse und aus allen anderen
    Adressen der Knoten aus Animation 2c eine Empfänger-Adresse wählt, selbstständig eine ganze Zahl für den zu
    überweisenden Betrag eingibt, und indem die Applikation automatisch einen aktuellen Zeitstempel und eine Gebühr von
    0,03 SiC einfügt sowie einen Hashwert für die ganze Transaktion berechnet. *(vgl. Use-case 12)*
  * /F74/ Die Animation 3c *soll* zeigen, wie eine digitale Signatur erstellt wird, indem aus dem Hashwert der Transaktion
    durch die Anwendung asymmetrischer Verschlüsselung nach dem Prinzip des RSA-Algorithmus, allerdings mit sehr kleinen
    Zahlen, eine digitale Signatur berechnet wird. *(vgl. Use-case 13)*
  * /F75/ Die Animation 3d *soll* zeigen, wie die Transaktion geprüft und zurückgewiesen wird, wenn der eingegebene zu
    überweisende Betrag höher ist als der Kontostand der Auftraggeber-Adresse, ODER wie andernfalls die digitale Signatur
    geprüft wird, indem aus ihr durch die Anwendung asymmetrischer Entschlüsselung nach dem Prinzip des RSA-Algorithmus,
    allerdings mit sehr kleinen Zahlen, der Hashwert der Transaktion berechnet wird. *(vgl. Use-case 14)*
* **/F80/** Die Applikation *soll* dem User die Möglichkeit geben, interaktiv in die Gestaltung von Animation 4
  ("Speichern von Transaktionen und Erstellen von neuen Blöcken") einzugreifen. *(vgl. /LK50/, /LF40/, /LF44/)*
  * /F81/ Die Animation 4a *soll* zeigen, wie zwei Transaktionen durch die Berechnung eines Hashwertes auf ihre beiden
    Hash-Referenzen miteinander verknüpft werden. *(vgl. Use-case 15)*
  * /F82/ Die Animation 4b *soll* zeigen, wie zweimal jeweils vier Transaktionen durch die Berechnung von Hashwerten in
    einem Merkle-Tree miteinander verknüpft und wie im Block-Header der Blöcke der Blockchain die Wurzel dieser
    Merkle-Trees zur Hash-Referenz auf den Inhalt der Blöcke werden. *(vgl. Use-case 16)*
  * /F83/ Der User *soll* die Möglichkeit haben, in Animation 4c bei einer der in einem Merkle-Tree miteinander verknüpften
    Transaktionen den zu überweisenden Betrag und/oder die Empfänger-Adresse zu ändern, wodurch gezeigt werden soll, welche
    Auswirkungen eine kleine Änderung auf die gesamte Blockchain hat. *(vgl. Use-case 17)*
* **/F90/** Die Applikation *soll* dem User die Möglichkeit geben, interaktiv in die Gestaltung von Animation 5
  ("Schützen der Blöcke durch Proof-of-Work") einzugreifen. *(vgl. /LK60/, /LF40/, /LF45/)*
  * /F91/ Die Animation 5a *soll* das Mining beim Proof-of-Work-Konsensmechanismus zeigen, indem automatisch durch die
    Applikation im Abstand von 0.7 Sekunden eine Nonce nach der anderen ausprobiert wird, um einen Hashwert für den neuen
    Block zu finden, der kleiner als die im Target angegebene hexadezimale Zahl 0fffffff ist. *(vgl. Use-case 18)*
  * /F92/ Die Animation 5b *soll* das Mining beim Proof-of-Work-Konsensmechanismus zeigen, indem automatisch durch die
    Applikation im Abstand von 0.7 Sekunden eine Nonce nach der anderen ausprobiert wird, um einen Hashwert für den neuen
    Block zu finden, der kleiner als die im Target angegebene hexadezimale Zahl 00ffffff ist. *(vgl. Use-case 19)*
* **/F100/** Die Applikation *soll* zeigen, wie eine Transaktion in einem als ungerichteter Graph modellierten
  Peer-to-Peer-System verteilt wird, wie ein neuer Block erstellt und verteilt wird und wie es zu Konflikten kommen kann,
  wenn zwei unterschiedliche Blöcke annähernd zeitgleich erstellt werden. *(vgl. /LK70/)*
  * /F101/ Die Animation 6a *soll* anhand des in Animation 2c als ungerichteter Graph modellierten Peer-to-Peer-Systems
    zeigen, wie eine Transaktion, die von einer Adresse des in Animation 2a vom User hinzugefügten Knotens erstellt worden
    ist, im System verteilt wird und letztlich zu allen Peers gelangt, indem jeder Peer (Knoten), der die Transaktion erhält,
    sie an alle Peers, mit denen er verbunden ist, weiterleitet. *(vgl. Use-case 20)*
  * /F102/ Die Animation 6b *soll* zeigen, wie der User von "seinem" Knoten aus mehrere Transaktionen in einen Block
    zusammenfasst und diesen Block an alle Peers weiterleitet, wodurch die verarbeiteten Transaktionen bei den Peers aus
    deren Posteingang verschwinden. *(vgl. Use-case 21)*
  * /F103/ Die Animation 6c *soll* zeigen, wie der User von "seinem" Knoten aus mehrere Transaktionen in einen Block
    zusammenfasst und diesen Block an alle Peers weiterleitet und gleichzeitig ein anderer Knoten ebenfalls mehrere
    Transaktionen in einen Block zusammenfasst und diesen Block an alle Peers weiterleitet, wodurch es zu einem Konflikt
    kommt, welcher Block der gültige Block ist. *(vgl Use-case 22)*
 * **/F110/** Die Applikation *soll* zeigen, wie bei einer Konkurrenzsituation von zwei Versionen einer Blockchain die
   gültige Version über das Kriterium der "schwersten Kette" (bis dahin grösster Berechnungsaufwand) ausgewählt wird.
   *(vgl. /LK80/)*
   * /F111/ Die Animation 7 *soll* zeigen, wie sich bei zwei Konkurrenzsituationen von jeweils zwei Versionen einer
     Blockchain mehrere Äste bilden, bis eine Version gegenüber der jeweils konkurrierenden Version aufgrund des höheren
     gesamten Schwierigkeitsgrads (entspricht dem insgesamt erbrachten Rechenaufwand, "Kriterium der schwersten Kette")
     als aktuell gültig anerkannt und farblich hervorgehoben wird. *(vgl. Use-case 23)*


## 4. Abnahmekriterien

* /A10/ Das Design der Webapplikation ist responsiv, auch bei der Benutzung auf einem Smartphone ist eine gegebenenfalls
  leicht eingeschränkte Übersichtlichkeit gegeben.
* /A20/ Es ist möglich, über "weiter"- und zurück"-Buttons zwischen den einzelnen Animationen nach vor und zurück zu
  springen sowie über ein eigenes Navigationsmenü direkt zu den einzelnen Animationen zu navigieren.
* /A30/ Es ist bei allen Animationen möglich, die jeweilige Animation zu starten und jederzeit abzubrechen.
* /A31/ Es ist bei jenen Animationen, die länger als 3 Sekunden dauern, möglich, die jeweilige Animation beliebig oft zu
  unterbrechen und danach wieder fortzusetzen.
* /A40/ Es ist bei allen Animationen möglich, durch das Klicken auf ein Symbol oder einen Button erklärende und/oder
  weiterführende Texte zu öffnen.
* /A50/ Die Applikation erfüllt die in Pkt. 3 ("Einzelanforderungen") zu den einzelnen Animationen definierten
  funktionalen Anforderungen /F50/ bis /F111/, wobei etwaige kleine Abstriche möglich sind, jedoch jeder konkrete
  Einzelfall gesondert bewertet werden muss.
* /A60/ Die optische Gestaltung der Applikation ist mehrfarbig, das für das Verständnis der fundamentalen Konzepte einer
  Blockchain Wesentliche ist erkennbar hervorgehoben.
* /A70/ Die erklärenden und weiterführenden Texte sind für den Grossteil junger Lernender mit wenig Erfahrung und geringen
  Kenntnissen in der Informatik verständlich geschrieben und ausgewogen bezüglich notwendiger Kürze und wünschenswerter
  Tiefe.


# Anhang

## Anhang A. Use-cases

### Use-case 1 - gilt für alle Animationen:

![Diagram](img/use-case_1.svg)

* Name: *Animation n starten / unterbrechen / fortsetzen / abbrechen*
* Akteur: *User*
* Vorbedingungen: *Der User hat zu einer Animation navigiert, die Animation ist vollständig geladen.*
* Standardablauf:
    * Der User startet die Animation n.
      * (Optional, mehrfach möglich: Der User unterbricht die Animation.)
      * (Optional, nur nach Unterbrechen der Animation möglich: Der User setzt die Animation fort.)
      * (Optional: der User bricht die Animation ab.)
    * Die Animation ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation wird am Bildschirm angezeigt.*
* Nachbedingung Sonderfall 1a: *Die vom User gewählte Animation wird geladen.*

#### Sonderfall 1a: Der User navigiert von der Animation weg.
* Ablauf Sonderfall 1a:
    * Der User betätigt die "weiter"- oder "zurück"-Buttons oder wählt eine Animation im Navigationsmenü.
    * Der User navigiert zur nachfolgenden ODER zur vorherigen ODER zu einer beliebigen Animation.


### Use-case 2 - gilt für alle Animationen:

![Diagram](img/use-case_2.svg)

* Name: *Navigation zwischen den einzelnen Animationen*
* Akteure: *User*
* Vorbedingungen: *Der User hat zu einer beliebigen Animation n navigiert.*
* Standardablauf:
    * Der User navigiert zur vorherigen Animation n-1 durch Klicken auf einen "Zurück"-Button
    * ODER: Der User navigiert zur nachfolgenden Animation n+1 durch Klichen auf einen "Weiter"-Button
    * ODER: Der User navigiert zu eienr beliebigen Animation m durch das Klicken auf einen Link zur
      Animation m im Navigationsmenü.
* Nachbedingung Erfolg: *Die gewählte Animation wird geladen.*
* Nachbedingung Sonderfall 2a: *Die erste Animation bleibt geladen.*
* Nachbedingung Sonderfall 2b: *Die letzte Animation bleibt geladen.*

#### Sonderfall 2a: Der User hat zur ersten Animation navigiert
* Ablauf Sonderfall 2a:
    * Es wird kein "Zurück"-Button angezeigt.

#### Sonderfall 2b: Der User hat zur letzten Animation navigiert
* Ablauf Sonderfall 2b:
    * Es wird kein "Weiter"-Button angezeigt.


### Use-case 3 - gilt für alle Animationen:

![Diagram](img/use-case_3.svg)

* Name: *Erklärende und/oder weiterführende Texte zu den Animationen öffnen*
* Akteure: *User*
* Vorbedingungen: *Eine Animation ist vollständig geladen, aber noch nicht gestartet ODER eine
  Animation ist beendet. Im Bereich der Animation befinden sich an einer oder mehreren Stellen ein
  oder mehrere Symbole, die intuitiv als Buttons für erklärende Informationen zu den Animationen
  verstanden werden können. Unterhalb der Animationen befindet sich ein Button, der mit dem Text
  "Hintergrundwissen" beschriftet ist.*
* Standardablauf:
    * Der User klickt auf eines der angezeigten Symbole im Bereich der Animation
    * ODER: Der User klickt auf den "Hintergrundwissen"-Butten unterhalb der Animation
    * Ein erklärender bzw. weiterführender Text poppt auf, der sich optisch unterscheidet je
      nachdem, ob es sich um eine erklärende Information (Symbol) oder um weiterführende
      Informationen (Button "Hintergrundwissen") handelt.
    * Der User klickt irgendwo innerhalb der Applikation.
    * Der erklärende bzw. weiterführende Text verschwindet.
* Nachbedingung Erfolg: *Die Applikation befindet sich im gleichen Status wie vor dem Öffnen der
  erklärenden oder weiterführenden Texte.*


### Use-case 4 - Animation 1a:

![Diagram](img/use-case_4.svg)

* Name: *Aufbau einer Blockchain-Datenstruktur, Teil 1/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 1a ist geladen. Der erste Frame zeigt zwei symbolisch dargestellte
  Seiten eines Buchs, bestehend jeweils aus einer Seitenzahl ("Seite 1", "Seite 2") und einem 
  kurzen Text als Inhalt (siehe folgende schematische Darstellung).*

![Diagram](img/animation_1a_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle eine neue Seite"
      beschriftet ist, klickt.
    * Es öffnet sich ein Formular, in das der User einen kurzen Text als Inhalt für eine neue Seite
      eingibt. Die Seitenzahl ("Seite 3") wird automatisch zugewiesen. Der User bestätigt mit "OK".
    * Eine neue symbolisch dargestellte Seite eines Buchs, bestehend aus einer Seitenzahl ("Seite
      3") und dem vom User eingegebenen Inhalt wird der Animation hinzugefügt.
    * Animation 1a ist beendet.
* Nachbedingung Erfolg: *Eine neue symbolisch dargestellte Seite eines Buchs mit dem vom User
  eingegebenen Inhalt ist der Animation hinzugefügt (siehe folgende schematische Darstellung).*
* Nachbedingung Sonderfall 4a: *Animation 1a wird neu geladen.*
 
![Diagram](img/animation_1a_02.svg)

#### Sonderfall 4a: Der User gibt einen Text ein, der länger als 50 Zeichen ist oder nicht ausschliesslich Gross- und Kleinbuchstaben, Umlauten und Ziffern besteht
* Ablauf Sonderfall 4a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie einen Text ein, der
      ausschliesslich aus Gross- und Kleinbuchstaben oder Ziffern besteht und maximal 50 Zeichen lang ist."

### Use-case 5 - Animation 1b:

![Diagram](img/use-case_5.svg)

* Name: *Aufbau einer Blockchain-Datenstruktur, Teil 2/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 1b ist geladen. Der erste Frame zeigt drei symbolisch dargestellte
  Seiten eines Buchs, bestehend jeweils aus einem auf den Inhalt berechneten Hashwert (eine
  achtstellige hexadezimale Zahl) und einem kurzen Text als Inhalt. Die Texte sind identisch mit
  jenen aus Animation 1a, auf der dritten Seite befindet sich also der vom User in Animation 1a
  eingegebene Text ODER, falls der User Animation 1a nicht bearbeitet hat, ein von der Applikation
  vorgegebener Text (siehe folgende schematische Darstellung).*

![Diagram](img/animation_1b_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle eine neue Seite"
      beschriftet ist, klickt.
    * Es öffnet sich ein Formular, in das der User einen kurzen Text als Inhalt für eine neue Seite
      eingibt. 
    * Durch Klicken eines Buttons ("Hashwert berechnen") wird auf den vom User eingegebenen Text
      ein Hashwert berechnet. Der User bestätigt mit "OK".
    * Eine neue symbolisch dargestellte Seite eines Buchs, bestehend aus dem berechneten Hashwert
      und dem vom User eingegebenen Inhalt wird der Animation hinzugefügt.
    * Animation 1b ist beendet.
* Nachbedingung Erfolg: *Eine neue symbolisch dargestellte Seite eines Buchs mit dem vom User
  eingegebenen Ihhalt und dem auf diesen Inhalt berechneten Hashwert ist der Animation hinzugefügt
  (siehe folgende schematische Darstellung).*
* Nachbedingung Sonderfall 5a: *Animation 1b wird neu geladen.*
 
![Diagram](img/animation_1b_02.svg)

#### Sonderfall 5a: Der User gibt einen Text ein, der länger als 50 Zeichen ist oder nicht ausschliesslich Gross- und Kleinbuchstaben, Umlauten und Ziffern besteht
* Ablauf Sonderfall 5a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie einen Text ein, der
      ausschliesslich aus Gross- und Kleinbuchstaben oder Ziffern besteht und maximal 50 Zeichen lang ist."


### Use-case 6 - Animation 1c:

![Diagram](img/use-case_6.svg)

* Name: *Aufbau einer Blockchain-Datenstruktur, Teil 3/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 1c ist geladen. Der erste Frame zeigt vier symbolisch dargestellte
  Blöcke einer Blockchain, bestehend jeweils aus einem auf den Inhalt berechneten Hashwert, einer
  Hash-Referenz auf den vorherigen Block und einem kurzen Text als Inhalt. Die Texte sind identisch
  mit jenen aus Animation 1b, auf der dritten und der vierten Seite befinden sich also die vom
  User in den Animation 1a und 1b eingegebenen Texte ODER, falls der User die Animationen 1a und/oder 1b
  nicht bearbeitet hat, von der Applikation vorgegebene Texte (siehe folgende schematische Darstellung).*

![Diagram](img/animation_1c_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle eine neue Seite"
      beschriftet ist, klickt.
    * Es öffnet sich ein Formular, in das der User einen kurzen Text als Inhalt für einen neuen
      Block eingibt. 
    * Durch Klicken eines Buttons ("Hashwert berechnen") wird auf den vom User eingegebenen Text
      ein Hashwert berechnet. Die Hash-Referenz auf den vorherigen Block wird automatisch zugewiesen.
      Der User bestätigt mit "OK".
    * Eine neuer symbolisch dargestellter Block einer Blockchain, bestehend aus dem berechneten
      Hashwert, der Hash-Referenz auf den vorherigen Block und dem vom User eingegebenen Inhalt wird
      der Animation hinzugefügt.
    * Animation 1c ist beendet.
* Nachbedingung Erfolg: *Ein neuer symbolisch dargestellter Block einer Blockchain mit dem vom
  User eingegebenen Ihhalt, dem auf diesen Inhalt berechneten Hashwert und einer Hash-Referenz auf
  den vorherigen Block ist der Animation hinzugefügt (siehe folgende schematische Darstellung).*
* Nachbedingung Sonderfall 6a: *Animation 1c wird neu geladen.*
 
![Diagram](img/animation_1c_02.svg)

#### Sonderfall 6a: Der User gibt einen Text ein, der länger als 50 Zeichen ist oder nicht ausschliesslich Gross- und Kleinbuchstaben, Umlauten und Ziffern besteht
* Ablauf Sonderfall 6a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie einen Text ein, der
      ausschliesslich aus Gross- und Kleinbuchstaben oder Ziffern besteht und maximal 50 Zeichen lang ist."


### Use-case 7 - Animation 1d:

![Diagram](img/use-case_7.svg)

* Name: *Aufbau einer Blockchain-Datenstruktur, Teil 4/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 1d ist geladen. Der erste Frame zeigt fünf symbolisch dargestellte
  Blöcke einer Blockchain, bestehend jeweils aus einem auf den Inhalt berechneten Hashwert, einer
  Hash-Referenz auf den vorherigen Block und einem kurzen Text als Inhalt. Der Frame ist identisch
  mit dem Abschluss-Frame aus Animation 1c, auf der dritten, vierten und fünften Seite befinden
  sich also die vom User in den Animation 1a, 1b und 1c eingegebenen Texte ODER, falls der User die
  Animationen 1a bis 1c teilweise oder zur Gänze nicht bearbeitet hat, von der Applikation vorgegebene
  Texte.*
* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Starte Animation"
      beschriftet ist, klickt.
    * In einer Animation wird aus den fünf symbolisch dargestellten Blöcken deren jeweiliger Inhalt
      ausgelagert und durch eine Hash-Referenz auf diesen ersetzt. Übrig bleibt ein Block-Header.
    * Animation 1d ist beendet.
* Nachbedingungen Erfolg: *Die fünf symbolisch dargestellten Blöcke einer Blockchain sind in der
  Animation aufgeteilt in Block-Header und die jeweiligen Inahlte, auf die in den Block-Headern
  referenziert wird (siehe folgende schematische Darstellung).*
 
![Diagram](img/animation_1d_01.svg)


### Use-case 8 - Animation 2a:

![Diagram](img/use-case_8.svg)

* Name: *Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System", Teil 1/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 2a ist geladen. Der erste Frame zeigt einen ungerichteten Graphen mit elf Knoten, jeder
  beschriftet mit einem kurzen Vornamen. Die Zuweisung dieser Vornamen hat die Applikation aus einer vorgegebenen
  Auswahl (ca. 200 Namen) zufällig gewählt (siehe folgende schematische Darstellung).*

![Diagram](img/animation_2a_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle einen neuen Peer" beschriftet ist,
      klickt.
    * Es öffnet sich ein Formular, in das der User einen kurzen Text als Name für eine neuen Peer eingibt. Der User
      bestätigt mit "OK".
    * Ein neuer Knoten, der mit dem eingegebenen Namen beschriftet ist, wird dem ungerichteten Graphen hinzugefügt. Der
      neue Knoten ist mit zwei anderen Knoten verbunden.
    * Animation 2a ist beendet.
* Nachbedingung Erfolg: *Ein neuer, mit dem vom User eingegebenen Namen beschrifteter Knoten ist dem Peer-to-Peer-System
  hinzugefügt (siehe folgende schematische Darstellung.)*
* Nachbedingung Sonderfall 8a: *Animation 2a wird neu geladen.*

![Diagram](img/animation_2a_02.svg)

#### Sonderfall 8a: Der User gibt einen Text ein, der länger als 20 Zeichen ist oder nicht ausschliesslich Gross- und Kleinbuchstaben, Umlauten und Ziffern besteht
* Ablauf Sonderfall 8a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie einen Text ein, der
      ausschliesslich aus Gross- und Kleinbuchstaben oder Ziffern besteht und maximal 20 Zeichen lang ist."

### Use-case 9 - Animation 2b:

![Diagram](img/use-case_9.svg)

* Name: *Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System", Teil 2/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 2b ist geladen. Der erste Frame zeigt den Graphen aus Animation 2a, allerdings so verändert,
  dass die Beschriftung jedes Knotens ausgenommen des vom User in Animation 2a hinzugefügten mit einer, zwei oder drei
  Adressen erweitert worden ist. Falls der User die Animation 2a nicht bearbeitet hat, ist der dort hinzugefügte Knoten mit
  einem von der Applikation vorgegebenen Namen beschriftet (siehe folgende schematische Darstellung.)*

![Diagram](img/animation_2b_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle ein Wallet" beschriftet ist, klickt.
    * Es öffnet sich ein Formular, in das der User eine ganze Zahl von 1 bis 3 als Anzahl für die einzurichtenden
      Adressen eingibt. Der User bestätigt mit "OK".
    * Die Beschriftung des vom User in Animation 2a hinzugefügten Knotens wird mit so vielen Adressen erweitert, wie es der
      User eingegeben hat.
    * Animation 2b ist beendet.
* Nachbedingung Erfolg: *Die Beschriftung des vom User in Animation 2a hinzugefügten Knotens ist mit so viele Adressen
  erweitert, wie es der User eingegeben hat. Neben diesem Knoten befindet sich ein Textfeld mit den entsprechenden
  privaten Schlüsseln (siehe folgende schematische Darstellung.)*
* Nachbedingung Sonderfall 9a: *Animation 2b wird neu gestartet.*

![Diagram](img/animation_2b_02.svg)

#### Sonderfall 9a: Der User gibt etwas anderes ein als eine der drei ganzen Zahlen 1, 2, oder 3
* Ablauf Sonderfall 9a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie eine ganze Zahl von 1
      bis 3 ein."


### Use-case 10 - Animation 2c:

![Diagram](img/use-case_10.svg)

* Name: *Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System", Teil 3/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 2c ist geladen. Der erste Frame ist identisch mit dem Abschluss-Frame von Animation 2b
  und zeigt den ungerichteten Graphen mit allen Namen und Adressen, einschliesslich dem vom User in Animation 2a
  eingegebenen Namen und den in Animation 2b hinzugefügten Adressen und privaten Schlüsseln ODER, falls der User die
  Animationen 2a und/oder 2b nicht bearbeitet hat, mit von der Applikation vorgegebenen Werten.*
* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Starte Animation"
      beschriftet ist, klickt.
    * In einer Animation verschwinden aus den zwölf Knoten hintereinander die jeweiligen Namen, sodass einzig die
      Adressen sowie die privaten Schlüssel der Adressen des vom User in Animation 2a hinzugefügten Knoten übrig bleiben.
    * Animation 2c ist beendet.
* Nachbedingung Erfolg: *Zu sehen ist ein ungerichteter Graph mit zwölf Knoten, die mit ein bis drei Adressen beschriftet
  sind, sowie die privaten Schlüssel der Adressen des vom User hinzugefügten Knotens (siehe folgende schematische
  Darstellung).*

![Diagram](img/animation_2c_01.svg)


### Use-case 11 - Animation 3a:

![Diagram](img/use-case_11.svg)

* Name: *Durchführen einer Transaktion Teil 1/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 3a ist geladen. Der erste Frame zeigt eine Tabelle mit den 1 bis 3 Adressen des in
  Animation 2a bis 2c neu hinzugefügten Knotens ODER, falls der User die Animationen 2a bis 2c nicht bearbeitet hat
  und direkt zu Animation 3a navigiert ist, drei aus einer vorgegebenen Auswahl zufällig ausgewählte Adressen. In einer
  weiteren Spalte sind die privaten Schlüssel, eine weitere mit "Kontostand" überschriebene Spalte ist noch leer (siehe
  folgende schematische Darstellung).*

![Diagram](img/animation_3a_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Lege Kontostand fest" beschriftet ist, klickt.
    * Es öffnet sich ein Formular, in das der User ein- bis dreimal, je nach Anzahl der Adressen, eine ganze Zahl von 0
      bis 999 eingibt. Der User bestätigt mit "OK".
    * Die vom User eingegebenen Kontostände in der Kryptowährung SiC werden in die Spalte "Kontostand" in die Animation
      eingefügt.
    * Animation 3a ist beendet.
* Nachbedingung Erfolg: *Die Tabelle auf der Animation ist mit den eingegebenen Kontoständen vollständig ausgefüllt.
  (siehe folgende schematische Darstellung).*
* Nachbedingung Sonderfall 11a: *Animation 3a wird neu gestartet.*

![Diagram](img/animation_3a_02.svg)

#### Sonderfall 11a: Der User gibt etwas anderes ein als eine ganze Zahl von 0 bis 999
* Ablauf Sonderfall 11a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie eine ganze Zahl von 0
      bis 999 ein."



### Use-case 12 - Animation 3b:

![Diagram](img/use-case_12.svg)

* Name: *Durchführen einer Transaktion Teil 2/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 3b ist geladen. Der erste Frame zeigt die Tabelle des Abschluss-Frames von Animation 3a
  ODER, falls der User die Animation 3a nicht bearbeitet hat und direkt zu Animation 3b navigiert ist, drei aus einer
  vorgegebenen Auswahl zufällig ausgewählte Adressen mit zufällig bestimmten Kontoständen. Zusätzlich zu dieser Tabelle
  ist eine Tabelle mit allen anderen Adressen des Graphen aus Animation 2c und zufällig bestimmten Kontoständen (siehe
  folgende schematische Darstellung).*

![Diagram](img/animation_3b_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle eine Transaktion" beschriftet ist,
      klickt.
    * Es öffnet sich ein Formular, in dem der User eine seiner eigenen Adressen als Auftraggeber-Adresse und eine von
      allen anderen Adressen als Empfänger-Adresse auswählt und einen zu überweisenden Betrag eingibt. Der User bestätigt
      mit dem Klicken auf einen Button, der mit "Transaktion bestätigen" beschriftet ist.
    * Es öffnet sich ein weiteres Formular, in das automatisch die Transaktionsgebühr, ein akuteller Zeitstempel und ein
      berechneter Hashwert für die ganze Transaktion eingefügt wird. Der User bestätigt die Transaktion mit "OK".
    * Animation 3b ist beendet.
* Nachbedingung Erfolg: *Zusätzlich zu der Tabelle mit den Adressen, privaten Schlüsseln und Kontoständen des Users und
  der Tabelle mit allen anderen Adressen und Kontoständen wird eine neue Tabelle mit allen eingegebenen Transaktionsdaten
  angezeigt (siehe folgende schematische Darstellung).*
* Nachbedingung Sonderfall 12a: *Animation 3b wird neu gestartet.*

![Diagram](img/animation_3b_02.svg)

#### Sonderfall 12a: Der User gibt als zu überweisenden Betrag keine ganze Zahl ein
* Ablauf Sonderfall 12a:
    * Der User klickt auf "Transaktion bestätigen".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie eine ganze Zahl ein."


### Use-case 13 - Animation 3c:

![Diagram](img/use-case_13.svg)

* Name: *Durchführen einer Transaktion Teil 3/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 3c ist vollständig geladen. Der erste Frame zeigt die in Animation 3b neu erstellte Tabelle
  mit allen eingegebenen Transaktionsdaten ODER, falls der User direkt zu Animation 3c navigiert ist, mit zufällig
  erstellten Daten, ausgenommen jene, die der User schon irgendwann im Verlaufe der laufenden Verwendung der Applikation
  in einer der Animationen eingegeben hat, und einem noch leeren Feld, das mit "Digitale Signatur" überschrieben ist (siehe
  folgende schematische Darstellung).*

![Diagram](img/animation_3c_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Butten, der mit "Erstelle eine digitale Signatur" beschriftet
      ist, klickt.
    * In einer Animation wird der Hashwert der Transaktion in Einheiten zu je zwei hexadezimalen Ziffern aufgeteilt. Jede
      dieser zweistelligen hexadezimalen Zahlen wird nacheinander in eine binäre und dann in eine deziamle Zahl umgewandelt.
      Jede dieser dezimalen Zahlen wird nun mit dem privaten Schlüssel der Adresse verschlüsselt, das bedeutet, dass auf
      diese Zahlen eine Berechnung durchgeführt wird. Als Ergebnis bleiben wiederum dezimale Zahlen übrig, welche die
      digitale Signatur der Transaktion bilden.
    * Animation 3c ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt neben der Tabelle mit den Transaktionsdaten eine neue Tabelle
  mit allen berechneten Zahlen sowie mit der digitalen Signatur als Ergebnis. Die digitale Signatur ist ebenso in der
  Tabelle mit den Transaktionsdaten eingetragen (siehe folgende schematische Darstellung).*

![Diagram](img/animation_3c_02.svg)


### Use-case 14 - Animation 3d:

![Diagram](img/use-case_14.svg)

* Name: *Durchführen einer Transaktion Teil 4/4*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 3d ist vollständig geladen. Der erste Frame zeigt die in Animation 3c ergänzte Tabelle mit den
  Transaktionsdaten ODER, falls der User direkt zu Animation 3d navigiert ist, mit zufällig erstellten Daten, ausgenommen
  jene, die der User schon irgendwann im Verlaufe der laufenden Verwendung der Applikation in einer der Animationen
  eingegeben hat.*
* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Prüfe Transaktion" beschrieben ist, klickt.
    * Im ersten Teil der Animation wird geprüft, ob alle Daten der Transaktion korrekt eingegeben sind, ob die Absender-
      und die Empfängeradresse existieren und ob der zu überweisende Betrag höher ist als der Kontostand der
      Absenderadresse. Bei allen Bedingungen, die erfüllt sind, erscheint ein Symbol zur Bestätigung (z.B. ein Haken), bei
      allen Bedingungen, die nicht erfüllt sind, erscheint ein Symbol zur Zurückweiung (z.B. ein X). Tatsächlich kann
      ausschliesslich die Bedingung, dass der zu überweisende Betrag höher ist als der Kontostand der Absenderadresse,
      nicht erfüllt sein, weil alle anderen Daten vom User nicht selbstständig eingegeben, sondern nur aus Auswahlfeldern
      ausgewählt worden sind. Falls eine also diese Bedingung nicht erfüllt ist, erscheint ein Textfeld mit der Nachricht
      "Transaktion zurückgewiesen" und die Animation 3d ist beendet (siehe folgende schematische Darstellung).

      ![Diagram](img/animation_3d_01.svg)

    * Falls im ersten Teil der Animation alle Bedingungen erfüllt sind, werden im zweiten Teil der Animation die Zahlen der 
      digitalen Signatur entschlüsselt, das heisst, es wird auf jede Zahl eine Berechnung durchgeführt. Als Ergebnis kommen 
      dezimale Zahlen heraus, die nacheinander in binäre und dann in hexadezimale Zahlen umgewandelt werden. Die vier
      zweistelligen hexadezimalen Zahlen zusammengesetzt ergeben den Hashwert der Transaktion.
    * Es erscheint ein Textfeld mit der Nachricht "Transaktion gültig" und die Animation 3d ist beendet.
* Nachbedingung Erfolg: *Neben der Tabelle mit den Transaktionsdaten ist bei allen geprüften Bedingungen  ein
  Bestätigungssymbol zu sehen, ebenso ist eine neue Tabelle mit allen berechneten Zahlen sowie mit dem Hashwert der
  Transaktion als Ergebnis und ein Textfeld mit der Nachricht "Transaktion gültig" zu sehen, ODER bei der Bedingung, dass
  der zu überweisende Betrag höher ist als der Kontostand der Absenderadresse, ist ein Zurückweisungssymbol zu sehen,
  ebenso ein Textfeld mit der Nachricht "Transaktion zurückgewiesen" (siehe folgende schematische Darstellung).*

![Diagram](img/animation_3d_02.svg)


### Use-case 15 - Animation 4a:

![Diagram](img/use-case_15.svg)

* Name: *Speichern von Transaktionen und Erstellen von neuen Blöcken, Teil 1/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 4a ist vollständig geladen. Der erste Frame zeigt die Tabelle mit den Transaktionsdaten aus
  Animation 3c und eine weitere, von der Applikation mit zufälligen Daten erstellte Tabelle einer Transaktion ODER, falls
  der User direkt zu Animation 4a navigiert ist, zwei Tabellen mit zufällig erstellten Transaktionsdaten, ausgenommen
  jene, die der User schon irgendwann im Verlaufe der laufenden Verwendung der Applikation in einer der Animationen
  eingegeben hat (siehe folgende schematische Darstellung).*

![Diagram](img/animation_4a_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Starte Animation" beschrieben ist, klickt.
    * In einer Animation werden die Hashwerte der Transaktionen herausgehoben, um damit zu verdeutlichen, dass diese Werte im
      folgenden als Hash-Referenzen auf die Transaktionen verwendet werden.
    * Es erscheint eine Tabelle, in der die beiden Hash-Referenzen der Transaktionen als Eingabe stehen und der Hashwert auf
      diese Eingabe automatisch berechnet wird. Dieser Hashwert wird als Hash-Referenz auf die Verknüpfung der beiden
      Transaktionen angezeigt.
    * Animation 4a ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt die beiden Tabellen mit den Transaktionsdaten, die
  Hash-Referenzen auf diese beiden Transaktionen, eine Tabelle, in der aus diesen beiden Hash-Referenzen ein neuer Hashwert
  berechnet worden ist, und diesen Hashwert als Hash-Referenz auf die Verknüfung der beiden Transaktionen (siehe folgende
  schematische Darstellung).*

![Diagram](img/animation_4a_02.svg)


### Use-case 16 - Animation 4b:

![Diagram](img/use-case_16.svg)

* Name: *Speichern von Transaktionen und Erstellen von neuen Blöcken, Teil 2/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 4b ist vollständig geladen. Der erste Frame zeigt die zwei Tabellen mit den Transaktionsdaten
  aus Animation 4a ODER, falls der User direkt zu Animation 4b navigiert ist, zwei Tabellen mit zufällig erstellten
  Transaktionsdaten, ausgenommen jene, die der User schon irgendwann im Verlaufe der laufenden Verwendung der Applikation
  in einer der Animationen eingegeben hat. Herausgehoben sind die Hash-Referenzen auf diese Transaktionen. Neben diesen
  Tabellen befinden sich zwei weitere Transaktionen ohne konkrete Daten aber mit herausgehobenen Hash-Referenzen (siehe
  folgende schematische Darstellung).

![Diagram](img/animation_4b_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Starte Animation" beschrieben ist, klickt.
    * Im ersten Teil der Animation werden jeweils zwei Transaktionen durch einen auf beide Hash-Referenzen berechneten 
      Hashwert verknüpft, danach zwei dieser Hash-Referenzen wiederum durch die Berechnung eines Hashwerts verknüpft, sodass
      dadurch eine Merkle-Tree mit vier Blättern entsteht.
    * Im zweiten Teil der Animation entsteht auf vier weitere Transaktionen ein weiterer Merkle-Tree.
    * Im dritten Teil der Animation entsteht über den Wurzeln der Merkle-Trees die Blockchain als eine Kette von
      Block-Headern, wobei jeweils die Wurzel eines Merkle-Trees zur Hash-Referenz auf den Inhalt des Blocks wird.
    * Animation 4b ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt ein komplexes Gebilde bestehend aus acht Transaktionen, von
  denen jeweils vier durch einen Merkle-Tree miteinander verknüpft sind. Die Wurzeln der Merkle-Trees sind mit den
  Block-Headern einer Blockchain verknüpft, die über diesen dargestellt wird (siehe folgende schematische Darstellung).*

![Diagram](img/animation_4b_02.svg)


### Use-case 17 - Animation 4c:

![Diagram](img/use-case_17.svg)

* Name: *Speichern von Transaktionen und Erstellen von neuen Blöcken, Teil 3/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 4c ist vollständig geladen. Der erste Frame zeigt den letzten Frame von Animation 4b. Falls der
  User direkt zu Animation 4c navigiert ist, sind die Transaktionsdaten in den zwei Tabellen zufällig erstellt, ausgenommen
  jene, die der User schon irgendwann im Verlaufe der laufenden Verwendung der Applikation in einer der Animationen
  eingegeben hat.*
* Standardablauf:
    * Der User startet die Animation, indem er auf einen Butten, der mit "Ändere Transaktionsdaten" beschriftet ist,
      klickt.
    * Es öffnet sich ein Formular, in das der User für die beiden mit vollständigen Daten angeführten Transaktionen einen
      neuen zu überweisenden Betrag eingeben oder eine neue Empfänger-Adresse auswählen kann. Der User bestätigt mit "OK".
    * In der Animation ändern sich durch die veränderten Eingaben die Hash-Referenzen der veränderten Transaktionen, die
      Hash-Referenzen der verknüpften Transaktionen, die Hash-Referenz der Wurzel des Merkle-Trees und dadurch auch die
      Hash-Referenz des Blocks, der auf diesen Merkle-Tree verweist, wodurch die Blockchain unterbrochen wird, weil im
      folgenden Block die Hash-Referenz auf den vorherigen Block nicht mehr stimmt. Alle veränderten Hash-Referenzen sind
      farblich hervorgehoben.
    * Animation 4c ist beendet.
* Nachbedingung Erfolg: *Im letzten Frame der Animation sind die veränderten Hash-Referenzen sind farblich hervorgehoben,
  ein Bruch in der Blockchain ist deutlich markiert (siehe folgende schematische Darstellung).*
* Nachbedingung Sonderfall 17a: *Animation 4c wird neu gestartet.*

![Diagram](img/animation_4c_01.svg)

#### Sonderfall 17a:  Der User gibt als zu überweisenden Betrag keine ganze Zahl ein
* Ablauf Sonderfall 17a:
    * Der User klickt auf "OK".
    * Eine Benachrichtigung erscheint auf dem Bildschirm mit folgendem Text: "Bitte geben Sie eine ganze Zahl ein."
  

### Use-case 18 - Animation 5a:

![Diagram](img/use-case_18.svg)

* Name: *Schützen der Blöcke durch Proof-of-Work, Teil 1/2*
* Akteure: *User, Applikation*
* Vorbedingungen: *Die Animation 5a ist vollständig geladen. Der erste Frame zeigt einen Block-Header als Ausschnitt aus
  einer Blockchain, der mit einem verkürzt dargestellten Merkle-Tree verknüpft ist und der im Vergleich mit den
  Darstellungen von Block-Headern in den bisherigen Animationen um einen Zeitstempel, ein Target und eine Nonce erweitert
  ist. Im Feld "Zeitstempel" befindet sich die aktuelle Zeit, im Feld "Target" befindet sich der Wert 0fffffff. In den
  Feldern "Nonce" und "Hash-Wert Block" befinden sich noch keine Werte (siehe folgende schematische Darstellung).*

![Diagram](img/animation_5a_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Mining starten" beschriftet ist, klickt.
    * Im Feld "Nonce" erscheint der Wert "0000001", 0.2 Sekunden danach erscheint im Feld "Hash-Wert Block" der errechnete
      Hash-Wert des Blocks.
    * Solange der Hash-Wert des Blocks grösser als oder gleich 0fffffff ist, erscheint jeweils nach 0.5 Sekunden ein um 1
      erhöhter Wert im Feld "Nonce" und 0.2 Sekunden danach ein neu errechneter Wert im Feld "Hash-Wert Block".
    * Wenn der Hash-Wert des Blocks kleiner 0fffffff ist, bleiben die aktuellen Werte in den Feldern "Nonce" und
      "Hash-Wert Block" stehen und neben dem Hash-Wert des Blocks erscheint ein Bestätigungssymbol (z.B. ein Haken).
    * Animation 5a ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt den Block-Header mit einem gültigen Hash-Wert, einer passenden
  Nonce und einem Bestätigungssymbol (siehe folgende schematische Darstellung).*

![Diagram](img/animation_5a_02.svg)


### Use-case 19 - Animation 5b:

![Diagram](img/use-case_19.svg)

* Name: *Schützen der Blöcke durch Proof-of-Work, Teil 2/2*
* Akteure: *User, Applikation*
* Vorbedingungen: *Die Animation 5a ist vollständig geladen. Der erste Frame zeigt den Block-Header aus dem letzten Frame
  von Animation 5a, daneben einen mit diesem Block verknüpften, gleich aufgebauten Block-Header einer Blockchain. Im Feld
  "Zeitstempel" befindet sich die aktuelle Zeit, im Feld "Target" befindet sich der Wert 00ffffff. In den Feldern "Nonce"
  und "Hash-Wert Block" dieses Blocks befinden sich noch keine Werte (siehe folgende schematische Darstellung).*

![Diagram](img/animation_5b_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Mining starten" beschriftet ist, klickt.
    * Im Feld "Nonce" erscheint der Wert "5264c509", 0.2 Sekunden danach erscheint im Feld "Hash-Wert Block" der errechnete
      Hash-Wert des Blocks.
    * Solange der Hash-Wert des Blocks grösser als oder gleich 00ffffff ist, erscheint jeweils nach 0.5 Sekunden ein um 1
      erhöhter Wert im Feld "Nonce" und 0.2 Sekunden danach ein neu errechneter Wert im Feld "Hash-Wert Block".
    * Wenn der Hash-Wert des Blocks kleiner 00ffffff ist, bleiben die aktuellen Werte in den Feldern "Nonce" und
      "Hash-Wert Block" stehen und neben dem Hash-Wert des Blocks erscheint ein Bestätigungssymbol (z.B. ein Haken).
    * Animation 5b ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt beide Block-Header mit gültigen Hash-Werten, passenden
  Nonces und jeweils einem Bestätigungssymbol (siehe folgende schematische Darstellung).*
  
![Diagram](img/animation_5b_02.svg)


### Use-case 20 - Animation 6a:

![Diagram](img/use-case_20.svg)

* Name: *Verteilen neuer Transaktionen und Blöcke, Teil 1/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 6a ist vollständig geladen. Der erste Frame zeigt das als ungerichteter Graph modellierte
  Peer-to-Peer-System aus dem letzten Frame von Animation 2c mit dem Unterschied, dass der vom User in Animation 2a bis
  2b hinzugefügte Knoten eine andere Hintergrundfarbe hat und zusätzlich mit 'Transaktion 4' beschriftet ist (siehe
  folgende schematische Darstellung).*

![Diagram](img/animation_6a_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Verteile Transaktion" beschriftet ist, klickt.
    * Alle Kanten, die vom in Animation 2 hinzugefügten Knoten ausgehen, ändern die Farbe und werden etwas dicker.
    * Nach 1.0 Sekunden bekommen alle Knoten, die neu von den Kanten mit den geänderten Farben erreicht werden, die
      gleiche Hintergrundfarbe wie der Knoten, von dem die Kanten mit den geänderten Farben ausgehen, und werden ebenfalls
      mit "Transaktion 4" beschriftet.
    * Nach 1.5 Sekunden ändern alle Kanten, die von den nun neu eingefärbten Knoten ausgehen, die Farbe und werden etwas
      dicker.
    * Die letzten beiden Schritte wiederholen sich, bis alle Knoten und Kanten neu eingefärbt und verändert sind. Danach
      ist Animation 6a abgeschlossen.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt den Graphen so, dass alle Knoten eine neue Hintergrundfarbe
  haben und zusätzlich mit "Transaktion 4" beschriftet sind und dass alle Kanten neu eingefärbt und etwas dicker
  dargestellt sind (siehe folgende schematische Darstellung).*

![Diagram](img/animation_6a_02.svg)


### Use-case 21 - Animation 6b:

![Diagram](img/use-case_21.svg)

* Name: *Verteilen neuer Transaktionen und Blöcke, Teil 2/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 6b ist vollständig geladen. Der erste Frame zeigt das als ungerichteter Graph modellierte
  Peer-to-Peer-System aus dem letzten Frame von Animation 2c mit dem Unterschied, dass die Knoten nicht mehr mit den
  Adressen beschriftet sind, sondern ausschliesslich mit sechs als "T 0" bis "T 5" bezeichneten Transaktionen (siehe
  folgende schematische Darstellung).*

![Diagram](img/animation_6b_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle neuen Block" beschriftet ist, klickt.
    * Die Transaktionen "T 0" bis "T 3" verschwinden aus der Beschriftung des in Animation 2 vom User hinzugefügten
      Knotens, dafür erscheint ein Hashwert (z.B. 01d33512), der einen neuen Block darstellt.
    * Der mit "Erstelle neuen Block" beschriftete Button verschwindet, an seiner Stelle erscheint ein Button, der mit
      "Verteile Block" beschriftet ist.
    * Der User setzt die Animation fort, indem er auf den Button, der mit "Verteile Block" beschriftet ist, klickt.
    * Alle Kanten, die vom in Animation 2 hinzugefügten Knoten ausgehen, ändern die Farbe.
    * Nach 1.5 Sekunden vollzieht sich in allen Knoten, die neu von den Kanten mit den geänderten Farben erreicht werden,
      die gleiche Änderung wie in dem Knoten, von dem die Kanten mit den geänderten Farben ausgehen.
    * Nach 1.0 Sekunden ändern alle Kanten, die von den nun neu beschrifteten Knoten ausgehen, die Farbe.
    * Die letzten beiden Schritte wiederholen sich, bis sich die Beschriftung aller Knoten geändert hat und alle Kanten
      neu eingefärbt sind. Danach ist Animation 6b abgeschlossen.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt den Graphen so, dass alle Knoten mit einem Hashwert sowie
  mit zwei als "T 4" und "T 5" bezeichneten Transaktionen beschriftet sind und dass alle Kanten neu eingefärbt sind
  (siehe folgende schematische Darstellung).*

![Diagram](img/animation_6b_02.svg)


### Use-case 22 - Animation 6c:

![Diagram](img/use-case_22.svg)

* Name: *Verteilen neuer Transaktionen und Blöcke, Teil 3/3*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 6c ist vollständig geladen. Der erste Frame zeigt den identischen Graphen wie zu Beginn von
  Animation 6b.*
* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Erstelle neuen Block" beschriftet ist, klickt.
    * Die Transaktionen "T 0" bis "T 4" verschwinden aus der Beschriftung des in Animation 2 vom User hinzugefügten
      Knotens, dafür erscheint ein Hashwert (z.B. 01d33512), der einen neuen Block darstellt.
    * Der mit "Erstelle neuen Block" beschriftete Button verschwindet, an seiner Stelle erscheint ein Button, der mit
      "Verteile Block" beschriftet ist.
    * Nach 0.3 Sekunden verschwinden bei dem Konten, der am weitesten von dem in Animation 2 hinzugefügten Knoten entfernt
      ist (fortan "Knoten B" genannt), die Transaktionen "T 2" bis "T 6", dafür erscheint ein Hashwert (z.B. 0f75b449),
      der einen neuen Block darstellt.
    * Der User setzt die Animation fort, indem er auf den Button, der mit "Verteile Block" beschriftet ist, klickt.
    * Alle Kanten, die vom in Animation 2 hinzugefügten Knoten ausgehen, bekommen eine andere Farbe.
    * Nach 0.3 Sekunden bekommen alle Kanten, die von Knoten B ausgehen, eine andere, von den Farben der bis dahin
      dargestellten Kanten deutlich zu unterscheidende Farbe.
    * Nach 1.5 Sekunden vollzieht sich in allen Knoten, die neu von den Kanten mit den geänderten Farben erreicht werden,
      die gleiche Änderung wie in dem Knoten, von dem die Kanten mit den geänderten Farben ausgehen.
    * Nach 1.0 Sekunden ändern alle Kanten, die von den nun neu eingefärbten Knoten ausgehen, die Farbe.
    * Wenn eine Kante schon neu eingefärbt ist, wird eine zusätzliche Kante in der anderen (neuen) Farbe eingezeichnet.
    * Wenn Knoten von Kanten mit beiden geänderten Farben erreicht werden, ändert sich ihre Beschriftung, indem alle
      Transaktionen verschwinden und beide Hashwerte ("Blöcke") im Knoten angezeigt werden.
    * Die letzten vier Schritte wiederholen sich, bis sich die Beschriftung aller Knoten so geändert hat, dass beide
      Hashwerte angezeigt werden, und alle Kanten doppelt in zwei verschiedenen Farben eingezeichnet sind. Danach ist
      Animation 6c abgeschlossen.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt den Graphen so, dass alle Knoten mit zwei Hashwerten
  beschriftet sind und alle Kanten doppelt in zwei verschiedenen Farben eingezeichnet sind.*

![Diagram](img/animation_6c_01.svg)


### Use-case 23 - Animation 7:

![Diagram](img/use-case_23.svg)

* Name: *Validieren eines Blocks*
* Akteure: *User, Applikation*
* Vorbedingungen: *Animation 7 ist vollständig geladen. Der erste Frame zeigt einen Ausschnitt aus einer Kette von zwei
  nur mit dem Hashwert des Blocks und einem Schwierigkeitsgrad von 1 bis 3 beschrifteten, gleich eingefärbte
  Block-Header (siehe folgende schematische Darstellung).*

![Diagram](img/animation_7_01.svg)

* Standardablauf:
    * Der User startet die Animation, indem er auf einen Button, der mit "Starte Animation" beschrieben ist, klickt.
    * In einer Animation werden der dargestellten Blockchain gleichzeitig zwei Block-Header mit demselben
      Schwierigkeitsgrad hinzugefügt und zwischen diesen beiden ein Fragezeichen angezeigt. Nach 1.5 Sekunden werden jedem
      dieser beiden Block-Header ein weiterer, nicht eingefärbter Block-Header hinzugefügt, wobei diese beiden neuen
      Block-Header einen unterschiedlichen Schwierigkeitsgrad haben.
    * Der User setzt die Animation fort, indem er auf einen Button, der mit "Entscheidung fällen" beschrieben ist, klickt.
    * Der Block-Header mit dem höheren Schwierigkeitsgrad sowie dessen direkter Vorgänger werden gleich eingefärbt wie
      die seit dem Start der Animation angezeigten beiden Block-Header.
    * Nach 2.0 Sekunden werden im Abstand von 1.0 Sekunden dem letzten eingefärbten Block zwei weitere Block-Header
      hinzugefügt, die jeweils den Schwierigkeitsgrad 1 haben. Wiederum 1.0 Sekunden später wird ein weiterer Block-Header
      mit dem Schwierigkeitsgrad 3 dem letzten eingefärbten Block hinzugefügt.
    * Der User setzt die Animation fort, indem er auf einen Button, der mit "Entscheidung fällen" beschrieben ist, klickt.
    * Der Block-Header mit dem Schwierigkeitsgrad 3 wird eingefärbt.
    * Animation 7 ist beendet.
* Nachbedingung Erfolg: *Der letzte Frame der Animation zeigt eine Blockchain mit fünf eingefärbten, aneinanderhängenden
  Block-Headern mit zwei nicht eingefärbten Verzweigungen (siehe folgende schematische Darstellung).*

![Diagram](img/animation_7_02.svg)
