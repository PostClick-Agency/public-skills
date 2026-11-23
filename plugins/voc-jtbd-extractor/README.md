# VoC + JTBD Extractor

Macht aus den Google-Maps-Bewertungen eines Standorts ein Insights-Dokument: Jobs-to-be-Done, Pains, Gains und die Sprache Deiner Kund:innen.

Der Skill liest die Bewertungen über ein Browser-Tool aus oder nimmt einen Export (CSV oder JSON) entgegen, bereinigt sie, teilt sie nach Sternen in Pains (1–3 ★) und Gains (4–5 ★) und fasst sie zu Clustern zusammen.

## Was Du bekommst

- **Top-Jobs, Pain- und Gain-Cluster** mit Häufigkeit und Belegzitat
- **Verteilung nach Stage of Awareness** (Eugene Schwartz) und Persona-Hinweise
- **Wording-Bank** mit Original-Phrasen für Headlines, Testimonial- und Trust-Sections und Einwandbehandlung
- **Roter Faden** für Copy und Landingpage
- Warnungen bei dünner Datenbasis (unter 20 Bewertungen), Stichprobe der 200 neuesten ab 200 Bewertungen

## Voraussetzungen

Ein Browser-Tool, das JavaScript ausführen kann (z. B. Claude in Chrome), oder ein manueller Export der Bewertungen. Automatisiertes Auslesen kann gegen die Nutzungsbedingungen von Google verstoßen; der Export ist der unkomplizierte Weg.

## So startest Du

> Analysiere die Google-Bewertungen von [Firma] in [Stadt]: [Google-Maps-URL]

In Claude Code direkt: `/voc-jtbd-extractor:voc-jtbd-extractor`

## Inhalt

| Datei | Zweck |
|---|---|
| `skills/voc-jtbd-extractor/SKILL.md` | Extraktion, Bereinigung, Analyse, Wording-Bank, Ausgabeformat, Datenschutz |

Installation: siehe [README im Repository-Wurzelverzeichnis](../../README.md).
