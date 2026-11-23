"use client";

import { useState } from "react";

type Status = "offen" | "in_arbeit" | "erledigt";

type Projekt = {
  id: string;
  slug: string;
  name: string;
  status: Status;
  rolle: "owner" | "viewer";
  offeneAufgaben: number;
  budget: number;
  aktualisiert: string; // ISO-Zeitstempel
};

const projekte: Projekt[] = [
  { id: "prj_8f3a2", slug: "website-relaunch", name: "Website-Relaunch", status: "in_arbeit", rolle: "owner", offeneAufgaben: 4, budget: 12500, aktualisiert: "2026-11-20T14:03:11Z" },
  { id: "prj_1c77e", slug: "newsletter-q1", name: "Newsletter Q1", status: "offen", rolle: "viewer", offeneAufgaben: 7, budget: 3200, aktualisiert: "2026-11-18T09:41:55Z" },
  { id: "prj_93bd0", slug: "messestand-2027", name: "Messestand 2027", status: "erledigt", rolle: "owner", offeneAufgaben: 0, budget: 48000, aktualisiert: "2026-10-02T16:20:00Z" },
];

const statusFarbe: Record<Status, string> = {
  offen: "border-gray-300 bg-white",
  in_arbeit: "border-yellow-400 bg-yellow-50",
  erledigt: "border-green-500 bg-green-50",
};

const statusBadge: Record<Status, string> = {
  offen: "bg-gray-200 text-gray-800",
  in_arbeit: "bg-yellow-300 text-yellow-900",
  erledigt: "bg-green-600 text-white",
};

const statusIcon: Record<Status, string> = {
  offen: "○",
  in_arbeit: "◐",
  erledigt: "✓",
};

export default function Projektuebersicht() {
  const [zeigeTour, setZeigeTour] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [zuLoeschen, setZuLoeschen] = useState<Projekt | null>(null);

  function anlegen() {
    setToast("Projekt erfolgreich angelegt! 🎉");
    setName("");
    setBudget("");
  }

  return (
    <main className="mx-auto max-w-[1200px] p-8">
      {zeigeTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[480px] rounded-[18px] bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-blue-600">Schritt 1 von 4</p>
            <h2 className="mt-2 text-2xl font-semibold">Willkommen im neuen Kundenportal!</h2>
            <p className="mt-3 text-gray-600">
              In dieser kurzen Tour zeigen wir Dir, wie Du Deine Projekte verwaltest, Aufgaben im Blick behältst und
              Dein Team einlädst.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-blue-600 px-5 py-2 text-white" onClick={() => setZeigeTour(false)}>
                Tour starten
              </button>
              <button className="rounded-full bg-red-600 px-5 py-2 text-white" onClick={() => setZeigeTour(false)}>
                Überspringen
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed right-6 top-6 rounded-lg bg-green-600 px-4 py-3 text-white shadow-lg">{toast}</div>
      )}

      <p className="text-xs uppercase tracking-widest text-blue-600">Dashboard</p>
      <h1 className="mt-1 text-[34px] font-bold">Willkommen zurück, Anna! 👋</h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        Hier siehst Du alle Deine Projekte auf einen Blick. Klicke auf „Details“, um mehr über ein Projekt zu erfahren,
        oder lege oben rechts ein neues Projekt an. Die Farbe zeigt Dir den Status.
      </p>

      <div className="mt-6 flex gap-3">
        <button className="rounded-full bg-blue-600 px-5 py-2 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
          Neues Projekt
        </button>
        <button className="rounded-full bg-blue-600 px-5 py-2 text-white">Exportieren (CSV)</button>
        <button className="rounded-full bg-blue-600 px-5 py-2 text-white">Team einladen</button>
      </div>

      <section className="mt-8 grid grid-cols-4 gap-4">
        <div className="rounded-[18px] bg-white p-5">
          <p className="text-sm text-gray-500">Projekte gesamt</p>
          <p className="text-3xl font-semibold">3</p>
        </div>
        <div className="rounded-[18px] bg-white p-5">
          <p className="text-sm text-gray-500">Gesamtbudget</p>
          <p className="text-3xl font-semibold">63.700 €</p>
        </div>
        <div className="rounded-[18px] bg-white p-5">
          <p className="text-sm text-gray-500">Letzter Login</p>
          <p className="text-3xl font-semibold">Heute</p>
        </div>
        <div className="rounded-[18px] bg-white p-5">
          <p className="text-sm text-gray-500">Offene Aufgaben</p>
          <p className="text-3xl font-semibold">11</p>
        </div>
      </section>

      <section className="mt-8">
        <p className="text-xs uppercase tracking-widest text-gray-500">Übersicht</p>
        <h2 className="text-2xl font-semibold">Deine Projekte</h2>
        <p className="text-gray-600">Alle Projekte, auf die Du Zugriff hast.</p>

        <ul className="mt-4 space-y-3">
          {projekte.map((p) => (
            <li key={p.id} className={`rounded-[14px] border-2 p-5 ${statusFarbe[p.status]}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">
                    {statusIcon[p.status]} {p.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    ID: {p.id} · Slug: {p.slug} · Rolle: {p.rolle}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs ${statusBadge[p.status]}`}>{p.status}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Status: {p.status.replace("_", " ")}</p>
              <div className="mt-3 flex items-center gap-6 text-sm">
                <span>Offene Aufgaben: {p.offeneAufgaben}</span>
                <span>Budget: {p.budget} EUR</span>
                <span>Aktualisiert: {p.aktualisiert}</span>
              </div>
              <div className="mt-3 flex gap-3">
                <a href={`/projekte/${p.slug}`} className="text-sm text-blue-600 underline">
                  Details →
                </a>
                <button className="text-sm text-red-600 underline" onClick={() => setZuLoeschen(p)}>
                  Löschen
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-[18px] bg-white p-6">
        <p className="text-xs uppercase tracking-widest text-gray-500">Schnellstart</p>
        <h2 className="text-2xl font-semibold">Neues Projekt anlegen</h2>
        <p className="mt-1 text-gray-600">
          Fülle alle Felder aus, um ein neues Projekt anzulegen. Der Button wird aktiv, sobald alle Pflichtfelder
          ausgefüllt sind. Das Budget gibst Du in Euro ohne Punkt an.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
            className="rounded-[10px] border p-3"
            placeholder="Projektname*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="rounded-[10px] border p-3"
            placeholder="Budget in EUR*"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div className="mt-4 flex gap-3">
          <button
            className="rounded-full bg-blue-600 px-5 py-2 text-white disabled:bg-gray-300"
            disabled={!name || !budget}
            onClick={anlegen}
          >
            Projekt anlegen
          </button>
          <button className="rounded-full bg-red-600 px-5 py-2 text-white" onClick={() => { setName(""); setBudget(""); }}>
            Abbrechen
          </button>
        </div>
      </section>

      {zuLoeschen && (
        <div role="dialog" aria-modal="true" aria-labelledby="loeschen-titel" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[420px] rounded-[18px] bg-white p-6">
            <h2 id="loeschen-titel" className="text-xl font-semibold">„{zuLoeschen.name}“ endgültig löschen?</h2>
            <p className="mt-2 text-gray-600">Alle Aufgaben und Dateien des Projekts gehen verloren.</p>
            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-red-600 px-5 py-2 text-white" onClick={() => setZuLoeschen(null)}>
                Endgültig löschen
              </button>
              <button className="rounded-full border px-5 py-2" onClick={() => setZuLoeschen(null)}>
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
