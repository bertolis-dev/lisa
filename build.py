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
         '06_approfondissement.js', '08_demonstrations.js', '07_fun.js', '09_evaluation.js', '05_ui.js']

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
const FICHIERS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

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

# ---------- icones : papier quadrille + parabole ----------
from PIL import Image, ImageDraw

def icone(taille, marge_ratio=0.0):
    S = taille * 4
    img = Image.new('RGB', (S, S), (22, 34, 63))
    d = ImageDraw.Draw(img)
    pas = S / 10.0
    for i in range(1, 10):                      # quadrillage
        d.line([(i * pas, 0), (i * pas, S)], fill=(38, 52, 88), width=max(1, S // 220))
        d.line([(0, i * pas), (S, i * pas)], fill=(38, 52, 88), width=max(1, S // 220))
    z = 1.0 - 2 * marge_ratio                   # zone utile (icone maskable : on resserre)
    ox, oy, k = S / 2.0, S * (0.5 + 0.22 * z), S * 0.055 * z
    d.line([(S * (0.5 - 0.42 * z), oy), (S * (0.5 + 0.42 * z), oy)], fill=(90, 106, 148), width=max(2, S // 130))
    d.line([(ox, S * (0.5 - 0.42 * z)), (ox, S * (0.5 + 0.40 * z))], fill=(90, 106, 148), width=max(2, S // 130))
    pts = []                                    # parabole y = x^2
    x = -4.2 * z
    while x <= 4.2 * z + 0.01:
        pts.append((ox + x * k * 1.55, oy - (x * x) * k * 0.40))
        x += 0.05
    d.line(pts, fill=(226, 175, 71), width=max(4, int(S * 0.038)), joint='curve')
    d.ellipse([ox - S * 0.022, oy - S * 0.022, ox + S * 0.022, oy + S * 0.022], fill=(226, 175, 71))
    return img.resize((taille, taille), Image.LANCZOS)

icone(192).save(os.path.join(SITE, 'icon-192.png'))
icone(512).save(os.path.join(SITE, 'icon-512.png'))
icone(180).save(os.path.join(SITE, 'icon-180.png'))
icone(512, marge_ratio=0.12).save(os.path.join(SITE, 'icon-512-maskable.png'))

print('Artifact : maths_premiere.html (%d octets)' % len(corps))
print('Site PWA : docs/ (index.html, manifest, sw.js, 4 icones) — cache %s' % VERSION)
