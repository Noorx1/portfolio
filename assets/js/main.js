/*
 * Portfolio Mohamad Noor Ghazal
 * Baut die Seite aus den Texten in i18n.js auf. Keine externen Dienste,
 * keine Cookies, kein Speichern im Browser. Die gewählte Sprache steht
 * nur in der Adresse (?lang=en oder ?lang=ar).
 */
(function () {
  'use strict';

  var I18N = window.I18N;
  var SPRITE = 'assets/img/icons.svg';
  var LANGS = [['de', 'DE', 'Deutsch'], ['en', 'EN', 'English'], ['ar', 'ع', 'العربية']];
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var IS_HOME = PAGE === 'home';
  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  var app = document.getElementById('app');
  var dlgRoot = document.getElementById('dialog-root');

  var params = new URLSearchParams(location.search);
  var state = {
    lang: I18N[params.get('lang')] ? params.get('lang') : 'de',
    menu: false,
    detail: null,
    p: reduceMq.matches ? 1 : 0
  };
  var trigger = null;

  /* ---------- Hilfsfunktionen ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function ic(name, cls) {
    return '<svg class="bi' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false"><use href="' + SPRITE + '#' + name + '"></use></svg>';
  }
  function pulseV(violet) { return '<div class="wire' + (violet ? ' v' : '') + '"><span class="pulse" aria-hidden="true"></span></div>'; }
  function langQuery() { return state.lang === 'de' ? '' : '?lang=' + state.lang; }
  function href(id) { return IS_HOME ? '#' + id : 'index.html' + langQuery() + '#' + id; }
  function rtl() { return state.lang === 'ar'; }
  /* Profilfoto: WebP mit JPG-Fallback. 84 px nutzt die 168er Datei, 300 px die 300er und 600er (Retina). */
  function photo(size, alt, eager) {
    var b = 'assets/img/profil-';
    var set = size === 84 ? [[168, '2x']] : [[300, '1x'], [600, '2x']];
    function srcset(ext) { return set.map(function (s) { return b + s[0] + '.' + ext + ' ' + s[1]; }).join(', '); }
    return '<picture>' +
      '<source type="image/webp" srcset="' + srcset('webp') + '">' +
      '<img src="' + b + set[0][0] + '.jpg" srcset="' + srcset('jpg') + '" alt="' + esc(alt) + '" width="' + size + '" height="' + size + '"' +
      (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
      '</picture>';
  }

  var NAV_IDS = ['ueber-mich', 'projekte', 'erfahrung', 'skills', 'kontakt'];
  var NAV_ICONS = ['person', 'grid-1x2', 'briefcase', 'tools', 'envelope'];
  var CHAIN_ICONS = ['diagram-3', 'hdd-rack', 'window', 'terminal'];
  var FLOW_ICONS = ['terminal', 'robot', 'git', 'card-checklist'];
  var HOME_ICONS = ['cpu', 'broadcast', 'music-note-beamed', 'pc-display'];
  var SKILL_ICONS = ['hdd-rack', 'diagram-3', 'shield-lock', 'windows', 'terminal', 'headset', 'database', 'braces'];
  var METRICS = [6, 2, 1000, 18];
  var LIGHTHOUSE = [[97, 'Performance'], [100, 'Accessibility'], [100, 'Best Practices'], [100, 'SEO']];

  function fmt(v) { return v.toLocaleString(state.lang === 'de' ? 'de-DE' : 'en-US'); }
  function ease(p) { return 1 - Math.pow(1 - p, 3); }

  /* ---------- Bausteine ---------- */
  function header(t) {
    var links = t.nav.map(function (label, i) {
      return '<a href="' + href(NAV_IDS[i]) + '" data-nav>' + esc(label) + '</a>';
    }).join('');
    var mlinks = t.nav.map(function (label, i) {
      return '<a href="' + href(NAV_IDS[i]) + '" data-nav>' + ic(NAV_ICONS[i]) + esc(label) + '</a>';
    }).join('');
    var langs = LANGS.map(function (l) {
      var on = l[0] === state.lang;
      return '<button type="button" data-lang="' + l[0] + '" aria-pressed="' + on + '" lang="' + l[0] + '">' + l[1] + '<span class="sr-only"> ' + l[2] + '</span></button>';
    }).join('');
    return '<header class="site-header">' +
      '<nav class="nav" aria-label="' + esc(t.navLabel) + '">' +
        '<a class="brand" href="' + (IS_HOME ? '#top' : 'index.html' + langQuery()) + '" data-nav><span class="brand-mark" aria-hidden="true">MG</span><span class="brand-name">' + esc(t.name) + '</span></a>' +
        '<div class="nav-links only-desktop">' + links + '</div>' +
        '<div class="nav-tools">' +
          '<div class="lang-switch" role="group" aria-label="' + esc(t.langLabel) + '">' + langs + '</div>' +
          '<button type="button" class="menu-btn only-mobile" data-menu aria-expanded="' + state.menu + '" aria-controls="mobile-menu" aria-label="' + esc(t.menu) + '">' + ic(state.menu ? 'x-lg' : 'list') + '</button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobile-menu" class="mobile-menu only-mobile"' + (state.menu ? '' : ' hidden') + '>' + mlinks + '</div>' +
    '</header>';
  }

  function footer(t) {
    return '<footer class="site-footer"><div class="footer-in">' +
      '<span>' + esc(t.copyright) + '</span>' +
      '<div class="footer-links">' +
        '<a href="impressum.html' + langQuery() + '"' + (PAGE === 'impressum' ? ' aria-current="page"' : '') + '>' + esc(t.imprint) + '</a>' +
        '<a href="datenschutz.html' + langQuery() + '"' + (PAGE === 'datenschutz' ? ' aria-current="page"' : '') + '>' + esc(t.privacy) + '</a>' +
      '</div></div></footer>';
  }

  function badge(text) {
    return '<div class="badge"><span class="dot-wrap"><span class="live-dot" aria-hidden="true"></span></span><span class="txt">' + esc(text) + '</span></div>';
  }

  function lhRing(v, label, big) {
    return '<div class="lh-item"><div class="lh-ring" role="img" aria-label="' + label + ': ' + v + '" style="background:conic-gradient(#93CCF4 ' + (v * 3.6) + 'deg, rgba(255,255,255,.12) 0)"><span aria-hidden="true">' + v + '</span></div>' +
      '<div class="lh-lbl" dir="ltr" aria-hidden="true">' + label + '</div></div>';
  }

  function archDiagram(t) {
    return '<div class="arch" role="img" aria-label="' + esc(t.archAria) + '">' +
      '<div class="node r1"><span class="ico">' + ic('people') + '</span><div><div class="t">' + esc(t.dVisitors) + '</div><div class="s">' + esc(t.dVisitorsS) + '</div></div></div>' +
      '<div class="wire r2"><span class="pulse"></span></div>' +
      '<div class="zone r3">' +
        '<div class="zone-label">' + ic('box') + esc(t.dServer) + '</div>' +
        '<div class="mini-tags"><span>' + ic('shield-check') + esc(t.firewall) + '</span><span>' + ic('archive') + esc(t.backups) + '</span><span>' + ic('envelope') + esc(t.mail) + '</span></div>' +
        '<div class="node alt"><span class="ico">' + ic('window') + '</span><div><div class="t">Next.js</div><div class="s">' + esc(t.dWeb) + '</div></div></div>' +
        pulseV() +
        '<div class="node hi"><span class="ico">' + ic('braces') + '</span><div><div class="t">ASP.NET Core</div><div class="s">' + esc(t.dApi) + '</div></div></div>' +
        pulseV() +
        '<div class="node alt"><span class="ico">' + ic('database') + '</span><div><div class="t">PostgreSQL</div><div class="s">' + esc(t.dDb) + '</div></div></div>' +
        '<div class="mon">' + ic('activity') + '<b>Grafana</b><span>' + esc(t.dMon) + '</span></div>' +
      '</div>' +
      '<div class="wire-h"><span class="pulse"></span></div>' +
      '<div class="ext-box"><span class="ico v">' + ic('car-front') + '</span><div class="t">mobile.de</div><div class="s">' + esc(t.dExtS) + '</div></div>' +
    '</div>';
  }

  function flowDiagram(t) {
    var html = t.f.map(function (s, i) {
      return '<div class="node"><span class="ico v">' + ic(FLOW_ICONS[i]) + '</span><div><div class="t">' + esc(s[0]) + '</div><div class="s">' + esc(s[1]) + '</div></div></div>' +
        (i < t.f.length - 1 ? pulseV(true) : '');
    }).join('');
    return '<div class="diagram" role="img" aria-label="' + esc(t.flowAria) + '">' + html + '</div>';
  }

  function homeDiagram(t) {
    var devs = t.h.map(function (h, i) {
      return '<div class="dev"><span class="ico">' + ic(HOME_ICONS[i]) + '</span><div class="t">' + esc(h[0]) + '</div><div class="s">' + esc(h[1]) + '</div></div>';
    }).join('');
    return '<div class="diagram" role="img" aria-label="' + esc(t.homeAria) + '">' +
      '<div class="inet">' + ic('globe2') + esc(t.hInternet) + '</div>' +
      '<div class="wire tall"><span class="pulse"></span></div>' +
      '<div class="zone home-net"><div class="zone-label">' + ic('router') + esc(t.hNet) + '</div>' + devs + '</div>' +
    '</div>';
  }

  function arrow() { return ic(rtl() ? 'arrow-left' : 'arrow-right'); }
  function extArrow() { return ic(rtl() ? 'arrow-up-left' : 'arrow-up-right'); }

  /* ---------- Startseite ---------- */
  function homeMain(t) {
    var e = ease(state.p);
    var metrics = METRICS.map(function (v, i) {
      return '<div class="metric glass glow">' +
        '<div class="num"><span dir="ltr"><span data-count="' + v + '">' + fmt(Math.round(v * e)) + '</span><span class="accent">' + (i === 2 ? '+' : '') + '</span></span></div>' +
        '<div class="lbl">' + esc(t.m[i]) + '</div></div>';
    }).join('');

    var chain = t.chain.map(function (c, i) {
      return '<div class="pill">' + ic(CHAIN_ICONS[i]) + esc(c) + '</div>' +
        (i < t.chain.length - 1 ? '<span class="sep">' + ic(rtl() ? 'chevron-left' : 'chevron-right') + '</span>' : '');
    }).join('');

    function tags(list, dir, lg) {
      return '<div class="tags">' + list.map(function (g) { return '<span class="tag' + (lg ? ' tag-lg' : '') + '" dir="' + dir + '">' + esc(g) + '</span>'; }).join('') + '</div>';
    }

    var jobs = t.jobs.map(function (j, i) {
      var bullets = j[3] ? '<ul class="bullets">' + j[3].map(function (b) { return '<li><span>' + esc(b) + '</span></li>'; }).join('') + '</ul>' : '';
      var mig = j[4] ? migration(t) : '';
      return '<li class="job' + (i === 0 ? ' current' : '') + '">' +
        '<div class="job-node-wrap" aria-hidden="true"><div class="job-node"><span></span></div></div>' +
        '<div class="job-card">' +
          '<div class="period"><span dir="ltr">' + esc(j[0]) + '</span></div>' +
          '<h3>' + esc(j[1]) + '</h3>' +
          '<div class="org">' + ic('building') + '<span>' + esc(j[2]) + '</span></div>' +
          bullets + mig +
        '</div></li>';
    }).join('');

    var skills = t.skills.map(function (k, i) {
      return '<div class="skill glass glow"><div class="skill-h"><span class="ico-lg">' + ic(SKILL_ICONS[i]) + '</span><h3>' + esc(k[0]) + '</h3></div>' +
        tags(k[1], 'auto', true) + '</div>';
    }).join('');

    var edu = t.edu.map(function (x) {
      return '<div class="edu-item"><div class="t">' + esc(x[0]) + '</div><div class="m">' + esc(x[1]) + '</div><div class="s">' + esc(x[2]) + '</div></div>';
    }).join('');
    var spoken = t.spoken.map(function (s) {
      return '<div class="lang-item"><div class="n">' + esc(s[0]) + '</div><div class="l">' + esc(s[1]) + '</div></div>';
    }).join('');

    return '<main id="top" tabindex="-1">' +
      /* Hero */
      '<section class="hero">' +
        '<div class="hero-text">' +
          '<div class="hero-id-m only-mobile"><div class="avatar-sm">' + photo(84, t.name, false) + '</div><div><div class="n">' + esc(t.name) + '</div><div class="r">' + esc(t.role) + '</div></div></div>' +
          badge(t.badge) +
          '<div class="hero-id-d only-desktop"><div class="n">' + esc(t.name) + '</div><div class="r">' + esc(t.role) + '</div></div>' +
          '<h1>' + esc(t.h1a) + '<span class="accent">' + esc(t.h1b) + '</span>' + esc(t.h1c) + '</h1>' +
          '<p class="lead">' + esc(t.sub) + '</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-primary" href="#projekte" data-nav>' + esc(t.ctaProjects) + arrow() + '</a>' +
            '<a class="btn btn-ghost" href="#kontakt" data-nav>' + ic('envelope') + esc(t.ctaContact) + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-photo only-desktop" data-parallax="-0.5">' +
          '<div class="photo-ring">' + photo(300, t.name, true) + '</div>' +
          '<div class="float float-status" data-parallax="1.4"><div class="a">' + esc(t.statusA) + '</div><div class="b">' + esc(t.statusB) + '</div></div>' +
          '<div class="float float-loc" data-parallax="1.8">' + ic('geo-alt') + esc(t.location) + '</div>' +
        '</div>' +
        '<div class="hero-status only-mobile"><div class="a">' + esc(t.statusA) + '</div><div class="b">' + esc(t.statusB) + '</div><div class="geo">' + ic('geo-alt') + esc(t.location) + '</div></div>' +
      '</section>' +

      '<div class="metrics">' + metrics + '</div>' +

      /* Über mich */
      '<section id="ueber-mich" class="section"><div class="about">' +
        '<div class="about-head"><div class="eyebrow">' + esc(t.aboutEyebrow) + '</div><h2>' + esc(t.aboutTitle) + '</h2>' +
          '<div class="chain" role="img" aria-label="' + esc(t.chain.join(', ')) + '">' + chain + '</div></div>' +
        '<p class="about-text">' + esc(t.aboutText) + '</p>' +
      '</div></section>' +

      /* Projekte */
      '<section id="projekte" class="section section-stack">' +
        '<div><div class="eyebrow">' + esc(t.projectsEyebrow) + '</div><h2 class="h2">' + esc(t.projectsTitle) + '</h2></div>' +
        '<div class="projects-grid">' +
          '<article class="project project-feature">' +
            '<div class="p-body">' +
              '<div class="p-meta"><span class="year">2026</span><span class="kind">' + esc(t.p1Kind) + '</span></div>' +
              '<h3>' + esc(t.p1Title) + '</h3>' +
              '<p>' + esc(t.p1Desc) + '</p>' +
              tags(['Linux', 'SSH', 'Docker', 'Grafana', 'C#', 'PostgreSQL', 'Next.js', 'Angular'], 'ltr') +
              '<div class="lh-block"><div class="lh-title">Lighthouse</div><div class="lh-row">' + LIGHTHOUSE.map(function (l) { return lhRing(l[0], l[1]); }).join('') + '</div></div>' +
              '<div class="p-actions">' +
                '<button type="button" class="btn-detail" data-detail="ng" aria-haspopup="dialog">' + esc(t.details) + arrow() + '</button>' +
                '<a class="ext-link" href="https://ng-automobile.de" rel="noopener">ng-automobile.de' + extArrow() + '</a>' +
              '</div>' +
            '</div>' +
            archDiagram(t) +
          '</article>' +
          '<article class="project violet">' +
            '<div class="kind">' + esc(t.p2Kind) + '</div>' +
            '<h3>' + esc(t.p2Title) + '</h3>' +
            '<p>' + esc(t.p2Desc) + '</p>' +
            tags(['PowerShell', 'Claude Code', t.codeReviews], 'auto') +
            flowDiagram(t) +
            '<button type="button" class="btn-detail" data-detail="ai" aria-haspopup="dialog">' + esc(t.details) + arrow() + '</button>' +
          '</article>' +
          '<article class="project">' +
            '<div class="kind">' + esc(t.p3Kind) + '</div>' +
            '<h3>' + esc(t.p3Title) + '</h3>' +
            '<p>' + esc(t.p3Desc) + '</p>' +
            tags(['Raspberry Pi', 'Pi-hole', 'ESP32', 'Kali Linux'], 'ltr') +
            homeDiagram(t) +
            '<button type="button" class="btn-detail" data-detail="home" aria-haspopup="dialog">' + esc(t.details) + arrow() + '</button>' +
          '</article>' +
        '</div>' +
      '</section>' +

      /* Erfahrung */
      '<section id="erfahrung" class="section section-stack">' +
        '<div><div class="eyebrow">' + esc(t.expEyebrow) + '</div><h2 class="h2">' + esc(t.expTitle) + '</h2></div>' +
        '<ol class="timeline">' + jobs + '</ol>' +
      '</section>' +

      /* Skills */
      '<section id="skills" class="section section-stack">' +
        '<div><div class="eyebrow">' + esc(t.skillsEyebrow) + '</div><h2 class="h2">' + esc(t.skillsTitle) + '</h2></div>' +
        '<div class="skills-grid">' + skills + '</div>' +
      '</section>' +

      /* Ausbildung */
      '<section id="ausbildung" class="section section-stack">' +
        '<div><div class="eyebrow">' + esc(t.eduEyebrow) + '</div><h2 class="h2">' + esc(t.eduTitle) + '</h2></div>' +
        '<div class="edu-grid">' +
          '<div class="edu-card glass"><div class="skill-h"><span class="ico-lg">' + ic('mortarboard') + '</span><h3>' + esc(t.eduHead) + '</h3></div>' + edu + '</div>' +
          '<div class="edu-card glass"><div class="skill-h"><span class="ico-lg">' + ic('translate') + '</span><h3>' + esc(t.langHead) + '</h3></div>' + spoken + '</div>' +
        '</div>' +
      '</section>' +

      /* Kontakt */
      '<section id="kontakt" class="contact-sec"><div class="contact">' +
        '<div class="eyebrow">' + esc(t.contactEyebrow) + '</div>' +
        '<h2>' + esc(t.contactTitle) + '</h2>' +
        '<p>' + esc(t.contactText) + '</p>' +
        '<div class="c-grid">' +
          '<a class="c-link primary" href="mailto:mohamad.noor.ghazal@gmail.com">' + ic('envelope') + '<span class="c-txt"><span class="c-k">' + esc(t.cEmail) + '</span><span class="c-v" dir="ltr">mohamad.noor.ghazal@gmail.com</span></span></a>' +
          '<a class="c-link" href="tel:+4915906815359">' + ic('telephone') + '<span class="c-txt"><span class="c-k">' + esc(t.cPhone) + '</span><span class="c-v" dir="ltr">+49 1590 6815359</span></span></a>' +
          '<a class="c-link" href="https://www.linkedin.com/in/mohamad-ghazal-671ba8395" rel="noopener">' + ic('linkedin') + '<span class="c-txt"><span class="c-k">LinkedIn</span><span class="c-v" dir="ltr">linkedin.com/in/mohamad-ghazal-671ba8395</span></span></a>' +
        '</div>' +
        '<div class="c-status">' + badge(t.statusLine) + '<div class="pill-loc">' + ic('geo-alt') + esc(t.location) + '</div></div>' +
      '</div></section>' +
    '</main>';
  }

  function migration(t) {
    return '<div class="mig" role="img" aria-label="' + esc(t.migAria) + '">' +
      '<div class="mig-col"><div class="mig-h">' + esc(t.before) + '</div>' +
        '<div class="mig-old"><div class="hd">' + ic('boxes') + '<b>ASP.NET MVC</b><span>' + esc(t.monolith) + '</span></div>' +
          '<div class="layers"><div>' + esc(t.layerUi) + '</div><div>' + esc(t.layerLogic) + '</div><div>' + esc(t.layerData) + '</div></div></div></div>' +
      '<span class="mig-arrow">' + ic(rtl() ? 'arrow-left' : 'arrow-right', 'side') + ic('arrow-down', 'down') + '</span>' +
      '<div class="mig-col"><div class="mig-h">' + esc(t.after) + '</div>' +
        '<div class="mig-new">' +
          '<div class="fe-row"><div class="chip-sm">' + ic('window') + esc(t.frontend) + '</div><div class="chip-sm">' + ic('window') + esc(t.frontend) + '</div></div>' +
          pulseV() +
          '<div class="chip-sm api">' + ic('braces') + 'REST-API</div>' +
          pulseV() +
          '<div class="chip-sm">' + ic('database') + esc(t.dDb) + '</div>' +
        '</div></div>' +
    '</div>';
  }

  /* ---------- Unterseiten ---------- */
  function legalMain(t) {
    var title = PAGE === 'impressum' ? t.imprint : t.privacy;
    return '<main id="top" tabindex="-1" class="legal-wrap"><section class="legal"><div class="legal-card">' +
      '<h1>' + esc(title) + '</h1>' +
      (t.legalNote ? '<p class="legal-note">' + esc(t.legalNote) + '</p>' : '') +
      /* Rechtstexte aus window.LEGAL (i18n.js), immer Deutsch und links nach rechts */
      '<div class="legal-body" lang="de" dir="ltr">' + (window.LEGAL[PAGE] || []).map(function (s) {
        return '<section><h2>' + esc(s.h) + '</h2>' + s.p.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</section>';
      }).join('') + '</div>' +
      '<div><a class="btn btn-ghost" href="index.html' + langQuery() + '">' + ic(rtl() ? 'arrow-right' : 'arrow-left') + esc(t.home) + '</a></div>' +
    '</div></section></main>';
  }

  /* ---------- Projekt-Details ---------- */
  function dialog(t) {
    var id = state.detail;
    var x = t.det[id];
    var title = id === 'ng' ? t.p1Title : id === 'ai' ? t.p2Title : t.p3Title;
    var gTitle = id === 'ng' ? t.gArch : id === 'ai' ? t.gFlow : t.gHome;
    var groups = x.groups.map(function (g) {
      return '<div class="group">' + (g[0] ? '<div class="group-t">' + ic(g[1].replace(/^bi-/, '')) + esc(g[0]) + '</div>' : '') +
        '<ul class="checks">' + g[2].map(function (b) { return '<li>' + ic('check2') + '<span>' + esc(b) + '</span></li>'; }).join('') + '</ul></div>';
    }).join('');
    var graphic = id === 'ng'
      ? archDiagram(t) + '<div class="lh-card"><div class="lh-title">Lighthouse</div><div class="lh-grid">' + LIGHTHOUSE.map(function (l) { return lhRing(l[0], l[1]); }).join('') + '</div></div>'
      : id === 'ai' ? flowDiagram(t) : homeDiagram(t);

    return '<div class="dlg-layer" data-layer>' +
      '<div class="dlg-backdrop" aria-hidden="true"></div>' +
      '<div class="dlg" role="dialog" aria-modal="true" aria-labelledby="dlg-title">' +
        '<div class="dlg-head"><div>' +
          '<div class="p-meta">' + (id === 'ng' ? '<span class="year">2026</span>' : '') + '<span class="kind">' + esc(x.kind) + '</span></div>' +
          '<h2 id="dlg-title">' + esc(title) + '</h2></div>' +
          '<button type="button" class="dlg-close" data-close aria-label="' + esc(t.close) + '">' + ic('x-lg') + '</button>' +
        '</div>' +
        '<div class="dlg-body">' +
          '<div class="dlg-main">' +
            '<div class="dlg-block" style="gap:8px"><h3 class="k">' + esc(t.dSituation) + '</h3><p>' + esc(x.situation) + '</p></div>' +
            '<div class="dlg-block"><h3 class="k">' + esc(t.dDone) + '</h3><div class="groups">' + groups + '</div></div>' +
            '<div class="dlg-block"><h3 class="k">' + esc(t.dTech) + '</h3><div class="tags">' + x.tech.map(function (g) { return '<span class="tag tag-lg" dir="auto">' + esc(g) + '</span>'; }).join('') + '</div></div>' +
          '</div>' +
          '<div class="dlg-side"><h3 class="k">' + esc(gTitle) + '</h3>' + graphic + '</div>' +
        '</div>' +
        '<div class="dlg-foot">' +
          '<button type="button" class="btn-detail" data-close>' + ic(rtl() ? 'arrow-right' : 'arrow-left') + esc(t.back) + '</button>' +
          (id === 'ng' ? '<a class="ext-link" href="https://ng-automobile.de" rel="noopener">ng-automobile.de' + extArrow() + '</a>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ---------- Rendern ---------- */
  function render() {
    var t = I18N[state.lang];
    var root = document.documentElement;
    root.lang = state.lang;
    root.dir = rtl() ? 'rtl' : 'ltr';
    var skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = t.skip;
    app.innerHTML = header(t) + (IS_HOME ? homeMain(t) : legalMain(t)) + footer(t);
    renderDialog();
  }

  function renderDialog() {
    if (!dlgRoot) return;
    if (!state.detail) {
      dlgRoot.innerHTML = '';
      app.inert = false;
      app.removeAttribute('aria-hidden');
      document.documentElement.style.overflow = '';
      return;
    }
    dlgRoot.innerHTML = dialog(I18N[state.lang]);
    app.inert = true;
    document.documentElement.style.overflow = 'hidden';
  }

  function setLang(code) {
    if (!I18N[code] || code === state.lang) return;
    state.lang = code;
    var url = new URL(location.href);
    if (code === 'de') url.searchParams.delete('lang'); else url.searchParams.set('lang', code);
    history.replaceState(null, '', url.pathname + url.search + url.hash);
    var dlgOpen = !!state.detail;
    render();
    var target = dlgOpen ? dlgRoot.querySelector('[data-close]') : app.querySelector('[data-lang="' + code + '"]');
    if (target) target.focus({ preventScroll: true });
    if (dlgOpen) {
      trigger = app.querySelector('[data-detail="' + state.detail + '"]');
      if (target) { /* Fokus bleibt im Dialog */ }
    }
  }

  function openDetail(id, btn) {
    trigger = btn;
    state.detail = id;
    state.menu = false;
    renderDialog();
    var layer = dlgRoot.querySelector('[data-layer]');
    if (layer) layer.scrollTop = 0;
    var close = dlgRoot.querySelector('.dlg-close');
    if (close) close.focus({ preventScroll: true });
  }

  function closeDetail() {
    if (!state.detail) return;
    var id = state.detail;
    state.detail = null;
    renderDialog();
    var el = (trigger && document.body.contains(trigger)) ? trigger : app.querySelector('[data-detail="' + id + '"]');
    if (el) el.focus({ preventScroll: true });
  }

  function setMenu(open) {
    state.menu = open;
    var btn = app.querySelector('[data-menu]');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = ic(open ? 'x-lg' : 'list');
    menu.hidden = !open;
  }

  /* ---------- Ereignisse ---------- */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-lang],[data-menu],[data-detail],[data-close],[data-nav],[data-layer]');
    if (!el) return;
    if (el.hasAttribute('data-lang')) { setLang(el.getAttribute('data-lang')); return; }
    if (el.hasAttribute('data-menu')) { setMenu(!state.menu); return; }
    if (el.hasAttribute('data-detail')) { openDetail(el.getAttribute('data-detail'), el); return; }
    if (el.hasAttribute('data-close')) { closeDetail(); return; }
    if (el.hasAttribute('data-nav')) { if (state.menu) setMenu(false); return; }
    if (el.hasAttribute('data-layer') && !ev.target.closest('.dlg')) { closeDetail(); }
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      if (state.detail) { closeDetail(); }
      else if (state.menu) { setMenu(false); var b = app.querySelector('[data-menu]'); if (b) b.focus(); }
      return;
    }
    if (ev.key === 'Tab' && state.detail) {
      var f = dlgRoot.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });

  /* Parallaxe bei Mausbewegung (nur mit feiner Zeigersteuerung und ohne reduzierte Bewegung) */
  var raf = 0, mx = 0, my = 0;
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', function (ev) {
      if (reduceMq.matches) return;
      mx = ev.clientX / window.innerWidth - 0.5;
      my = ev.clientY / window.innerHeight - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        document.querySelectorAll('[data-parallax]').forEach(function (n) {
          var k = parseFloat(n.getAttribute('data-parallax')) || 0;
          n.style.transform = 'translate3d(' + (-mx * 22 * k) + 'px,' + (-my * 22 * k) + 'px,0)';
        });
      });
    }, { passive: true });
  }

  /* Hochzählen der Kennzahlen */
  function countUp() {
    if (state.p >= 1) return;
    setTimeout(function () {
      var t0 = performance.now();
      function tick(now) {
        state.p = Math.min(1, (now - t0) / 1800);
        var e = ease(state.p);
        app.querySelectorAll('[data-count]').forEach(function (n) {
          n.textContent = fmt(Math.round(parseFloat(n.getAttribute('data-count')) * e));
        });
        if (state.p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, 400);
  }

  reduceMq.addEventListener && reduceMq.addEventListener('change', function () {
    if (reduceMq.matches) {
      state.p = 1;
      document.querySelectorAll('[data-parallax]').forEach(function (n) { n.style.transform = ''; });
    }
  });

  render();
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
  if (IS_HOME) countUp();
})();
