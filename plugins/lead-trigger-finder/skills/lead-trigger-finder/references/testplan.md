# Testplan

Die wichtigste offene Frage bei jedem neuen Trigger: **Bringt er bessere Leads oder nur mehr?** Ein mehrstufiger Funnel kann die Lead-Zahl heben und gleichzeitig die Termin- oder Abschlussquote senken. Deshalb wird bis zum Termin oder Abschluss gemessen, nicht nur bis zum Formular.

## Typische Testfragen

- **Gate-Position:** Ergebnis vor oder nach der Kontaktabfrage (siehe wert-leiter.md)?
- **E-Mail-Zwischenstufe:** Bringt ein Ratgeber oder ein Ergebnis per Mail zusätzliche Termine, oder kannibalisiert er den Direktkontakt?
- **Rückruf gegen Terminbuchung:** Steigt die Quote gehaltener Termine, wenn Nutzer:innen den Slot selbst wählen?
- **Pflichtfelder:** Telefon Pflicht und E-Mail optional, oder umgekehrt? Mit der Zielgruppe entscheiden, nicht mit der Gewohnheit.
- **CTA-Anlass:** „Angebot anfordern“ gegen einen konkreten Nutzen („kostenlos probetragen“, „Kosten in 2 Minuten“).

## Bausteine

**Hypothese** im Format: *Wenn wir [Änderung] für [Zielgruppe/Seite], dann steigt [Metrik], weil [Begründung aus der Analyse].*

**Varianten:** Kontrolle (heutiger Weg) gegen genau eine Änderung. Mehrere Änderungen gleichzeitig nur, wenn die Frage „neuer Funnel gegen alten“ lautet, und dann so benennen.

**Metriken**

| Rolle | Metrik | Warum |
|---|---|---|
| primär | Anteil Besucher:innen mit **gehaltenem Termin** (oder qualifiziertem Lead nach Vertriebsdefinition) | misst Qualität und Menge zusammen |
| sekundär | Lead-Rate, Abschlussrate je Stufe, Zeit bis Erstkontakt | zeigt, wo der Funnel bricht |
| Leitplanke | No-Show-Rate, Anteil unbrauchbarer Leads, Absprungrate auf der Einstiegsseite | darf nicht schlechter werden |
| später | Angebot → Abschluss, Umsatz je Lead | Validierung nach Wochen bis Monaten |

**Lead-Herkunft im CRM:** Jede Anfrage bekommt die Variante und die Stufe mit, auf der sie entstand (z. B. versteckte Felder, UTM, Event-Parameter). Ohne das lässt sich Qualität nie auswerten.

## Stichprobe und Laufzeit

Faustregel für 80 % Power und 5 % Signifikanz (zweiseitig), je Variante:

```
n ≈ 16 · p · (1 − p) / δ²
```

`p` = heutige Quote der primären Metrik, `δ` = absolute Differenz, die erkannt werden soll.

*Beispiel:* 3 % Lead-Rate, erkannt werden soll eine relative Steigerung um 20 % (δ = 0,6 Prozentpunkte): n ≈ 16 · 0,03 · 0,97 / 0,006² ≈ 12.900 Besucher:innen je Variante.

Wird auf gehaltene Termine gemessen, ist `p` kleiner und `n` größer. Reicht der Traffic nicht:

- auf einen früheren Proxy messen (z. B. gebuchter Termin) und Qualität danach im CRM nachverfolgen,
- größere Effekte anpeilen (mutigere Variante),
- oder einen zeitlich versetzten Vorher-nachher-Vergleich mit klarer Einschränkung berichten.

Mindestens zwei volle Wochen laufen lassen (Wochentags-Effekte), auch wenn die Stichprobe früher erreicht ist.

## Abbruchkriterium

Vorher festlegen, z. B.: „Fällt die Termin-Quote der Variante nach der halben Stichprobe um mehr als 30 % relativ unter die Kontrolle, stoppen wir.“

## Vorlage

| Feld | Inhalt |
|---|---|
| Hypothese | |
| Kontrolle | |
| Variante | |
| Primäre Metrik | |
| Sekundär / Leitplanken | |
| Tracking (Variante + Stufe im CRM) | |
| Benötigte Stichprobe je Variante | |
| Geplante Laufzeit | |
| Abbruchkriterium | |
| Entscheidung, wenn gewonnen / verloren / unklar | |
