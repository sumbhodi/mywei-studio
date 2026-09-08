# Handoff — 8 Sep 2026, before compaction

Read this and `NOTES-source.md` before touching `cards.js`.

---

## ⭐ THE HISTORY CARD — this is the next build, in his words

⚠ **THE TIMELINE IS DONE. DO NOT REBUILD IT.** He said so plainly: *"no this isn't timeline, that
is done, this is history card."* The timeline is the dated skeleton. **The HISTORY card is the
story told through** — the scroll that opens from the rolled-scroll door below the parchment.

So this is a narrative, read start to finish, not a set of pins. It has a turn in it, and the turn
is the best thing in the whole course.

**The beats, in order — this is the shape of the history lecture:**

1. **Ohm.** The Brahma bull, Vishnu's dream starting.
2. **Shiva getting busy with Parvati.** The first lesson.
3. **Siddhartha.** His compression, and it is a good one: **"Buddhism is Yoga II."**
4. **The Sutras.**
5. **The early texts** — Vedas, Upanishads. A side note on Sid, not a chapter.
6. **THE TURN — and this is the part that is not on the site yet.**
7. **The propaganda tour.**
8. **Then the fetishism of the East.**

### ⭐⭐ THE TURN — modern yoga starts with Indians making fun of white people

His words, and they reframe the whole modern half:

> *"Modern yoga starts with Indians making fun of white people. Stiff shirts, stiff backs and
> chairs. You can't dance like this. You wish you looked this good."*

- **Bright, loose, comfortable clothing against starched colonial shirts.** It is a style argument
  before it is a spiritual one, and it is anti-colonial by being *better looking and more fun*.
- **The dance.** The performance lineage that runs forward into Bollywood.
- This is the revival, and it starts as **mockery and display**, not piety.

### ⭐ AND THE ECONOMIC ENGINE, which is the honest bit

> *"Late 1800s, street hustle basically, for the untouchable class, to beg money from tourists.
> All but dies by 1850, but the tourist trade basically revives it, as performative."*

**This is the missing mechanism.** The timeline has these as separate dated facts; the history
card is where they become one story. It explains four things at once:

- why **hatha is tagged lowest caste** in his 2015 doc — it was street performers and beggars
- why the revival was **performative** — because the paying audience was tourists
- why the **mat arrives as a prop** — a clean stage on a dirty market floor
- why the whole thread runs *exhibition → propaganda tour → Bikram's podium* without a break

⚠ **Do not soften this into "yoga was popularised by tourism."** The claim is sharper: a practice
assigned to the bottom of the caste order survived as a hustle, performed for foreigners with
money, and that performance is what got revived — not the philosophy.

---

## What is already built and correct

- **Six columns, 38 dates, 12 cards.** Every date is a door; era heads open era cards.
- Ticks are **derived from `rows`** — never re-add a parallel `ticks:[]` array. Three of six lost
  theirs once and rendered blank on the axis.
- Row cards carry `h · sub · lead · doors · body`. `doors` renders as date/thing pairs.
- The mat card is date/thing pairs and he approved it.
- **SAMADHI** carries his psychiatric and housing history at his explicit request, with his
  guardrail line. Rules for editing it are written at the top of the card in `cards.js`.
- The exhibit card and the Bikram podium card are in, with the through-line between them.

## Open

- **THE HISTORY CARD ITSELF** — the narrative above. It is the next thing to build.
- **The six branches** and **the eight limbs** as their own scrolls. Both docs are ready in Drive
  and summarised in `NOTES-source.md`. The caste tags in the branches doc are the sharpest thing
  he has written for this course, and the timeline now points at a card that does not exist.
- **His ashtanga story and the record disagree.** He knows. His telling: white men in the fifties
  trademarked it. The record: KPJAYI filed 2010, held by Sharath Jois, pushed with American money.
  He said *"our stories disagree, but we have the highlights"* — do not keep re-litigating it.
- More of his writing is in Google Docs. `History of Meditation`, `A Meditation on Meditation`,
  `A Brief History of Nothing` are read and summarised. There is more he has not pointed at yet.
- He said to **skip the purely Buddhist meditation-as-religion material** and keep to yoga.

---

## ⚠ HOW TO EDIT `cards.js` — I broke it three times in one evening

All three breaks were the same mistake: patching a live file with string surgery, blind, one
character at a time, without checking.

**The rule now:** build the whole change, write it to a temp file, run `node --check` on the temp
file, and only then move it into place. Never write `cards.js` directly.

```bash
python3 build.py > /tmp/cards_new.js && node --check /tmp/cards_new.js && cp /tmp/cards_new.js cards.js
```

⚠ **And his standing correction, which I earned four separate times tonight: when he says GO BACK,
use git.** Do not "restore" by retyping from memory, and do not bundle an improvement into a
revert. `git checkout <hash> -- cards.js` is the whole move. If he then asks for one line changed,
change one line — and diff it to prove it was one.

---

## Where the repo is

`~/Documents/mywei/studio` · git initialised, everything committed.

| tag | what |
|---|---|
| `joy-yoga-2026-09-08` | the yoga lesson |
| `joy-timeline-2026-09-08` | the timeline set into the roots at the notch depth |
| `joy-timeline-columns` | five columns, ticks on the measured axis |

Serve it with the `studio` config in `.claude/launch.json` — `http://localhost:8791`.

**Two measurements that must not be re-guessed**, both read off the art and both written into CSS
comments: the parchment's deepest notch is **4.33% of width** (the overlap onto the roots), and the
drawn axis rule sits at **8.58% of height** (where ticks hang from).
