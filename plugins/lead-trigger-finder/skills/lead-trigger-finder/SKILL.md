---
name: lead-trigger-finder
description: Findet den passenden Lead-Trigger (Rechner, Quiz, Ratgeber, Terminbuchung …) für eine Marke und plant ihn als Wert-Leiter mit Testplan. Für mehr oder bessere Leads.
license: MIT
---

# Lead-Trigger-Finder

Ein Lead-Trigger ist nicht das Formular, sondern der **Anlass**, der die Datenabgabe aus Sicht der Nutzer:innen rechtfertigt. Nicht das Formular erzeugt den Lead, sondern der wahrgenommene Gegenwert.

Dieser Skill findet für eine konkrete Marke den passenden Anlass, baut ihn in eine Wert-Leiter ein und setzt den Test so auf, dass Lead-Qualität gemessen wird, nicht nur Menge.

Antworte in der Sprache der Person, die fragt.

## Ablauf

Arbeite die sechs Schritte der Reihe nach ab. Wenn die Person nur einen Teil will (z. B. „bewerte unseren Rechner“), spring direkt dorthin und nenne kurz, was Du dafür annimmst.

### 1. Kontext klären

Gibt es eine URL, lies zuerst die Website (Startseite, Produkt- oder Angebotsseite, Kontakt) und leite ab, was Du kannst. Frag danach nur, was fehlt, höchstens fünf Fragen auf einmal:

- **Produkt:** Was wird verkauft, ungefähre Preisspanne, Standard oder individuelle Lösung?
- **Vertrieb:** Online-Abschluss, Telefon, Vor-Ort-Termin/Außendienst oder Filiale?
- **Zielgruppe:** Wer recherchiert, wer entscheidet, wer zahlt (z. B. Angehörige)? Wie digital ist sie unterwegs?
- **Kaufanlass:** Akut (Ereignis, Zeitdruck) oder geplant (Wochen bis Monate Recherche)?
- **Bestand:** Welche Formulare, Rückrufe, Downloads, Rechner, Terminbuchungen gibt es schon, und wie laufen sie?
- **Ziel und Kapazität:** Mehr Leads, bessere Leads oder günstigere Leads? Wie schnell reagiert der Vertrieb, wie viele Gespräche schafft er?

Fehlt etwas, triff eine plausible Annahme, kennzeichne sie als **Annahme** und mach weiter.

### 2. Bestand aufnehmen

Ordne alles Vorhandene den Typen aus [references/trigger-katalog.md](references/trigger-katalog.md) zu und bewerte jeden Typ: **stark** / **teilweise** / **nur Standard** / **fehlt**. Bei mehreren Marken oder Seiten als Matrix (Mechanik × Marke). Oft gibt es gute Mechaniken schon, nur verstreut über Marken oder Seiten: Das ist ein eigener Befund und oft der schnellste Hebel.

### 3. Trigger auswählen

Bewerte die Typen mit [references/auswahl-matrix.md](references/auswahl-matrix.md). Ergebnis:

- **Top 3** mit Begründung, die sich auf die Antworten aus Schritt 1 stützt
- **ein Typ, von dem Du abrätst**, und warum

Die Matrix ist eine Begründungshilfe, keine Formel. Wenn Dein Urteil von der Punktzahl abweicht, sag es und begründe es.

### 4. Wert-Leiter bauen

Plane die gewählten Trigger als Stufen nach [references/wert-leiter.md](references/wert-leiter.md): je Stufe, was die Person bekommt, was sie dafür gibt, welche Felder, welcher nächste Schritt. Grundregel: **erst Nutzen, dann Daten; die Hürde wächst mit dem Wert.**

### 5. Konkretisieren

Für den Top-Trigger:

- Arbeitstitel und Nutzenversprechen in einem Satz
- Felder pro Schritt (Pflicht / optional) mit Begründung, warum das Feld an dieser Stelle nötig ist
- Vertrauenselemente und Verstärker (siehe Katalog, Abschnitt Verstärker)
- Bestätigungsseite: was passiert jetzt, wer meldet sich wann, was kann die Person bis dahin tun
- erster Follow-up nach dem Lead

### 6. Testplan

Nach [references/testplan.md](references/testplan.md): Hypothese, Varianten, primäre Metrik über den ganzen Funnel (nicht nur Leads), grobe Laufzeit, Abbruchkriterium.

## Ausgabe

Gliedere das Ergebnis nach [templates/ergebnis.md](templates/ergebnis.md). Tabellen statt Fließtext, wo es Vergleiche sind. Beginne mit einer Kurzfassung in drei Sätzen.

## Regeln

- **Keine erfundenen Fakten.** Was Du auf einer Website nicht selbst gesehen hast, ist eine Annahme. Die Beispiele im Katalog sind Stand ihres Prüfdatums; nenne es, wenn Du sie zitierst, und rate bei Wichtigem zur erneuten Prüfung.
- **Daten sparsam abfragen.** Nur, was für den nächsten Schritt nötig ist. Telefonnummer erst, wenn ein Gespräch tatsächlich ansteht. Hinweis auf Einwilligung und Datenschutzerklärung gehört an jedes Formular; Rechtsfragen an die Rechtsberatung der Marke verweisen.
- **Vorher sagen, was es gibt.** Vor der Datenabgabe muss klar sein, was die Person dafür bekommt. Ein Ergebnis, das Stufe 1 verspricht, wird in Stufe 1 geliefert, nicht erst im Termin.
- **Keine Dark Patterns:** keine künstliche Verknappung, keine versteckten Pflichtfelder, kein „Ergebnis“, das sich erst nach der Eingabe als Verkaufsgespräch entpuppt.
- **Direkter Weg bleibt offen.** Wer jetzt sprechen will, findet auf jeder Stufe Telefon oder Termin. Bei älteren Zielgruppen: große Schrift, wenige Schritte, Telefon immer sichtbar.
- **Qualität vor Menge.** Ein Trigger, der mehr Leads bringt, aber weniger Termine oder Abschlüsse, ist kein Gewinn. Bewerte immer bis zum Termin oder Abschluss.
