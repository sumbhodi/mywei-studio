# Handoff — 8 Sep 2026

Read this and `NOTES-source.md` before touching anything.
Current joy state: **`joy-2026-09-08`** (`7ad65b1`). `git checkout joy-2026-09-08 -- .` to return.

---

## What is BUILT and finished. Do not rebuild these.

| | |
|---|---|
| **the tree** | the art, three words, the arrow |
| **four philosophy scrolls** | YOGA · ATMAN · BRAHMAN · SAMADHI |
| **the timeline** | six columns, 40 dated doors, floored 900px, capped 1400px |
| **the history lecture** | 52 paragraphs, Om to the bagel |

⚠ **THE TIMELINE IS DONE** and so is **THE HISTORY CARD**. He said the first one plainly and the
second was finished at `186ce73`/`a31d53d`. The timeline is the dated skeleton; the history card is
the story told through it. Two different objects, both complete.

---

## What is actually OPEN

- **THE SIX BRANCHES** and **THE EIGHT LIMBS**, each as its own scroll. Both his docs are read and
  summarised in `NOTES-source.md`. The branches doc is the important one — it tags every branch by
  caste in his own 2015 hand, and the timeline and history card already point at that argument
  without a card to land on.
- More of his writing is in Google Docs; three are read (`History of Meditation`,
  `A Meditation on Meditation`, `A Brief History of Nothing`). There is more he has not pointed at.
- He said to **skip the purely Buddhist meditation-as-religion material** and stay on yoga.
- Nothing is deployed. `mywei.studio` is still parked on Squarespace DNS. Local only, his word
  required before anything goes live.

---

## ⭐ THE SPINE — his story, in his words. It is the reason the site works.

The through-line, and he arrived at it himself across the evening:

> **The practice gets sorted three times, and it is the same practice every time.** Caste put it at
> the bottom. Colonial taste made it embarrassing. Money made it a luxury. And the branch assigned
> to the lowest caste is the one that conquered the world — and then got expensive.

**THE TURN** — modern yoga starts with **Indians making fun of white people**. Stiff shirts, stiff
backs, chairs. Bright loose clothing against starched collars. *You can't dance like this. You wish
you looked this good.* A style argument before a spiritual one.

**THE ENGINE** — by 1850 hatha had all but died. Late-1800s **street hustle by the untouchable
class, performing for tourist coins**, kept it alive, and **the tourist trade revived it AS
PERFORMANCE**, not as philosophy. That one mechanism explains the lowest-caste tag, the mat as a
prop, and the unbroken line from exhibition hall to Bikram's podium.

**HIS FRAME, which closes the history card** — he teaches a colonial gym routine as performance
art. *Look at me, look at what I can do* is a real part of yoga, **neither diminished nor
indulged**. Then cognitive science and meditation beside it. The asana is honest about being a
show; the rest is not a show.

---

## ⚠ HOW TO WORK ON THIS — four rules, all of them earned tonight

**1 · Never write `cards.js` directly.** Build the whole change, write it to a temp file, run
`node --check` on the temp file, and only then move it into place. I broke the file three times in
one evening patching it live with blind string surgery.

```bash
python3 build.py > /tmp/cards_new.js && node --check /tmp/cards_new.js && cp /tmp/cards_new.js cards.js
```

**2 · GO BACK means git.** Do not "restore" by retyping from memory, and never bundle an
improvement into a revert. `git checkout <hash> -- .` is the whole move. If he then asks for one
line changed, change one line and diff it to prove it was one. I got this wrong four separate times
and he had to say it four times.

**3 · Check the instrument before believing a defect.** He reported horizontal overflow; I walked
back three commits chasing it. The overflow measured **exactly 123px at every commit** — identical
at `d7991df`, `526057c` and HEAD — which was the giveaway. Nothing in the code had changed. **I had
left the browser emulating a 620px viewport** during earlier testing. Reset the emulation before
concluding anything about layout.

**4 · Do the smallest thing he asked for.** He asked for a min-width; I built an `overflow-x`
wrapper and a media query around it, and that version made the whole page slide sideways on a
phone. The answer was one property.

---

## Measurements that must not be re-guessed

All read off the art, all written into CSS comments at the site of use:

- **4.33% of width** — the parchment's deepest notch, which is how far the timeline overlaps the
  roots. Any more eats root; any less shows page through the tear.
- **8.58% of height** — the axis rule drawn into `timeline.png`, the only row that is 100% ink
  across the full width. Ticks hang from there. They were at 5.4% once, floating in the year-label
  band above the line.
- **`min(1vw, 1.3393vh)`** — one percent of the stage. The stage is height-bound on a wide short
  window; the words were width-bound in plain `vw`, so the picture shrank while ATMAN and BRAHMAN
  grew and met in the middle. The font must scale off the same quantity the stage does.
- **900px floor / 1400px ceiling** on the timeline. Six columns of dates do not compress; below
  ~900 they slide into each other.

## Structure rules

- **Ticks are DERIVED from `rows`.** Never re-add a parallel `ticks:[]` array — three of six eras
  lost theirs in a restructure once and rendered blank on the axis while the data looked fine.
- Row cards carry `h · sub · lead · doors · body`. **All five must be passed through** in the
  date-row path; it once built from `h/sub/body` only and tables silently vanished.
- The click handler must match **both** `[data-scroll]` and `[data-row]`. Matching only the first
  made every date on the timeline inert while looking perfectly built.
- **SAMADHI** carries his psychiatric and housing history at his explicit request. The editing
  rules are written at the top of that card in `cards.js` — it is a credential, not a confession,
  and his guardrail line travels with it always.

---

## Where it lives

`~/Documents/mywei/studio` · git initialised, everything committed, working tree clean.
Serve with the `studio` config in `.claude/launch.json` → `http://localhost:8791`.

Tags: `joy-2026-09-08` (current) · `joy-2026-09-08-restored` · `joy-history-2026-09-08` ·
`joy-timeline-2026-09-08` · `joy-timeline-columns` · `joy-yoga-2026-09-08`
