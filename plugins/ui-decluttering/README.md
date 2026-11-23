# UI decluttering

Entrümpelt Produkt-Screens: Apps, Kundenportale, Dashboards, Admin-Bereiche, Formulare und Einstellungen.

Die häufigste Korrektur in unseren UI-Reviews ist ein einziges Wort: „raus“. Der Skill macht daraus ein Vorgehen. Er benennt die eine Frage, die ein Screen beantworten soll, und geht dann Element für Element durch: erst streichen, dann zusammenlegen, verschieben, umkodieren, erst zuletzt umformulieren. Was eine Entscheidung erst möglich macht (Folgen, Fristen, Kosten), was rechtlich nötig ist, vor Fehlern schützt oder der Barrierefreiheit dient, bleibt.

**Nicht für Landingpages, Produktseiten oder andere Werbeseiten.** Dort tragen Fließtexte die Überzeugung; nach diesen Regeln gekürzt, ginge nützliche Information verloren.

## Was Du bekommst

- **Kurzfassung:** die eine Frage des Screens und die stärkste Änderung
- **Eingriffe** als Tabelle: was, welche Aktion, warum
- **Fällt weg:** Aktionen und Informationen, die nicht mehr da sind, und wo sie jetzt stehen
- **Bereinigte Fassung:** geänderter Code, wenn er vorliegt, sonst der neue Aufbau als Text
- **Offen:** Annahmen und Fragen, die nur Du entscheiden kannst

## Wichtige Regeln

- Eine Frage je Screen, der nächste Schritt zuerst
- Genau ein Primär-Button, Rückmeldung im geklickten Element, keine Toasts
- Farbe sparsam: Zustand als ein Wort an fester Stelle, keine farbig gefüllten Zeilen
- Mehrere Datensätze als Tabelle, filterbar über die Kopfzeile; Löschen als Tonne-Icon mit Bestätigung
- Sprechende Beschriftungen mit Verb („Daten exportieren“, „Passwort ändern“), bei wiederkehrenden Aktionen mit Icon
- An/aus als Schalter, Formulare einspaltig, mit Beschriftung, Absenden nie deaktiviert
- Keine Erklärzeilen, keine Überzeilen, keine internen Begriffe
- Funktionen bleiben: Entrümpeln ordnet, es streicht keine Einstellungen oder Aktionen

## So startest Du

> Unsere Projektübersicht wirkt überladen. Entrümple sie bitte: [Datei oder Screenshot]

> Unsere Einstellungsseite ist über die Jahre gewachsen. Räum sie auf und sag mir, was sich ändert.

> Wir planen eine neue Ansicht „Rechnungen“. Hier die Wunschliste aus dem Team. Mach daraus einen schlanken Aufbau.

In Claude Code direkt: `/ui-decluttering:ui-decluttering`

## Inhalt

| Pfad | Zweck |
|---|---|
| `skills/ui-decluttering/SKILL.md` | Ablauf in fünf Schritten, Regeln, was bleibt, Vorher-nachher-Beispiele |
| `skills/ui-decluttering/evals/` | Testfälle im Format von `claude plugin eval` (nicht Teil der ZIP für claude.ai) |

Installation: siehe [README im Repository-Wurzelverzeichnis](../../README.md).
