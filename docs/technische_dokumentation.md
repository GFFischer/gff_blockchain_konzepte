# Technische Dokumentation

| Version | Projektname                       | Autor         | Status         | Datum      | Kommentar |
| ------- | --------------------------------- | ------------- | -------------- | ---------- | --------- |
|   0.1   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 19.04.2024 | Template erstellt |
|   0.2   |  Fundamentale Blockchain-Konzepte | Georg Fischer | in Bearbeitung | 20.04.2024 | Pkt 1.1 bis 1.2 bearbeitet |


# 1 Einführung

## 1.1 Zweck 

Das **Ziel** dieses Dokuments ist es, die technische Umsetzung der im Pflichtenheft formulierten Einzelanforderungen (/F10/
bis /F111/) und den dazugehörenden dargestellten Use-cases (Use-case 1 bis Use-case 23) so präzise zu beschreiben, dass
beim Programmieren selbst möglichst keine offenen Fragen mehr bestehen.

Der **Zweck** dieses Dokuments ist,
* einen Überblick über die einzelnen Teile der Applikation sowie deren Interaktion zu schaffen
* die Farben zu bestimmen, die in der Applikation für Texte, Menüs, Symbole, Animationen, Hintergründe verwendet werden
  (/LQB40/)
* zu klären, wie das responsive Design der Webapplikation in CSS realisiert wird (/F10/) und wie die einzelnen
  Anforderungen an das responsive Design konkret umgesetzt werden (/F11/ bis /F14/)
* die technische Umsetzung und Steuerung der einzelnen Animationen zu klären (/F20/ bis /F22/)
* festzulegen, wie die Applikation aufgebaut ist und wie zu den verschiedenen Inhalten der Applikation navigiert werden
  kann (/F30/ bis /F32/)
* zu klären, wie das Aufpoppen der erklärenden und weiterführenden Texte zu den Animationen in CSS realisiert wird, welche
  Symbole, Schrift- und Hintergrundfarben verwendet werden (/F40/ bis /F43/)
* für die einzelnen Animationen die notwenigen Variablen inklusive deren initialer Belegung sowie die benötigten
  Funktionen zu bestimmen (/F50/ bis /F111/)
* zu klären, wie es umgesetzt werden kann, dass einmal gemachte Eingaben und berechnete Werte (z.B. Hashreferenzen) in der
  Applikation verfügbar bleiben, solange sich der User durch die Applikation bewegt (/LQF10/)
  
Dieses Dokument kann, wenn man es mit dem Bau eines Hauses vergleicht, als "Polierplan" verstanden werden, also als ein
Plan, bei dem schon möglichst alle Details geklärt sind, sodass mit dem Bau des Hauses begonnen werden kann. Er richtet 
sich demzufolge in erster Linie an die Ausführenden, bei der Softwareentwicklung also an die Programmierenden. Im konkreten
Spezialfall der Entwicklung dieser Applikation als "individuelles Projekts" im Rahmen des Studienprogramms GymInf handelt
es sich dabei um den Autor, der in Personalunion gleichzeitig Auftraggeber, Designer und Programmierer ist. Gleichzeitig 
richtet sich dieses Dokument an alle Entwickler*innen, die gegebenenfalls diese Applikation warten und/oder erweitern 
möchten, sowie im konkreten Fall auch an alle, die dieses Projekt zu bewerten und zu beurteilen haben.


## 1.2 Beziehung zu anderen Dokumenten

Dieses Dokument bezieht sich auf die im **Lastenheft** formulierten funktionalen und Qualitätsanforderungen und die im
**Pflichtenheft** formulierten und mit Use-cases detailliert beschriebenen Einzelanforderungen. Ebenso steht dieses 
Dokument in Beziehung zum **Prototypen** der Applikation, der parallel zu diesem Dokument entwickelt wird.


# 2. Systemübersicht


Hier sollte eine kurze Übersicht über das System gegeben werden. Das Ziel dieses Abschnitts ist, dass der Leser weiss, was entwickelt wird. Also zum Beispiel sollte man erwähnen, dass es sich um eine Erweiterung für Ganttproject handelt, und was das Ziel dieser Erweiterung ist.

# 3. Designziele
Es gibt kein absolutes Mass für gutes oder schlechtes Design. Das Design ist nur gut oder schlecht bezüglich den Anforderungen der Stakeholder. Hier sollten die Ziele/Anforderungen kurz beschrieben werden. Beispiele sind:

    Das Design soll künftige Erweiterbarkeit gewährleisten
    Das Design soll zu minimalen Entwicklungszeit/Kosten führen
    Das Design soll maximale Performance gewährleisten
    …

* 

# 4. Systemverhalten
Um die Designlösung die nachfolgend beschrieben wird einzuführen, sollten an dieser Stelle nochmals das gewünschte Verhalten des Systems (abgeleitet aus dem Pflichtenheft) kurz beschrieben werden. Idealerweise sollte hier genügend Information gegeben werden, so dass man die Diagramme und Spezifikationen die im nächsten Abschnitt beschrieben werden verstehen kann, ohne zuvor das Pflichtenheft im Detail gelesen zu haben.

# 5. Design
An dieser Stelle wird nun das eigentliche Softwaredesign (die technische Lösung) beschrieben. In grösseren Systemen wird typischerweise zwischen High-level Design (Architektur) sowie Mid-level Design (UML Klassen- und Sequenzdiagramme) sowie Detaildesign (Detaillierte Beschreibung von einigen Schlüsselklassen) unterschieden. Für diese kleine Änderung, muss diese Unterscheidung aber nicht gemacht werden. Jedoch wollen wir explizit zwischen Statik, Dynamik und Logik zu unterscheiden.
## 5.1 Statik
An dieser Stelle sollten die statischen Aspekte, zum Beispiel mit Hilfe von UML Klassendiagrammen oder Paketdiagrammen beschrieben werden.

## 5.2 Dynamik
An dieser Stelle sollten die dynamische Aspekte, zum Beispiel mit Hilfe von UML Sequenz/Kollaborationsdiagrammen, oder Akivitätsdiagrammen beschrieben werden.

## 5.3 Logik 
An dieser Stelle können noch logische Aspekte, wie zum Beispiel logische Einschränkungen spezifiziert werden. Hierzu kann zum Beispiel OCL verwendet werden.
