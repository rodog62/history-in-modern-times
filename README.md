# History in Modern Times

Prototype site for **Dr. Tim Crain** — lecture series (primary) and historical tours (separate). Domain: [history-in-modern-times.com](https://history-in-modern-times.com).

Built for Rohan to iterate with Tim. Copy, portrait, prices, and lecture files are placeholders until Tim sends the official script, photo, and videos.

## What’s in this prototype

- Navy / off-white / muted gold palette (Tim’s brief)
- Homepage with a **sample lecture** player
- Lecture catalog with per-series paywall (purchase is a waitlist + preview unlock until checkout is wired)
- Tours as a second, independent section (Ireland recruiting; Milwaukee waitlist)
- About page drafted from public biographical notes (Marquette, ASU, NCCHE, Milwaukee lectures)
- Contact / inquiry form

## Swap-in checklist (when Tim sends files)

1. Portrait → `public/images/portrait.jpg` and the About figure
2. Homepage script → hero copy in `src/routes/index.tsx` and `src/lib/content.ts`
3. Sample lecture video → replace `public/videos/sample-lecture.mp4`
4. Series / episode copy and prices → `src/lib/content.ts`
5. Real checkout (Stripe) and email later

## Local

```bash
npm install
npm run dev
```
