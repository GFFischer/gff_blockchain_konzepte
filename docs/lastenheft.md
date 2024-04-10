# Lastenheft 
#####  (nach Balzert 117-126)

| Version | Autor | Quelle | Status | Datum | Kommentar |
| ------- | ----- | ------ | ------ | ----- | --------- |
|  0.1    |  Georg Fischer   | Konzept 2024-03-06, PPT zur Veranschaulichung | in Bearbeitung  | 18.03.2024 | Datei erstellt, Pkt. 1-3 bearbeitet                        |
|  1.0    |  Georg Fischer   | Konzept 2024-03-06, PPT zur Veranschaulichung | fertig gestellt | 19.03.2024 | Pkt. 3-5 bearbeitet, Bearbeitung (vorläufig) abgeschlossen |
|  1.1    |  Georg Fischer   | Lastenheft, Version 1.0                       | Verbesserungen  | 20.03.2024 | sprachliche Nachbesserungen Pkt.5                          |
|  1.2    |  Georg Fischer   | Lastenheft, Version 1.1                       | Ergänzungen     | 21.03.2024 | in Pkt. 1 /LZ30/ ergänzt, in Pkt. 5 /LQB50/ ergänzt        |
|  1.3    |  Georg Fischer   | Lastenheft, Version 1.2                       | Präzisierungen  | 10.04.2024 | /LF10/ und /LF20/ ergänzt und sprachlich verdeutlicht      |



## 1. Visionen und Ziele

* **/LV10/** Eine Applikation soll geschaffen werden, die grundlegende Konzepte der Blockchain-Datenstruktur sowie
einige Vorgänge bei der Verwendung einer Blockchain mithilfe von Animationen grafisch veranschaulicht, und bei
der es für den User möglich ist, interaktiv die Animationen zu beeinflussen und so einzelne Schritte zu simulieren.
* **/LV20/** Die Anwendung der Applikation soll dazu führen, dass es für Lernende ohne Vorwissen einfacher ist,
die fundamentalen Konzepte einer Blockchain zu verstehen, als wenn ihnen dieselben Erklärungen lediglich als Text
mit unbewegten Grafiken und ohne die Möglichkeit zur Interaktion zur Verfügung stehen.
* **/LZ10/** Die Applikation soll als webbasierte Anwendung realisiert werden, welche mittels der Ergänzung durch
weiterführende erklärende Texte die Funktionsweise einer Blockchain möglichst kompakt darstellt.
* **/LZ20/** Die Applikation soll selbsterklärend und intuitiv bedienbar sein, sodass ihre Anwendung keiner
weiteren Vermittlung durch eine Lehrperson bedarf.
* **/LZ30/** Die Applikation soll durch eine optisch ansprechende Gestaltung Lernende motivieren, sich die
dargebotenen Lerninhalte anzueignen.

## 2. Rahmenbedingungen

* **/LR10/** Die Schaffung der Applikation erfolgt als Teil des "individuellen Projekts" im Rahmen des
Studienprogramms GymInf, einer Ausbildung von Lehrerinnen und Lehrern für Informatik am Gymnasium.
* **/LR20/** Der vorrangige Ort der Anwendung der Applikation ist der Informatikunterricht an der gymnasialen
Oberstufe. Ebenso muss es für einen User aber auch möglich sein, die Applikation ausserhalb des Unterrichts ohne
einen formellen Rahmen selbstständig auszuführen und dabei vergleichbare Lernerfolge zu erzielen.

## 3. Kontext und Überblick
 
* **/LK10/** Die Applikation besteht aus mehreren animierten Grafiken, in deren Gestaltung der User an bestimmten
Stellen interaktiv eingreifen kann, um so die Umsetzung fundamentaler Konzepte der Blockchain-Datenstruktur sowie
diverse Vorgänge bei der Verwendung einer Blockchain zu simulieren. Konkret handelt es sich um die folgenden
Konzepte bzw. Vorgänge und die jeweiligen Möglichkeiten zur Interaktion (/LK20/ bis /LK80/):
* **/LK20/** *Aufbau einer Blockchain-Datenstruktur:* Schrittweise mehr ins Detail gehend besteht für den User die
Möglichkeit, neue "Seiten" (Blöcke bzw. Block-Header) zu einer vereinfachten grafischen Darstellung eines
"Hauptbuchs" (einer Blockchain-Datenstruktur) hinzuzufügen und dabei Hashfunktionen auf Daten anzuwenden.
* **/LK30/** *Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System:* Der User hat die Möglichkeit, einen
neuen Knoten zu einem als ungerichteter Graph modellierten Peer-to-Peer-System hinzuzufügen, für diesen Knoten ein
Wallet mit einem oder mehreren Schlüsselpaaren ("Adressen") mit selbst gewählten fiktiven Guthaben einzurichten,
und dabei eine einfache Form asymmetrischer Verschlüsselung zur Identifikation anzuwenden.
* **/LK40/** *Durchführung einer Transaktion:* Der User kann die Transaktions eines Teils seines fiktiven Guthabens
an eine fremde Adresse simulieren, indem er bestimmt, von welcher seiner Adressen die Transaktion getätigt wird, an
welche Adresse die Transaktion gehen soll und wie hoch der zu überweisende Betrag ist. Veranschaulicht werden das
Erstellen einer digitalen Signatur für die Transaktion sowie die exemplarische Prüfung der Transaktion durch einen
Knoten im Peer-to-Peer-System.
* **/LK50/** *Speichern von Transaktionen und Erstellen von neuen Blöcken:* Veranschaulicht werden das Verknüpfen
von Transaktionen über deren Hashwerte zu einem Merkle-Tree und das Erstellen eines neuen Block-Headers, der auf die
Wurzel des Merkle-Trees referenziert. Für den User besteht die Möglichkeit, Kleinigkeiten an einer Transaktion zu
ändern, wodurch die Auswirkungen auf die Hash-Referenzen im Merkle-Tree und im Block-Header sichtbar werden.
* **/LK60/** *Schützen der Blöcke durch Proof-of-Work:* Der User hat die Möglichkeit, bei zwei Block-Headern das
Lösen des Hashpuzzles ("Mining") zu simulieren, indem in zeitlich kurzen Abständen solange von der Applikation
jeweils eine neue Nonce erstellt wird, bis das Rätsel gelöst und ein neuer Block erstellt ist. Beim zweiten
Block-Header erhöht sich der Schwierigkeitsgrad, sodass das Mining u.U. mehrere Minuten dauern kann.
* **/LK70/** *Verteilen neuer Transaktionen und Blöcke:* Veranschaulicht wird, wie eine Transaktion in einem als
ungerichteter Graph modellierten Peer-to-Peer-System verteilt wird, wie ein neuer Block erstellt und verteilt wird
und wie es zu Konflikten kommen kann, wenn zwei unterschiedliche Blöcke annähernd zeitgleich erstellt werden.
* **/LK80/** *Validieren eines Blocks:* Veranschaulicht wird, wie bei einer Konkurrenzsituation von zwei Versionen
einer Blockchain eine gültige Version über das Kriterium der "schwersten Kette" (bis dahin grösster
Berechnungsaufwand) ausgewählt wird.

## 4. Funktionale Anforderungen

* **/LF10/** Die Applikation *muss* dem User die Möglichkeit geben, die Animationen selbstständig zu starten,
abzubrechen, zu unterbrechen und nach einer Unterbrechung fortzusetzen.
* **/LF20/** Die Applikation *muss* dem User die Möglichkeit geben, über "weiter"- und "zurück"-Buttons
zwischen den einzelnen Animationen nach vor und zurück zu springen sowie über ein eigenes Navigationsmenü direkt zu den
einzelnen Animationen zu navigieren.
* **/LF30/** Die Applikation *muss* dem User die Möglichkeit geben, durch das Klicken auf ein intuitiv
verständliches Symbol erklärende und/oder weiterführende Texte zu den einzelnen Animationen zu öffnen.
* **/LF40/** Die Applikation *soll* dem User die Möglichkeit geben, an den vorgesehenen Stellen interaktiv in die
Gestaltung der Animationen eingreifen zu können:
  * /LF31/ beim Aufbau einer Blockchain-Datenstruktur durch das Hinzufügen von neuen Seiten (Blöcken, Block-Headern) und
    die Eingabe von selbst gewählten Inhalten sowie durch das Berechnen von Hashwerten
  * /LF32/ beim Hinzufügen eines neuen Knotens zu einem Peer-to-Peer-System durch das Eingeben eines Namens, der Anzahl der
    zu erstellenden Schlüsselpaare (Adressen) sowie eines selbst gewählten fiktiven Guthabens
  * /LF33/ bei der Durchführung einer Transaktion durch die Auswahl einer Sender-Adresse, durch die Eingabe einer
    Empfänger-Adresse und eines zu überweisenden Betrags sowie durch das Bestätigen der digitalen Signatur
  * /LF34/ beim Speichern von Transaktionen und Erstellen von neuen Blöcken durch das Verändern des zu überweisenden
    Betrags und/oder der Empfänger-Adresse bei einer Transaktion
  * /LF35/ beim Schützen der Blöcke durch Proof-of-Work durch das Bestätigen des Starts oder des Abbruchs eines
    Mining-Vorgangs


## 5. Qualitätsanforderungen

| Systemqualität       | sehr gut | gut | normal | nicht relevant |
| -------------------  | -------- | --- | ------ | -------------- | 
| Funktionalität       |          |  x  |        |                |
| Zuverässigkeit       |          |     |   x    |                |
| Benutzbarkeit        |    x     |     |        |                |
| Effizienz            |          |  x  |        |                |
| Wartbarkeit          |          |     |   x    |                |
| Portabilität         |          |     |        |       x        |

* **/LQF10/** Einmal gemachte Eingaben und berechnete Werte (z.B. Hashreferenzen) sollen in der Applikation
verfügbar bleiben, solange sich der User durch die Applikation bewegt. Sie können nicht noch einmal gemacht oder
abgeändert werden, wenn in der Applikation zurücknavigiert wird.
* **/LQB10/** Das Design der Webapplikation soll responsiv sein. Auch auf einem kleinen Screen (z.B. Smartphone)
sollen die Animationen so dargestellt werden, dass das Erfassen der wesentlichen Aspekte leicht möglich ist. 
* **/LQB20/** Erklärende Texte zu den Animationen sollen beim Klicken auf ein Symbol aufpoppen, sodass der User
dadurch nicht von der aktuellen Animation wegnavigiert wird.
* **/LQB30/** Die Navigation über die einzelnen Animationen soll in der gesamten Applikation einfach und
übersichtlich sein.
* **/LQB40/** Die optische Gestaltung der Applikation soll ansprechend und farbenfroh sein.
* **/LQE10/** Die erklärenden Texte sollen für junge Lernende mit wenig Erfahrung und geringen Kenntnissen in der
Informatik verständlich geschrieben sein und sie sollen ausgewogen bezüglich notwendiger Kürze und wünschenswerter
Tiefe sein.
