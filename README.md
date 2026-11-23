# postclick public-skills

Öffentlich verfügbare Skills von [postclick.agency](https://postclick.agency) für Conversion-Rate-Optimierung, Funnel-Building, Wettbewerbsanalyse und mehr. Jeder Skill packt ein Vorgehen, das wir in Kundenprojekten nutzen, so ein, dass Claude es mit Dir auf Deine Marke anwendet.

*English: Publicly available Skills for Conversion-Rate-Optimization, Funnel-Building, Competitor-Research and more. Skills are written in German and answer in the language you use.*

## Skills

| Skill | Wofür | Blogpost |
|---|---|---|
| [lead-trigger-finder](plugins/lead-trigger-finder) | Findet den passenden Lead-Trigger für Deine Marke (Rechner, Quiz, Ratgeber, Konfigurator, Terminbuchung …) und plant ihn als Wert-Leiter mit Testplan. | [Lead-Trigger: Nicht das Formular macht den Lead](https://www.postclick.agency/magazin/lead-trigger) |
| [copywriting](plugins/copywriting) | Schreibt und verbessert Web- und Performance-Copy für B2B- und D2C-Marken: Headlines, Hero, Landingpages, Service-Seiten, CTAs, Ads. Mit Messaging nach Customer Stage. | – |
| [advertorial-struktur](plugins/advertorial-struktur) | Strukturiert Advertorials (Langform-Verkaufsseiten im „Bericht“-Stil) für D2C- und Health-Produkte nach einem 20-Kapitel-Framework, mit rechtlichen Leitplanken. | – |
| [b2b-positioning](plugins/b2b-positioning) | Erarbeitet oder analysiert eine B2B-Positionierung nach April Dunford und Fletch. Ergebnis: Positioning-Deck mit 6 Slides. | – |
| [competitive-intelligence](plugins/competitive-intelligence) | Wettbewerbsanalyse als Excel-Workbook mit 8 Tabs: Features, Geschäftsmodell, Preise, Bedrohung, Partnerpotenzial, Empfehlungen. | – |
| [voc-jtbd-extractor](plugins/voc-jtbd-extractor) | Voice of Customer und Jobs-to-be-Done aus Google-Maps-Bewertungen, mit Wording-Bank aus Original-Zitaten für Copy und Landingpages. | – |
| [ui-decluttering](plugins/ui-decluttering) | Entrümpelt Produkt-Screens (Apps, Portale, Dashboards, Formulare, Einstellungen): streicht Doppeltes, Erklärzeilen, interne Begriffe und überzählige Buttons, ohne Information, Pflichtangaben oder Barrierefreiheit zu opfern. Nicht für Landingpages. | – |

## Installation

### claude.ai (Web und Desktop-App)

1. Unter [Releases](https://github.com/PostClick-Agency/public-skills/releases) die ZIP des Skills laden, z. B. `lead-trigger-finder.zip`.
2. In claude.ai **Customize → Skills** öffnen, dann **+ → Create skill → Upload a skill** und die ZIP wählen.
3. In einem neuen Chat einfach loslegen, z. B.: „Finde den passenden Lead-Trigger für https://deine-domain.de“.

Voraussetzung: Code-Ausführung ist in Deinem Konto aktiviert (bei Team und Enterprise schalten Admins Skills frei).

### Claude Code als Plugin

```bash
claude plugin marketplace add PostClick-Agency/public-skills
```

```bash
claude plugin install lead-trigger-finder@postclick
```

In einer laufenden Sitzung geht dasselbe mit `/plugin marketplace add PostClick-Agency/public-skills` und danach über `/plugin`.

### Claude Code ohne Plugin

Den Skill-Ordner nach `~/.claude/skills/` (für Dich) oder nach `.claude/skills/` in Deinem Projekt (für Dein Team) kopieren:

```bash
git clone https://github.com/PostClick-Agency/public-skills.git /tmp/public-skills
```

```bash
cp -r /tmp/public-skills/plugins/lead-trigger-finder/skills/lead-trigger-finder ~/.claude/skills/
```

### Claude API

Skills lassen sich über die Skills-API hochladen und in Anfragen einbinden, siehe [Agent Skills in der API](https://platform.claude.com/docs/en/build-with-claude/skills-guide).

## Aufbau

```
.claude-plugin/marketplace.json        Marketplace für Claude Code
plugins/<skill>/
  .claude-plugin/plugin.json           ein Plugin je Skill, einzeln installierbar
  README.md
  skills/<skill>/SKILL.md              der Skill selbst
  skills/<skill>/references/           Wissen, das Claude bei Bedarf nachlädt
  skills/<skill>/templates/            Vorlagen für das Ergebnis
  skills/<skill>/evals/                Testfälle für `claude plugin eval` (nicht in der ZIP)
.github/workflows/release.yml          hängt an jedes Release die ZIPs für claude.ai
```

## Neuen Skill hinzufügen

1. Ordner `plugins/<name>/` nach dem Muster von `lead-trigger-finder` anlegen (`name` in `SKILL.md`, `plugin.json` und Ordnername gleich, nur Kleinbuchstaben, Ziffern und Bindestriche).
2. `description` in `SKILL.md` unter 200 Zeichen halten (claude.ai-Grenze laut Hilfe-Center).
3. Eintrag in `.claude-plugin/marketplace.json` ergänzen und die Tabelle oben erweitern.
4. Prüfen: `claude plugin validate .`
5. Release: in GitHub unter Releases → Draft a new release einen Tag `vX.Y.Z` anlegen und veröffentlichen. Der Workflow hängt die ZIPs an.

## Mitmachen

Fehler, bessere Beispiele, neue Trigger-Typen: Issue oder Pull Request. Beispiele bitte mit Link und Prüfdatum, damit sie nachvollziehbar bleiben.

## Lizenz

[MIT](LICENSE)
