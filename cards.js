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
      {p:'<button class="inline-door" type="button" data-scroll="samadhi" aria-haspopup="dialog">Samadhi</button> <strong>is the highest goal.</strong> A state of oneness. Easier to find on the cushion '+
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
  samadhi: {
    h:'SAMADHI', sub:'the eighth limb \u2014 and the one to be careful with',
    lead:'Bliss. Enlightenment. Oneness.',
    body:[
      {p:'<em>Bliss, enlightenment, oneness.</em>', cite:'The 8 Limbs'},
      {p:'Naming it pulls you out of it. So it gets explained one time, and then left alone \u2014 I rarely mention it again after that.'},
      {p:'A state of oneness. Easier to find on the cushion or the mat, entirely achievable while doing the dishes, and <em>rude in a heated discussion with a loved one</em>. Not good for watching a movie or a date night. Great for a long solo hike and for gardening.'},
      {p:'<strong>Find the seat. Turn the brain off. Unplug it \u2014 and then plug it back in.</strong> Find sukhasana and samadhi, and leave before you need to change your shorts.'},

      {p:'<strong>Now the part I tell you on the first day, so it is not a surprise later.</strong>'},
      {p:'<em>I am a special case. I love doing nothing. My first mental hospitalization was due to catatonia. I was completely unresponsive. Nothing was distracting me from my meditation. I was deep.</em>', cite:'A Meditation on Meditation'},
      {p:'<em>In fact I have struggled with being addicted to doing nothing. It is what led to my chronic homelessness. <strong>If you sit in zazen long enough you eventually wind up in a pile of crap.</strong> The body does not stop processing, after all.</em>', cite:'A Meditation on Meditation'},
      {p:'So when I say <strong>true enlightenment is useless</strong>, that is not a bit. It is a report.'},

      {p:'<strong>And the line that has to come with it:</strong> <em>I would never recommend insanity, addiction and psychosis for anyone else. But they always worked for me. So have asana, pranayama and pratyahara.</em>', cite:'A Meditation on Meditation'},

      {p:'Which is why the goal is stated the careful way. <strong>To be able to find it \u2014 not to stay there.</strong> It is technically a form of dissociation, and <em>leaving matters exactly as much as arriving.</em>'},
      {p:'That is the middle way, and it is the whole reason this class has a door on both ends. I am not selling you somewhere to go. I am teaching you a seat you can get up from.'}
    ]
  },

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
    h:'THE AXIAL AGE', sub:'900 BCE \u2013 400 CE',
    lead:'Everything at once, from places that were not talking to each other.',
    body:[
      {p:'Upanishads. Taoism. Siddhartha. Confucius. Socrates. The Hebrew prophets. Independent regions, no contact, one window.'},
      {p:'<strong>The name is Karl Jaspers\u2019.</strong> He called it the Axial Age, and the argument about whether it is one phenomenon or a coincidence we have named is still live. Either answer is interesting.'},
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
    h:'THE ENLIGHTENMENT', sub:'1685 \u2013 1815',
    lead:'The West rediscovers it, and for the first time gets to read it.',
    body:[
      {p:'The Gita is translated into English in 1785. The ancient texts start circulating in languages that are not Sanskrit \u2014 better translations, no philosopher\u2019s stone needed.', cite:'History of Meditation'},
      {p:'Hatha is practised in British India for the first time in centuries. Whitman and Thoreau. <em>Walden</em>.', cite:'History of Meditation'},
      {p:'And the mat is invented in this window. Before that it was a bed \u2014 which is what makes the PG-13 version of the Shiva and Parvati story hard to animate.'},
      {p:'<strong>The column closes on almost nothing.</strong> By 1850 the physical practice had all but disappeared from the world.', cite:'The Six Branches'}
    ]
  },

  'era-transcendental': {
    h:'TRANSCENDENTAL', sub:'1830s \u2013 the 1920s',
    lead:'The century where the West stops translating it and starts believing it.',
    body:[
      {p:'Whitman and Thoreau first \u2014 the texts arrive in English and immediately turn into American writing. <em>Walden</em> in 1854.', cite:'History of Meditation'},
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

      {p:'<strong>And then the eighties</strong>, when the tax cuts for the rich actually start \u2014 so rich white people could afford yoga classes again. By then there were more people practising hatha in Los Angeles than in all of India.', cite:'The Six Branches'},

      {p:'\u26a0 <strong>Which is the same argument as the six branches, wearing different clothes.</strong> That list sorted the practice by caste \u2014 meditation and scholarship at the top, the body at the bottom. This one sorts it by disposable income. The question does not change: <em>who has the time to study, and who is bathing in the ashes of the dead.</em>'},

      {p:'Science peaks in the late seventies, goes quiet, and comes back when MRI gets cheap. <em>This class is part of that wave.</em>', cite:'History of Meditation'},

      {p:'<strong>2001: I took my first yoga class in college. The course catalog called it \u201cstretch and relaxation.\u201d</strong>', cite:'History of Meditation'}
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
        {p:'The Brahma bull pronounces the sacred syllable and Vishnu&rsquo;s dream begins &mdash; a metaphor for the universe holding itself to a single thread of the multiverse <em>through observation</em>.', cite:'A Brief History of Nothing'},
        {p:'And it still reverberates. You resonate with it when you om &mdash; and if you listen carefully after you stop, in the moment of silence before the next inhale, you can hear the universe om back. In a good cave it never stops. <em>Echo resonance, not just being a hippy.</em>'},
        {p:'The universe as we know it is basically Vishnu&rsquo;s lucid dream. Which is the same thing we do in class when we take a five minute beach vacation in our minds. <strong>That is the first yoga.</strong>'},
        {p:'Some theories have chanting and toning predating language &mdash; and being what led to language.', cite:'History of Meditation'}
      ]},
      { at:0.008, y:'the first lesson', n:'Shiva, as yogi, teaching Parvati', body:[
        {p:'The first yoga lesson anybody tells a story about. Shiva on a mountaintop, teaching Parvati. Eighty-four asanas.'},
        {p:'<em>The PG-13 version of that story ends right there.</em>', cite:'History of Yoga'},
        {p:'And there was no mat. It was a bed &mdash; which is what makes the PG-13 version hard to animate.'},
        {p:'And the honest part: <strong>we still have no idea what he was actually doing.</strong> Either the concept was so ever-present that no explanation was required, or it was regarded as a special skill bordering on magic &mdash; another thing Shiva had mastered, shrouded in secrecy. <em>No one&rsquo;s gonna buy the cow if you can get the milk for free.</em>', cite:'A Brief History of Nothing'},
        {p:'&#9888; The 84-asana story is sourced to the Mahanirvana Tantra, which is an <strong>18th-century</strong> text. The teaching frame of Shiva instructing Parvati is genuinely ancient; that particular telling of it is one of the latest things you could cite.'}
      ]},
      { at:0.014, y:'3102 BCE', n:'Arjuna&rsquo;s chariot ride', body:[
        {p:'Krishna is his charioteer, a friend he has known since childhood, and then all of time and space freezes except for the two of them.'},
        {p:'<em>He didn&rsquo;t know till just then, so it wasn&rsquo;t like he was keeping it a secret or anything.</em>', cite:'A Brief History of Nothing'},
        {p:'Traditionally the start of Kali Yuga. <strong>We go by tradition here, not by history</strong> &mdash; but the footnote is worth having: the text that reports this conversation was written between 200 BCE and 200 CE. <em>The story is set three thousand years before the book that tells it.</em>'},
        {p:'And if you ask Arjuna, any one of you may suddenly remember all of your lifetimes &mdash; at which point your viewpoint zooms out one level of the fractal, and you are basically Vishnu.', cite:'A Brief History of Nothing'}
      ]},
      { at:0.026, y:'c. 2900 BCE', n:'the flood', body:[
        {p:'Everything left of here is told, not written. Comet, ice age ending, volcano &mdash; choose your own adventure, and all paths converge on a big flood. <em>All we have left are weird rock piles and graffiti.</em>', cite:'A Brief History of Nothing'},
        {p:'&#9888; This is the sturdier of the two ancient anchors. There is a real silt layer at Shuruppak dated near 2900 BCE. The flood stories are not evidence-free.'},
        {p:'&#9888; The other one is not. <strong>&ldquo;Yoga is 5,000 years old&rdquo; is back-extrapolated</strong> &mdash; partly from a seated figure on an Indus Valley seal around 2500 BCE that may or may not be a yogi. Recognisable yoga turns up in the Upanishads, much later.'}
      ]},
      { at:0.184, y:'c. 1500 BCE', n:'the Vedas', body:[
        {p:'The Vedas describe meditation as <strong>an ancient formal practice</strong> &mdash; already old when they were written. That is where the back-estimate to 3000 BCE comes from.', cite:'History of Meditation'},
        {p:'They also ran two streams at once, and the tradition named them itself. <strong>&#347;ruti</strong> &mdash; heard, and fixed, locked by recitation techniques redundant enough to catch a dropped syllable. <strong>Sm&#7771;ti</strong> &mdash; remembered, and plastic; the epics, retold and expanded every generation.'},
        {p:'It did not survive on better weather. Palm leaf rots. <strong>India kept its texts in people, not paper</strong> &mdash; and the memorised ones stayed soft. Writing hardcoded them, which was a mistake: <em>a story you can cite is a story you can be wrong about.</em>'}
      ]}
    ]},

{ card:'era-clump', col:0.215, from:0.249, to:0.391, label:'THE AXIAL AGE', span:'900 BCE &ndash; 400 CE',
    rows:[
      { at:0.249, y:'c. 900 BCE', n:'the Torah', body:[
        {p:'It refers to meditative practice as if it were a common, well-understood behaviour. Nobody is introducing the idea; everybody already has it.', cite:'History of Meditation'}
      ]},
      { at:0.260, y:'c. 800 BCE', n:'the Upanishads', body:[
        {p:'<strong>The OG.</strong> Yoga in a shape you would recognise &mdash; the Katha has the chariot and the yoke.'},
        {p:'Same span as Mesoamerica and the pyramids, but still a living document when Hebrew, Greek and Latin were being written. Better translations, no philosopher&rsquo;s stone needed. <em>The fan fic survived.</em>'}
      ]},
      { at:0.282, y:'c. 600 BCE', n:'Taoism', body:[
        {p:'<strong>The turn.</strong> Meditation stops being purely spiritual and becomes a <em>skill</em> &mdash; a tool you use on yourself, with benefits you can talk about outside the temple.', cite:'History of Meditation'}
      ]},
      { at:0.293, y:'c. 400 BCE', n:'Siddhartha', body:[
        {p:'And Confucius, and Socrates, and the Hebrew prophets. Independent regions, no contact, one window. Historians call it the <strong>Axial Age</strong>.'},
        {p:'The entire practice of Buddhism can be considered meditation. And the tell that this is one lineage rather than parallel invention: <strong>Buddhists use the same word the Vedas and yoga use &mdash; dhyana.</strong>', cite:'History of Meditation'},
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
        {p:'It also makes Hindus notoriously hard to convert. <em>&ldquo;Oh yeah, I know this story. We were wondering where he was, he was late. Got in a big fight at the temple back home and had to leave.&rdquo;</em>', cite:'A Brief History of Nothing'}
      ]},
      { at:0.369, y:'c. 200 CE', n:'the Gita written down', body:[
        {p:'The conversation on the battlefield finally becomes a book &mdash; three thousand years after it is set.'},
        {p:'<strong>This is the two clocks, side by side on one page.</strong> Arjuna&rsquo;s ride is in the first column because that is where tradition puts it. The book is here, because that is when somebody wrote it.'},
        {p:'<em>Someone decided to start writing down their favourite episodes, like fan fiction.</em> The Gita is a later season &mdash; it gets kind of sci-fi when Krishna freezes timespace.', cite:'A Brief History of Nothing'}
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
        {p:'Sufi practice is formalised and systematised &mdash; dhikr becomes a structure rather than a habit.', cite:'History of Meditation'}
      ]},
      { at:0.476, y:'c. 1150', n:'the ladder', body:[
        {p:'A Latin monk writes <strong>read, ponder, pray, contemplate</strong> into a formal structure he calls a ladder.', cite:'History of Meditation'},
        {p:'Guigo II, a Carthusian &mdash; the <em>Scala Claustralium</em>. In the original: <em>lectio, meditatio, oratio, contemplatio</em>. Those are the same four words.'},
        {p:'In the same window: Byzantine monks fix prayer to posture and repetition (hesychasm), and Zen begins being taught apart from Buddhism as Chan gets its Song-dynasty codification.'}
      ]},
      { at:0.488, y:'1291', n:'the last Crusade', body:[
        {p:'The window closes. Then roughly six hundred years pass in which nothing much changes &mdash; monks around the world quietly develop and pass on the practice.', cite:'History of Meditation'}
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
        {p:'The ancient texts start circulating in languages that are not Sanskrit. More people than ever get access to the concepts &mdash; better translations, no philosopher&rsquo;s stone needed.', cite:'History of Meditation'}
      ]}
    ],
    ticks:[0.527,0.540,0.542] },

  { card:'era-transcendental', col:0.575, from:0.548, to:0.706,
    label:'TRANSCENDENTAL', span:'1830s &ndash; the 1930s',
    rows:[
      { at:0.549, y:'1854', n:'Walden', body:[
        {p:'The West rediscovers the practice and writes it down in its own voice. Whitman and Thoreau.', cite:'History of Meditation'},
        {p:'Hatha is practised in British India for the first time in centuries in this same window.'},
        {p:'&#9888; <strong>Strictly, this one is past the Enlightenment.</strong> That runs c. 1685&ndash;1815; Wilkins&rsquo; Gita in 1785 sits inside it, but Walden is <em>Transcendentalism</em>. The column holds both because the story does.'},
        {p:'And the name is doing double duty on purpose. The European Enlightenment is named for reason displacing religion &mdash; and it labels the exact window in which the West began importing eastern spirituality. <em>Enlightenment</em> is also the word we reach for to translate samadhi.'}
      ]},
      { at:0.550, y:'by 1850', n:'hatha nearly gone', body:[
        {p:'<em>The physical practice of hatha yoga had all but disappeared from the world by 1850.</em>', cite:'The Six Branches'},
        {p:'<strong>The column closes on almost nothing.</strong> Which is the fact that makes the next column absurd.'},
        {p:'&#9888; <strong>I used to say the mat was invented in this window. It was not, and I have cut it.</strong> The mat is 1967. It is in the modern column now, where it belongs, and the true date is better for the argument anyway.'}
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
        {p:'Arrives in the United States and never really leaves. The Roaring Twenties squeeze him in alongside everything else.'}
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
        {p:'The Tibetan Book of the Dead is published in English.', cite:'History of Meditation'},
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
        {p:'Iyengar. Then the Maharishi in 1968, and Transcendental Meditation built deliberately for people who were not Hindu.', cite:'History of Meditation'},
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
      { at:0.792, y:'the 1980s', n:'tax cuts, and LA', body:[
        {p:'The tax cuts for the rich actually start &mdash; so rich white people could afford yoga classes again.'},
        {p:'By then there were more people practising hatha in Los Angeles than in all of India.', cite:'The Six Branches'},
        {p:'<strong>Which is the six branches wearing different clothes.</strong> That list sorted the practice by caste: meditation and scholarship at the top, the body at the bottom. This one sorts it by disposable income. The question does not change &mdash; <em>who has time to study and read, and who is bathing in the ashes of the dead.</em>'}
      ]},
      { at:0.918, y:'2010', n:'the name gets claimed', body:[
        {p:'<em>K Pattabhi Jois Ashtanga Yoga Institute</em> is filed as a trademark on 14 May 2010, held by R. Sharath Jois &mdash; Pattabhi Jois&rsquo;s grandson.'},
        {p:'The push behind it is American money: a partnership with Sonia Jones, married to a hedge fund billionaire, to codify the teaching, open Jois Yoga boutique studios and launch a clothing line.'},
        {p:'&#9888; <strong>The correction to the story I used to tell.</strong> It was not white men in the fifties taking the word. It is 2010, it is the lineage family claiming their own name, and it is financed from Greenwich. Which lands closer to the point, not further from it.'},
        {p:'And the enforcement is not a lawsuit. It is <strong>the authorized teacher list</strong>. Long-time teachers who let the practice evolve &mdash; used props, made modifications &mdash; quietly stopped appearing on it.'},
        {p:'So I cannot call this class Ashtanga because of <strong>a gate, not a statute</strong>. The bare word is <em>ashtau</em> plus <em>anga</em>: eight, limb. Nobody\u2019s mark stops me teaching the eight limbs and calling them that.'},
        {p:'<strong>Which is the same shape a third time.</strong> The six branches sorted people by caste. The eighties sorted them by money. The authorization list sorts teachers by obedience.'},
        {p:'<strong>Fact-checked 8 September 2026.</strong> I had been teaching a version of this where Americans took the word in the 1950s. That is not what the record shows, and I looked it up rather than keep repeating it. The filing date, the holder and the Jois Yoga partnership are all sourced below \u2014 go read them and correct me if they are wrong.',
         cite:'Wikipedia: K. Pattabhi Jois &middot; R. Sharath Jois', href:'https://en.wikipedia.org/wiki/K._Pattabhi_Jois'},
        {p:'&nbsp;', cite:'the trademark filing, and the branding controversy', href:'https://www.companyvakil.com/trademarksearch/K-PATTABHI-JOIS-ASHTANGA-YOGA-INSTITUTE/656183'}
      ]},
      { at:0.879, y:'2001', n:'&ldquo;stretch and relaxation&rdquo;', body:[
        {p:'<strong>I took my first yoga class in college. That is what the course catalog called it.</strong>', cite:'History of Meditation'},
        {p:'Today it is taught as a college class, mentioned in media and pop culture, made fun of in memes. The concept, if not the practice, is known universally.'},
        {p:'<em>This class is part of that wave.</em>'}
      ]}
    ],
    ticks:[0.730,0.756,0.762,0.772,0.792,0.815,0.879,0.918] }
]
