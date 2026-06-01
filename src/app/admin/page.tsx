"use client";

import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import Link from "next/link";
import { RegistrationEditModal } from "@/components/admin/RegistrationEditModal";
import { FaceitPlayerLink } from "@/components/FaceitPlayerLink";
import { db } from "@/lib/firebase";
import type { Registration } from "@/lib/types";

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<Registration | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, "registrations"),
      orderBy("createdAt", "desc"),
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data: Registration[] = snapshot.docs.map((docSnap) => {
          const d = docSnap.data();
          return {
            id: docSnap.id,
            fullName: d.fullName ?? "",
            email: d.email ?? "",
            faceitNickname: d.faceitNickname ?? "",
            createdAt:
              d.createdAt instanceof Timestamp
                ? d.createdAt.toDate()
                : null,
          };
        });
        setRegistrations(data);
        setLoading(false);
        setError(null);
      },
      () => {
        setError(
          "Nepodařilo se načíst přihlášky. Zkontroluj Firestore rules a index.",
        );
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const handleSaveEdit = async (data: {
    fullName: string;
    email: string;
    faceitNickname: string;
  }) => {
    if (!editing) return;

    setSaving(true);
    setActionError(null);

    try {
      const ref = doc(db, "registrations", editing.id);
      const snap = await getDoc(ref);
      const existingCreatedAt = snap.data()?.createdAt;

      if (!(existingCreatedAt instanceof Timestamp)) {
        setActionError("Nelze upravit — chybí čas registrace u záznamu.");
        return;
      }

      await updateDoc(ref, {
        fullName: data.fullName,
        email: data.email,
        faceitNickname: data.faceitNickname,
        createdAt: existingCreatedAt,
      });
      setEditing(null);
    } catch {
      setActionError("Úpravu se nepodařilo uložit.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (reg: Registration) => {
    const confirmed = window.confirm(
      `Opravdu smazat přihlášku od ${reg.fullName} (${reg.faceitNickname})?`,
    );
    if (!confirmed) return;

    setDeletingId(reg.id);
    setActionError(null);

    try {
      await deleteDoc(doc(db, "registrations", reg.id));
    } catch {
      setActionError("Smazání se nezdařilo.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {editing && (
        <RegistrationEditModal
          registration={editing}
          saving={saving}
          onSave={handleSaveEdit}
          onClose={() => !saving && setEditing(null)}
        />
      )}

      <header className="border-b border-accent/20 bg-bg-card/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="heading-display text-2xl text-white">
              Admin · Přihlášky
            </h1>
            <p className="text-sm text-text-muted">
              Živý přehled registrací z Firestore
            </p>
          </div>
          <Link
            href="/"
            className="clip-gaming-sm border border-accent/30 px-4 py-2 heading-display text-sm tracking-wider text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            ← Zpět na web
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <div className="border border-accent/40 bg-accent/10 px-5 py-3 clip-gaming-sm shadow-[0_0_20px_rgba(255,184,0,0.1)]">
            <span className="heading-display text-3xl text-accent text-glow-accent">
              {registrations.length}
            </span>
            <span className="ml-2 text-sm text-text-muted">přihlášek celkem</span>
          </div>
          <span className="flex items-center gap-2 text-sm text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_8px_#ffb800]" />
            Real-time sync
          </span>
        </div>

        {actionError && (
          <p className="mb-4 rounded border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {actionError}
          </p>
        )}

        {loading && <p className="text-text-muted">Načítám přihlášky…</p>}

        {error && (
          <p className="rounded border border-red-500/50 bg-red-500/10 px-4 py-3 text-red-300">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto border border-accent/20 clip-gaming-sm">
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-accent/20 bg-bg-elevated">
                  <th className="px-4 py-4 heading-display text-xs tracking-wider text-accent">
                    #
                  </th>
                  <th className="px-4 py-4 heading-display text-xs tracking-wider text-accent">
                    Jméno
                  </th>
                  <th className="px-4 py-4 heading-display text-xs tracking-wider text-accent">
                    E-mail
                  </th>
                  <th className="px-4 py-4 heading-display text-xs tracking-wider text-accent-bright">
                    FACEIT
                  </th>
                  <th className="px-4 py-4 heading-display text-xs tracking-wider text-text-muted">
                    Registrace
                  </th>
                  <th className="px-4 py-4 heading-display text-xs tracking-wider text-text-muted">
                    Akce
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-12 text-center text-text-muted"
                    >
                      Zatím žádné přihlášky.
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg, index) => (
                    <tr
                      key={reg.id}
                      className="border-b border-white/5 transition-colors hover:bg-accent/[0.03]"
                    >
                      <td className="px-4 py-3 text-text-muted">
                        {registrations.length - index}
                      </td>
                      <td className="px-4 py-3 font-medium text-white">
                        {reg.fullName}
                      </td>
                      <td className="px-4 py-3 text-text-muted">{reg.email}</td>
                      <td className="px-4 py-3">
                        <FaceitPlayerLink
                          nickname={reg.faceitNickname}
                          className="heading-display font-semibold text-accent"
                        />
                      </td>
                      <td className="px-4 py-3 text-text-muted">
                        {reg.createdAt
                          ? reg.createdAt.toLocaleString("cs-CZ", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })
                          : "—"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setActionError(null);
                              setEditing(reg);
                            }}
                            className="border border-accent/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:bg-accent/10"
                          >
                            Upravit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(reg)}
                            disabled={deletingId === reg.id}
                            className="border border-red-500/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
                          >
                            {deletingId === reg.id ? "Mažu…" : "Smazat"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
