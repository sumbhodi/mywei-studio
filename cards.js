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
         'doing work. <strong>Not part of an egg.</strong>', cite:'History of Yoga'},
      {p:'So yoga is a yoke. A connection, a union, a harness — a tool. Which leaves the only question '+
         'worth opening a class with: <strong>what are we harnessing?</strong>', cite:'History of Yoga'},
      {p:'The dictionary will tell you it is a Hindu spiritual and ascetic discipline, widely practised '+
         'for health and relaxation. True, and useless. That describes what people do on a Tuesday, not '+
         'what the word says.', cite:'OED'},
      {p:'<strong>Atman to Brahman.</strong> Those are the two ends of the yoke, and there is nothing '+
         'else on the list.'},
      {p:'In Advaita Vedanta — the non-dual tradition yoga draws from most heavily — the answer is that '+
         '<em>we are not yoking two separate things together. We are remembering that they were never '+
         'separate.</em>', cite:'History of Yoga'},
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
      {p:'<strong>Samadhi is the highest goal.</strong> A state of oneness. Easier to find on the cushion '+
         'or the mat, entirely achievable while doing the dishes, and <em>rude in a heated discussion '+
         'with a loved one.</em> Not good for watching a movie or a date night. Great for a long solo '+
         'hike and for gardening.'},
      {p:'Which is the middle way, and it is why the goal is stated carefully: <strong>to be able to find '+
         'it — not to stay there.</strong> Because it is technically a form of dissociation, and leaving '+
         'matters exactly as much as arriving.'},
      {p:'So the yoke is the tool we use to re-member what the brain split apart. Not destroying the ego '+
         '— <em>true ego death is suicide, it is just a matter of pace</em> — but loosening its grip. '+
         'Getting out of the pool long enough to dry off.', cite:'History of Yoga'},
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
         'part of Brahman wearing a body and wondering where it left its keys.</em>',
         cite:'History of Yoga'},
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
         'this one: <em>the self is the model, not the modeler.</em> The observer is the construction.',
         cite:'History of Yoga'}
    ]
  },

  /* ── BRAHMAN — the sheet ─────────────────────────────────────────────────── */
  brahman: {
    h:'BRAHMAN', sub:'the sheet',
    lead:'Not a god. Not a place. The fabric itself.',
    body:[
      {p:'The universe is not a container that holds things — it <em>is</em> what things are. One '+
         'continuous movement. No seams. No inside or outside. No pockets.', cite:'History of Yoga'},
      {p:'<em>This is why the universe is always losing its keys. No pockets.</em>',
         cite:'History of Yoga'},
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
         cite:'History of Yoga · The Wei', href:'https://www.ozhunga.com/B3/church/'},
      {p:'And the problem we do not paper over: if it really is all one sheet, walls are still hard to '+
         'avoid, and somebody still has to order the coffee. In here, out there, us and other — a '+
         'necessary illusion. You see through it and you order the coffee anyway. That is not hypocrisy. '+
         'That is the practice.'}
    ]
  },

  /* ── THE HISTORY — the rolled scroll below the timeline opens this ───────── */
  history: {
    h:'THE HISTORY', sub:'where all of it comes from',
    lead:'When did this begin? <strong>Before the universe.</strong>',
    body:[
      {p:'Most cosmogenesis stories involve some form of vibration or intention. In the beginning was '+
         'the Word. Vishnu\'s dream. The Logos.', cite:'History of Yoga'},
      {p:'If the universe burst into existence in a void — does it make a sound?', cite:'History of Yoga'},
      {p:'<em>I like to imagine a cosmic Brahma bull slowly pronouncing the syllable Ohm. That is '+
         'probably what it sounded like. It still echoes, if you listen.</em>', cite:'History of Yoga'},
      {p:'And the sidebar, for anyone who wants it: the Big Bang did produce acoustic pressure waves — '+
         'oscillations that shaped how matter is distributed across the observable universe. '+
         '<strong>The cosmos literally has a frequency.</strong> This is not fan fiction.',
         cite:'History of Yoga'},
      {p:'<strong>There is an actual lineage.</strong> Krishna describes it directly in the Bhagavad '+
         'Gita: he taught this yoga first to Vivasvan, the sun god; Vivasvan to Manu, the first king; '+
         'Manu to Ikshvaku. Sun to earth to kings to teachers to you.', cite:'History of Yoga'},
      {p:'The first yoga lesson we have a story for: <strong>Shiva, on a mountaintop, teaching '+
         'Parvati.</strong> Eighty-four asanas. From the Mahanirvana Tantra.', cite:'History of Yoga'},
      {p:'<em>The PG-13 version of that story ends right there.</em>', cite:'History of Yoga'},
      {p:'What matters is this: it is not a modern wellness trend, and it was not invented by Lululemon. '+
         'It is a technology for consciousness older than writing, with a direct lineage from teacher to '+
         'student reaching back to the beginning of recorded thought. <strong>And possibly before.</strong>',
         cite:'History of Yoga'}
    ]
  },

  /* ── THE FIVE ERAS — each is a name on the timeline, and the name is a door ─────
     His call, 8 Sep: "each date is just a name on timeline, click for card... open a scroll for
     details." So the axis stays legible and the detail lives in a scroll, like everything else. */

  'era-pre': {
    h:'BEFORE THE MAP', sub:'to 3000 BCE',
    lead:'Everything left of here is told, not written.',
    body:[
      {p:'Shiva on a mountaintop, teaching Parvati. The first lesson anybody tells a story about \u2014 and <em>we still have no idea what he was actually doing</em>. Either it was so ordinary nobody bothered to explain it, or it was a guarded skill bordering on magic.', cite:'A Brief History of Nothing'},
      {p:'Before that, the Brahma bull pronouncing the syllable, and Vishnu\u2019s dream beginning. Some theories have chanting and toning predating language \u2014 and being what led to language.', cite:'History of Meditation'},
      {p:'This is where the deluge sits, and where recorded history more or less starts.'},
      {p:'\u26a0 <strong>On \u201cyoga is 5,000 years old.\u201d</strong> That number is back-extrapolated. Part of it leans on a seated figure on an Indus Valley seal around 2500 BCE that may or may not be a yogi \u2014 genuinely contested. Recognisable yoga turns up in the Upanishads, much later. The flood is the sturdier anchor of the two: there is a real silt layer at Shuruppak dated near 2900 BCE.'}
    ]
  },

  'era-clump': {
    h:'THE CLUMP', sub:'900 BCE \u2013 400 CE',
    lead:'Everything at once, from places that were not talking to each other.',
    body:[
      {p:'Upanishads. Taoism. Siddhartha. Confucius. Socrates. The Hebrew prophets. Independent regions, no contact, one window.'},
      {p:'<strong>Taoism is the turn.</strong> Meditation stops being purely spiritual and becomes a <em>skill</em> \u2014 a tool you use on yourself, with benefits you can talk about.', cite:'History of Meditation'},
      {p:'Then the Silk Road opens and it stops being local. Buddhism travels it, and the word travels with it: Buddhists use the same word the Vedas and yoga use \u2014 <em>dhyana</em>. That shared word is the tell that this is one lineage rather than parallel invention.', cite:'History of Meditation'},
      {p:'Christ lands <em>late</em> in this column, not early. By then the missionary business is thriving and everybody wants a cut.'},
      {p:'\u26a0 <strong>Two notes.</strong> Historians call the first half of this the <em>Axial Age</em>. And Patanjali gets two ticks on purpose \u2014 tradition puts the Sutras near 200 BCE, current scholarship argues c. 400 CE. The column is wide enough to hold the argument.'}
    ]
  },

  'era-crusades': {
    h:'THE CRUSADES', sub:'1095 \u2013 1291',
    lead:'Meditation gets a makeover across the board \u2014 four traditions, one century.',
    body:[
      {p:'Sufi practice is systematised. Byzantine monks fix prayer to posture and repetition. A Carthusian writes <em>read, ponder, pray, contemplate</em> into a formal ladder. And Zen starts being taught apart from Buddhism.', cite:'History of Meditation'},
      {p:'Nobody has settled whether they influenced each other or simply arrived at the same place at the same time.', cite:'History of Meditation'},
      {p:'Every piece has a name, if you want them: Guigo II\u2019s <em>Scala Claustralium</em>, c. 1150, is the ladder. The Byzantine one is <em>hesychasm</em>. The Sufi one runs through al-Ghazali. Chan gets its Song-dynasty codification in the same window.'},
      {p:'\u26a0 <strong>Where the Crusades framing strains.</strong> Symeon dies in 1022 and al-Ghazali in 1111, so half of this predates or straddles the First Crusade. The contact routes \u2014 trade, and Al-Andalus \u2014 were already open. Contemporaneous, then, rather than obviously caused by \u2014 which arguably makes it the more interesting convergence, not the less.'}
    ]
  },

  'era-enlightenment': {
    h:'THE ENLIGHTENMENT', sub:'1650 \u2013 1860',
    lead:'The West rediscovers it, and for the first time gets to read it.',
    body:[
      {p:'The Gita is translated into English in 1785. The ancient texts start circulating in languages that are not Sanskrit \u2014 better translations, no philosopher\u2019s stone needed.', cite:'History of Meditation'},
      {p:'Hatha is practised in British India for the first time in centuries. Whitman and Thoreau. <em>Walden</em>.', cite:'History of Meditation'},
      {p:'And the mat is invented in this window. Before that it was a bed \u2014 which is what makes the PG-13 version of the Shiva and Parvati story hard to animate.'},
      {p:'<strong>The column closes on almost nothing.</strong> By 1850 the physical practice had all but disappeared from the world.', cite:'The Six Branches'}
    ]
  },

  'era-modern': {
    h:'MODERN', sub:'1860 \u2013 now',
    lead:'1860 is on the axis for a reason, and it is not a yoga date.',
    body:[
      {p:'<strong>It is the Bengal Renaissance</strong> \u2014 the Indian cultural and intellectual revival running through the nineteenth century and out the other side. It is what re-popularised hatha yoga, and it is the same current that eventually produces Indian cinema. Tagore is born in 1861.'},
      {p:'Vivekananda in Chicago, 1893. The Tibetan Book of the Dead in English, 1927. The first scientific studies around 1931.', cite:'History of Meditation'},
      {p:'Then the secular versions built for people who were not Hindu \u2014 Transcendental Meditation in the sixties, and Ashtanga Vinyasa becoming, in the West, simply <em>Yoga</em>.', cite:'History of Meditation'},
      {p:'Science peaks in the late seventies, goes quiet, and comes back when MRI gets cheap. <em>This class is part of that wave.</em>', cite:'History of Meditation'},
      {p:'By the eighties there were more people practising hatha in Los Angeles than in all of India.', cite:'The Six Branches'},
      {p:'<strong>2001: I took my first yoga class in college. The course catalog called it \u201cstretch and relaxation.\u201d</strong>', cite:'History of Meditation'}
    ]
  }
}

window.TIMELINE = [
  /* the axis carries the NAME only; `card` is the scroll it opens. `ticks` give each bracket its
     density — the clump is visibly crowded, and that crowding is the argument. */
  { card:'era-pre',           from:0.000, to:0.038, label:'BEFORE THE MAP',
    ticks:[0.004,0.014,0.026] },
  { card:'era-clump',         from:0.249, to:0.391, label:'THE CLUMP',
    ticks:[0.249,0.26,0.282,0.293,0.325,0.347,0.369,0.391] },
  { card:'era-crusades',      from:0.460, to:0.494, label:'THE CRUSADES',
    ticks:[0.467,0.470,0.476,0.488] },
  { card:'era-enlightenment', from:0.518, to:0.554, label:'THE ENLIGHTENMENT',
    ticks:[0.527,0.542,0.549] },
  { card:'era-modern',        from:0.616, to:0.960, label:'MODERN',
    ticks:[0.616,0.684,0.692,0.75,0.79,0.879] }
]
