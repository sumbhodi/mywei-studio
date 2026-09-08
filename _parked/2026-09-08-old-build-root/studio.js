/* studio.js — the scroll factory.
 *
 * ⭐ ONE SCROLL, FIFTEEN FILLS. Sum's rule: never hand-write a thing the app can make. There is
 * exactly one dialog in index.html and exactly one renderer below. A new branch, limb, essay or
 * pin is an object in content.js and nothing else — no markup, no handler, no css.
 *
 * ⭐ a11y IS THE PRODUCT. Concretely, and all of it tested by keyboard alone:
 *   · the tree png is aria-hidden and carries no control — every door is a real <button>
 *   · the dialog traps focus while open, Escape closes it, and focus RETURNS to the opener
 *   · the page behind is inert (aria-hidden) so a screen reader cannot wander into it
 *   · nothing depends on hover, colour, or the picture loading at all
 */
(function () {
  'use strict'

  var Y = window.YOGA
  var scroll = document.getElementById('scroll')
  var scrim = document.getElementById('scrim')
  var body = document.getElementById('scroll-body')
  var main = document.getElementById('main')
  var opener = null           // who opened it — focus goes back here on close

  /* ── tiny helpers ─────────────────────────────────────────────────────────
     el() takes html on purpose: content.js carries <em>/<strong> inside its prose, which is
     the author's emphasis and part of the writing. It is HIS file, authored by hand, not
     user input — there is no untrusted string anywhere in this path. */
  function el (tag, cls, html) {
    var n = document.createElement(tag)
    if (cls) n.className = cls
    if (html != null) n.innerHTML = html
    return n
  }
  function stubTag () { return '<span class="stub">not written yet</span>' }

  /* ── BUILD THE TWO SIDES ─────────────────────────────────────────────────── */
  /* ── ONE ROW = A SCROLL ICON AND A NAME. Nothing else.
     ⚠ 7 Sep, his call: "just put name of each branch left of trunk, name each limb right, with a
     scroll icon, click on word, scroll overlays, close back tree." The first pass hung the gloss,
     the caste tag and the how-it-is-taught line off every button, which turned a nav into a wall
     of text and buried the twenty words that are the actual doors. All of it still exists — it is
     rendered INSIDE the scroll, where there is room for it. The tree is for finding; the scroll
     is for reading. */
  function leaf (item, kind) {
    var li = document.createElement('li')
    var b = el('button', 'leaf')
    b.type = 'button'
    b.setAttribute('aria-haspopup', 'dialog')
    b.dataset.open = kind + ':' + item.id
    if (item.weight) b.dataset.weight = item.weight

    /* the icon is his rolled scroll, and it is decoration — the name is the accessible label */
    var ico = document.createElement('img')
    ico.className = 'leaf-ico'
    ico.src = 'art/scroll-icon.png'
    ico.alt = ''
    ico.setAttribute('aria-hidden', 'true')
    ico.width = 96; ico.height = 40

    var name = el('span', 'leaf-name')
    if (item.n) name.appendChild(el('span', 'leaf-n', String(item.n)))
    name.appendChild(el('span', null, item.name))

    b.appendChild(ico)
    b.appendChild(name)
    li.appendChild(b)
    return li
  }

  var bl = document.getElementById('branch-list')
  Y.branches.forEach(function (b) { bl.appendChild(leaf(b, 'branch')) })

  var ll = document.getElementById('limb-list')
  Y.limbs.forEach(function (l) { ll.appendChild(leaf(l, 'limb')) })

  /* the essays have no door on the page right now (his call, 7 Sep). The renderer stays wired,
     so restoring them is a <ul id="essay-list"> in the markup and nothing else. */
  var esl = document.getElementById('essay-list')
  if (esl) Y.essays.forEach(function (e) { esl.appendChild(leaf(e, 'essay')) })

  /* ── THE TIMELINE — pinned, and it never opens the dialog. It stays on the page
     so a lesson scroll and the history can be read at the same time (his ask). */
  var ax = document.getElementById('tl-axis')
  Y.timeline.axis.forEach(function (t) {
    var li = el('li', 'tl-tick', '<span>' + t.label + '</span>')
    li.style.left = (t.at * 100) + '%'
    ax.appendChild(li)
  })
  document.getElementById('tl-note').textContent = Y.timeline.note

  var pins = document.getElementById('tl-pins')
  Y.timeline.pins.forEach(function (p) {
    pins.appendChild(el('li', 's-stub', p.stub
      ? 'Pins land here as you talk them through — Patanjali first, he is the hinge. ' + stubTag()
      : p.note))
  })

  /* ── RENDER ONE SCROLL ───────────────────────────────────────────────────── */
  function find (key) {
    var kind = key.split(':')[0], id = key.split(':')[1]
    if (kind === 'branch') return pick(Y.branches, id)
    if (kind === 'limb') return pick(Y.limbs, id)
    if (kind === 'essay') return pick(Y.essays, id)
    if (key === 'history') return Y.roots
    if (key === 'centre') {
      return { name: Y.centre.word, gloss: Y.centre.sanskrit + ' — to yoke, to harness',
               body: [{ p: Y.centre.blurb }] }
    }
    return null
  }
  function pick (list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]
    return null
  }

  function render (item) {
    body.innerHTML = ''
    var h = el('h2', 's-name')
    h.id = 'scroll-title'
    if (item.n) h.appendChild(el('span', 's-n', 'the ' + ordinal(item.n) + ' limb'))
    h.appendChild(el('span', null, item.name || item.label))
    body.appendChild(h)

    if (item.gloss || item.sub) body.appendChild(el('p', 's-gloss', item.gloss || item.sub))
    if (item.caste) body.appendChild(el('p', 's-caste', 'his 2015 note tags this branch: ' + item.caste))
    if (item.taught) body.appendChild(el('p', 's-taught', '<strong>How it is actually taught:</strong> ' + item.taught))

    /* the sub-lists — the five yamas, the five niyamas — straight off his own doc */
    if (item.list) {
      var ul = el('ul', 's-list')
      item.list.forEach(function (row) {
        var li = document.createElement('li')
        li.appendChild(el('b', null, row[0]))
        li.appendChild(el('span', null, row[1]))
        ul.appendChild(li)
      })
      body.appendChild(ul)
    }

    body.appendChild(el('hr', 's-rule'))

    var wrap = el('div', 's-body')
    ;(item.body || []).forEach(function (blk) {
      var p = el('p', blk.lead ? 'lead' : null, blk.p)
      if (blk.cite) p.appendChild(el('cite', 's-cite', '— ' + blk.cite))
      wrap.appendChild(p)
    })
    body.appendChild(wrap)

    if (item.stub) {
      body.appendChild(el('div', 's-stub',
        'This one is still <strong>yours to write</strong>. Nothing has been invented here in your ' +
        'name — the site says so rather than filling the gap with something that sounds right. ' + stubTag()))
    }
  }

  function ordinal (n) {
    return ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'][n] || String(n)
  }

  /* ── OPEN / CLOSE, with the focus handled properly ───────────────────────── */
  function open (key, from) {
    var item = find(key)
    if (!item) return
    render(item)
    opener = from || null
    scrim.hidden = false
    scroll.hidden = false
    main.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = 'hidden'
    body.focus()
  }

  function close () {
    scroll.hidden = true
    scrim.hidden = true
    main.removeAttribute('aria-hidden')
    document.body.style.overflow = ''
    /* ⭐ focus goes BACK to the button that opened it. Without this a keyboard user is
       dumped at the top of the document every single time they close a scroll, which makes
       reading six branches in a row unusable. */
    if (opener && document.contains(opener)) opener.focus()
    opener = null
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open]')
    if (t) { open(t.dataset.open, t); return }
    if (e.target.closest('#scroll-close') || e.target === scrim) close()
  })

  document.addEventListener('keydown', function (e) {
    if (scroll.hidden) return
    if (e.key === 'Escape') { close(); return }
    if (e.key !== 'Tab') return
    /* the trap: keep Tab inside the dialog while it is open */
    var f = scroll.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (!f.length) return
    var first = f[0], last = f[f.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  })
})()
