"use client";

import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SectionHeading } from "./SectionHeading";
import { RegistrationScrollDecor } from "./RegistrationScrollDecor";
import { RegistrationResultModal } from "./RegistrationResultModal";

const MIN_LOADING_MS = 600;
const MAX_LOADING_MS = 3000;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [faceitNickname, setFaceitNickname] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalPhase, setModalPhase] = useState<"loading" | "success" | null>(
    null,
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setModalPhase("loading");

    const startedAt = Date.now();

    try {
      await addDoc(collection(db, "registrations"), {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        faceitNickname: faceitNickname.trim(),
        createdAt: serverTimestamp(),
      });

      const elapsed = Date.now() - startedAt;
      const targetDuration = Math.min(
        Math.max(elapsed, MIN_LOADING_MS),
        MAX_LOADING_MS,
      );
      if (elapsed < targetDuration) {
        await wait(targetDuration - elapsed);
      }

      setModalPhase("success");
      setStatus("idle");
    } catch {
      setModalPhase(null);
      setStatus("error");
      setErrorMessage(
        "Odeslání se nezdařilo. Zkontroluj připojení a zkus to znovu.",
      );
    }
  };

  const closeModal = () => setModalPhase(null);

  return (
    <RegistrationScrollDecor>
      {modalPhase && (
        <RegistrationResultModal phase={modalPhase} onClose={closeModal} />
      )}

      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="Registrace"
          title="Přihláška do turnaje"
          description="Vyplň formulář — po odeslání ti ukážeme, jak se přihlásit do turnaje na FACEIT."
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-6 border border-accent/25 bg-bg-card/80 p-8 clip-gaming glow-accent backdrop-blur-sm"
        >
          <div>
            <label
              htmlFor="fullName"
              className="heading-display block text-sm tracking-wider text-accent"
            >
              Jméno a příjmení *
            </label>
            <input
              id="fullName"
              type="text"
              required
              minLength={2}
              maxLength={120}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={status === "loading"}
              className="mt-2 w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-accent clip-gaming-sm disabled:opacity-50"
              placeholder="Jan Novák"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="heading-display block text-sm tracking-wider text-accent"
            >
              E-mail *
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="mt-2 w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-accent clip-gaming-sm disabled:opacity-50"
              placeholder="jan@email.cz"
            />
          </div>

          <div>
            <label
              htmlFor="faceitNickname"
              className="heading-display block text-sm tracking-wider text-accent-bright"
            >
              FACEIT nickname * (povinné)
            </label>
            <input
              id="faceitNickname"
              type="text"
              required
              minLength={2}
              maxLength={64}
              value={faceitNickname}
              onChange={(e) => setFaceitNickname(e.target.value)}
              disabled={status === "loading"}
              className="mt-2 w-full border border-accent/40 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-accent-bright focus:shadow-[0_0_12px_rgba(255,184,0,0.2)] clip-gaming-sm disabled:opacity-50"
              placeholder="tvuj_faceit_nick"
            />
          </div>

          {status === "error" && (
            <p className="rounded border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full cursor-pointer border-0 bg-accent py-4 heading-display text-lg tracking-wider text-black shadow-[0_0_24px_rgba(255,184,0,0.35)] clip-gaming transition-all hover:bg-accent-bright hover:shadow-[0_0_32px_rgba(255,215,0,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Odesílám…" : "Odeslat přihlášku"}
          </button>
        </form>
      </div>
    </RegistrationScrollDecor>
  );
}
