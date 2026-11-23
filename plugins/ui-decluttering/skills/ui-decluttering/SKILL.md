---
name: ui-decluttering
description: Entrümpelt Produkt-Screens: Apps, Portale, Dashboards, Formulare, Einstellungen. Streicht Doppeltes, Erklärzeilen, interne Begriffe, überzählige Buttons. Nicht für Landingpages.
license: MIT
---

# UI decluttering

Für **Produkt-Screens**: Oberflächen, in die Leute wiederkommen, um etwas zu erledigen (App, Kundenportal, Dashboard, Admin-Bereich, Formular, Einstellungen).

Ein Screen wird besser, wenn man wegnimmt, was nicht für seine eine Frage arbeitet. Die häufigste Korrektur in unseren Reviews ist ein einziges Wort: **„raus“**. Deshalb gilt die Reihenfolge: erst streichen, dann zusammenlegen, erst danach umformulieren. Ein neues Element kommt nur dazu, wenn es zwei alte ersetzt.

**Nicht für Werbeseiten** (Landingpages, Produktseiten, Website-Abschnitte). Dort tragen Fließtexte die Überzeugung, und wer sie nach diesen Regeln kürzt, nimmt nützliche Information weg. Geht es um so eine Seite, sag das in einem Satz und arbeite ohne diesen Skill.

Antworte in der Sprache der Person, die fragt.

## Ablauf

### 1. Material lesen

Das Material kann Code sein (Komponente, Template, HTML), ein Screenshot, eine URL oder die Beschreibung eines geplanten Screens. Lies es vollständig, bevor Du urteilst.

Liegt es in einem Projekt, lies zuerst dessen Regeln: `AGENTS.md`, `CLAUDE.md`, Doku zum Designsystem, vorhandene Komponenten und Tokens. **Projektregeln gehen vor diesem Skill.** Legt das Projekt fest, wie ein Primär-Button heißt oder welche Farbe ein Zustand hat, nimm genau das.

### 2. Die eine Frage und den nächsten Schritt benennen

Schreib in einem Satz, welche Frage der Screen beantwortet („Was muss ich heute erledigen?“, „Ist alles bezahlt?“) und welcher Schritt danach kommt. Steht das nicht fest, nimm das Wahrscheinlichste an und kennzeichne es als **Annahme**. Beantwortet der Screen zwei Fragen, ist das der erste Befund: aufteilen.

Jedes Element misst sich daran: Hilft es, die Frage zu beantworten oder den Schritt zu gehen? Wenn nicht: raus.

### 3. Element für Element durchgehen

Geh von oben nach unten durch, mit den Regeln unten. Prüf für jedes Element die Aktionen in dieser Reihenfolge und nimm die erste, die passt:

1. **Streichen**: sagt nichts Neues, wiederholt, erklärt Offensichtliches, führt nirgends hin. Funktionen streichst Du nie, nur ihre Wiederholungen (siehe „Was bleibt“).
2. **Zusammenlegen**: zwei Elemente tragen dieselbe Information (Status-Badge und Statuszeile; ein Speichern-Button je Abschnitt; Karten, die eigentlich eine Tabelle sind).
3. **Verschieben**: richtig, aber am falschen Ort (Hilfe an den Ort der Handlung, Rückmeldung in den geklickten Button, selten Gebrauchtes in die Detailansicht).
4. **Umkodieren**: eine Information ist mehrfach kodiert (Farbe, Badge, Icon und Text) und bekommt eine einzige: ein Wort an fester Stelle.
5. **Umformulieren**: bleibt, wird aber kürzer und kommt in der Sprache der Nutzer.

Bevor Du einen Text streichst, frag: Braucht jemand diese Information, um zu entscheiden oder um einen Fehler zu vermeiden? Dann bleibt sie, höchstens kürzer und näher am Ort der Handlung (siehe „Was bleibt“).

### 4. Umsetzen

- **Code liegt vor:** direkt ändern, mit den vorhandenen Komponenten und Tokens des Projekts. Keine neuen Einzelwerte für Farbe, Größe oder Abstand: Uneinheitlichkeit ist auch Unordnung.
- **Kein Code:** den bereinigten Aufbau des Screens als Text liefern.
- **Größere Eingriffe** (Kennzahlen fallen weg, ein Screen wird geteilt, ein Abschnitt wird aufgelöst) setzt Du um und meldest sie, damit die Person sie gezielt prüft. Löst Du einen Abschnitt auf, wandern seine Einträge in einen passenden anderen; sag, wo sie jetzt stehen.

### 5. Antworten

Halte auch die Antwort entrümpelt:

- **Höchstens etwa 1.500 Zeichen**, wenn das Ergebnis in einer Datei steht oder „kurz“ verlangt ist. Die Tabelle zeigt die 5 bis 8 wichtigsten Eingriffe; kleine Eingriffe gleicher Art stehen zusammen in einer Zeile. Alles Weitere steht in der Datei, nicht in der Antwort.
- **Geänderte Dateien nicht noch einmal einfügen.** Die Datei ist das Ergebnis; die Antwort sagt, was sich geändert hat.
- **Keine Zählungen** („17 Elemente gestrichen“). Sie stimmen selten und sagen nichts.
- **Was wegfällt, immer nennen:** Aktionen, Kennzahlen, Hinweise. Niemand soll erst im Betrieb merken, dass etwas fehlt.

```markdown
**Kurzfassung:** 2–3 Sätze: die eine Frage des Screens und die stärkste Änderung.

| Was | Aktion | Grund |
|---|---|---|
| Tour beim ersten Aufruf | gestrichen | Keine Einführungs-Slides |

**Fällt weg:** Aktionen oder Informationen, die nicht mehr da sind, und wo sie jetzt stehen.

**Offen:** Annahmen und Fragen, die nur die Person entscheiden kann.
```

## Regeln

### Aufbau

- **Eine Frage je Screen.** Der nächste Schritt ist die erste Kachel, nicht die Begrüßung, nicht die Statistik, nicht die Neuigkeiten.
- **Keine Willkommens-Slides, Touren oder Modals** beim ersten Besuch. Ein leerer Zustand sagt in einem Satz, was fehlt, und bietet den einen Schritt an, der das ändert.
- **Kennzahlen nur, wenn sie zum Handeln führen.** „12 Projekte gesamt“, das nichts auslöst, ist Dekoration. „3 warten auf Dich“, das zu genau diesen dreien führt, ist der nächste Schritt.
- **Kein endloses Scrollen.** Lange Listen filtern oder seitenweise zeigen, Erledigtes einklappen oder in eine eigene Ansicht.
- **Desktop zuerst**, weil dort gearbeitet wird, und auf dem Handy lesbar. Schauen die Nutzer vor allem am Handy nach, dreh es um.

### Zustand und Farbe

- **Farbe sparsam.** Ein Screen mit wenig Farbe lässt sich schneller überfliegen. Zeilen und Karten bleiben neutral; keine farbig gefüllten Flächen je Zustand.
- **Ein Zustand, ein Wort:** In Listen steht der Zustand als ein kurzes Wort in einer eigenen Spalte („Offen“, „In Arbeit“, „Erledigt“), immer an derselben Stelle. Farbe höchstens als dezenter Ton an diesem Wort. Keine Badges, Icons, Rahmenfarben oder Statuszeilen zusätzlich, die dasselbe sagen.
- **Nie nur Farbe** (WCAG 1.4.1): Das sichtbare Wort sorgt dafür, dass der Zustand auch ohne Farbsehen lesbar ist. Text, der nur für Screenreader da ist, reicht dafür nicht.
- **Rot ist kein Zustand**, sondern nur für Fehler und für Zerstörendes. „Überfällig“ in Rot an jeder zweiten Zeile stumpft ab.

### Daten

- **Mehrere gleichartige Datensätze als Tabelle**, nicht als Karten: Spaltenköpfe statt Beschriftung in jeder Zeile, so lässt sich von oben nach unten vergleichen.
- **Filtern über die Kopfzeile:** Die Spaltenköpfe filtern und sortieren die Zeilen (z. B. Status-Spalte auf „Offen“). Keine eigene Filterleiste über der Tabelle.
- **Alles, was Daten zeigt, ist ganz klickbar** und führt zur passenden Detailansicht. Keine zusätzlichen Links „Details“, „Öffnen“, „Ansehen“ in der Zeile.
- **Zahlen rechtsbündig**, gleiche Einheit in der Spalte, die Einheit im Spaltenkopf statt in jeder Zelle. Beträge und Daten im gewohnten Format der Nutzer.
- **Keine internen Felder:** IDs, UUIDs, Slugs, Rollen-Schlüssel, Konfigurationsschlüssel, Build-Nummern, Zeitstempel im Rohformat.
- **Spalten nur, wenn danach gesucht oder entschieden wird.** Was nur im Einzelfall gebraucht wird, steht in der Detailansicht.

### Aktionen und Rückmeldung

- **Genau ein Primär-Button je Screen.** Weitere Aktionen sind sekundär oder ruhig; selten Gebrauchtes wandert in die Detailansicht oder ein Menü. Ein Speichern für den ganzen Screen statt einem je Abschnitt, oder sofort speichernde Schalter mit Rückmeldung am Schalter.
- **Rückmeldung im geklickten Element:** Der Button zeigt „Gespeichert“, der Status in der Zeile wechselt. Keine Toasts in der Ecke, keine Banner oben.
- **Zeilenaktionen als Icon:** Löschen in einer Zeile ist ein ruhiges Tonne-Icon am Zeilenende, mit zugänglichem Namen (`aria-label`, Tooltip), kein roter Textlink. Rot wird es erst im Bestätigungsdialog.
- **Abbrechen, Zurück, Verwerfen sind ruhig.** Rot nur für Löschen und Sperren, immer mit Bestätigung.
- **Sprechende Beschriftungen:** Buttons und Links sagen mit einem Verb, was passiert: „Daten exportieren“, „Passwort ändern“, „Zwei-Faktor-Anmeldung einrichten“. Nicht „Anfordern“, „Mehr“, „Hier“ oder nur „→“. Führt eine Aktion auf eine eigene Seite, ist sie ein sprechender Link am Ende ihrer Zeile.
- **Icon zur Beschriftung** bei Aktionen, die man wiedererkennen soll (Exportieren mit Download-Icon, Hinzufügen mit Plus). Ein Icon allein nur bei bekannten Zeilenaktionen wie der Tonne, immer mit zugänglichem Namen.
- **Links und Buttons führen zu etwas Neuem.** Was nirgends hinführt oder nichts tut, fällt weg.

### Formulare und Einstellungen

- **An/aus als Schalter:** Einstellungen, die sofort wirken, sind Schalter (`role="switch"`), keine Kästchen. Kästchen nur für Zustimmungen in Formularen, die man absendet (z. B. Mandatstext, Einwilligung).
- **Einspaltig.** Zwei Spalten zerstören die Lesereihenfolge.
- **Absenden nie deaktivieren**, nur weil Felder leer sind oder nichts geändert wurde. Beim Absenden prüfen und Fehler direkt am Feld zeigen.
- **Beschriftung über dem Feld**, Hilfe als eine kurze Zeile am Feld, nicht als Absatz über dem Formular. Ein Platzhalter ersetzt keine Beschriftung.
- **Nur Felder, die für den nächsten Schritt nötig sind.** Was später gebraucht wird, später fragen.

### Texte

- **Keine Erklärzeilen**, die beschreiben, was man sieht oder wie man klickt („Hier siehst Du …“, „Klicke auf …, um …“). Braucht ein Screen eine Gebrauchsanweisung, ist der Screen das Problem.
- **Keine Hilfetexte, die nur die Beschriftung wiederholen** („E-Mail-Benachrichtigungen: Erhalte Benachrichtigungen per E-Mail“).
- **Keine Überzeilen** (Eyebrows) über Überschriften.
- **Sprache der Nutzer.** Keine internen Begriffe, kein Fachjargon, wo es ein Alltagswort gibt.
- **Kurze Sätze**, ein Gedanke je Satz. Beschriftungen kurz und eindeutig.
- **Fehlermeldungen sagen, was zu tun ist** („Bitte gib eine E-Mail-Adresse an“ statt „Validation failed: email“).
- **Systemtexte kommen von der Marke oder dem Produkt**, nicht von einer Person. Eine echte Person mit Gesicht und Namen steht dort, wo man sie erreicht: beim Ansprechpartner.
- **Ansprache einheitlich**, Du oder Sie, so wie das Projekt oder Material es festlegt.
- **Einheitliche Bausteine.** Vorhandene Komponenten und Tokens nutzen. Jede Abweichung (eigene Farbe, eigener Radius, eigene Schriftgröße) ist visuelles Rauschen.

## Was bleibt

Entrümpeln heißt nicht, Funktionen, Information, Pflichten oder Schutz zu entfernen. Das hier bleibt, auch wenn es Platz kostet:

- **Funktionen:** Jede Einstellung, Aktion und jeder Bereich, der etwas tut, bleibt erreichbar. Entrümpeln ordnet Darstellung, Texte und Doppelungen; es verkleinert nicht den Funktionsumfang. Passt ein Eintrag nirgends mehr hin, bekommt er eine Zeile in einem bestehenden Bereich, statt zu verschwinden. Gesperrte Funktionen (z. B. nur mit höherem Tarif) bleiben sichtbar, mit einem sprechenden Link zur Freischaltung.
- **Information, die eine Entscheidung erst möglich macht:** Folgen, Fristen, Kosten, was mit Daten passiert („Der Download-Link ist 7 Tage gültig“, „Alle Daten werden nach 30 Tagen endgültig gelöscht“). Kürzen ja, streichen nein.
- **Rechtlich Nötiges:** Datenschutzhinweis, Einwilligungen, Pflichttexte (z. B. Text eines SEPA-Mandats), Preisangaben.
- **Schutz vor Fehlern:** Bestätigung vor dem Löschen, Fehlermeldungen am Feld, Warnung vor unumkehrbaren Schritten.
- **Barrierefreiheit:** Beschriftungen an Feldern (notfalls nur für Screenreader sichtbar), Alt-Texte, `aria`-Attribute, Fokus-Rahmen, Kontrast.
- **Der direkte Weg zum Menschen** (Ansprechpartner, Telefon), wo es ihn gibt.

Und nichts dazuerfinden: Beim Umformulieren entstehen keine neuen Fakten, Zahlen oder Versprechen. Fehlt etwas, bleibt ein klarer Platzhalter.

## Vorher, nachher

| Vorher | Nachher | Regel |
|---|---|---|
| Absatz „Hier siehst Du alle Deine Projekte. Klicke auf ein Projekt, um mehr zu erfahren.“ | gestrichen | Keine Erklärzeilen |
| Karte mit grünem Rand, Badge „Erledigt“, Haken-Icon und Zeile „Status: erledigt“ | neutrale Tabellenzeile, Spalte Status: „Erledigt“ | Farbe sparsam, ein Zustand ein Wort |
| Drei Projekte als bunte Karten, jede mit „Budget:“, „Aktualisiert:“ | Tabelle mit Spaltenköpfen, Status-Spalte filterbar | Tabelle, Filtern über die Kopfzeile |
| Roter Textlink „Löschen“ in jeder Zeile | Tonne-Icon mit `aria-label="Löschen"`, Bestätigungsdialog bleibt | Zeilenaktionen als Icon |
| „Projekt-ID: prj_8f3a2“ in jeder Karte | gestrichen | Keine internen Felder |
| Drei blaue Buttons „Neues Projekt“, „Exportieren“, „Team einladen“ | „Neues Projekt“ primär, die anderen ruhig | Ein Primär-Button |
| Zeile mit Text und Link „Details →“ | ganze Zeile klickbar | Daten sind klickbar |
| Toast „Erfolgreich gespeichert!“ oben rechts | Button zeigt „Gespeichert“ | Rückmeldung im Element |
| Senden-Button grau, bis alle Pflichtfelder gefüllt sind | immer aktiv, Fehler am Feld | Formulare |
| „Abbrechen“ als roter Button | ruhiger Button | Rot nur für Zerstörendes |
| Schalter „Wochenübersicht“ mit Hilfetext „Erhalte eine Wochenübersicht“ | Hilfetext gestrichen | Hilfe wiederholt nicht die Beschriftung |
| Kästchen „E-Mail-Benachrichtigungen“ mit „✓ Aktiviert“ daneben | Schalter, ohne Zusatztext | An/aus als Schalter |
| Button „Datenexport anfordern“ | „Daten exportieren“ mit Download-Icon | Sprechende Beschriftung, Icon |
| Zeile „Passwort ändern“ mit Hilfetext „Hier kannst Du Dein Passwort ändern“ und Link „Passwort ändern →“ | Zeile „Passwort“ mit Link „Ändern“ am Zeilenende | Sprechende Links, keine Wiederholung |
| Bereich „Erweitert“ mit nur einem Eintrag „API-Zugang“ | „API-Zugang“ als Zeile in einem passenden Bereich | Funktionen bleiben |
| „Konto löschen: Wenn Du Dein Konto löschst, werden nach Ablauf von 30 Tagen alle Deine Projekte, Angebote und Rechnungen unwiderruflich und endgültig gelöscht.“ | „Nach 30 Tagen werden alle Projekte, Angebote und Rechnungen endgültig gelöscht.“ | Kürzen ja, streichen nein |
