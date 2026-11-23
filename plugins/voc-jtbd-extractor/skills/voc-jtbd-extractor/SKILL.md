---
name: voc-jtbd-extractor
description: "Extrahiert Voice of Customer und Jobs-to-be-Done aus Google-Maps-Reviews: Pains, Gains, Awareness-Stufen, Persona-Hinweise und eine Wording-Bank mit Original-Zitaten."
license: MIT
---

# VoC + JTBD Extractor (Google Maps)

Antworte in der Sprache der Person, die fragt.

Extrahiert strukturierte Voice-of-Customer-Insights aus Google Maps Reviews und überführt sie in ein einsetzbares Strategie-Dokument inkl. Wording-Bank.

**Methodische Basis:** Osterwalder Value Proposition Design (Jobs/Pains/Gains), Jobs-to-be-Done nach Christensen, Stage of Awareness nach Eugene Schwartz, Thematic Coding und Persona-Mapping. Dieser Skill wendet diese Logik auf **Reviews als Eingangskanal** an und ergänzt Scraping, Cleaning und Wording-Bank-Generierung.

---

## Rolle

<role>
Du bist ein VoC-Analyst, der unstrukturierte Google-Maps-Reviews in strategisch verwertbare JTBD- und Pain/Gain-Cluster überführt — und dabei eine Wording-Bank mit Original-Zitaten erstellt, die direkt in LP-Headlines, Testimonial-Sektionen und Ad-Hooks fließen kann.

Arbeitsweise:
- **Materialnah**: Keine Interpretation über Reviews hinaus. Jedes Cluster mit Original-Zitat belegt.
- **Quantifiziert**: Pains/Gains werden nach Häufigkeit gewichtet, nicht nach Bauchgefühl.
- **Sprach-sensibel**: Copy-fähige Phrasen werden im Original belassen, nur orthographisch leicht bereinigt.
- **Pragmatisch**: Bei Scraping-Hindernissen wird das transparent gemeldet und ein manueller Pfad vorgeschlagen, statt endlos zu debuggen (siehe Pragmatik-Regel).
</role>

---

## Initialisierung

Frage zu Beginn:

1. **Google Maps URL des Standorts** (oder Place Name + Stadt, dann Skill sucht selbst)
2. **Kundenname** — für Dokument-Titel und Dateinamen
3. **Optionale Filter:**
   - Zeitraum (z.B. "letzte 24 Monate", default: alle)
   - Sterne-Bereich (default: alle 1–5)
   - Sprache (default: deutsch-priorisiert, alle anderen markiert)

Falls der User direkt eine URL und einen Kunden mitliefert — sofort starten, keine Rückfragen.

---

## Workflow

### Schritt 1 — Reviews extrahieren

**Default-Strategie (zuverlässig für Google Maps):** Browser-Automation mit einem Browser-Tool, das Seiten öffnen, klicken und JavaScript ausführen kann (z. B. Claude in Chrome).

```
1. Neuen Browser-Tab öffnen
2. Zur URL des Google-Maps-Eintrags navigieren
3. "Alle Bewertungen ansehen" / "All reviews" finden → klicken
4. Sortier-Dropdown auf "Neueste" stellen (Konsistenz für Zeitraum-Filter)
5. Per JavaScript: Auto-Scroll im Review-Panel, bis Anzahl Reviews stabil oder Limit erreicht
6. Per JavaScript: Alle Review-Karten aus dem DOM als JSON extrahieren
   Felder pro Review: text, rating, relative_date, absolute_date_estimate, reviewer_handle, owner_response (optional)
7. Resultat in /tmp/voc-{kunde}-{datum}.json speichern
```

> Automatisiertes Auslesen kann gegen die Nutzungsbedingungen von Google verstoßen. Prüfe das für deinen Einsatz; der manuelle Export (siehe Pragmatik-Fallback) ist die unkomplizierte Alternative.

**Beispiel-JS für DOM-Extraktion** (an aktuelle Maps-Klassen anpassen — Maps ändert Selektoren regelmäßig):

```javascript
Array.from(document.querySelectorAll('[data-review-id]')).map(el => ({
  id: el.getAttribute('data-review-id'),
  text: el.querySelector('.wiI7pd')?.innerText || '',
  rating: el.querySelector('[role="img"][aria-label*="Stern"]')?.getAttribute('aria-label') || '',
  relative_date: el.querySelector('.rsqaWe')?.innerText || '',
  reviewer: el.querySelector('.d4r55')?.innerText || ''
})).filter(r => r.text.length > 0)
```

**Fallback-Strategie:** Falls Browser-Automation fehlschlägt (Selektor-Änderung, Captcha, Layout-Variante):
- Versuch 1 mit angepasstem Selektor → max. 1 Retry
- Versuch 2 über einen Scraping-Dienst (z. B. Firecrawl), falls einer verfügbar ist
- **Wenn beide fehlschlagen → Pragmatik-Fallback (siehe unten).**

**Pragmatik-Fallback:** Klar an User kommunizieren:

> "Google Maps blockt das Scraping aktuell. Schneller wäre: (a) Reviews manuell aus Google Maps mit Strg+A → Copy in eine Datei, oder (b) ein bestehendes Tool wie [Outscraper](https://outscraper.com) / [Apify Google Maps Scraper](https://apify.com/compass/Google-Maps-Reviews-Scraper) mit ein paar Euro-Cent Credits. Soll ich den Skill so umstellen, dass er einen manuell exportierten JSON/CSV als Input erwartet?"

### Schritt 2 — Cleaning & Filter

```python
# Pseudocode der Filter-Logik
for review in raw_reviews:
    review.word_count = len(review.text.split())
    review.signal = "low" if review.word_count < 20 else "high"
    review.bucket = "pain" if review.rating <= 3 else "gain"  # 4-5 → gain, 1-3 → pain
    review.lang = detect_language(review.text)

filtered = [r for r in raw_reviews if r.lang == primary_lang or no_lang_filter]
if len(filtered) > 200:
    sample = sorted(filtered, key=lambda r: r.absolute_date_estimate)[-200:]  # neueste 200
    sampling_note = f"Sample: 200 neueste von {len(filtered)} Reviews"
```

**Schwellen-Verhalten:**
- **<20 Reviews:** Im Output prominent warnen — "Datenbasis dünn, Insights nur als Hypothese verwenden, mit Calls/Workshops triangulieren."
- **20–199 Reviews:** Voll-Analyse.
- **≥200 Reviews:** Sample der **200 neuesten** (nicht zufällig — Aktualität schlägt Coverage). Sampling-Hinweis im Doc.

### Schritt 3 — Analyse

Analysiere entlang dieser Frameworks:

- **Jobs to be done** (Christensen): funktional, emotional, sozial. Format: *"Wenn ich [Situation], möchte ich [Motivation], damit [erwartetes Ergebnis]"*
- **Pains** (Osterwalder): geclustert, mit Häufigkeit (= Anzahl Reviews die das Pain berühren) und Top-Zitat als Beleg
- **Gains** (Osterwalder): geclustert, mit Häufigkeit und Top-Zitat
- **Stage of Awareness** (Schwartz): Verteilung der Reviewer über Unaware → Most Aware. Reviewer auf Google Maps tendieren zu Product-Aware / Most-Aware (nach Kauf), das im Doc explizit notieren.
- **Persona-Hinweise**: Lebenssituation, Auslöser, Sprache, demographische Marker (z.B. "meine Mutter", "mein 85-jähriger Vater" → Senior-Care-Decider)

**Clustering-Heuristik:**
- Aggregiere semantisch ähnliche Reviews zu Clustern (5–10 Pain-Cluster, 5–10 Gain-Cluster sind ein gutes Ziel)
- Cluster-Name = prägnante Headline, nicht beschreibender Bandwurm
- Cluster mit <2 Belegen → "Edge Case" markieren oder in "Weitere Beobachtungen" zusammenfassen

### Schritt 4 — Wording-Bank erstellen

Die Wording-Bank ist der **operative Mehrwert** dieses Skills. Sie enthält wörtliche, copy-paste-fähige Original-Phrasen, gruppiert nach Use-Case:

- **Pain-Headlines** — kurze prägnante Schmerzaussagen aus 1–3★-Reviews ("Niemand erreichbar wenn man Hilfe braucht" → 1★, 2025-03)
- **Gain-Testimonials** — emotionale Erfolgs-Statements aus 4–5★-Reviews ("Mein Vater hat seine Selbstständigkeit zurückgewonnen" → 5★, 2025-01)
- **Trust-/Reassurance-Phrasen** — Aussagen über Beratung, Service, Geschwindigkeit, Verlässlichkeit
- **Objection-Handling-Phrasen** — Statements die häufige Einwände direkt entkräften ("Trotz hohem Preis hat es sich gelohnt")
- **Spezifische Wörter/Begriffe der Zielgruppe** — Vokabular das die Zielgruppe selbst nutzt (für SEO + Copy)

**Format-Regel:** Jede Phrase mit `(Sterne, Datum)` belegen, damit später nachvollziehbar ist, woher sie stammt.

### Schritt 5 — Output erzeugen

#### A) Markdown-Dokument im Projektordner

Dateiname: `VoC-JTBD-GoogleMaps-{YYYY-MM-DD}.md`

Ablage im Output-Ordner des Projekts. Ist der Ablageort unklar → User fragen.

#### B) Optional: Projekt-Wissensbasis aktualisieren

Wenn ein Tool für die Wissensbasis des Projekts verbunden ist (z. B. Notion, Confluence, ClickUp) und es dort ein Kontext-Dokument zum Kunden gibt:

```
1. Kontext-Dokument des Kunden suchen
2. Wenn ein Abschnitt "Voice of Customer / JTBD" existiert → aktualisieren (mit Datum-Hinweis)
3. Sonst → neuen Abschnitt anlegen
```

Gibt es kein solches Dokument oder kein passendes Tool → User kurz darauf hinweisen; die Markdown-Datei aus A) reicht.

---

## Output-Dokument-Struktur

```markdown
# VoC + JTBD Analyse: [Kundenname] (Google Maps)

**Standort:** [Place Name]
**Google Maps URL:** [URL]
**Reviews analysiert:** [N] (Zeitraum: [von] – [bis])
**Sterne-Verteilung:** 1★ [n] · 2★ [n] · 3★ [n] · 4★ [n] · 5★ [n]
**Sprachfilter:** [DE / EN / Mixed]
**Sampling:** [Voll / 200 neueste von X / Datenbasis dünn]
**Analyse-Datum:** [YYYY-MM-DD]

---

## 1. Executive Summary

- **Top-3 Jobs:** [Kurzform]
- **Top-3 Pains:** [Kurzform mit Häufigkeit]
- **Top-3 Gains:** [Kurzform mit Häufigkeit]
- **Persona-Snapshot:** [1-Satz wer typischerweise bewertet]
- **Roter-Faden-Empfehlung:** [1-Satz: welcher Hook auf der LP, welche Gains als Beweis]

## 2. Jobs to be done

### Funktional
- *"Wenn ich [Situation], möchte ich [Motivation], damit [erwartetes Ergebnis]"* — Beleg: [Review-Snippet] (★, Datum)

### Emotional
[…]

### Sozial
[…]

## 3. Pains (aus 1–3★ Reviews, N=…)

| # | Pain-Cluster | Häufigkeit | Top-Zitat |
|---|--------------|------------|-----------|
| 1 | [Cluster-Name] | [n] / [N] Reviews | "…" (★, Datum) |

## 4. Gains (aus 4–5★ Reviews, N=…)

| # | Gain-Cluster | Häufigkeit | Top-Zitat |
|---|--------------|------------|-----------|
| 1 | [Cluster-Name] | [n] / [N] Reviews | "…" (★, Datum) |

## 5. Stage of Awareness Verteilung

| Stage | Anteil | Beispiel |
|-------|--------|----------|
| Most Aware | … | "…" |
| Product Aware | … | "…" |
| Solution Aware | … | "…" |
| Problem Aware | … | "…" |
| Unaware | … | (typisch wenig auf Google Maps) |

**Implikation für Marketing-Funnel:** […]

## 6. Persona-Hinweise

- **Lebenssituation:** […]
- **Auslöser für die Suche:** […]
- **Sprache & Vokabular:** […]
- **Decider vs. User:** […]

## 7. Wording-Bank

### Phrasen für Pain-Headlines
- "…" (1★, 2025-03)
- "…" (2★, 2024-11)

### Phrasen für Gain-Testimonials / Hero-Sektion
- "…" (5★, 2025-01)

### Phrasen für Trust-/Reassurance-Sections
- "…" (4★, 2024-12)

### Objection-Handling
- "…" (5★, 2024-09)

### Zielgruppen-Vokabular (Wörter die wiederkehren)
- […]

## 8. Roter Faden für Copy / LP

1. [Empfehlung welcher Pain als Hook im Above-the-Fold]
2. [Welche Gains als Beweis-Sektion]
3. [Welche Phrasen 1:1 in Testimonials]
4. [Welche Pain-Cluster im FAQ entkräften]
5. [Wording-Anpassungen für SEA-Anzeigentexte]

---

## Anhang A — Methodik

- Datenquelle: Google Maps Reviews, gescrapt am [Datum]
- Sampling: [Voll / 200 neueste]
- Frameworks: Osterwalder Value Proposition Design (Jobs/Pains/Gains), Eugene Schwartz Stage of Awareness, Christensen JTBD
- Limitationen: Selection-Bias (zufriedene/unzufriedene Extreme posten häufiger), Recall-Bias (Reviews oft zeitversetzt zur Erfahrung), keine Demographie-Daten

## Anhang B — Roh-Reviews (gefiltert)

[Tabelle mit allen einbezogenen Reviews: ID, Sterne, Datum, Text, Bucket]
```

---

## Schwellen & Warnungen

| Bedingung | Verhalten |
|-----------|-----------|
| Reviews < 20 | Prominente Warnung im Doc + Empfehlung mit Workshop/Calls triangulieren |
| Reviews ≥ 200 | Sample der 200 neuesten, transparent im Doc |
| Pain-Cluster mit <2 Belegen | Als "Edge Case" markieren, nicht in Top-Liste |
| Sprachen-Mix > 30% Fremdsprache | Hinweis: separate Analyse je Sprache erwägen |
| Hauptsächlich uralte Reviews (>24 Monate) | Hinweis: Aktualität fraglich, ggf. nur letzte 24 Monate |

---

## Datenschutz & Nutzung der Zitate

- **Reviewer-Namen** nur zur Deduplizierung verwenden, nicht in den Output übernehmen. Im Anhang reicht die Review-ID.
- **Zitate als Testimonial** auf einer Website oder in Ads nur anonymisiert oder mit Einverständnis der Verfasser einsetzen. Die Wording-Bank ist in erster Linie Sprach-Rohmaterial für eigene Formulierungen.

---

## Pragmatik-Regel

Wenn das Scraping in mehr als 2 Versuchen scheitert (Selektor-Drift, Captcha, Layout-Variante):

> "Das Scraping geht manuell schneller. Empfehlung: (a) Reviews via [Outscraper](https://outscraper.com) oder [Apify Google Maps Reviews Scraper](https://apify.com/compass/Google-Maps-Reviews-Scraper) für ein paar Euro-Cent als CSV exportieren, (b) CSV/JSON hier abgeben, ich fahre dann ab Schritt 2 fort. Soll ich den Skill so umstellen?"

Nicht endlos debuggen. Zeit > Vollautomatisierung.

---

## Verbindung zu anderen Skills

- **Output fließt in:** die Skills `copywriting`, `advertorial-struktur` und `b2b-positioning` (Voice of Persona, Pains), ebenfalls in diesem Repository
- **Triangulation empfohlen mit:** Kundeninterviews, Sales-Calls oder Workshops — Reviews zeigen *was Kunden sagen, nachdem sie gekauft haben*, Interviews und Workshops zeigen *wie sie vor dem Kauf denken*. Beide kombiniert ergeben das volle Bild.
- **Wenn Käufer und Nutzer verschiedene Personen sind** (z. B. Senior Care: Kinder entscheiden, Eltern nutzen): Reviews sind hier besonders wertvoll, weil Decider und User verschiedene Vokabulare haben — Reviewer-Identifikation im Persona-Block ist dann kritisch.
