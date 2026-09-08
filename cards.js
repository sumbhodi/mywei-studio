/* cards.js — the lessons, as data. One sheet in index.html, many fills here.
 * Add a lesson: add a key. No markup, no handler, no css.
 *
 * ⚠ PROVENANCE IS THE POINT OF THIS FILE, because the whole reason for the site is that he is
 * teaching from his own content. Every citation is real and checkable:
 *   'History of Yoga' — his Google Doc  history_of_yoga_p1_draft (not public)
 *   'The Wei'         — his live site, ozhunga.com/B3/church, and its book the-bible.md
 *
 * ⭐ THE CITATION RULE, 7 Sep: cite only what came from SOMEWHERE ELSE. This page is his voice by
 * default, so his own fresh lines carry NO citation — "Sum, 7 Sep 2026" stamped on his own site
 * reads as a third party quoting him, which is exactly backwards. And the-bible.md is a filename,
 * not a title: on the page it is The Wei, and it links out.
 *
 * ⚠⚠ THE CORRECTION THAT MATTERS. An earlier draft of the Brahman card said he wrote the towel
 * BEFORE seeing I Heart Huckabees. That was my invention and it is FALSE. His words, 7 Sep 2026:
 * "I copied the movie, changed it to towel, added my jaded cynicism sureal nihilist logical
 * absurdisms style." Never put a provenance claim in his mouth — especially not on a public page
 * with his name on it. The lineage is the better story anyway, and in a yoga class it is the
 * correct shape: teacher to student, changed a little in the handing over.
 *
 * The film scene is DESCRIBED, not transcribed. One short line is quoted and credited on the spot.
 */

window.CARDS = {

  /* ── YOGA — the painted word in the canopy opens this ────────────────────── */
  yoga: {
    h:'YOGA', sub:'the word, before anything else',
    lead:'The root is <em>yuj</em>. To yoke.',
    body:[
      {p:'As in the wishbone-shaped wooden crosspiece you strap to an ox to pull a cart. A tool for '+
         'doing work. <strong>Not part of an egg.</strong>'},
      {p:'So yoga is a yoke. A connection, a union, a harness — a tool. Which leaves the only question '+
         'worth opening a class with: <strong>what are we harnessing?</strong>'},
      {p:'The dictionary will tell you it is a Hindu spiritual and ascetic discipline, widely practised '+
         'for health and relaxation. True, and useless. That describes what people do on a Tuesday, not '+
         'what the word says.', cite:'OED'},
      {p:'<strong>Atman to Brahman.</strong> Those are the two ends of the yoke, and there is nothing '+
         'else on the list.'},
      {p:'In Advaita Vedanta — the non-dual tradition yoga draws from most heavily — the answer is that '+
         '<em>we are not yoking two separate things together. We are remembering that they were never '+
         'separate.</em>'},
      {p:'<strong>Remember over force.</strong> That is the method, and it is the part people get wrong '+
         'first. You are not straining two things into place. You are recalling something that was '+
         'always the case. A forced yoke is just strain with better branding.'},
      {p:'Because the duality is the illusion. In here, out there — <em>we are dipole machines. Take any '+
         'spectrum, collapse it to two poles.</em> Good and bad, hot and cold, sacred and profane, all of '+
         'them built off the first split.', cite:'Duality', href:'https://www.ozhunga.com/A3/koshas/duality'},
      {p:'<em>In other words: we are all on the spectrum, and a little bipolar.</em> That is not a bug — '+
         'it is how a brain navigates a continuous universe it has divided into parts.',
         cite:'Duality', href:'https://www.ozhunga.com/A3/koshas/duality'},
      {p:'There are two ways out of the split, and I will tell you which one I take. Either <em>out '+
         'there</em> is the illusion — simulation, idealism, the world is mind-made — or <strong><em>in '+
         'here</em> is the illusion.</strong> The observer, the sense of a separate subject sitting '+
         'behind your eyes, is the construction. Vedanta and neuroscience agree on that one: <em>the '+
         'self is the model, not the modeler.</em>', cite:'Duality', href:'https://www.ozhunga.com/A3/koshas/duality'},
      {p:'So what is the yoke actually <em>for</em>. To make your perception of reality match it more '+
         'closely. To get more awareness of, and more control over, your own controlled hallucination. '+
         '<strong>To recognise the screen — and realise we were the projector all along.</strong>'},
      {p:'<button class="inline-door" type="button" data-scroll="samadhi" aria-haspopup="dialog">Samadhi</button> <strong>is the highest goal.</strong> A state of oneness. Easier to find on the cushion '+
         'or the mat, entirely achievable while doing the dishes, and <em>rude in a heated discussion '+
         'with a loved one.</em> Not good for watching a movie or a date night. Great for a long solo '+
         'hike and for gardening.'},
      {p:'Which is the middle way, and it is why the goal is stated carefully: <strong>to be able to find '+
         'it — not to stay there.</strong> Because it is technically a form of dissociation, and leaving '+
         'matters exactly as much as arriving.'},
      {p:'So the yoke is the tool we use to re-member what the brain split apart. Not destroying the ego '+
         '— <em>true ego death is suicide, it is just a matter of pace</em> — but loosening its grip. '+
         'Getting out of the pool long enough to dry off.'},
      {p:'<strong>Yoga is a tool. We sharpen it through practice. It is not a destination.</strong>'}
    ]
  },

  /* ── ATMAN — five doors into one thing ───────────────────────────────────── */
  atman: {
    h:'ATMAN', sub:'the one that is doing the looking',
    doors:[
      ['the soul',                 'if you came in through religion'],
      ['consciousness',            'if you came in through philosophy'],
      ['the spark',                'if you like Transformers'],
      ['controlled hallucination', 'if you like cognitive science'],
      ['genius malignus',          'if you liked The Matrix —<br>which is Descartes in better coats']
    ],
    body:[
      {p:'<em>Atman is the slice of that universe that says &ldquo;I.&rdquo; Your node of awareness. The '+
         'part of Brahman wearing a body and wondering where it left its keys.</em>'},
      {p:'The eye cannot see itself. The knife cannot cut itself. '+
         'The scale cannot weigh itself. You are studying the mind from inside the mind, and the '+
         'instrument <em>is</em> the thing being measured.', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'So: everything you call reality is the <strong>screen</strong>. The render. What the koshas '+
         'call Maya and what neuroscience calls controlled hallucination. You have spent your whole life '+
         'staring at that screen trying to find yourself in the picture. <strong>You are not in the '+
         'picture.</strong>', cite:'The Wei · The Projector and the Screen', href:'https://www.ozhunga.com/B3/church/'},
      {p:'<strong>You are the projector.</strong> Atman is the light, not the image. You cannot see the '+
         'projector by squinting harder at the movie.', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'Which is why the lab and the temple end up in the same room. Vedanta and neuroscience agree on '+
         'this one: <em>the self is the model, not the modeler.</em> The observer is the construction.'}
    ]
  },

  /* ── BRAHMAN — the sheet ─────────────────────────────────────────────────── */
  brahman: {
    h:'BRAHMAN', sub:'the sheet',
    lead:'Not a god. Not a place. The fabric itself.',
    body:[
      {p:'The universe is not a container that holds things — it <em>is</em> what things are. One '+
         'continuous movement. No seams. No inside or outside. No pockets.'},
      {p:'<em>This is why the universe is always losing its keys. No pockets.</em>'},
      {p:'There is a scene in <em>I Heart Huckabees</em> that teaches this better than most scripture. A '+
         'detective holds up a bedsheet: this is all the matter and energy there is, you and me and '+
         'everything, nothing left out. Asked what is outside it, he says more sheet. Then he draws '+
         'himself on it, and you, and Paris, and a war, and a hamburger — all the same fabric, differing '+
         'only in where they sit on it.', cite:'I Heart Huckabees, 2004'},
      {p:'Then the question the scene turns on, and the one worth carrying out of the room: '+
         '<strong>&ldquo;What is not the sheet?&rdquo;</strong>', cite:'I Heart Huckabees, 2004'},
      {p:'<strong>I took that and made it a towel.</strong> Same demonstration, my vocabulary — and that '+
         'is the honest way to say it. It is also how this whole tradition has ever moved: teacher to '+
         'student, changed a little in the handing over.'},
      {p:'So here is the scene. <em>Someone is in a pool, complaining about being wet. You say: get out '+
         'of the pool. They say — but I am all wet. Do you have a towel?</em>',
         cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'<strong>That is me.</strong> That is everyone who walks into the room. They are not asking to '+
         'stop being wet. They are asking for the towel.'},
      {p:'And they think yoga is the towel. <strong>It is not.</strong>'},
      {p:'<strong>Yoga is getting out of the pool long enough to dry off.</strong>'},
      {p:'And thanks to global warming, that does not take long at all. A beautiful Christmas Day in '+
         'Phoenix, high of a hundred and eight, three percent humidity.'},
      {p:'<strong>And then choosing to dive back in with your friends.</strong> That is the part nobody '+
         'sells you, and it is the whole practice. You do not get out to stay out.'},
      {p:'<em>The towel is everything. The pool is in the towel. You are in the towel. This part is you. '+
         'This part is me. What is not the towel?</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'<strong>Where their version and mine part company.</strong> Theirs resolves into comfort — get '+
         'the blanket thing and you can relax, because everything you could ever want you already are. '+
         'Mine does not let you off that lightly.'},
      {p:'<em>The towel may not exist. Getting out of the pool is still the correct move. You are the '+
         'water. You are the towel. You were never actually wet.</em> That is not comforting at first. '+
         'That is also the Wei.', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'So: <strong>Atman is Brahman.</strong> <em>Tat tvam asi</em> — thou art that. The individual '+
         'witness and the witnessed are the same thing looking at itself. The light in your projector is '+
         'the same light in mine; there was only ever one bulb.',
         cite:'The Wei', href:'https://www.ozhunga.com/B3/church/', href:'https://www.ozhunga.com/B3/church/'},
      {p:'And the problem we do not paper over: if it really is all one sheet, walls are still hard to '+
         'avoid, and somebody still has to order the coffee. In here, out there, us and other — a '+
         'necessary illusion. You see through it and you order the coffee anyway. That is not hypocrisy. '+
         'That is the practice.'}
    ]
  },

  /* ── THE HISTORY — the rolled scroll below the timeline opens this ───────── */
  history: {
    h:'THE HISTORY', sub:'the whole thing, start to finish',
    lead:'Not a list of dates. A story with a turn in it.',
    body:[
      {p:'<strong>Ohm.</strong> A cosmic Brahma bull slowly pronouncing the syllable, and Vishnu\u2019s dream beginning. Most cosmogenesis stories are some form of vibration or intention \u2014 in the beginning was the Word, the Logos, the dream. <em>It still echoes, if you listen.</em>'},

      {p:'<strong>Shiva gets busy with Parvati.</strong> A mountaintop, eighty-four asanas, and the first yoga lesson anybody tells a story about. The PG-13 version ends right there. And we still have no idea what he was actually doing. Sometimes Shiva has two arms, sometimes six, sometimes eight. Whatever the temple, Shiva is always standing on a little demon. The traditions disagree about everything except the thing underfoot.'},

      {p:'<strong>The early texts.</strong> Vedas and Upanishads \u2014 already describing meditation as ancient when they were written. The Katha has the chariot and the yoke. Kept in people rather than paper, because palm leaf rots.'},

      {p:'<strong>Siddhartha.</strong> Same window as Confucius, Socrates and the Hebrew prophets, from places that were not talking to each other. Buddhists use the same word the Vedas and yoga use \u2014 <em>dhyana</em>. <strong>Buddhism is Yoga II.</strong> That is the side note, not the chapter. Here is why he stands out, since he is not teaching anything new: he taught it for free, to anyone. Women, brown people, white people, he did not care. Everyone else had a paywall.'},

      {p:'<strong>The Sutras.</strong> Patanjali writes the eight limbs down and they get an author. The six branches never do. <em>Sutra</em> means suture, the thread that binds a book. Somebody asked him to write the book on yoga and he came back saying it could not be done: it is different in the East and the West, different for every person, the way Shiva has two arms in one temple and eight in the next. So he wrote the binding and the table of contents and left the book to you. He also apparently spoke three languages, had five handwritings and lived eight hundred years. Or there was more than one of him.'},

      {p:'&#8212;'},

      {p:'<strong>THE TURN, and this is where modern yoga actually starts.</strong>'},

      {p:'<strong>It starts with Indians making fun of white people.</strong> Stiff shirts. Stiff backs. Chairs. Bright loose comfortable clothing set against starched colonial collars.'},

      {p:'<em>You can\u2019t dance like this. You wish you looked this good.</em>'},

      {p:'It is a <strong>style argument before it is a spiritual one</strong>, and it is anti-colonial by being better looking and more fun. That is the same current that runs forward into the dance, the performance, and eventually Bollywood.'},

      {p:'<strong>And underneath it, the part nobody puts on a studio wall.</strong> By 1850 hatha had all but disappeared. What kept it alive in the late 1800s was <strong>street hustle</strong> \u2014 the untouchable class performing for coins from tourists.'},

      {p:'<strong>The tourist trade is what revived it, and it revived it as performance.</strong> Not the philosophy. The show.'},

      {p:'Which explains everything that looked like separate facts. Why hatha sits at the bottom of the caste list. Why the mat arrives as a prop \u2014 cork and rubber rolled over a dirty market floor to make a clean stage. Why the revival is performative all the way down.'},

      {p:'<strong>Then the propaganda tour.</strong> The Maharaja of Mysore\u2019s own word for it. Krishnamacharya sent across South India giving public demonstrations, with a silent film funded for national circulation. Meanwhile young Indians in Mysore thought yoga was beneath them and preferred the bodybuilding gym \u2014 because hatha was what poor people did.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},

      {p:'<strong>And then the fetishism of the East.</strong> World\u2019s fairs and travelling shows. The contortionist, the beggar, the rope trick, the levitating man with his staff \u2014 all from the same Victorian appetite for an East that is mystical, bendable and safely far away.'},

      {p:'The little raised stage never goes away after that. It leaves the exhibition hall, and turns up in Beverly Hills with a man on a platform in a speedo.'},

      {p:'&#8212;'},

      {p:'<strong>Then the Germans get ornery the first time</strong>, over a poorly planned parade. When the gas masks come off the skirts get shorter, and yoga is hip again.'},
      {p:'<strong>Culture as skirt length.</strong> Swings and oscillations \u2014 and the theory is real enough to have a name: the hemline index, proposed in 1926. Hems rise when the money does. Then the Depression arrives and the skirts get longer again.'},
      {p:'<strong>The Germans get ornery a second time</strong>, and everyone feels better after Captain America punches enough Nazis.'},
      {p:'Then \u2014 <em>if we built it we might as well use it</em> \u2014 we felt bad afterwards, let the Japanese out of the camps, kickstarted their economy into a world power, and had time for yoga again.'},

      {p:'<strong>But in the fifties, brown people were not interested in visiting. Wonder why.</strong>'},
      {p:'&#9888; There is a hard answer, and it is better than the joke: the <strong>Immigration Act of 1924</strong> barred Asian immigration almost entirely, and it was not repealed until 1965. Nobody came because the law said they could not.'},
      {p:'<strong>So we went to them.</strong> A Belgian walks into Mysore in 1964, stays two months, and goes home with a photograph.'},

      {p:'The sixties. Then the seventies, and this time it is not the Germans\u2019 fault \u2014 they were being cool, making good music and good cars. Blame Nixon: off the gold standard, health care privatised, and then Reaganomics behind it.'},

      {p:'&#8212;'},

      {p:'<strong>And running alongside all of it, the other history: exercise.</strong>'},
      {p:'<strong>The fifties</strong> are the first time exercise is not a hobby but something you <em>do</em>. By the <strong>sixties</strong> everyone is running. By the <strong>seventies</strong> they are blowing out their knees. The <strong>eighties</strong> invent jogging \u2014 faking running \u2014 and the <strong>nineties</strong> replace it with power walking. The reason is blunt: rich white men were dying younger than their poor rural cousins, and when something affects rich white men, we do something about it. Diagnosis, desk jobs and steak. Out of that came the food pyramid, bread and potatoes across the bottom, and the order to exercise.'},
      {p:'High-impact aerobics runs the same years. Jazzercise is the softer version. And the peak of the whole thing is Richard Simmons sweating to the oldies \u2014 who, if you actually look at what he built, nails <strong>low-impact HIIT with just enough bounce to hold off osteoporosis</strong>. He was right and nobody noticed.'},

      {p:'<strong>Then somebody walked into an ashtanga school for Westerners</strong> \u2014 or whatever was most marketable in SoCal that week \u2014 and realised these people had been working out what breaks a body and what does not <em>for a century already</em>.'},
      {p:'So: take the asana. Make it dancier. Add music. <strong>Tuck the meditation in at the end.</strong>'},
      {p:'As my sister-in-law, who works for Hugger Mugger, puts it: <em>yoga is a way to trick Westerners into meditating by wearing them out enough to need a nap.</em>'},
      {p:'And honestly \u2014 if I ran a school for boys, the way Pattabhi Jois did, and had to get teenage men to sit still and meditate, <strong>I would make them do a bunch of pushups first too.</strong> Hence: optional chaturangas in my class.'},

      {p:'&#8212;'},

      {p:'<strong>The eighties.</strong> Woo. Crystals, spirit animals, angel guides, and a magic wand on an infomercial. '},
      {p:'<strong>The nineties.</strong> <em>I bet you jog and eat salads too.</em> If nothing else works, try yoga. The <em>be here now</em> and <em>wherever you go, there you are</em> books make their way into rehabs, mental hospitals and jails.'},
      {p:'<strong>And there is a specific reason they got in.</strong> In 1979 Jon Kabat-Zinn put meditation inside a hospital \u2014 the Stress Reduction Clinic at UMass, and the eight-week MBSR protocol. <strong>He did it by subtraction:</strong> take the practice, remove the Buddhism, leave a procedure with a curriculum and evidence behind it. No belief required.'},
      {p:'That is what let it through the door: it arrives as <em>treatment</em> rather than religion, so a ward can teach it and an insurer can pay for it. <strong>It is also what got left behind.</strong> Dharana without the other seven limbs is a technique, not a path. A fair price. Still a price.'},
      {p:'<strong>And it was already leaking into the movies long before that.</strong> <strong>Star Wars</strong> is probably the biggest vector there has ever been \u2014 Yoda is a yogi archetype down to the name, Dagobah is a meditation retreat, and the whole business about trying versus doing is a teaching on effort and attachment delivered by a swamp puppet. Millions of children absorbed a contemplative frame and nobody called it that.'},
      {p:'<strong>Kung Fu</strong> put a Shaolin monk in American living rooms through the early seventies \u2014 the exact decade yoga was arriving. <strong>The Karate Kid</strong> did stillness and discipline for the next cohort in 1984.'},
      {p:'<strong>Groundhog Day</strong> is the most-cited Buddhist film that is not about Buddhism; teachers have used it as a rebirth parable for thirty years. And <strong>Caddyshack</strong> somehow contains the most-quoted Buddhism in American comedy.'},
      {p:'<strong>Fight Club</strong> has a cave and a spirit animal. <strong>Happy Gilmore</strong> has a happy place.'},
      {p:'<strong>Post-Y2K</strong> it goes mainstream, but filtered. It arrives in the college catalog under a name nobody could object to: <em>stretch and relaxation.</em>'},
      {p:'<strong>The 2010s</strong> \u2014 the Jois family goes hard on the trademark, and the argument about who owns this gets loud. That is when you start hearing there are <em>more people practising in LA than in all of India</em>. I will stand by it as an urban legend, because I have never been able to source it and neither has anyone else \u2014 but it is exactly the sort of line people reach for when the argument is about ownership.'},
      {p:'<strong>2008</strong> \u2014 I graduate from SLCC\u2019s first yoga teacher training program.'},
      {p:'<strong>2020</strong> \u2014 a pandemic, and everyone is doing it or wishing they had. Meditation finally goes fully mainstream, about three thousand years after it was already ancient. At one point SLCC ran twenty-three sections of it.'},
      {p:'<strong>And then, post-2020, somebody makes the towel joke again.</strong> <em>Everything Everywhere All at Once</em> is arguably the most explicitly non-dual film ever to win Best Picture, and it builds the whole argument around a bagel \u2014 an everything bagel, containing all of it, which is exactly the thing that swallows you if you stare too long.'},
      {p:'It runs straight into the problem we already have. <strong>If it is all one, walls are hard to avoid</strong> \u2014 and the film knows it. So it does not land on transcendence. It lands on <em>be kind</em>, and on staying in the room.'},
      {p:'<strong>Which is the pool and the towel, with a bagel.</strong> Same device, arrived at independently, and the same refusal to let you off easily. You see through it and you still have to do the laundry.'},
      {p:'<strong>And notice what I just did.</strong> An hour on the history of yoga without once telling you how to do yoga. Everyone before me managed the same trick. The Torah has meditation, Christ has contemplation, the Vedas have <em>dhyana</em>, and none of them define it for thousands of years; the dictionary still says a practice done by Hindus and ascetics for well-being, which tells you nothing. Either it was so common that nobody needed to say, or there was a paywall. <em>Give me your gold, swear allegiance for all your lifetimes, and we will tell you the secret.</em> I charge for a class too; the mortgage is real. Siddhartha is the one who broke the rule.'},

      {p:'&#8212;'},

      {p:'<strong>So here is what I actually teach you.</strong> A routine out of a colonial gymnasium, as performance art. <em>Look at me, look at what I can do</em> is a real part of yoga \u2014 not to be diminished, and not to be indulged. But it is there, it has always been there, and pretending otherwise is the one dishonest move available.'},

      {p:'And then, next to it, cognitive science and meditation. <strong>The asana is honest about being a show. The rest is not a show.</strong>'}
    ]
  },

  /* ── THE FIVE ERAS — each is a name on the timeline, and the name is a door ─────
     His call, 8 Sep: "each date is just a name on timeline, click for card... open a scroll for
     details." So the axis stays legible and the detail lives in a scroll, like everything else. */

  /* ── SAMADHI ─────────────────────────────────────────────────────────────────
     ⚠ THIS CARD CARRIES HIS OWN PSYCHIATRIC AND HOUSING HISTORY, and it is here because he asked
     for it to be, 8 Sep 2026: "this can be public, I do not mind." His reason, and it is the right
     one: on day one he tells students he learned this homeless in mental hospitals, and it brings
     their guard down — I am crazy, doing the best I can, welcome.
     Two rules for anyone editing this card.
     1. It is a CREDENTIAL, not a confession. It is here because he went to the far end of the
        practice and came back with a report. Never edit it toward pity.
     2. HIS GUARDRAIL LINE TRAVELS WITH IT, always — "I would never recommend insanity, addiction
        and psychosis for anyone else, but they always worked for me." Without that sentence this
        is an anecdote about extremity. With it, it is a warning with a person behind it. */
  /* ── THE SIX BRANCHES AND THE EIGHT LIMBS ────────────────────────────────────
     ROUGH CUT, 8 Sep. Transplanted whole from _parked/2026-09-07-tree-with-names/content.js —
     his own 2015 Six Branches doc (with the caste tag on every branch) and his 2016 8 Limbs doc,
     plus the teaching weighting he gave on 7 Sep. Nothing retyped.
     SAMADHI is not here; it already has its own card with his history on it. */

  'br-raja': { h:'RAJA', sub:'royal · meditation',
    lead:'Upper Caste',
    body:[
      {p:'<strong>Caste: Upper Caste.</strong> That tag is not a footnote about the past &mdash; it is the argument. The list itself is a caste map.'},
      {p:'Focuses on achieving and maintaining specific mental states through meditation — yet still incorporates all eight limbs, including asana.'},
      {p:'&#9888; <strong>And notice what the caste tag means here.</strong> The branch that owns <em>meditation</em> was assigned to the people with the leisure to sit. Contemplation was not distributed by aptitude.'}
      ]
  },

  'br-jnana': { h:'JNANA', sub:'mind · study and wisdom',
    lead:'Upper Caste',
    body:[
      {p:'<strong>Caste: Upper Caste.</strong> That tag is not a footnote about the past &mdash; it is the argument. The list itself is a caste map.'},
      {p:'Still follows the eight-limbed practice, but focuses on improvement of the mind through scholarly endeavour.'},
      {p:'&#9888; <strong>This is the branch the whole systemic argument is about.</strong> Scholarship needs literacy, time, and somebody else doing the work. When you ask <em>who has time to study and read, and who is bathing in the ashes of the dead</em> &mdash; this is the branch on the answering end.'}
      ]
  },

  'br-karma': { h:'KARMA', sub:'living life, learning lessons',
    lead:'Working Caste',
    body:[
      {p:'<strong>Caste: Working Caste.</strong> That tag is not a footnote about the past &mdash; it is the argument. The list itself is a caste map.'},
      {p:'<em>We are all doing this, it\'s just a matter of how consciously.</em>'},
      {p:'The trick is to live now in such a way that you create better tomorrows — in this lifetime and the next.'}
    ]
  },

  'br-bhakti': { h:'BHAKTI', sub:'devotion, loving service',
    lead:'Working Caste',
    body:[
      {p:'<strong>Caste: Working Caste.</strong> That tag is not a footnote about the past &mdash; it is the argument. The list itself is a caste map.'},
      {p:'The yoga of devotion, usually to Krishna. Devotees keep the name on their lips and love in their heart, hoping to be spared the endless cycle of death and rebirth.'},
      {p:'The work is to feast and serve and sing and dance — to care for the god, his guests, and fellow devotees. They practise in this life to be the better servant in the next.'}
    ]
  },

  'br-tantra': { h:'TANTRA', sub:'ritual, ceremony',
    lead:'Monastic Caste',
    body:[
      {p:'<strong>Caste: Monastic Caste.</strong> That tag is not a footnote about the past &mdash; it is the argument. The list itself is a caste map.'},
      {p:'Making every act of a mundane human life into a ritual offered up — to connect with the divine, or simply to raise consciousness.'},
      {p:'<em>While sex can be included in such a practice, so is: the way you make your rice, get dressed, speak, garden. Most Tantric schools actually recommend celibacy.</em>'}
    ]
  },

  'br-hatha': { h:'HATHA', sub:'purification of the vessel',
    lead:'Lowest Caste',
    body:[
      {p:'<strong>Caste: Lowest Caste.</strong> That tag is not a footnote about the past &mdash; it is the argument. The list itself is a caste map.'},
      {p:'<em>While hatha is only one sixth of the body of yoga, it is by far the most widely known, practiced and researched form known today.</em>'},
      {p:'<em>Any time the word yoga is used in any language other than Sanskrit, they are probably talking about Hatha.</em>'},
      {p:'Most believed its sole purpose was to keep the body out of the way — that it was not a valid path of transcendence on its own.'},
      {p:'<strong>The physical practice had all but disappeared from the world by 1850. By the 1980s there were more people practicing hatha in LA than in all of India.</strong>'}
    ]
  },

  'limb-yama': { h:'YAMA', sub:'the restraints · the dont\'s',
    doors:[
      ['Ahimsa','no harm, loving kindness'],
      ['Satya','no lying'],
      ['Asteya','no stealing'],
      ['Brahmacharya','no gluttony, controlling desire'],
      ['Aparigraha','no hoarding']
    ],
    body:[
      {p:'<strong>How it is actually taught:</strong> covered at the start of semester · one guided meditation on ahimsa'},
      {p:'Handled early, then lived rather than lectured. The one that gets its own guided meditation is <strong>ahimsa</strong>.'},
      {p:'<em>Satya: truth is easier. Stealing is just unsustainable, not wrong — the distinction matters.</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'}
    ]
  },

  'limb-niyama': { h:'NIYAMA', sub:'the observances · the do\'s',
    doors:[
      ['Shaucha','purity'],
      ['Samtosha','contentment'],
      ['Tapas','discipline'],
      ['Svadhyaya','study'],
      ['Ishvara Pranidhana','surrender to that which is greater than you']
    ],
    body:[
      {p:'<strong>How it is actually taught:</strong> covered at the start of semester'},
      {p:'Front-loaded with yama, then it runs underneath everything else all semester.'},
      {p:'<em>Satya: truth is easier. Stealing is just unsustainable, not wrong &mdash; the distinction matters.</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'Front-loaded with yama at the start of semester, and then it runs underneath everything else without being named again.'}
      ]
  },

  'limb-asana': { h:'ASANA', sub:'to take a seat',
    body:[
      {p:'<strong>How it is actually taught:</strong> ★ one of the two this class is actually built on'},
      {p:'<em>Asana refers to more than just a physical pose. It is the practice of becoming fully embodied — both in your physical body and in the present moment.</em>'},
      {p:'<em>You are always in a pose. You just forget sometimes. The pose you are in right now — reading this, however you are sitting or standing or lying down — is a pose. You are practicing. You just did not know it was class.</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'The word means <strong>seat</strong>. Find the seat. That is the limb.'}
    ]
  },

  'limb-pranayama': { h:'PRANAYAMA', sub:'breath control',
    body:[
      {p:'<strong>How it is actually taught:</strong> ★ one of the two this class is actually built on'},
      {p:'<em>Prana is the life force that flows through everything: the air we breathe, the food we eat, the sounds we hear, the light we see. Even the love we receive in relationships can be considered prana.</em>'},
      {p:'<em>Yama</em> is a discipline or constraint — the same word as the first limb. So pranayama is breath control used as a tool for <strong>disciplining the flow of all the energies in our lives</strong>.'},
      {p:'<em>You are always breathing. If you weren\'t — breathe right now. Take a deep breath. You\'re welcome. I accept tips.</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'}
    ]
  },

  'limb-pratyahara': { h:'PRATYAHARA', sub:'awareness of the senses',
    body:[
      {p:'<strong>How it is actually taught:</strong> named at the start of class and again at the end'},
      {p:'<em>At first translated as a withdrawal from the senses — it is better described as diving so deep into all the senses that you are no longer distracted by them.</em>'},
      {p:'<em>The sound of the garbage truck: easy to not identify as self. Music: easy. The voice inside your head reading these words right now: less easy. The inner critic: less.</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'<em>Learn to hear it all as if listening to music.</em>', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'}
    ]
  },

  'limb-dharana': { h:'DHARANA', sub:'mental focus',
    body:[
      {p:'<strong>How it is actually taught:</strong> this is where the guided meditations live'},
      {p:'<em>A single-minded intention. Traditionally a drishti — a gaze upon a sacred object or meditative device: candle, incense, ancestor. It can also simply be a thought to keep you present, or any mantra that fits your practice.</em>'},
      {p:'The white bear is why it works this way. Tell the mind <em>don\'t</em> and one part obeys while another keeps checking whether it has stopped yet — and the checking is the thinking. So you do not empty the head by force. <strong>Give it a brown bear first.</strong>', cite:'The Wei &middot; Field and Stream', href:'https://www.ozhunga.com/B3/church/'}
    ]
  },

  'limb-dhyana': { h:'DHYANA', sub:'stillness',
    body:[
      {p:'<strong>How it is actually taught:</strong> taught by explaining it once, then shutting up as much as possible'},
      {p:'<em>Traditional or zazen meditation. A clear still mind.</em>'},
      {p:'The method <strong>is</strong> the silence after the explanation. Say it once, then get out of the way — talking over it is the one thing guaranteed to prevent it.'},
      {p:'<strong>Dhyana has no door that isn\'t dharana.</strong> You choose a thought, hold it on purpose, let it end, choose again. Empty is best if it comes — but it comes <em>through</em> the choosing, never through the forcing.', cite:'The Wei', href:'https://www.ozhunga.com/B3/church/'}
    ]
  },

  samadhi: {
    h:'SAMADHI', sub:'the eighth limb \u2014 and the one to be careful with',
    lead:'Bliss. Enlightenment. Oneness.',
    body:[
      {p:'<em>Bliss, enlightenment, oneness.</em>'},
      {p:'Naming it pulls you out of it. So it gets explained one time, and then left alone \u2014 I rarely mention it again after that.'},
      {p:'A state of oneness. Easier to find on the cushion or the mat, entirely achievable while doing the dishes, and <em>rude in a heated discussion with a loved one</em>. Not good for watching a movie or a date night. Great for a long solo hike and for gardening.'},
      {p:'<strong>Find the seat. Turn the brain off. Unplug it \u2014 and then plug it back in.</strong> Find sukhasana and samadhi, and leave before you need to change your shorts.'},

      {p:'<strong>Now the part I tell you on the first day, so it is not a surprise later.</strong>'},
      {p:'<em>I am a special case. I love doing nothing. My first mental hospitalization was due to catatonia. I was completely unresponsive. Nothing was distracting me from my meditation. I was deep.</em>', cite:'A Meditation on Meditation', href:'https://docs.google.com/document/d/1cndJM7V-niKBu-TFr1r17igdgg91PljAWWqs_V376VE/edit'},
      {p:'<em>In fact I have struggled with being addicted to doing nothing. It is what led to my chronic homelessness. <strong>If you sit in zazen long enough you eventually wind up in a pile of crap.</strong> The body does not stop processing, after all.</em>', cite:'A Meditation on Meditation', href:'https://docs.google.com/document/d/1cndJM7V-niKBu-TFr1r17igdgg91PljAWWqs_V376VE/edit'},
      {p:'So when I say <strong>true enlightenment is useless</strong>, that is not a bit. It is a report.'},

      {p:'<strong>And the line that has to come with it:</strong> <em>I would never recommend insanity, addiction and psychosis for anyone else. But they always worked for me. So have asana, pranayama and pratyahara.</em>', cite:'A Meditation on Meditation', href:'https://docs.google.com/document/d/1cndJM7V-niKBu-TFr1r17igdgg91PljAWWqs_V376VE/edit'},

      {p:'Which is why the goal is stated the careful way. <strong>To be able to find it \u2014 not to stay there.</strong> It is technically a form of dissociation, and <em>leaving matters exactly as much as arriving.</em>'},
      {p:'That is the middle way, and it is the whole reason this class has a door on both ends. I am not selling you somewhere to go. I am teaching you a seat you can get up from.'}
    ]
  },

  'era-pre': {
    h:'BEFORE THE MAP', sub:'to 3000 BCE',
    lead:'Everything left of here is told, not written.',
    body:[
      {p:'Shiva on a mountaintop, teaching Parvati. The first lesson anybody tells a story about \u2014 and <em>we still have no idea what he was actually doing</em>. Either it was so ordinary nobody bothered to explain it, or it was a guarded skill bordering on magic.', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'},
      {p:'Before that, the Brahma bull pronouncing the syllable, and Vishnu\u2019s dream beginning. Some theories have chanting and toning predating language \u2014 and being what led to language.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'This is where the deluge sits, and where recorded history more or less starts.'},
      {p:'\u26a0 <strong>On \u201cyoga is 5,000 years old.\u201d</strong> That number is back-extrapolated. Part of it leans on a seated figure on an Indus Valley seal around 2500 BCE that may or may not be a yogi \u2014 genuinely contested. Recognisable yoga turns up in the Upanishads, much later. The flood is the sturdier anchor of the two: there is a real silt layer at Shuruppak dated near 2900 BCE.'}
    ]
  },

  'era-clump': {
    h:'THE AXIAL AGE', sub:'900 BCE \u2013 400 CE',
    lead:'Everything at once, from places that were not talking to each other.',
    body:[
      {p:'Upanishads. Taoism. Siddhartha. Confucius. Socrates. The Hebrew prophets. Independent regions, no contact, one window.'},
      {p:'<strong>The name is Karl Jaspers\u2019.</strong> He called it the Axial Age, and the argument about whether it is one phenomenon or a coincidence we have named is still live. Either answer is interesting.'},
      {p:'<strong>Taoism is the turn.</strong> Meditation stops being purely spiritual and becomes a <em>skill</em> \u2014 a tool you use on yourself, with benefits you can talk about.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'Then the Silk Road opens and it stops being local. Buddhism travels it, and the word travels with it: Buddhists use the same word the Vedas and yoga use \u2014 <em>dhyana</em>. That shared word is the tell that this is one lineage rather than parallel invention.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'Christ lands <em>late</em> in this column, not early. By then the missionary business is thriving and everybody wants a cut.'},
      {p:'\u26a0 <strong>Two notes.</strong> Historians call the first half of this the <em>Axial Age</em>. And Patanjali gets two ticks on purpose \u2014 tradition puts the Sutras near 200 BCE, current scholarship argues c. 400 CE. The column is wide enough to hold the argument.'}
    ]
  },

  'era-crusades': {
    h:'THE CRUSADES', sub:'1095 \u2013 1291',
    lead:'Meditation gets a makeover across the board \u2014 four traditions, one century.',
    body:[
      {p:'Sufi practice is systematised. Byzantine monks fix prayer to posture and repetition. A Carthusian writes <em>read, ponder, pray, contemplate</em> into a formal ladder. And Zen starts being taught apart from Buddhism.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit Everyone is on the road, everyone meets everyone, and every religion starts defining itself against the neighbours. <em>I kneel like this when I pray.</em> <em>No, I bring my forehead to the floor.</em> The Hindus watch all of it and say it was their idea first. They are famously hard to convert, because they agree with you all the way to the end and then tell you that you are spelling his name wrong. Not Christ. Krishna. Another avatar, same pattern.'},
      {p:'Nobody has settled whether they influenced each other or simply arrived at the same place at the same time.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'Every piece has a name, if you want them: Guigo II\u2019s <em>Scala Claustralium</em>, c. 1150, is the ladder. The Byzantine one is <em>hesychasm</em>. The Sufi one runs through al-Ghazali. Chan gets its Song-dynasty codification in the same window.'},
      {p:'\u26a0 <strong>Where the Crusades framing strains.</strong> Symeon dies in 1022 and al-Ghazali in 1111, so half of this predates or straddles the First Crusade. The contact routes \u2014 trade, and Al-Andalus \u2014 were already open. Contemporaneous, then, rather than obviously caused by \u2014 which arguably makes it the more interesting convergence, not the less.'}
    ]
  },

  'era-enlightenment': {
    h:'THE ENLIGHTENMENT', sub:'1685 \u2013 1815',
    lead:'The West rediscovers it, and for the first time gets to read it.',
    body:[
      {p:'The Gita is translated into English in 1785. The ancient texts start circulating in languages that are not Sanskrit \u2014 better translations, no philosopher\u2019s stone needed.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'Hatha is practised in British India for the first time in centuries. Whitman and Thoreau. <em>Walden</em>.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'And the mat is invented in this window. Before that it was a bed \u2014 which is what makes the PG-13 version of the Shiva and Parvati story hard to animate.'},
      {p:'<strong>The column closes on almost nothing.</strong> By 1850 the physical practice had all but disappeared from the world.'}
    ]
  },

  'era-transcendental': {
    h:'TRANSCENDENTAL', sub:'1830s \u2013 the 1920s',
    lead:'The century where the West stops translating it and starts believing it.',
    body:[
      {p:'Whitman and Thoreau first \u2014 the texts arrive in English and immediately turn into American writing. <em>Walden</em> in 1854.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit Thoreau did not move into a van and start streaming; he moved into a cabin on a pond and started writing, and went vegan. The story has not changed. The Enlightenment traded religion for science, science delivered the factory, and once you have watched children walk into the mill through the smoke, the pond looks very good. Eliot\u2019s <em>not with a bang but a whimper</em> is the same mood, and it has been whimpering along for a hundred and fifty years.'},
      {p:'Then the Victorian appetite for the ancient and the occult: Theosophy in 1875, Egyptomania, the Golden Dawn, the Orient Express. The east becomes fashionable in drawing rooms, and the Theosophical Society moves its headquarters to Madras in 1882.'},
      {p:'<strong>And the current runs the other way at the same time.</strong> Colonial scholarship had printed and catalogued the Sanskrit texts; Indian reform movements read their own tradition back out of those editions and re-presented it. Arya Samaj 1875, Vivekananda\u2019s mission 1897. Scholars call the result Neo-Vedanta.'},
      {p:'Vivekananda at the Chicago World\u2019s Fair in 1893. Yogananda arriving in 1920 and never really leaving. The Tibetan Book of the Dead in English in 1927.'},
      {p:'It is also where the asana practice gets rebuilt \u2014 mixed with European physical culture on its way to Krishnamacharya\u2019s Mysore school. <strong>The yoga that reached the West was reassembled in the same window it was exported in.</strong>'}
    ]
  },

  'era-modern': {
    h:'MODERN', sub:'the 1950s \u2013 now',
    lead:'1860 is on the axis for a reason, and it is not a yoga date.',
    body:[
      {p:'<strong>It is the Bengal Renaissance</strong> \u2014 the Indian cultural and intellectual revival running through the nineteenth century and out the other side. It is what re-popularised hatha yoga, and it is the same current that eventually produces Indian cinema. Tagore is born in 1861.'},

      {p:'<strong>The Gay Nineties.</strong> Vivekananda in Chicago, 1893 \u2014 at the World\u2019s Parliament of Religions, held inside the World\u2019s Fair. A man from Calcutta explains Vedanta to America and America claps.'},

      {p:'<strong>The Roaring Twenties.</strong> Yogananda arrives in 1920 and never really leaves. The Gita gets translated again and again. Chakras reach the West \u2014 Woodroffe\u2019s <em>Serpent Power</em> in 1919, and Jung running Kundalini seminars by 1932. The Tibetan Book of the Dead lands in English in 1927. Everybody is squeezing something in.'},

      {p:'<strong>Then the Depression</strong>, and after that we punched Nazis until we felt better.'},

      {p:'<strong>The fifties</strong> were a great time to be white. And notice the direction of travel \u2014 we had to go to <em>them</em>. It arrives as a telephone game through translators, and what comes back is whatever survived the trip.'},

      {p:'<strong>The sixties.</strong> Tune in, drop out. Iyengar\u2019s <em>Light on Yoga</em> in 1966, the Maharishi in 1968, and Transcendental Meditation built deliberately for people who were not Hindu.'},

      {p:'<strong>The seventies.</strong> Well. It was the seventies. Blame Nixon \u2014 off the gold standard in 1971, the HMO Act reshaping health care in 1973. Yoga turns up on public television.'},

      {p:'<strong>And then the eighties</strong>, when the tax cuts for the rich actually start \u2014 so rich white people could afford yoga classes again. By then there were more people practising hatha in Los Angeles than in all of India.'},

      {p:'\u26a0 <strong>Which is the same argument as the six branches, wearing different clothes.</strong> That list sorted the practice by caste \u2014 meditation and scholarship at the top, the body at the bottom. This one sorts it by disposable income. The question does not change: <em>who has the time to study, and who is bathing in the ashes of the dead.</em>'},

      {p:'Science peaks in the late seventies, goes quiet, and comes back when MRI gets cheap. <em>This class is part of that wave.</em>', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},

      {p:'<strong>2001: I took my first yoga class in college. The course catalog called it \u201cstretch and relaxation.\u201d</strong>', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'}
    ]
  }
}

window.TIMELINE = [
  /* ⭐ SIX COLUMNS. His layout, 8 Sep: the last column starts at the fifties; everything from the
     roaring twenties back moves into TRANSCENDENTAL; and THE ENLIGHTENMENT stacks UNDER the
     Crusades at the same x, which frees a slot and stops the middle of the axis from crowding.
     `top` is optional — a column without one starts at the head line. The stacked one runs its
     leader down the left edge of the column above it rather than through its text. */

{ card:'era-pre', col:0.015, from:0.000, to:0.038, label:'BEFORE THE MAP', span:'to 3000 BCE',
    rows:[
      { at:0.002, y:'before all of it', n:'Vishnu&rsquo;s dream, and the Om', body:[
        {p:'The Brahma bull pronounces the sacred syllable and Vishnu&rsquo;s dream begins &mdash; a metaphor for the universe holding itself to a single thread of the multiverse <em>through observation</em>.', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'},
        {p:'And it still reverberates. You resonate with it when you om &mdash; and if you listen carefully after you stop, in the moment of silence before the next inhale, you can hear the universe om back. In a good cave it never stops. <em>Echo resonance, not just being a hippy.</em>'},
        {p:'The universe as we know it is basically Vishnu&rsquo;s lucid dream. Which is the same thing we do in class when we take a five minute beach vacation in our minds. <strong>That is the first yoga.</strong>'},
        {p:'Some theories have chanting and toning predating language &mdash; and being what led to language.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'}
      ]},
      { at:0.008, y:'the first lesson', n:'Shiva, as yogi, teaching Parvati', body:[
        {p:'The first yoga lesson anybody tells a story about. Shiva on a mountaintop, teaching Parvati. Eighty-four asanas.'},
        {p:'<em>The PG-13 version of that story ends right there.</em>'},
        {p:'And there was no mat. It was a bed &mdash; which is what makes the PG-13 version hard to animate.'},
        {p:'And the honest part: <strong>we still have no idea what he was actually doing.</strong> Either the concept was so ever-present that no explanation was required, or it was regarded as a special skill bordering on magic &mdash; another thing Shiva had mastered, shrouded in secrecy. <em>No one&rsquo;s gonna buy the cow if you can get the milk for free.</em>', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'},
        {p:'&#9888; The 84-asana story is sourced to the Mahanirvana Tantra, which is an <strong>18th-century</strong> text. The teaching frame of Shiva instructing Parvati is genuinely ancient; that particular telling of it is one of the latest things you could cite.'}
      ]},
      { at:0.014, y:'3102 BCE', n:'Arjuna&rsquo;s chariot ride', body:[
        {p:'Krishna is his charioteer, a friend he has known since childhood, and then all of time and space freezes except for the two of them.'},
        {p:'<em>He didn&rsquo;t know till just then, so it wasn&rsquo;t like he was keeping it a secret or anything.</em>', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'},
        {p:'Traditionally the start of Kali Yuga. <strong>We go by tradition here, not by history</strong> &mdash; but the footnote is worth having: the text that reports this conversation was written between 200 BCE and 200 CE. <em>The story is set three thousand years before the book that tells it.</em>'},
        {p:'And if you ask Arjuna, any one of you may suddenly remember all of your lifetimes &mdash; at which point your viewpoint zooms out one level of the fractal, and you are basically Vishnu.', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'}
      ]},
      { at:0.026, y:'c. 2900 BCE', n:'the flood', body:[
        {p:'Everything left of here is told, not written. Comet, ice age ending, volcano &mdash; choose your own adventure, and all paths converge on a big flood. <em>All we have left are weird rock piles and graffiti.</em>', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'},
        {p:'&#9888; This is the sturdier of the two ancient anchors. There is a real silt layer at Shuruppak dated near 2900 BCE. The flood stories are not evidence-free.'},
        {p:'&#9888; The other one is not. <strong>&ldquo;Yoga is 5,000 years old&rdquo; is back-extrapolated</strong> &mdash; partly from a seated figure on an Indus Valley seal around 2500 BCE that may or may not be a yogi. Recognisable yoga turns up in the Upanishads, much later.'}
      ]},
      { at:0.184, y:'c. 1500 BCE', n:'the Vedas', body:[
        {p:'The Vedas describe meditation as <strong>an ancient formal practice</strong> &mdash; already old when they were written. That is where the back-estimate to 3000 BCE comes from.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'They also ran two streams at once, and the tradition named them itself. <strong>&#347;ruti</strong> &mdash; heard, and fixed, locked by recitation techniques redundant enough to catch a dropped syllable. <strong>Sm&#7771;ti</strong> &mdash; remembered, and plastic; the epics, retold and expanded every generation.'},
        {p:'It did not survive on better weather. Palm leaf rots. <strong>India kept its texts in people, not paper</strong> &mdash; and the memorised ones stayed soft. Writing hardcoded them, which was a mistake: <em>a story you can cite is a story you can be wrong about.</em>'}
      ]}
    ]},

{ card:'era-clump', col:0.215, from:0.249, to:0.391, label:'THE AXIAL AGE', span:'900 BCE &ndash; 400 CE',
    rows:[
      { at:0.249, y:'c. 900 BCE', n:'the Torah', body:[
        {p:'It refers to meditative practice as if it were a common, well-understood behaviour. Nobody is introducing the idea; everybody already has it.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'<strong>That is the useful part.</strong> Nobody explains a practice everybody already has. It is evidence of ubiquity, not of origin.'}
      ]},
      { at:0.260, y:'c. 800 BCE', n:'the Upanishads', body:[
        {p:'<strong>The OG.</strong> Yoga in a shape you would recognise &mdash; the Katha has the chariot and the yoke.'},
        {p:'Same span as Mesoamerica and the pyramids, but still a living document when Hebrew, Greek and Latin were being written. Better translations, no philosopher&rsquo;s stone needed. <em>The fan fic survived.</em>'}
      ]},
      { at:0.282, y:'c. 600 BCE', n:'Taoism', body:[
        {p:'<strong>The turn.</strong> Meditation stops being purely spiritual and becomes a <em>skill</em> &mdash; a tool you use on yourself, with benefits you can talk about outside the temple.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'&#9888; <strong>And this is the ancestor of the hospital.</strong> The first time anyone discusses the benefits outside a spiritual frame is the first step on a road that ends with an eight-week protocol at a medical school in 1979.'}
      ]},
      { at:0.293, y:'c. 400 BCE', n:'Siddhartha', body:[
        {p:'And Confucius, and Socrates, and the Hebrew prophets. Independent regions, no contact, one window. Historians call it the <strong>Axial Age</strong>.'},
        {p:'The entire practice of Buddhism can be considered meditation. And the tell that this is one lineage rather than parallel invention: <strong>Buddhists use the same word the Vedas and yoga use &mdash; dhyana.</strong>', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'&#9888; Traditional dates are 563&ndash;483 BCE, but scholarship has moved his death <em>later</em>, toward 400 &mdash; which pulls him toward the rest of the cluster rather than away from it.'}
      ]},
      { at:0.325, y:'c. 200 BCE', n:'Patanjali?', body:[
        {p:'The Sutras. The eight limbs get written down and get an author &mdash; which the six branches never do. That asymmetry is why one column of the tree hangs off a date and the other does not.'},
        {p:'&#9888; He has two ticks on this timeline on purpose. Tradition puts the Sutras near 200 BCE; current scholarship argues c. 400 CE. Taking the early end puts Siddhartha, the Sutras and Christ inside four centuries.'}
      ]},
      { at:0.347, y:'0', n:'Christ', body:[
        {p:'Vishnu comes back as a Jew this time, and they spell it Christ. Same guy. <em>Not really blue.</em>'},
        {p:'First trick was at a party. Both are known for party tricks.'},
        {p:'He lands <em>late</em> in this column, not early &mdash; five hundred years after the cluster. By then the Silk Road is open and it is a thriving industry: everybody wants a cut of the missionary business.'},
        {p:'It also makes Hindus notoriously hard to convert. <em>&ldquo;Oh yeah, I know this story. We were wondering where he was, he was late. Got in a big fight at the temple back home and had to leave.&rdquo;</em>', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'}
      ]},
      { at:0.369, y:'c. 200 CE', n:'the Gita written down', body:[
        {p:'The conversation on the battlefield finally becomes a book &mdash; three thousand years after it is set.'},
        {p:'<strong>This is the two clocks, side by side on one page.</strong> Arjuna&rsquo;s ride is in the first column because that is where tradition puts it. The book is here, because that is when somebody wrote it.'},
        {p:'<em>Someone decided to start writing down their favourite episodes, like fan fiction.</em> The Gita is a later season &mdash; it gets kind of sci-fi when Krishna freezes timespace.', cite:'A Brief History of Nothing', href:'https://docs.google.com/document/d/1QaDIxvlvZ5Wcj_zLei7v2j54Gk54xr3Oq7ArDWCtdX4/edit'}
      ]},
      { at:0.391, y:'c. 400 CE', n:'Patanjali?', body:[
        {p:'The other end of the argument. Current scholarship dates the Yoga Sutras here rather than to the 2nd century BCE.'},
        {p:'The column is wide enough to hold both, and holding both is more honest than picking one.'}
      ]}
    ]},

{ card:'era-crusades', col:0.405, from:0.460, to:0.494, label:'THE CRUSADES', span:'1095 &ndash; 1291',
    rows:[
      { at:0.467, y:'1095', n:'the First Crusade', body:[
        {p:'Forced contact between Latin Christendom, Byzantium and the Islamic world &mdash; and within about a century, meditation gets a makeover in four traditions at once.'},
        {p:'&#9888; Where the framing strains, and it is worth saying in class: al-Ghazali dies in 1111 and Symeon in 1022, so half of this predates or straddles the First Crusade. The contact routes &mdash; trade, and Al-Andalus &mdash; were already open. <strong>Contemporaneous rather than obviously caused by</strong>, which arguably makes it the more interesting convergence.'}
      ]},
      { at:0.470, y:'1111', n:'al-Ghazali', body:[
        {p:'Sufi practice is formalised and systematised &mdash; dhikr becomes a structure rather than a habit.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'He is the figure who reconciled the mystical practice with orthodox theology &mdash; which is what let it be taught openly rather than quietly.'},
      {p:'The same move, in a different century, as taking the Buddhism out of meditation so a ward can teach it. <strong>Make it acceptable to the institution and it survives.</strong>'}
      ]},
      { at:0.476, y:'c. 1150', n:'the ladder', body:[
        {p:'A Latin monk writes <strong>read, ponder, pray, contemplate</strong> into a formal structure he calls a ladder.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'Guigo II, a Carthusian &mdash; the <em>Scala Claustralium</em>. In the original: <em>lectio, meditatio, oratio, contemplatio</em>. Those are the same four words.'},
        {p:'In the same window: Byzantine monks fix prayer to posture and repetition (hesychasm), and Zen begins being taught apart from Buddhism as Chan gets its Song-dynasty codification.'}
      ]},
      { at:0.488, y:'1291', n:'the last Crusade', body:[
        {p:'The window closes. Then roughly six hundred years pass in which nothing much changes &mdash; monks around the world quietly develop and pass on the practice.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'And then roughly six hundred years in which nothing much changes. Monks around the world quietly develop and pass on the practice, and nobody writes a new system.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'<strong>Which is worth sitting with.</strong> The gap between this and the next column is longer than the gap between the Upanishads and Patanjali.'}
      ]}
    ]},

  { card:'era-enlightenment', col:0.405, top:0.470, from:0.518, to:0.548,
    label:'THE ENLIGHTENMENT', span:'1685 &ndash; 1815',
    rows:[
      { at:0.540, y:'1784', n:'the Asiatic Society', body:[
        {p:'British orientalist scholarship starts cataloguing and <strong>printing</strong> Sanskrit texts. Max M&uuml;ller&rsquo;s <em>Sacred Books of the East</em> follows.'},
        {p:'&#9888; And this runs both directions, which is the uncomfortable half. Educated Indians began reading their own tradition back out of colonial editions. What had been kept in people was now kept in books &mdash; catalogued by the people who had colonised them.'}
      ]},
      { at:0.542, y:'1785', n:'the Gita in English', body:[
        {p:'The ancient texts start circulating in languages that are not Sanskrit. More people than ever get access to the concepts &mdash; better translations, no philosopher&rsquo;s stone needed.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
      {p:'Charles Wilkins &mdash; the first direct translation of a major Sanskrit work into English. Before this you needed Sanskrit, or a teacher, or both.'},
      {p:'<strong>It is the hinge of the whole Enlightenment column.</strong> Everything downstream &mdash; Thoreau, the Theosophists, Vivekananda&rsquo;s audience &mdash; is people who could finally read it.'}
      ]}
    ],
    ticks:[0.527,0.540,0.542] },

  { card:'era-transcendental', col:0.575, from:0.548, to:0.706,
    label:'TRANSCENDENTAL', span:'1830s &ndash; the 1930s',
    rows:[
      { at:0.549, y:'1854', n:'Walden', body:[
        {p:'The West rediscovers the practice and writes it down in its own voice. Whitman and Thoreau.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'Hatha is practised in British India for the first time in centuries in this same window.'},
        {p:'&#9888; <strong>Strictly, this one is past the Enlightenment.</strong> That runs c. 1685&ndash;1815; Wilkins&rsquo; Gita in 1785 sits inside it, but Walden is <em>Transcendentalism</em>. The column holds both because the story does.'},
        {p:'And the name is doing double duty on purpose. The European Enlightenment is named for reason displacing religion &mdash; and it labels the exact window in which the West began importing eastern spirituality. <em>Enlightenment</em> is also the word we reach for to translate samadhi.'}
      ]},
      { at:0.550, y:'by 1850', n:'hatha nearly gone', body:[
        {p:'<em>The physical practice of hatha yoga had all but disappeared from the world by 1850.</em>'},
        {p:'<strong>The column closes on almost nothing.</strong> Which is the fact that makes the next column absurd.'},
        {p:'&#9888; <strong>I used to say the mat was invented in this window. It was not, and I have cut it.</strong> The mat is 1967. It is in the modern column now, where it belongs, and the true date is better for the argument anyway.'}
      ]},
      { at:0.596, y:'1851 onward', n:'yoga as an exhibit', body:[
        {p:'<strong>Before yoga was a practice in the West, it was an act.</strong> World\u2019s fairs, exhibitions, travelling shows. India arrives as spectacle, and the yogi shares a bill with the contortionist.'},
        {p:'The contortionist. The street beggar. The rope trick. The levitating man with his staff. <strong>All of it comes from the same drive</strong> \u2014 a Victorian appetite for an East that is mystical, bendable, and safely far away.'},
        {p:'&#9888; The famous Indian rope trick is a documented hoax: invented by a Chicago newspaper in 1890 and admitted as fabrication the following year. That never stopped anyone believing it.'},
        {p:'Which is the surface the practice travelled on \u2014 cork and rubber matting rolled over a dirty floor to make a clean stage, and a demonstration to sell. <strong>The mat arrives as a prop long before it arrives as equipment.</strong>'},
        {p:'And there was no mat before that. There was a bed \u2014 which is what makes the PG-13 version of the Shiva and Parvati story hard to animate.'},
        {p:'<strong>And this never stops.</strong> The little raised stage carries straight through the century, out of the exhibition hall and into the heated room, where the teacher still stands on a platform above the class and the class still faces front.'}
      ]},
      { at:0.600, y:'1875', n:'the Theosophists', body:[
        {p:'The Victorian appetite for the ancient and the occult &mdash; Theosophy founded in 1875, Egyptomania, the Golden Dawn in 1888, the Orient Express running from 1883. The east becomes fashionable in drawing rooms.'},
        {p:'The Theosophical Society moves its headquarters to Adyar, Madras, in 1882. It is one of the main pipes through which Indian ideas reach the West &mdash; and it is also how a lot of Western assumptions flow back the other way.'}
      ]},
      { at:0.606, y:'1875&ndash;97', n:'rediscovering the roots', body:[
        {p:'Colonialism produces a counter-current: Indian reform movements re-reading the tradition and re-presenting it. Arya Samaj in 1875, Vivekananda&rsquo;s Ramakrishna Mission in 1897. Scholars call the result <strong>Neo-Vedanta</strong>.'},
        {p:'<strong>And this is where the asana practice you are about to do actually comes from.</strong> Modern postural yoga was substantially <em>reassembled</em> in this window &mdash; blended with European physical culture, gymnastics and Scandinavian drill &mdash; arriving at Krishnamacharya&rsquo;s Mysore Palace school in the 1930s. The scholarship is Mark Singleton&rsquo;s <em>Yoga Body</em>.'},
        {p:'So the sequence in this room has <strong>a colonial gymnasium in its ancestry, not only a cave.</strong> I teach that on purpose. You are owed the real lineage, and the real one is more interesting: a practice that had all but died being rebuilt, by colonised people, out of their own texts and their coloniser\u2019s drill manuals, and then sold back to the world.'}
      ]},
      { at:0.616, y:'1893', n:'Vivekananda', body:[
        {p:'At the World&rsquo;s Parliament of Religions, held inside the Chicago World&rsquo;s Fair. A man from Calcutta explains Vedanta to America and America claps.'},
        {p:'This is downstream of the <strong>Bengal Renaissance</strong> &mdash; which is why 1860 is a tick on this axis at all. It is not a yoga date. It is the Indian cultural revival that re-popularised hatha and became the same current that eventually produces Indian cinema. Tagore is born in 1861.'}
      ]},
      { at:0.670, y:'1920', n:'Yogananda', body:[
        {p:'Arrives in the United States and never really leaves. The Roaring Twenties squeeze him in alongside everything else.'},
      {p:'He founds the Self-Realization Fellowship the same year and stays for the rest of his life. His autobiography, published in 1946, is still the book most Westerners meet this through.'},
      {p:'<strong>He is the roaring twenties man</strong> &mdash; arriving in the same window as the shorter skirts, the chakras, and the Tibetan Book of the Dead. Everybody is squeezing something in.'}
      ]},
      { at:0.700, y:'the 1930s', n:'Krishnamacharya', body:[
        {p:'The Mysore Palace school. <strong>Everything you have ever taken a class in walks out of this one room.</strong>'},
        {p:'Two of his students: <strong>Pattabhi Jois</strong> leaves with flowing, breath-linked sequences. <strong>Iyengar</strong> &mdash; also his brother-in-law &mdash; leaves with props, belts, blocks and long precise holds. Same teacher, same decade, two practices that are the opposite of each other, and both now sold as ancient.'},
        {p:'&#9888; <strong>And the flow is not in Patanjali.</strong> The Sutras give posture three lines, and the operative one is <em>sthira sukham asanam</em> &mdash; a seat that is steady and comfortable. No sequences. No vinyasa. Asana there is how you sit so your leg does not fall asleep while you meditate.'},
        {p:'Jois traced the vinyasa system to a text called the <strong>Yoga Korunta</strong>, which Krishnamacharya said he found in a Calcutta library. Written on palm leaf. <strong>Legend has it the manuscript was destroyed by ants.</strong>'},
        {p:'&#9888; Which lands exactly on the problem from the Vedas card. <em>Palm leaf rots</em> &mdash; that is precisely why India kept its texts in people rather than paper. So the destruction is entirely plausible <strong>and</strong> entirely convenient: the one document that would prove the ancient lineage got eaten, and what survives is a memory of it.'},
        {p:'No copy has ever been produced.'}
      ]},
      { at:0.684, y:'1927', n:'Book of the Dead', body:[
        {p:'The Tibetan Book of the Dead is published in English.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'Chakras arrive in the same stretch &mdash; Woodroffe&rsquo;s <em>Serpent Power</em> in 1919, and Jung running Kundalini seminars by 1932.'}
      ]}
    ],
    ticks:[0.549,0.550,0.600,0.606,0.616,0.670,0.684,0.700] },

  { card:'era-modern', col:0.755, from:0.720, to:0.960,
    label:'MODERN', span:'the 1950s &ndash; now',
    rows:[
      { at:0.730, y:'the 1950s', n:'beatniks', body:[
        {p:'A great time to be white. And notice the direction of travel: <strong>we had to go to them.</strong>'},
        {p:'It arrives as a telephone game through translators, and what comes back is whatever survived the trip.'}
      ]},
      { at:0.756, y:'1964', n:'the Belgian', body:[
        {p:'<strong>Andr&eacute; Van Lysebeth</strong> is the first Westerner through Pattabhi Jois&rsquo;s door. Two months in Mysore on the primary and intermediate series.'},
        {p:'Then he goes home and publishes <em>Pranayama</em> &mdash; <strong>with a photograph of Jois in it.</strong> That picture is what sends Europeans and Americans to Mysore.'},
        {p:'One man, one book, one photograph. That is the entire vector by which this reaches the West.'},
        {p:'&#9888; He was Belgian, and French-speaking, which is why the story usually gets remembered as a Frenchman. 1919&ndash;2004.'}
      ]},
      { at:0.762, y:'1966', n:'Light on Yoga', body:[
        {p:'Iyengar. Then the Maharishi in 1968, and Transcendental Meditation built deliberately for people who were not Hindu.', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'Tune in, drop out.'}
      ]},
      { at:0.768, y:'1967', n:'the mat', lead:'The seat, by year.',
        doors:[
          ['in the Gita',   'kusha grass, then a deerskin, then a cloth &mdash; three layers'],
          ['for centuries', 'jute, straw and burlap matting. A skin, a rug, the bare ground. A bed.'],
          ['1839',          'vulcanised rubber makes flexible matting possible'],
          ['the 1950s',     'cork &mdash; standard gym and standing-room flooring'],
          ['1967',          '<strong>foam carpet padding &mdash; the first product for sale</strong>'],
          ['c. 1982',       'rubber carpet underlay, sold as a yoga product. Still underlay.'],
          ['the 1990s',     'the first mats actually designed for yoga'],
          ['the 2000s',     'natural tree rubber, cork, jute, TPE']
        ],
        body:[
          {p:'<strong>1967 is the first product for sale, not the first mat.</strong> Angela Farmer, an English teacher working in Germany, cut a piece of foam carpet padding to stand on. Her students wanted one. Her father tracked down the manufacturer and became the first person to sell them. She did not invent the mat \u2014 she invented the yoga mat as a thing you buy.'},
          {p:'So: <strong>the yoga mat is younger than the moon landing.</strong> It is newer than the seven-chakra chart, and newer than the trademark it gets rolled out under. Three thousand years of this practice happened on grass, skin, cloth and dirt.'},
          {p:'<strong>The yoga mat is barely older than your teacher.</strong>',
           cite:'Wikipedia: Yoga mat', href:'https://en.wikipedia.org/wiki/Yoga_mat'}
        ]},
      { at:0.772, y:'1971', n:'the gold standard', body:[
        {p:'Well. It was the seventies. Blame Nixon &mdash; off the gold standard in 1971, the HMO Act reshaping health care in 1973.'},
        {p:'Yoga turns up on public television. Science peaks late in the decade, then goes quiet until MRI gets cheap.'}
      ]},
      { at:0.815, y:'1987', n:'the seven chakras', body:[
        {p:'The seven-chakra system as everyone now knows it gets standardised in the West &mdash; Anodea Judith&rsquo;s <em>Wheels of Life</em>.'},
        {p:'&#9888; And the rainbow colours are newer than that. The chakras are not traditionally mapped to the visible spectrum at all; that comes from Christopher Hills in 1977.'},
        {p:'<strong>The chart everybody treats as ancient is the same age as the studios that could suddenly afford to print it.</strong>'}
      ]},
      { at:0.778, y:'1973', n:'the man on the podium', body:[
        {p:'<strong>Bikram Choudhury</strong> opens in Beverly Hills. Twenty-six postures, a room at a hundred and five degrees, and the teacher on a raised platform in a speedo.'},
        {p:'<strong>It is the exhibition act, indoors.</strong> The mini stage from the world\u2019s fair, the demonstration, the man elevated above the floor \u2014 staged on the traditional seat of a yogi, which is the exact lineage he is claiming while wearing swimwear.'},
        {p:'He then tried to <strong>copyright the sequence itself</strong>. US courts said no: a sequence of postures is not copyrightable. That is the counterweight to the trademark story \u2014 the gate can be built, but it does not always hold.'},
        {p:'His empire collapsed under civil suits, including a multi-million dollar judgment in 2016, and he left the country.'},
        {p:'&#9888; <strong>The podium is the thing to watch.</strong> The fair, the platform, the authorized teacher list \u2014 every version of this is somebody standing above the room and selling the right to be there.'}
      ]},
      { at:0.788, y:'1979', n:'meditation enters the hospital', body:[
        {p:'<strong>Jon Kabat-Zinn</strong> starts the Stress Reduction Clinic at the University of Massachusetts Medical School and builds <strong>MBSR</strong> \u2014 Mindfulness-Based Stress Reduction. An eight-week protocol, in a hospital, for patients doctors had run out of options for.'},
        {p:'<strong>The move was subtraction.</strong> He took Buddhist practice and took the Buddhism out \u2014 no robes, no lineage, no belief required \u2014 and left a procedure with a curriculum and an evidence base. That is what a hospital can teach, study, and eventually bill for.'},
        {p:'&#9888; And that is how meditation reaches people who would never walk into a temple. <strong>It arrives as treatment.</strong> Chronic pain, anxiety, relapse prevention \u2014 later MBCT for depression, now a standard recommendation in places that would not have touched this in 1979.'},
        {p:'His books carry it out of the clinic, and from there it lands in rehabs, mental hospitals and jails. Which is how a lot of people meet it. Including some of us.'},
        {p:'<strong>The trade is worth naming.</strong> Stripping the religion out is what got it through the door, and it is also what got left behind. Dharana without the other seven limbs is a technique, not a path. A fair price for something that works on a ward \u2014 but a price.'}
      ]},
      { at:0.792, y:'the 1980s', n:'tax cuts', body:[
        {p:'The tax cuts for the rich actually start &mdash; so rich white people could afford yoga classes again.'},
        
        {p:'<strong>Which is the six branches wearing different clothes.</strong> That list sorted the practice by caste: meditation and scholarship at the top, the body at the bottom. This one sorts it by disposable income. The question does not change &mdash; <em>who has time to study and read, and who is bathing in the ashes of the dead.</em>'}
      ]},
      { at:0.912, y:'2010', n:'Eat Pray Love', body:[
        {p:'A Western woman goes to an ashram, and it becomes a film. <strong>If you want a single date for the mainstreaming, this is it.</strong>'},
        {p:'It measurably drove real yoga tourism \u2014 people flew to India because of a book. Which is the tourist trade reviving the practice all over again, a hundred and thirty years after the first time, and for the same reason.'},
        {p:'&#9888; Note the shape repeating. In the 1800s the audience was tourists and the performers were the untouchable class. In 2010 the audience is still tourists. Only the direction of travel changed.'}
      ]},
      { at:0.918, y:'2010', n:'the name gets claimed', body:[
        {p:'<em>K Pattabhi Jois Ashtanga Yoga Institute</em> is filed as a trademark on 14 May 2010, held by R. Sharath Jois &mdash; Pattabhi Jois&rsquo;s grandson.'},
        {p:'The push behind it is American money: a partnership with Sonia Jones, married to a hedge fund billionaire, to codify the teaching, open Jois Yoga boutique studios and launch a clothing line.'},
        {p:'This is also when you start hearing there are <em>more people practising in LA than in all of India</em> \u2014 an urban legend I have never been able to source, and exactly the sort of line people reach for when the argument is about who owns a thing.'},
        {p:'&#9888; <strong>The correction to the story I used to tell.</strong> It was not white men in the fifties taking the word. It is 2010, it is the lineage family claiming their own name, and it is financed from Greenwich. Which lands closer to the point, not further from it.'},
        {p:'And the enforcement is not a lawsuit. It is <strong>the authorized teacher list</strong>. Long-time teachers who let the practice evolve &mdash; used props, made modifications &mdash; quietly stopped appearing on it.'},
        {p:'So I cannot call this class Ashtanga because of <strong>a gate, not a statute</strong>. The bare word is <em>ashtau</em> plus <em>anga</em>: eight, limb. Nobody\u2019s mark stops me teaching the eight limbs and calling them that.'},
        {p:'<strong>Which is the same shape a third time.</strong> The six branches sorted people by caste. The eighties sorted them by money. The authorization list sorts teachers by obedience.'},
        {p:'<strong>Fact-checked 8 September 2026.</strong> I had been teaching a version of this where Americans took the word in the 1950s. That is not what the record shows, and I looked it up rather than keep repeating it. The filing date, the holder and the Jois Yoga partnership are all sourced below \u2014 go read them and correct me if they are wrong.',
         cite:'Wikipedia: K. Pattabhi Jois &middot; R. Sharath Jois', href:'https://en.wikipedia.org/wiki/K._Pattabhi_Jois'},
        {p:'&nbsp;', cite:'the trademark filing, and the branding controversy', href:'https://www.companyvakil.com/trademarksearch/K-PATTABHI-JOIS-ASHTANGA-YOGA-INSTITUTE/656183'}
      ]},
      { at:0.879, y:'2001', n:'&ldquo;stretch and relaxation&rdquo;', body:[
        {p:'<strong>I took my first yoga class in college. That is what the course catalog called it.</strong>', cite:'History of Meditation', href:'https://docs.google.com/document/d/1c8L5Xv5Bi6Dfbc2BHBIRqWL7AnCSHAOiWZC_wjK4Gq4/edit'},
        {p:'Today it is taught as a college class, mentioned in media and pop culture, made fun of in memes. The concept, if not the practice, is known universally.'}
      ]}
    ],
    ticks:[0.730,0.756,0.762,0.772,0.792,0.815,0.879,0.918] }
]

/* ── THE TREE'S TWO SIDES — six branches left of the trunk, eight limbs right.
   Name and card id only; the detail is in the card. Rough cut 8 Sep. */
window.TREE = {
  branches:[
    ['br-raja','RAJA'], ['br-jnana','JNANA'], ['br-karma','KARMA'],
    ['br-bhakti','BHAKTI'], ['br-tantra','TANTRA'], ['br-hatha','HATHA']
  ],
  limbs:[
    ['limb-yama','YAMA'], ['limb-niyama','NIYAMA'], ['limb-asana','ASANA'],
    ['limb-pranayama','PRANAYAMA'], ['limb-pratyahara','PRATYAHARA'],
    ['limb-dharana','DHARANA'], ['limb-dhyana','DHYANA'], ['samadhi','SAMADHI']
  ]
}

