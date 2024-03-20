# Pflichtenheft
#####  (Nach Ludewig und Lichter, 351-358)

| Version | Autor | Quelle | Status | Datum | Kommentar |
| ------- | ----- | ------ | ------ | ----- | --------- |
|  0.1    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 19.03.2024 | Datei erstellt |
|  0.2    |  Georg Fischer   | lastenheft.md | in Bearbeitung  | 20.03.2024 | Pkt. 1.1 - 1.3 bearbeitet |


## 1. Einleitung

### 1.1 Zweck

Der **Zweck** dieses Pflichtenhefts ist es, die Anforderungen, die sich aus dem Lastenheft ergeben, aus der Sicht des
Programmierers zu präzisieren, Anwendungsfälle ("Use-cases") inklusive etwaiger Ausnahmen und Sonderfälle zu 
definieren, sodass darauf aufbauend das Design der Applikation erstellt werden kann. Der **Leserkreis** eines
Pflichtenhefts wäre im Regelfall der Auftraggeber, im konkreten Spezialfall dieses Projekts ist es der Autor 
(Programmierer) selbst. Daher sind die Abnahmekriterien (Pkt. 4) auch sehr kurz gehalten.

### 1.2 Einsatzbereich und Ziele

Der **vorrangige Einsatzbereich** der Applikation soll vorrangig im Rahmen des Informatikunterrichts an der gymnasialen 
Oberstufe sein. Die **Ziele** sind, dass Lernenden ohne Vorwissen die fundamentalen Konzepte einer Blockchain 
vermittelt werden und es dabei für die Lernenden die Möglichkeit gibt, an bestimmten Stellen interaktiv einzugreifen. 
Die **Vision** hinter diesen Zielen ist, dass durch die Anwendung der Applikation die fundamentalen Konzepte einer 
Blockchein schneller und effizienter verstanden und gelernt werden können.

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
| asymmetrische Verschlüsselung | Verschlüsselungsverfahren, bei denen für die Verschlüsselung und die Entschlüsselung zwei unterschiedliche Schlüssel verwendet werden |
| Block | Einheit von Daten in einer Blockchain-Datenstruktur, bestehend aus einem Block-Header und einem Merkle-Tree mit Hash-Referenzen auf die Transaktionsdaten ("Inhalt") |
| Blockchain-Datenstruktur | Organisation von Transaktionsdaten in miteinander verketteten Einheiten ("Blöcken") |
| Block-Header | Kopf eines Blocks einer Blockchain, bestehend aus dem Hashwerts des vorherigen Block-Headers, der Wurzel eines Merkle-Trees, dem Schwierigkeitsgrad für das Hashpuzzle ("Target"), einem Zeitstempel und einer Nonce |
| digitale Signatur | ein mit dem privaten Schlüssel verschlüsselter und zusammen mit einer Nachricht verschickter Hashwert der Nachricht, der die Authentifizierung der Nachricht ermöglicht |
| Hash-Referenz | ein Hash-Wert, der auf Daten (z.B. Transaktionsdaten) verweist, die an einem anderen Ort gespeichert sind |
| Hashpuzzle | eine Berechnungsaufgabe, bei der ein Hashwert mit einem bestimmten Target gesucht wird und die nur durch die Trial-and-Error-Methode zu lösen ist, indem den Daten, die gehasht werden, eine sich ständig ändernde Nonce hinzugefügt wird |
| Hashwert | eine Zahl mit fixer Länge, die von einer Hashfunktion bzw. einem Hashalgorithmus aus Daten unterschiedlicher Länge berechnet wird |
| Merkle-Tree | ein Binär-Baum, dessen Blätter Transaktionsdaten enthalten und dessen Knoten erzeugt werden, indem man Hash-Werte aus den jeweils darunterliegenden Teilbäumen kombiniert und daraus einen neuen Hashwert generiert; die Wurzel des Baumes ist ebenfalls ein Hash-Wert |
| Mining | der Versuch, ein Hashpuzzle zu lösen, um einen neuen Block an die Blockchain dranhängen zu können; im Erfolgsfall gibt es für die bereitgestellte Rechnerleistung in der Regel eine Entlohnung |
| Nonce | eine einmalige Zahlenfolge ("Number used once"), die in einem Block-Header dazu benötigt wird, das Hashpuzzle zu lösen |
| Peer-to-Peer System | ein verteiltes Softwaresystem aus Einzelcomputern ("Knoten"), die sich ihre Berechnungsressourcen teilen und bei denen jeder Knoten die gleiche Funktionalität und Verantwortung hat |
| Proof-of-Work | ein Algorithmus, der dazu führt, dass unter den einzelnen Knoten des Peer-to-Peer-Systems ein Konsens über die Gültigkeit eines neuen Blocks erzielt wird, indem die Lösung eines Hashpuzzles als Beweis für die Gültigkeit und als Arbeitsnachweis erbracht wird |
| Schlüsselpaar | in einem asymmetrischen Verschlüsselungsverfahren ein Paar aus einem öffentlichen und einem privaten Schlüssel |
| Target | der Schwierigkeitsgrad eines Hashpuzzles, angegeben durch eine Zahl; der gesuchte Hashwert (die Zahl, die das Hashpuzzle löst) muss kleiner sein als diese Zahl |
| Transaktion | Übertragung von Werten innerhalb einer Blockchain von einer Adresse zu einer anderen Adresse |
| User | jede Person, welche die Applikation anwendet, gleichgültig in welchem Einsatzbereich | 

### 1.4 Referenzierte Dokumente

Verzeichnet alle Dokumente, auf die in der Spezifikation verwiesen wird.

### 1.5 Überblick

Beschreibt, wie der Rest der Spezifikation aufgebaut ist, insbesondere, wie Kapitel 3 strukturiert ist.

## 2. Allgemeine Beschreibung

### 2.1 Einbettung

Beschreibt, wie das System in seine Umgebung eingebettet ist und wie die Software mit den umgebenden Komponenten und Systemen zusammenspielt. Dazu werden die Schnittstellen, Kommunikationsprotokolle etc. definiert.

### 2.2 Funktionen

Skizziert die wichtigsten Funktionen

### 2.3 Benutzerprofile

Charakterisiert die Benutzergruppen und die Voraussetzungen die diese jeweils mitbringen (Ausbildung, Know-how, Sprache)

### 2.4 Einschränkungen
Dokumentiert Einschränkungen, die die Freiheit der Entwicklung reduzieren (Basis-Software, Ziel-Hardware, Gesetzliche Grundlagen, ...)

### 2.5 Annahmen und Abhängigkeiten
Nennt explizit die Annahmen und externen Voraussetzungen, von denen bei der Spezifikation ausgegangen wurde.


## 3. Einzelanforderungen

Beschreibt die Anforderung i so genau, dass bei der Verwendung der Spezifikation (im Entwurf usw.) keine Rückfragen dazu notwendig sind.

Identifizieren Sie jede Funktionale Anforderung mit einer Nummer, so dass diese Nachverfolgbar sind. Zusammengehörende Funktionale Anforderungen können durch geeignete Nummerierung angezeigt werden.

Zur Spezifikation der Software sollen Sprachschablonen benutzt werden.

* /F10/ Funktion 1 des Systems
* /F11/ Weitere Detaillierung Funkion 1
* /F20/ Funktion 2 des Systems


Die Funktionalen Anforderungen sollen mithilfe von Use-cases erhoben werden. Die Use-cases sollen in Anhang A detailliert beschrieben werden.

## 4. Abnahmekriterien

Beschreiben Sie hier, wie die Anforderungen bei der Abnahme auf ihre Realisierung überprüft werden können.

Definieren Sie hier mindestens ein Abnahmekriterium
* /A10/ Abnahmekriterium 1
* /A20/ Abnahmekriterium 2


# Anhang

## Anhang A. Use-cases

An dieser Stelle können detaillierte Use-cases angegeben werden
![Diagram](../../slides/images/use-case.png)

### Use Case 1:
* Name: *Name des Use-cases*
* Akteure: *Akteur1, Akteur2, ...*
* Vorbedingungen: *Was muss vor Beginn des Ablaufs gelten*
* Standardablauf
    * Schritt 1
    * Schritt 2
* Nachbedingungen Erfolg: *Was muss nach dem Ende des erfolgreichen Ablaufs gelten*
* Nachbedingung Sonderfall: *Was gilt nach dem Ende, wenn der Ablauf fehlgeschlagen ist*


#### Sonderfall 1a: Ausnahme 1
* Ablauf Sonderfall 1a
    * Schritt 1
    * Schritt 2

#### Sonderfall 1b: Ausnahme 2
* Ablauf Sonderfall 1b
    * Schritt 1
    * Schritt 2


### Use Case 2:
* Name: *Name des Use-cases*
* Akteure: *Akteur1, Akteur2, ...*
* Vorbedingungen: *Was muss vor Beginn des Ablaufs gelten*
* Standardablauf
    * Schritt 1
    * Schritt 2
* Nachbedingungen Erfolg: *Was muss nach dem Ende des erfolgreichen Ablaufs gelten*
* Nachbedingung Sonderfall: *Was gilt nach dem Ende, wenn der Ablauf fehlgeschlagen ist*

#### Sonderfall 2a: Ausnahme 1
* Ablauf Sonderfall 1a
    * Schritt 1
    * Schritt 2
