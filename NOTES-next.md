# Handoff — 8 Sep 2026, ~1:30am

Current joy state: **`joy-2026-09-08`**. `git checkout joy-2026-09-08 -- .` to return.

## ✅ DEPLOYED 8 Sep 2026, ~2:15am — https://mywei.studio is live

> The paragraph below was the task; kept because it says what the road was before it existed.
> **The road now:** `./deploy.sh` (his word first, each time). Cloudflare Pages project `mywei-studio`
> · zone `mywei.studio` on cecelia/chase (same pair as 0zhung) · two proxied CNAMEs (`@` and `www`)
> → `mywei-studio.pages.dev`, which he typed himself. Repo: github.com/sumbhodi/mywei-studio (public).
> ⚠ Two traps paid for tonight: (1) Cloudflare's zone import copied Squarespace's parking A rows and
> proxied their "Coming Soon" page — delete every imported row before adding the CNAMEs; (2) the
> wrangler OAuth token has `zone:read` only — it cannot create a zone or touch DNS rows, so those
> are green buttons in the dash. Adding the custom domain via the Pages API does NOT create the CNAME.

## FOR THE NEXT PASS (Opus for ideas, Fable to ship)

- **Thursday and next Tuesday are the limbs.** Same loop as 8 Sep: he pastes the class transcript,
  grep each spoken detail against `cards.js`, add the missing ones in his phrasing, `./deploy.sh` on "go".
- The limb and branch cards were a rough cut at 1am ("will clean after compact"); he has not asked yet.
  When he does, it is a read of what he actually teaches (asana, pranayama, dharana as guided meds,
  dhyana explained once then silence) against the card text, not new research.
- `docs/` snapshots go stale as he edits the Google Docs; refresh is the Drive MCP
  (`download_file_content`, `text/markdown`) into the same three filenames, then deploy.
- Phone is done and he confirmed it on his phone. Don't reopen it without a complaint.

## THE TASK AS IT STOOD — deploy to mywei.studio

He said it plainly at the end of the session: *"I will have fable speed run the post to my wei part
after compact."* That is the job. Everything below is context for it.

⚠ **`mywei.studio` is still parked on Squarespace DNS.** Nothing has ever been deployed. This is
the same road `0zhung.com` took — see the `cs1410-class-deploy-road` memory. **His word is required
before anything goes live, each time.**

---

## What is built — all of it finished, none of it needs rebuilding

| | |
|---|---|
| **the tree** | the art, ATMAN is BRAHMAN, the arrow; six branches left, eight limbs right |
| **24 cards** | four philosophy scrolls + 6 branches + 7 limbs + SAMADHI + 5 eras + the history |
| **the timeline** | six columns, 40 dated doors, floored 900px, capped 1400px |
| **the history lecture** | 52 paragraphs, Om to the bagel |
| **citations** | 57 link out; only OED and the film do not, and neither needs a URL |

**⭐ The two-column split landed the branches in caste pairs by accident and it is worth keeping:**
RAJA/JNANA both Upper · KARMA/BHAKTI both Working · TANTRA/HATHA Monastic/Lowest. His 2015 caste
tags read straight off the layout, row by row, with no explanation. The geometry made his argument.

## His three docs went public on 8 Sep and are linked from the cards

- **History of Meditation** — `docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit`
- **A Brief History of Nothing** — `docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit`
- **A Meditation on Meditation** — `docs.google.com/document/d/1cndJM7V-niKBu-TFr1r17igdgg91PljAWWqs_V376VE/edit`

⚠ **The 2015/2016 notes are NOT published and must never be cited on the page.** His rule, and it
was the last thing fixed: *"remove references to unpublished docs — my 2015 notes are the noise."*
The Six Branches, The 8 Limbs and History of Yoga are gone as citations. The branch cards now state
the caste outright rather than attributing it to a document nobody can open. **Do not put them back.**

**⚠ Some of the linked books are unfinished, and that is deliberate.** His words: *"some of the
books are unfinished, but this is my last semester, I no longer am worried — they are reading a
book in progress on Google."* Never add a disclaimer apologising for that. It is the point.

---

## ⭐ THE SPINE — his story, in his words

> **The practice gets sorted three times, and it is the same practice every time.** Caste put it at
> the bottom. Colonial taste made it embarrassing. Money made it a luxury. And the branch assigned
> to the lowest caste is the one that conquered the world — and then got expensive.

**THE TURN** — modern yoga starts with **Indians making fun of white people**. Stiff shirts, stiff
backs, chairs. Bright loose clothing against starched collars. *You can't dance like this. You wish
you looked this good.* A style argument before a spiritual one.

**THE ENGINE** — by 1850 hatha had all but died. Late-1800s **street hustle by the untouchable
class, performing for tourist coins**, kept it alive, and **the tourist trade revived it AS
PERFORMANCE**. That one mechanism explains the lowest-caste tag, the mat as a prop, and the
unbroken line from exhibition hall to Bikram's podium.

**HIS FRAME** — he teaches a colonial gym routine as performance art. *Look at me, look at what I
can do* is a real part of yoga, **neither diminished nor indulged**. Then cognitive science and
meditation beside it. The asana is honest about being a show; the rest is not a show.

---

## ⚠ FOUR WORKING RULES, all earned in one night

**1 · Never write `cards.js` directly.** Build the change, write it to a temp file, `node --check`
the temp file, then move it into place. I broke this file three times patching it live.

```bash
python3 build.py > /tmp/cards_new.js && node --check /tmp/cards_new.js && cp /tmp/cards_new.js cards.js
```

⚠ 8 Sep, same rule, new shape: **a paragraph line can end in `cite:'…', href:'…'},` and then the last
string on the line is the URL, not the prose.** Appending "before the closing quote" put two sentences
inside a Google Docs link; `node --check` passed, the page rendered, the link was broken. Anchor on
`', cite:` when it exists, and verify by evaluating the fresh file, never the browser's cached copy
(python's http.server lets Chrome keep `cards.js` for a while; the check read stale data twice).

⚠ And never strip with a broad regex — one ate the object structure and `br-raja` came back
`undefined`. Walk to each occurrence and remove a known literal.

**2 · GO BACK means git.** Never "restore" by retyping, never bundle an improvement into a revert.
`git checkout <hash> -- .` is the whole move. He had to say this four separate times.

**3 · Check the instrument before believing a defect.** He reported horizontal overflow; I walked
back three commits chasing it. It measured **exactly 123px at every commit** — the giveaway. I had
left the browser emulating a 620px viewport. Reset emulation before concluding anything.

**4 · Do the smallest thing asked.** He asked for a min-width; I built an `overflow-x` wrapper and
a media query, which made the page slide sideways on a phone. The answer was one property.

## Measurements that must not be re-guessed

- **4.33% of width** — the parchment's deepest notch; how far the timeline overlaps the roots.
- **8.58% of height** — the axis rule in `timeline.png`, the only 100%-ink row. Ticks hang there.
- **`min(1vw, 1.3393vh)`** — one percent of the stage. The stage is height-bound; the words were
  width-bound in plain `vw`, so on a wide short window the art shrank while ATMAN and BRAHMAN grew
  and collided. Font must scale off the same quantity as the stage.
- **900px floor / 1400px ceiling** on the timeline.

## Structure rules

- **Ticks are DERIVED from `rows`.** Never re-add a parallel `ticks:[]` — three of six eras lost
  theirs once and rendered blank while the data looked fine.
- Row cards carry `h · sub · lead · doors · body`. **All five must pass through** the date-row path.
- The click handler must match **both** `[data-scroll]` and `[data-row]`.
- **SAMADHI** carries his psychiatric and housing history at his explicit request. Editing rules are
  at the top of that card in `cards.js`: credential not confession, guardrail line always attached.

---

## Where it lives

`~/Documents/mywei/studio` · git initialised, everything committed, working tree clean.
Serve with the `studio` config in `.claude/launch.json` → `http://localhost:8791`.

`NOTES-source.md` has his three Drive docs read and summarised.
