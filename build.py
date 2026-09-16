# -*- coding: utf-8 -*-
"""
Assemble les deux livrables a partir de parts/ :
  1. maths_premiere.html  -> version Artifact (sans <html>/<head>, sans service worker)
  2. site/index.html      -> version PWA autonome (GitHub Pages), + manifeste + SW + icones

Usage :  python build.py
"""
import io, os, zlib, struct

BASE = os.path.dirname(os.path.abspath(__file__))
PARTS = os.path.join(BASE, 'parts')
SITE = os.path.join(BASE, 'docs')

CORPS = ['01_shell.html', '02_core.js', '03_programme.js', '04_generateurs.js',
         '06_approfondissement.js', '08_demonstrations.js', '10_cours_plus.js', '11_figures.js',
         '07_fun.js', '09_evaluation.js', '05_ui.js']

def lire(nom):
    return io.open(os.path.join(PARTS, nom), encoding='utf-8').read()

def ecrire(chemin, contenu):
    d = os.path.dirname(chemin)
    if d and not os.path.isdir(d):
        os.makedirs(d)
    io.open(chemin, 'w', encoding='utf-8', newline='\n').write(contenu)

corps = ''.join(lire(n) for n in CORPS)

# ---------- 1. version Artifact ----------
ecrire(os.path.join(BASE, 'maths_premiere.html'), corps)

# ---------- 2. version PWA ----------
TETE = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Lisa — tout le programme de spécialité mathématiques de première, avec des exercices tirés au sort et corrigés pas à pas.">
<meta name="theme-color" content="#16223F">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="icon-180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Lisa">
<meta property="og:type" content="website">
<meta property="og:title" content="Lisa">
<meta property="og:description" content="Tout le programme de spécialité maths de première, avec des exercices tirés au sort et corrigés pas à pas.">
<meta property="og:image" content="https://bertolis-dev.github.io/lisa/apercu.png">
<meta property="og:url" content="https://bertolis-dev.github.io/lisa/">
<meta name="twitter:card" content="summary_large_image">
<style>*,*::before,*::after{box-sizing:border-box}html,body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
"""

PIED = """
<script>
if ('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  });
}
</script>
</body>
</html>
"""
ecrire(os.path.join(SITE, 'index.html'), TETE + corps + PIED)

MANIFESTE = """{
  "name": "Lisa — Spé maths première",
  "short_name": "Lisa",
  "description": "Tout le programme de spécialité mathématiques de première, avec des exercices tirés au sort et corrigés pas à pas.",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#16223F",
  "theme_color": "#16223F",
  "lang": "fr",
  "categories": ["education"],
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "icon-512-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
"""
ecrire(os.path.join(SITE, 'manifest.webmanifest'), MANIFESTE)

# le cache est versionne par la taille du corps : toute modification force la mise a jour
VERSION = 'v' + str(len(corps))
SW = """/* Service worker : l'application fonctionne hors connexion. */
const CACHE = 'lisa-%s';
const FICHIERS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apercu.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(noms => Promise.all(noms.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r && r.status === 200 && r.type === 'basic'){
          const copie = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copie));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
""" % VERSION
ecrire(os.path.join(SITE, 'sw.js'), SW)
ecrire(os.path.join(SITE, '.nojekyll'), '')

# ---------- icones et vignette de partage ----------
# Identite visuelle : degrade indigo -> violet -> rose (celui de l'en-tete de
# l'application), une parabole blanche epaisse, un point d'or au sommet.
from PIL import Image, ImageDraw, ImageFont

C1, C2, C3 = (67, 56, 201), (124, 58, 237), (219, 39, 119)   # indigo, violet, rose
OR = (255, 198, 75)

def melange(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def degrade(w, h):
    """degrade diagonal, calcule en petit puis agrandi (rapide et lisse)"""
    p = Image.new('RGB', (64, 64))
    for y in range(64):
        for x in range(64):
            t = (x / 63 * 0.55 + y / 63 * 0.45)
            p.putpixel((x, y), melange(C1, C2, t / 0.55) if t <= 0.55 else melange(C2, C3, (t - 0.55) / 0.45))
    return p.resize((w, h), Image.BICUBIC)

def trait(d, pts, largeur, couleur):
    """trace epais et lisse : un disque tous les demi-pixels le long du chemin
       (PIL ebreche les polylignes epaisses, pas les disques)"""
    r = largeur / 2.0
    for i in range(len(pts) - 1):
        x1, y1 = pts[i]; x2, y2 = pts[i + 1]
        n = max(1, int(((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5 * 2))
        for j in range(n + 1):
            t = j / n
            x = x1 + (x2 - x1) * t; y = y1 + (y2 - y1) * t
            d.ellipse([x - r, y - r, x + r, y + r], fill=couleur)

def parabole(d, ox, oy, k, ex, largeur, xmax, couleur):
    pts = []
    x = -xmax
    while x <= xmax + 1e-9:
        pts.append((ox + x * ex, oy - k * x * x))
        x += 0.02
    trait(d, pts, largeur, couleur)

def icone(taille, maskable=False):
    S = taille * 4
    img = degrade(S, S)
    calque = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(calque)
    pas = S / 8.0
    for i in range(1, 8):                                  # quadrillage discret
        d.line([(i * pas, 0), (i * pas, S)], fill=(255, 255, 255, 26), width=max(1, S // 300))
        d.line([(0, i * pas), (S, i * pas)], fill=(255, 255, 255, 26), width=max(1, S // 300))
    z = 0.78 if maskable else 1.0                          # zone sûre pour l'icône masquée
    ox, oy = S / 2, S * (0.5 + 0.20 * z)
    ex, k = S * 0.138 * z, S * 0.100 * z
    parabole(d, ox, oy, k, ex, S * 0.082 * z, 2.0, (255, 255, 255, 255))
    r = S * 0.052 * z
    d.ellipse([ox - r, oy - r, ox + r, oy + r], fill=OR + (255,))
    img = Image.alpha_composite(img.convert('RGBA'), calque).convert('RGB')
    return img.resize((taille, taille), Image.LANCZOS)

icone(192).save(os.path.join(SITE, 'icon-192.png'))
icone(512).save(os.path.join(SITE, 'icon-512.png'))
icone(180).save(os.path.join(SITE, 'icon-180.png'))
icone(512, maskable=True).save(os.path.join(SITE, 'icon-512-maskable.png'))

# vignette d'apercu quand on partage le lien (1200 x 630)
def police(chemins, taille):
    for c in chemins:
        try:
            return ImageFont.truetype(c, taille)
        except Exception:
            pass
    return ImageFont.load_default()

def vignette():
    W, H = 1200, 630
    img = degrade(W, H)
    calque = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(calque)
    for i in range(1, 24):
        d.line([(i * 50, 0), (i * 50, H)], fill=(255, 255, 255, 20), width=2)
    for i in range(1, 13):
        d.line([(0, i * 50), (W, i * 50)], fill=(255, 255, 255, 20), width=2)
    ox, oy = 980, 436
    parabole(d, ox, oy, 46, 88, 20, 2.05, (255, 255, 255, 255))
    d.ellipse([ox - 16, oy - 16, ox + 16, oy + 16], fill=OR + (255,))
    img = Image.alpha_composite(img.convert('RGBA'), calque).convert('RGB')
    d = ImageDraw.Draw(img)
    gros = police([r'C:\Windows\Fonts\segoeuib.ttf', r'C:\Windows\Fonts\arialbd.ttf'], 132)
    moyen = police([r'C:\Windows\Fonts\seguisb.ttf', r'C:\Windows\Fonts\arial.ttf'], 44)
    petit = police([r'C:\Windows\Fonts\segoeui.ttf', r'C:\Windows\Fonts\arial.ttf'], 34)
    d.text((96, 186), 'Lisa', font=gros, fill=(255, 255, 255))
    d.text((104, 344), 'Spécialité maths, première générale', font=moyen, fill=(255, 255, 255))
    d.text((104, 414), 'Tout le programme, des exercices tirés au sort,', font=petit, fill=(232, 226, 255))
    d.text((104, 458), 'et la correction pas à pas.', font=petit, fill=(232, 226, 255))
    img.save(os.path.join(SITE, 'apercu.png'))

vignette()

print('Artifact : maths_premiere.html (%d octets)' % len(corps))
print('Site PWA : docs/ (index.html, manifest, sw.js, 4 icones, apercu) - cache %s' % VERSION)
