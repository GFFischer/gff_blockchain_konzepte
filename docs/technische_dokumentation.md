# Technische Dokumentation

| Version | Projektname                       | Autor         | Status         | Datum      | Kommentar |
| ------- | --------------------------------- | ------------- | -------------- | ---------- | --------- |
|   0.1   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 19.04.2024 | Template erstellt |
|   0.2   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 20.04.2024 | Pkt 1.1 bis 1.2 bearbeitet |
|   0.3   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 22.04.2024 | Pkt 2 bis 4 bearbeitet |
|   0.4   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 23.05.2024 | Pkt 2 bis 4 bearbeitet |


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

### JavaScript

### CSS

## 5.2 Dynamik
An dieser Stelle sollten die dynamische Aspekte, zum Beispiel mit Hilfe von UML Sequenz/Kollaborationsdiagrammen, oder Akivitätsdiagrammen beschrieben werden.

## 5.3 Logik 
An dieser Stelle können noch logische Aspekte, wie zum Beispiel logische Einschränkungen spezifiziert werden. Hierzu kann zum Beispiel OCL verwendet werden.
