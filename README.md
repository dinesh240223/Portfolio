# DINESH — Cybersecurity & Web Developer Portfolio

A static React + Vite portfolio built from the original portfolio concept and redesigned with a cinematic dark/Netflix-inspired visual language.

## Included
- DINESH — Cybersecurity & Web Developer hero/profile
- About, education, skills and mentoring sections
- Projects: Little Steps, Financial Habit Tracker, ArtBloom, CamHacker, EV Cyber Defense Lab, EV BANK Security Lab
- Cyber Missions flow: PortSwigger → Access Control Vulnerabilities → completed lab → evidence screenshot
- 9 supplied PortSwigger evidence screenshots stored locally in `public/assets/evidence/`
- Offensive and defensive security report links
- Hifi11, NoviTech and EV Cyber Academy credential/document cards
- GitHub, LinkedIn and email contact links
- No database, Supabase or backend required

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy
The project is Vercel-friendly. Import the repository, use `npm run build` as the build command and the generated `dist` directory as the output.

All portfolio evidence is referenced from local `public/assets` paths, so the frontend does not need a database connection.
