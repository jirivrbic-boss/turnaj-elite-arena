"use client";

import { useState, type FormEvent } from "react";
import type { Registration } from "@/lib/types";

type RegistrationEditModalProps = {
  registration: Registration;
  saving: boolean;
  onSave: (data: {
    fullName: string;
    email: string;
    faceitNickname: string;
  }) => void;
  onClose: () => void;
};

export function RegistrationEditModal({
  registration,
  saving,
  onSave,
  onClose,
}: RegistrationEditModalProps) {
  const [fullName, setFullName] = useState(registration.fullName);
  const [email, setEmail] = useState(registration.email);
  const [faceitNickname, setFaceitNickname] = useState(registration.faceitNickname);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      faceitNickname: faceitNickname.trim(),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-registration-title"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border border-accent/30 bg-bg-card p-6 clip-gaming-sm"
      >
        <h2
          id="edit-registration-title"
          className="heading-display text-xl text-white"
        >
          Upravit přihlášku
        </h2>

        <div className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="edit-fullName"
              className="heading-display block text-xs tracking-wider text-accent"
            >
              Jméno a příjmení
            </label>
            <input
              id="edit-fullName"
              required
              minLength={2}
              maxLength={120}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full border border-white/15 bg-black px-3 py-2 text-white outline-none focus:border-accent"
            />
          </div>
          <div>
            <label
              htmlFor="edit-email"
              className="heading-display block text-xs tracking-wider text-accent"
            >
              E-mail
            </label>
            <input
              id="edit-email"
              type="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-white/15 bg-black px-3 py-2 text-white outline-none focus:border-accent"
            />
          </div>
          <div>
            <label
              htmlFor="edit-faceit"
              className="heading-display block text-xs tracking-wider text-accent"
            >
              FACEIT nickname
            </label>
            <input
              id="edit-faceit"
              required
              minLength={2}
              maxLength={64}
              value={faceitNickname}
              onChange={(e) => setFaceitNickname(e.target.value)}
              className="mt-1 w-full border border-white/15 bg-black px-3 py-2 text-white outline-none focus:border-accent"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-accent py-2.5 heading-display text-sm tracking-wider text-black disabled:opacity-50"
          >
            {saving ? "Ukládám…" : "Uložit"}
          </button>
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="flex-1 border border-white/20 py-2.5 text-sm text-text-muted hover:text-white disabled:opacity-50"
          >
            Zrušit
          </button>
        </div>
      </form>
    </div>
  );
}
