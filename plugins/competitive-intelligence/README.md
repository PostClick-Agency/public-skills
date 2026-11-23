# Competitive Intelligence

Erstellt eine Wettbewerbsanalyse als Excel-Workbook mit 8 Tabs, für beliebige Branchen.

Du nennst Dein Unternehmen und 3 bis 10 Wettbewerber. Der Skill recherchiert deren Websites, Funding, Kunden und Preise, leitet 15 bis 25 branchentypische Vergleichskriterien ab und bewertet jeden Wettbewerber nach Bedrohung und Partnerpotenzial.

## Was Du bekommst

- **Excel-Datei** `[Unternehmen]_Wettbewerbsanalyse_[Datum].xlsx` mit den Tabs Unternehmensübersicht, Geschäftsmodell, Produktfeatures, Tech-Capabilities, Wettbewerbsposition, Preismodell, Strategische Insights und Kategorisierung
- **Bedrohung und Partnerpotenzial** je Wettbewerber, mit Begründung und empfohlener Aktion (Act, Watch, Integrate …)
- **Zusammenfassung im Chat:** Bedrohungslage, Partnerchancen, Kernerkenntnisse, Maßnahmen nach Zeithorizont
- **Kennzeichnung der Datenqualität:** belegt, geschätzt (~) oder nicht verfügbar (k.A.)

## Voraussetzungen

Websuche und Code-Ausführung (Python mit pandas und openpyxl). In claude.ai muss Code-Ausführung aktiviert sein. Die Anweisungen im Skill sind englisch, die Tabellen sind standardmäßig deutsch beschriftet.

## So startest Du

> Mach eine Wettbewerbsanalyse für [Unternehmen] (https://deine-domain.de). Wettbewerber: [A], [B], [C].

In Claude Code direkt: `/competitive-intelligence:competitive-intelligence`

## Inhalt

| Datei | Zweck |
|---|---|
| `skills/competitive-intelligence/SKILL.md` | Recherche-Ablauf, Sheet-Struktur, Bewertungslogik, Qualitätsprüfung |

Installation: siehe [README im Repository-Wurzelverzeichnis](../../README.md).
