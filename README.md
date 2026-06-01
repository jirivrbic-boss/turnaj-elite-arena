# CS2 1vs1 Turnaj — ELITE GAME ARENA

Landing page a registrace pro CS2 1vs1 turnaj v Karlových Varech.

## Spuštění

```bash
npm install
npm run dev
```

- Web: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Firebase

1. V [Firebase Console](https://console.firebase.google.com/) otevři projekt `elite-arena-tournament-88132`.
2. Zapni **Firestore Database** (production mode).
3. Nasazení rules:

```bash
npm install -g firebase-tools
firebase login
firebase use elite-arena-tournament-88132
firebase deploy --only firestore:rules
```

## Odkaz na turnaj (FACEIT)

Uprav v `src/lib/tournament.ts`:

- `FACEIT_TOURNAMENT_URL`
- `FACEIT_TOURNAMENT_LINK_LABEL`

## Obrázky

Placeholdery a logo jsou v `public/fotky/`. Po dodání finálních fotek je nahraď a u granátů spusť:

```bash
python3 scripts/process-grenade-images.py
```

## Struktura

- `/` — landing page + přihláška
- `/admin` — přehled přihlášek (bez přihlášení)

## Repozitář

[github.com/jirivrbic-boss/turnaj-elite-arena](https://github.com/jirivrbic-boss/turnaj-elite-arena)
