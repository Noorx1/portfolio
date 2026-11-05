# Portfolio

Statische Portfolio-Seite ohne Build-Schritt. Sie läuft direkt über GitHub Pages.
Es gibt keine externen Dienste, kein Tracking und keine Cookies. Schriften und Icons liegen im Repository.

## Aufbau

```
index.html            Startseite
impressum.html        Impressum
datenschutz.html      Datenschutz
assets/js/i18n.js     ALLE Texte in Deutsch (de), Englisch (en) und Arabisch (ar)
assets/js/main.js     Aufbau der Seite, Sprachumschalter, Menü, Detail-Dialoge, Animationen
assets/css/style.css  Gestaltung (Glas-Optik, Aurora-Hintergrund, Layout)
assets/img/           Profilfoto (WebP und JPG), Icons (icons.svg), Favicon
assets/fonts/         Schriften Plus Jakarta Sans und IBM Plex Sans Arabic
```

## Texte ändern

Alle Texte stehen in `assets/js/i18n.js`, getrennt nach `de`, `en` und `ar`.

1. Datei öffnen und den gewünschten Text zwischen den Hochkommas `'...'` ändern.
2. Steht im Text selbst ein Hochkomma, schreibe davor einen Backslash: `'Let\'s talk.'`
   Oder nutze das typografische Zeichen `’`.
3. Ändere den Text in allen drei Sprachen.
4. Listen (z. B. `jobs`, `skills`, `edu`) müssen in allen Sprachen gleich viele Einträge haben.

E-Mail, Telefon und LinkedIn stehen direkt in `assets/js/main.js` (nach `mailto:`, `tel:` und `linkedin.com` suchen).
Die Kennzahlen (6, 2, 1000, 18) stehen dort unter `METRICS`.

Impressum und Datenschutz: Die Texte stehen ganz unten in `assets/js/i18n.js` unter `window.LEGAL`
(nur Deutsch, sie werden in allen Sprachen angezeigt). Bei einem Umzug die Anschrift dort an beiden Stellen ändern.

## Profilfoto ändern

Das Foto liegt in drei Größen in `assets/img/`:

- `profil-168.webp` und `profil-168.jpg` (kleines Foto auf dem Handy)
- `profil-300.webp` und `profil-300.jpg` (großes Foto auf dem Desktop)
- `profil-600.webp` und `profil-600.jpg` (großes Foto auf hochauflösenden Bildschirmen)

Neues Foto quadratisch zuschneiden, in diesen Größen als WebP und JPG speichern
(z. B. mit https://squoosh.app, läuft lokal im Browser) und die Dateien mit denselben Namen ersetzen.

## Lokal ansehen

Wegen der Icons braucht die Seite einen kleinen lokalen Server (Doppelklick auf die Datei reicht nicht ganz):

```
npx serve .
```

Danach http://localhost:3000 öffnen. Sprache direkt aufrufen: `?lang=en` oder `?lang=ar`.

## Neu veröffentlichen

```
git add .
git commit -m "Texte aktualisiert"
git push
```

GitHub Pages baut die Seite nach ein bis zwei Minuten automatisch neu.
Einstellungen: Repository › Settings › Pages › Branch `main`, Ordner `/ (root)`.

## Hinweise

- Die Seite enthält `<meta name="robots" content="noindex, nofollow">`, damit Suchmaschinen sie nicht aufnehmen.
  Deshalb zeigt Lighthouse bei SEO absichtlich keinen vollen Wert.
- Lizenzen: Plus Jakarta Sans und IBM Plex Sans Arabic (SIL Open Font License), Bootstrap Icons (MIT).
  Die Lizenztexte liegen in `assets/fonts/` und `assets/img/`.
