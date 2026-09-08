/* content.js — the whole course as DATA. One scroll component reads this.
 *
 * ⭐ THE RULE FOR THIS FILE, and it is Sum's: never hand-write a thing the app can make.
 * There is ONE scroll in studio.js. Everything below is a fill for it. Add a branch, add a
 * limb, add a pin — you add an object here and touch no markup anywhere.
 *
 * ⚠ PROVENANCE MATTERS MORE THAN USUAL HERE. Every line marked `sum: true` is HIS OWN
 * WRITING, lifted verbatim or near-verbatim from work already on his disk:
 *   · ozhunga B3/church/the-bible.md   — the projector & the screen, Field and Stream
 *   · ozhunga B3/page/wei-draft-*.html — the pool & the towel, the eight limbs
 *   · his own words typed 7 Sep 2026   — the yoke, the coffee, the car, the shorts
 * Anything marked `stub: true` is a PLACEHOLDER awaiting his voice. It says so on the page,
 * out loud, rather than quietly inventing doctrine in his name. He is teaching this from his
 * own content — that is the entire point of the site — so the site must never fake it.
 */

window.YOGA = {

  /* ── the header: ATMAN —is→ BRAHMAN ──────────────────────────────────────────
   * The two links go OUT to the lectures that already exist on ozhunga.com/A3.
   * They are the right two to pair: each already ends on one of the great sayings.
   * Which makes the word between them the third one — so `is` is not a label over
   * the pair, it is the claim. And `is` is the arrow that points at YOGA. */
  head: {
    left:  { word: 'ATMAN',   gloss: 'Tat tvam asi · Thou art That',
             href: 'https://www.ozhunga.com/A3/koshas/kosha_6' },
    right: { word: 'BRAHMAN', gloss: 'Aham Brahmasmi · I am Brahman',
             href: 'https://www.ozhunga.com/A3/koshas/brahman' },
    is:    { word: 'is', points: 'YOGA',
             gloss: 'yuj — to yoke, to harness. The verb is the practice.' }
  },

  /* ── the centre of the tree ─────────────────────────────────────────────── */
  centre: {
    word: 'YOGA',
    sanskrit: 'योग',
    blurb: 'From <em>yuj</em> — to yoke. To harness. The word in the middle of this tree is a verb, ' +
           'and it is the same verb as the <em>is</em> above it. Atman <strong>is</strong> Brahman: the ' +
           'yoking is not something you do afterwards to get there. The yoking is the sentence.'
  },

  /* ── THE ROOTS — the history. Tomorrow, 8am. ─────────────────────────────── */
  roots: {
    id: 'history', label: 'THE HISTORY', sub: 'the roots · where all of it comes from',
    stub: true,
    body: [
      { p: 'This is the lecture you are teaching first, and it is the one being written tonight ' +
           'by voice. Nothing has been invented here on your behalf.' }
    ]
  },

  /* ── THE TIMELINE — pinned, opens beneath the roots, stays open ──────────────
   * ⚠ The axis in timeline.png is NOT linear: 3000 BCE → 1860 is one segment (4,860
   * years), then 1860 → 1980 (120), then 1980 → 2020 (40). That compression is the
   * argument, not a drafting error — nearly everything a Western student calls yoga
   * happens in the last two segments. The break is drawn on purpose. */
  timeline: {
    axis: [
      { at: 0.02, label: '3000 BCE' },
      { at: 0.55, label: '1860' },
      { at: 0.79, label: '1980' },
      { at: 0.96, label: '2020' }
    ],
    note: 'The axis breaks on purpose. Four thousand eight hundred years fit in the first stretch; ' +
          'a hundred and twenty in the second. What most of the West calls yoga lives in the last inch.',
    pins: [ { stub: true, note: 'pins land here as you talk them through — Patanjali first, he is the hinge' } ]
  },

  /* ── SIX BRANCHES — left of the trunk ─────────────────────────────────────── */
  branches: [
    { id:'raja',   name:'RAJA',   gloss:'royal · meditation',            caste:'Upper Caste',    sum:true,
      body:[ {p:'Focuses on achieving and maintaining specific mental states through meditation — yet still ' +
                'incorporates all eight limbs, including asana.', cite:'The Six Branches'} ] },

    { id:'jnana',  name:'JNANA',  gloss:'mind · study and wisdom',       caste:'Upper Caste',    sum:true,
      body:[ {p:'Still follows the eight-limbed practice, but focuses on improvement of the mind through ' +
                'scholarly endeavour.', cite:'The Six Branches'} ] },

    { id:'karma',  name:'KARMA',  gloss:'living life, learning lessons', caste:'Working Caste',  sum:true,
      body:[ {p:'<em>We are all doing this, it\'s just a matter of how consciously.</em>', cite:'The Six Branches'},
             {p:'The trick is to live now in such a way that you create better tomorrows — in this lifetime ' +
                'and the next.', cite:'The Six Branches'} ] },

    { id:'bhakti', name:'BHAKTI', gloss:'devotion, loving service',      caste:'Working Caste',  sum:true,
      body:[ {p:'The yoga of devotion, usually to Krishna. Devotees keep the name on their lips and love in ' +
                'their heart, hoping to be spared the endless cycle of death and rebirth.', cite:'The Six Branches'},
             {p:'The work is to feast and serve and sing and dance — to care for the god, his guests, and ' +
                'fellow devotees. They practise in this life to be the better servant in the next.',
                cite:'The Six Branches'} ] },

    { id:'tantra', name:'TANTRA', gloss:'ritual, ceremony',              caste:'Monastic Caste', sum:true,
      body:[ {p:'Making every act of a mundane human life into a ritual offered up — to connect with the ' +
                'divine, or simply to raise consciousness.', cite:'The Six Branches'},
             {p:'<em>While sex can be included in such a practice, so is: the way you make your rice, get ' +
                'dressed, speak, garden. Most Tantric schools actually recommend celibacy.</em>',
                cite:'The Six Branches'} ] },

    { id:'hatha',  name:'HATHA',  gloss:'purification of the vessel',    caste:'Lowest Caste',   sum:true,
      weight:'core',
      body:[ {p:'<em>While hatha is only one sixth of the body of yoga, it is by far the most widely known, ' +
                'practiced and researched form known today.</em>', cite:'The Six Branches'},
             {p:'<em>Any time the word yoga is used in any language other than Sanskrit, they are probably ' +
                'talking about Hatha.</em>', cite:'The Six Branches'},
             {p:'Most believed its sole purpose was to keep the body out of the way — that it was not a ' +
                'valid path of transcendence on its own.', cite:'The Six Branches'},
             {p:'<strong>The physical practice had all but disappeared from the world by 1850. By the 1980s ' +
                'there were more people practicing hatha in LA than in all of India.</strong>',
                cite:'The Six Branches', pin:true} ] }
  ],

  /* ── EIGHT LIMBS — right of the trunk ───────────────────────────────────────
   * ⭐ THE WEIGHTING IS HIS ACTUAL TEACHING, not the tradition's flat list. He said it
   * plainly on 7 Sep and it is the honest shape of the course: two limbs carry the room,
   * two bookend it, one is the guided meditations, one is taught by shutting up, one is
   * covered at the start of semester, and one is barely named on purpose. */
  limbs: [
    { id:'yama', n:1, name:'YAMA', gloss:"the restraints · the dont's", sum:true,
      taught:'covered at the start of semester · one guided meditation on ahimsa',
      list:[ ['Ahimsa','no harm, loving kindness'], ['Satya','no lying'], ['Asteya','no stealing'],
             ['Brahmacharya','no gluttony, controlling desire'], ['Aparigraha','no hoarding'] ],
      body:[ {p:'Handled early, then lived rather than lectured. The one that gets its own guided ' +
                'meditation is <strong>ahimsa</strong>.'},
             {p:'<em>Satya: truth is easier. Stealing is just unsustainable, not wrong — the distinction ' +
                'matters.</em>', cite:'The Wei'} ] },

    { id:'niyama', n:2, name:'NIYAMA', gloss:"the observances · the do's", sum:true,
      taught:'covered at the start of semester',
      list:[ ['Shaucha','purity'], ['Samtosha','contentment'], ['Tapas','discipline'],
             ['Svadhyaya','study'], ['Ishvara Pranidhana','surrender to that which is greater than you'] ],
      body:[ {p:'Front-loaded with yama, then it runs underneath everything else all semester.'} ] },

    { id:'asana', n:3, name:'ASANA', gloss:'to take a seat', sum:true, weight:'core',
      taught:'★ one of the two this class is actually built on',
      body:[ {p:'<em>Asana refers to more than just a physical pose. It is the practice of becoming fully ' +
                'embodied — both in your physical body and in the present moment.</em>', cite:'The 8 Limbs'},
             {p:'<em>You are always in a pose. You just forget sometimes. The pose you are in right now — ' +
                'reading this, however you are sitting or standing or lying down — is a pose. You are ' +
                'practicing. You just did not know it was class.</em>', cite:'The Wei'},
             {p:'The word means <strong>seat</strong>. Find the seat. That is the limb.'} ] },

    { id:'pranayama', n:4, name:'PRANAYAMA', gloss:'breath control', sum:true, weight:'core',
      taught:'★ one of the two this class is actually built on',
      body:[ {p:'<em>Prana is the life force that flows through everything: the air we breathe, the food we ' +
                'eat, the sounds we hear, the light we see. Even the love we receive in relationships can ' +
                'be considered prana.</em>', cite:'The 8 Limbs'},
             {p:'<em>Yama</em> is a discipline or constraint — the same word as the first limb. So pranayama ' +
                'is breath control used as a tool for <strong>disciplining the flow of all the energies in ' +
                'our lives</strong>.', cite:'The 8 Limbs'},
             {p:'<em>You are always breathing. If you weren\'t — breathe right now. Take a deep breath. ' +
                'You\'re welcome. I accept tips.</em>', cite:'The Wei'} ] },

    { id:'pratyahara', n:5, name:'PRATYAHARA', gloss:'awareness of the senses', sum:true,
      taught:'named at the start of class and again at the end',
      body:[ {p:'<em>At first translated as a withdrawal from the senses — it is better described as diving ' +
                'so deep into all the senses that you are no longer distracted by them.</em>',
                cite:'The 8 Limbs', lead:true},
             {p:'<em>The sound of the garbage truck: easy to not identify as self. Music: easy. The voice ' +
                'inside your head reading these words right now: less easy. The inner critic: less.</em>',
                cite:'The Wei'},
             {p:'<em>Learn to hear it all as if listening to music.</em>', cite:'The Wei'} ] },

    { id:'dharana', n:6, name:'DHARANA', gloss:'mental focus', sum:true,
      taught:'this is where the guided meditations live',
      body:[ {p:'<em>A single-minded intention. Traditionally a drishti — a gaze upon a sacred object or ' +
                'meditative device: candle, incense, ancestor. It can also simply be a thought to keep you ' +
                'present, or any mantra that fits your practice.</em>', cite:'The 8 Limbs'},
             {p:'The white bear is why it works this way. Tell the mind <em>don\'t</em> and one part obeys ' +
                'while another keeps checking whether it has stopped yet — and the checking is the thinking. ' +
                'So you do not empty the head by force. <strong>Give it a brown bear first.</strong>',
                cite:'the bible · Field and Stream'} ] },

    { id:'dhyana', n:7, name:'DHYANA', gloss:'stillness', sum:true,
      taught:'taught by explaining it once, then shutting up as much as possible',
      body:[ {p:'<em>Traditional or zazen meditation. A clear still mind.</em>', cite:'The 8 Limbs'},
             {p:'The method <strong>is</strong> the silence after the explanation. Say it once, then get out ' +
                'of the way — talking over it is the one thing guaranteed to prevent it.'},
             {p:'<strong>Dhyana has no door that isn\'t dharana.</strong> You choose a thought, hold it on ' +
                'purpose, let it end, choose again. Empty is best if it comes — but it comes <em>through</em> ' +
                'the choosing, never through the forcing.', cite:'the bible'} ] },

    { id:'samadhi', n:8, name:'SAMADHI', gloss:'bliss, oneness', sum:true,
      taught:'explained once, then rarely named again — on purpose',
      body:[ {p:'<em>Bliss. Enlightenment. Oneness.</em>', cite:'The 8 Limbs'},
             {p:'Naming it pulls you out of it. So it gets explained one time, and then left alone.'},
             {p:'<em>Find the seat, turn the brain off, unplug it — then plug it back in. Find sukhasana and ' +
                'samadhi, and leave before you need to change your shorts.</em>', cite:'Sum, 7 Sep 2026'},
             {p:'<em>True enlightenment is useless. If you spend too long in nirvana you will wind up in a ' +
                'pile of crap.</em>', cite:'Sum, 7 Sep 2026'} ] }
  ],

  /* ── THE SCROLLS OFF THE HEADER — the philosophy, from the Duality card ────── */
  essays: [
    { id:'the-is', name:'THE IS', sub:'why the verb is the whole teaching', sum:true,
      body:[
        {p:'<strong>Atman is Brahman.</strong> The load is carried entirely by the middle word, and the ' +
            'middle word is the same root as the name of the practice — <em>yuj</em>, to yoke, to harness.'},
        {p:'Which means the sentence is not a description of a state you reach later. The yoking is the claim.'}
      ] },

    { id:'in-here-out-there', name:'IN HERE / OUT THERE', sub:'the necessary illusion', sum:true,
      body:[
        {p:'<em>In here, out there, us and other — a necessary illusion to order coffee.</em>',
           cite:'Sum, 7 Sep 2026'},
        {p:'That is the working version of the whole non-dual problem, and it is not a joke. If it is all ' +
            'one, you still have to say <em>a coffee, please</em> to a <em>someone</em>, and you still have ' +
            'to not drive into a wall. <strong>If it is all one, walls are hard to avoid.</strong>'},
        {p:'<em>I want</em> — what does that even mean? The Buddha said I should have no wants. And yet ' +
            'the car has to be driven somewhere.', cite:'Sum, 7 Sep 2026'},
        {p:'So the split gets called an illusion and kept anyway, because it is <strong>load-bearing</strong>. ' +
            'That is not hypocrisy; it is the practice. You see through it and you still order the coffee.'},
        {p:'From the primal split we make all the others — good/bad, hot/cold, light/dark, sacred/profane. ' +
            '<em>We are dipole machines: take any spectrum, collapse it to two poles.</em>',
           cite:'Duality — In Here / Out There'}
      ] },

    { id:'projector', name:'THE PROJECTOR', sub:'Atman, from neuroscience', sum:true,
      body:[
        {p:'Everything you call reality is the <strong>screen</strong> — the render, the controlled ' +
            'hallucination, Maya. You have spent your whole life staring at it trying to find yourself ' +
            '<em>in the picture</em>. You will never find it there. <strong>You are not in the picture.</strong>',
           cite:'the bible · The Projector and the Screen'},
        {p:'<strong>You are the projector.</strong> Atman is the light, not the image.', cite:'the bible'},
        {p:'<em>Atman is Brahman.</em> The light in your projector is the same light in mine. There was ' +
            'only ever one bulb.', cite:'the bible'},
        {p:'And the instrument problem underneath it: studying the mind from inside the mind. The eye ' +
            'cannot see itself. The knife cannot cut itself. The scale cannot weigh itself.', cite:'the bible'},
        {p:'<strong>Attention is the only lever.</strong> You cannot stop the senses or pick the weather. ' +
            'The one thing in the machine you control is where the spotlight points — which is why there ' +
            'is a trillion-dollar industry built to steal it.', cite:'the bible · Field and Stream'}
      ] },

    { id:'pool', name:'THE POOL & THE TOWEL', sub:'the parable', sum:true,
      body:[
        {p:'Someone is in a pool complaining about being wet. You say: get out of the pool. They say: ' +
            '<em>but I\'m all wet, do you have a towel?</em>', cite:'The Wei'},
        {p:'You could try stopping the thoughts with meditation, then choose your dharana. That is the ' +
            'first towel. It helps. <strong>You are still in the pool.</strong>', cite:'The Wei'},
        {p:'<em>The towel may not exist. Getting out of the pool is still the correct move.</em>', cite:'The Wei'},
        {p:'<em>You are the water. You are the towel. You were never actually wet.</em>', cite:'The Wei'},
        {p:'The koshas are not a ladder out of the pool. <strong>They are a map of the pool.</strong>',
           cite:'The Wei'}
      ] },

    { id:'systemic', name:'WHO HAD TIME', sub:'the six and the eight, and the caste system', sum:true,
      body:[
        {p:'The branches and the limbs break the philosophy down cleanly. They also break down the caste ' +
            'system of India, and that is not a detour — it is <strong>the very definition of systemic</strong>.',
           cite:'Sum, 7 Sep 2026'},
        {p:'So the question to put to any of it: <em>who has time to study and read — and who is bathing ' +
            'in the ashes of the dead?</em>', cite:'Sum, 7 Sep 2026'},
        {p:'A philosophy of liberation, and the leisure to study it was distributed by birth. Both things ' +
            'are true at once and the course says so out loud.'}
      ] },

    { id:'the-name', name:'THE NAME', sub:'on what you are allowed to call it', sum:true,
      body:[
        {p:'<em>Eight-limb ashtanga is what I was taught — but I can\'t call it that, because some white ' +
            'guys in the fifties didn\'t speak Tamil, so they trademarked it. Basically they trademarked ' +
            'calling earth dirt.</em>', cite:'Sum, 7 Sep 2026'},
        {p:'<em>Ashtanga</em> is <em>ashtau</em> (eight) + <em>anga</em> (limb). It is the ordinary ' +
            'compound word for the thing Patanjali described. Which is why this course teaches the eight ' +
            'limbs and calls them the eight limbs.'}
      ] }
  ]
}
