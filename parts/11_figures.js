/* =========================================================================
   Figures du cours. Dessinées en SVG, sans image ni bibliothèque : elles
   suivent le thème clair/sombre et restent nettes à toutes les tailles.
   ========================================================================= */

function fig(w, h, dedans, legende){
  return '<figure class="fig"><svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' +
    (legende ? legende.replace(/<[^>]*>/g, '') : 'figure') + '">' + dedans + '</svg>' +
    (legende ? '<figcaption>' + legende + '</figcaption>' : '') + '</figure>';
}
/* trace une courbe y = f(x) dans un repère, x de x0 à x1 */
function trace(f, x0, x1, ox, oy, ex, ey, cls){
  const p = [];
  for (let x = x0; x <= x1 + 1e-9; x += (x1 - x0) / 90){
    p.push((ox + x * ex).toFixed(1) + ',' + (oy - f(x) * ey).toFixed(1));
  }
  return '<polyline class="' + (cls || 'courbe') + '" points="' + p.join(' ') + '"></polyline>';
}
function axes(ox, oy, x0, x1, y0, y1, ex, ey){
  return '<line class="axe" x1="' + (ox + x0 * ex) + '" y1="' + oy + '" x2="' + (ox + x1 * ex) + '" y2="' + oy + '"></line>' +
         '<line class="axe" x1="' + ox + '" y1="' + (oy - y0 * ey) + '" x2="' + ox + '" y2="' + (oy - y1 * ey) + '"></line>';
}
function pt(x, y, cls){ return '<circle class="' + (cls || 'pt') + '" cx="' + x + '" cy="' + y + '" r="4.5"></circle>'; }
function txt(x, y, t, cls){ return '<text x="' + x + '" y="' + y + '" class="' + (cls || '') + '">' + t + '</text>'; }

const FIGURES = {

'second-degre': [
  { apres: 'Fonction polynôme du second degré', f: function(){
    const g1 = '<g transform="translate(0,0)">' +
      axes(112, 96, -3.4, 3.4, -2.2, 2.6, 26, 26) +
      trace(x => 0.55 * x * x - 1.6, -2.85, 2.85, 112, 96, 26, 26) +
      pt(112, 96 + 1.6 * 26) + txt(112, 96 + 1.6 * 26 + 20, 'minimum', 'lab c') +
      txt(112, 24, 'a > 0 : vers le haut', 'titre c') + '</g>';
    const g2 = '<g transform="translate(236,0)">' +
      axes(112, 96, -3.4, 3.4, -2.6, 2.2, 26, 26) +
      trace(x => -0.55 * x * x + 1.6, -2.85, 2.85, 112, 96, 26, 26) +
      pt(112, 96 - 1.6 * 26) + txt(112, 96 - 1.6 * 26 - 12, 'maximum', 'lab c') +
      txt(112, 24, 'a &lt; 0 : vers le bas', 'titre c') + '</g>';
    return fig(460, 186, g1 + g2, 'Le signe de ' + M('a') + ' décide du sens de la parabole, et donc si le sommet est un minimum ou un maximum.');
  }},
  { apres: 'Forme canonique et sommet', f: function(){
    const ox = 150, oy = 132, ex = 30, ey = 26;
    const f = x => 0.6 * (x - 1.5) * (x - 1.5) - 2;
    return fig(460, 172,
      axes(ox, oy, -3.2, 4.4, -2.6, 1.6, ex, ey) +
      trace(f, -2.35, 4.1, ox, oy, ex, ey) +
      '<line class="aide" x1="' + (ox + 1.5 * ex) + '" y1="' + oy + '" x2="' + (ox + 1.5 * ex) + '" y2="' + (oy + 2 * ey) + '"></line>' +
      '<line class="aide" x1="' + ox + '" y1="' + (oy + 2 * ey) + '" x2="' + (ox + 1.5 * ex) + '" y2="' + (oy + 2 * ey) + '"></line>' +
      pt(ox + 1.5 * ex, oy + 2 * ey) +
      txt(ox + 1.5 * ex + 10, oy + 2 * ey + 5, 'S (α ; β)', 'lab') +
      txt(ox + 1.5 * ex, oy - 8, 'α', 'lab c') +
      txt(ox - 10, oy + 2 * ey + 5, 'β', 'lab r'),
      'Le sommet ' + M('S(α ; β)') + ' se lit directement sur la forme canonique : ' + M('α') + ' en abscisse, ' + M('β') + ' en ordonnée.');
  }},
  { apres: 'Signe du trinôme', f: function(){
    const ox = 150, oy = 100, ex = 34, ey = 22;
    const f = x => 0.7 * (x - (-1)) * (x - 2);
    const xg = ox - 1 * ex, xd = ox + 2 * ex;
    return fig(460, 170,
      '<rect class="zp" x="' + (ox - 3.3 * ex) + '" y="18" width="' + (2.3 * ex) + '" height="' + (oy - 18) + '"></rect>' +
      '<rect class="zn" x="' + xg + '" y="' + oy + '" width="' + (xd - xg) + '" height="46"></rect>' +
      '<rect class="zp" x="' + xd + '" y="18" width="' + (1.6 * ex) + '" height="' + (oy - 18) + '"></rect>' +
      axes(ox, oy, -3.3, 3.7, -1.6, 2.4, ex, ey) +
      trace(f, -2.25, 3.4, ox, oy, ex, ey) +
      pt(xg, oy) + pt(xd, oy) +
      txt(xg, oy + 20, 'x₁', 'lab c') + txt(xd, oy + 20, 'x₂', 'lab c') +
      txt(ox - 2.3 * ex, 42, 'signe de a', 'lab c') +
      txt((xg + xd) / 2, oy + 38, 'signe contraire', 'lab c') +
      txt(xd + 0.8 * ex, 42, 'signe de a', 'lab c'),
      'Entre les racines, le trinôme change de signe. Ailleurs, il garde celui de ' + M('a') + ' (ici ' + M('a > 0') + ').');
  }}
],

'suites': [
  { apres: 'Suite géométrique', f: function(){
    const ox = 56, oy = 140, ex = 21, ey = 5.0;
    let ar = '', ge = '';
    for (let n = 0; n <= 9; n++){
      ar += pt(ox + n * ex, oy - (4 + 2.2 * n) * ey, 'pa');
      ge += pt(ox + 232 + n * ex, oy - (4 * Math.pow(1.34, n)) * ey, 'pg');
    }
    return fig(460, 176,
      axes(ox, oy, -0.5, 10, -0.4, 4.6, ex, 5.6) + ar +
      txt(ox + 4.5 * ex, 24, 'arithmétique : +r à chaque pas', 'titre c') +
      axes(ox + 232, oy, -0.5, 10, -0.4, 4.6, ex, 5.6) + ge +
      txt(ox + 232 + 4.5 * ex, 24, 'géométrique : ×q à chaque pas', 'titre c'),
      'À gauche les points sont <b>alignés</b> : on ajoute toujours la même chose. À droite l’écart grandit de plus en plus : on multiplie.');
  }}
],

'derivation': [
  { apres: 'Taux de variation et nombre dérivé', f: function(){
    const ox = 90, oy = 138, ex = 44, ey = 30;
    const f = x => 0.42 * x * x + 0.3;
    const a = 2.1, fa = f(a), fp = 0.84 * a;
    const tg = x => fp * (x - a) + fa;
    return fig(460, 182,
      axes(ox, oy, -0.6, 7.2, -0.4, 4.4, ex, ey) +
      trace(f, -0.4, 3.1, ox, oy, ex, ey) +
      trace(tg, 0.55, 3.3, ox, oy, ex, ey, 'tangente') +
      '<line class="aide" x1="' + (ox + a * ex) + '" y1="' + oy + '" x2="' + (ox + a * ex) + '" y2="' + (oy - fa * ey) + '"></line>' +
      pt(ox + a * ex, oy - fa * ey) +
      txt(ox + a * ex, oy + 19, 'a', 'lab c') +
      txt(ox + 3.4 * ex, oy - tg(3.3) * ey + 4, 'tangente', 'lab') +
      txt(ox + 0.5 * ex, 30, 'courbe de f', 'lab'),
      M('f′(a)') + ' est la <b>pente de la tangente</b> au point d’abscisse ' + M('a') + ' : plus elle est raide, plus ' + M('f') + ' varie vite.');
  }}
],

'variations': [
  { apres: 'Lien dérivée / variations', f: function(){
    const ox = 60, oy = 118, ex = 52, ey = 15;
    const f = x => x * x * x / 3 - x * x + 1.2;
    return fig(460, 190,
      '<rect class="zp" x="' + ox + '" y="30" width="' + (0 + 0.0001) + '" height="1"></rect>' +
      axes(ox, oy, -0.5, 7, -2.6, 3.2, ex, ey) +
      trace(f, -0.4, 3.2, ox, oy, ex, ey) +
      pt(ox, oy - f(0) * ey) + pt(ox + 2 * ex, oy - f(2) * ey) +
      '<line class="aide" x1="' + (ox - 22) + '" y1="' + (oy - f(0) * ey) + '" x2="' + (ox + 22) + '" y2="' + (oy - f(0) * ey) + '"></line>' +
      '<line class="aide" x1="' + (ox + 2 * ex - 22) + '" y1="' + (oy - f(2) * ey) + '" x2="' + (ox + 2 * ex + 22) + '" y2="' + (oy - f(2) * ey) + '"></line>' +
      txt(ox, oy - f(0) * ey - 14, 'maximum local', 'lab c') +
      txt(ox + 2 * ex, oy - f(2) * ey + 22, 'minimum local', 'lab c') +
      txt(ox + 1 * ex, 26, 'f′ &lt; 0 : ça descend', 'lab c') +
      txt(ox + 2.9 * ex, 26, 'f′ > 0', 'lab c'),
      'Aux extremums, la tangente est <b>horizontale</b> : ' + M('f′') + ' s’annule <b>en changeant de signe</b>.');
  }}
],

'exponentielle': [
  { apres: 'Signe, variations, dérivée', f: function(){
    const ox = 210, oy = 140, ex = 44, ey = 17;
    return fig(460, 176,
      axes(ox, oy, -4.4, 2.2, -0.4, 7.2, ex, ey) +
      trace(x => Math.exp(x), -4.2, 1.95, ox, oy, ex, ey) +
      '<line class="aide" x1="' + (ox - 4.4 * ex) + '" y1="' + (oy - ey) + '" x2="' + (ox + 2.1 * ex) + '" y2="' + (oy - ey) + '"></line>' +
      pt(ox, oy - ey) + txt(ox + 9, oy - ey - 8, '(0 ; 1)', 'lab') +
      txt(ox - 3.1 * ex, oy - 14, 'toujours > 0', 'lab c') +
      txt(ox + 1.1 * ex, 34, 'croissance très rapide', 'lab c'),
      'La courbe ne touche <b>jamais</b> l’axe des abscisses : ' + M('@e^{x} > 0') + ' pour tout ' + M('x') + '. Elle passe par ' + M('(0 ; 1)') + '.');
  }}
],

'trigonometrie': [
  { apres: 'Cosinus et sinus', f: function(){
    const cx = 230, cy = 112, r = 82, ang = Math.PI / 3;
    const px = cx + r * Math.cos(ang), py = cy - r * Math.sin(ang);
    return fig(460, 210,
      '<circle class="cercle" cx="' + cx + '" cy="' + cy + '" r="' + r + '"></circle>' +
      '<line class="axe" x1="' + (cx - r - 24) + '" y1="' + cy + '" x2="' + (cx + r + 24) + '" y2="' + cy + '"></line>' +
      '<line class="axe" x1="' + cx + '" y1="' + (cy + r + 24) + '" x2="' + cx + '" y2="' + (cy - r - 24) + '"></line>' +
      '<path class="arc" d="M ' + (cx + 34) + ' ' + cy + ' A 34 34 0 0 0 ' + (cx + 34 * Math.cos(ang)) + ' ' + (cy - 34 * Math.sin(ang)) + '"></path>' +
      '<line class="rayon" x1="' + cx + '" y1="' + cy + '" x2="' + px + '" y2="' + py + '"></line>' +
      '<line class="proj" x1="' + px + '" y1="' + py + '" x2="' + px + '" y2="' + cy + '"></line>' +
      '<line class="proj" x1="' + cx + '" y1="' + cy + '" x2="' + px + '" y2="' + cy + '"></line>' +
      '<line class="aide" x1="' + px + '" y1="' + py + '" x2="' + cx + '" y2="' + py + '"></line>' +
      pt(px, py) +
      txt(px + 12, py - 4, 'M', 'lab') +
      txt(cx + 42, cy - 10, 'x', 'lab') +
      txt((cx + px) / 2, cy + 20, 'cos x', 'lab c') +
      txt(px + 10, (cy + py) / 2 + 4, 'sin x', 'lab') +
      txt(cx + r + 14, cy + 20, '1', 'lab c'),
      M('@cos(x)') + ' est l’<b>abscisse</b> du point, ' + M('@sin(x)') + ' son <b>ordonnée</b>. Le quart de cercle donne immédiatement les deux signes.');
  }}
],

'produit-scalaire': [
  { apres: 'Définition avec l’angle', f: function(){
    const bloc = (dx, titre, ax, ay, coul) => {
      const ox = dx + 74, oy = 118;
      return '<g>' +
        '<line class="vecteur" x1="' + ox + '" y1="' + oy + '" x2="' + (ox + 56) + '" y2="' + oy + '" marker-end="url(#fl)"></line>' +
        '<line class="vecteur" x1="' + ox + '" y1="' + oy + '" x2="' + (ox + ax) + '" y2="' + (oy + ay) + '" marker-end="url(#fl)"></line>' +
        '<path class="arc" d="M ' + (ox + 22) + ' ' + oy + ' A 22 22 0 0 ' + (ay < 0 ? '0' : '1') + ' ' +
          (ox + 22 * Math.cos(Math.atan2(ay, ax))) + ' ' + (oy + 22 * Math.sin(Math.atan2(ay, ax))) + '"></path>' +
        txt(ox + 12, 34, titre, 'titre') +
        txt(ox + 8, 52, coul, 'lab') + '</g>';
    };
    return fig(460, 150,
      '<defs><marker id="fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" class="tete"></path></marker></defs>' +
      bloc(0, 'angle aigu', 46, -34, 'u⃗ · v⃗ > 0') +
      bloc(152, 'angle droit', 0, -50, 'u⃗ · v⃗ = 0') +
      bloc(304, 'angle obtus', -40, -32, 'u⃗ · v⃗ &lt; 0'),
      'Le <b>signe</b> du produit scalaire donne la nature de l’angle. Nul ⇔ les vecteurs sont <b>orthogonaux</b>.');
  }},
  { apres: 'Théorème d’Al-Kashi', f: function(){
    const A = [92, 152], B = [352, 152], C = [212, 42];
    return fig(460, 190,
      '<polygon class="poly" points="' + A.join(',') + ' ' + B.join(',') + ' ' + C.join(',') + '"></polygon>' +
      '<path class="arc" d="M ' + (A[0] + 30) + ' ' + A[1] + ' A 30 30 0 0 0 ' +
        (A[0] + 30 * Math.cos(Math.atan2(C[1] - A[1], C[0] - A[0]))) + ' ' +
        (A[1] + 30 * Math.sin(Math.atan2(C[1] - A[1], C[0] - A[0]))) + '"></path>' +
      txt(A[0] + 38, A[1] - 12, 'Â', 'lab') +
      txt(A[0] - 14, A[1] + 6, 'A', 'lab') + txt(B[0] + 8, B[1] + 6, 'B', 'lab') + txt(C[0], C[1] - 10, 'C', 'lab c') +
      txt((A[0] + B[0]) / 2, A[1] + 20, 'c = AB', 'lab c') +
      txt((A[0] + C[0]) / 2 - 24, (A[1] + C[1]) / 2, 'b = AC', 'lab c') +
      txt((B[0] + C[0]) / 2 + 30, (B[1] + C[1]) / 2, 'a = BC', 'lab c'),
      'Al-Kashi relie les <b>trois côtés</b> et <b>un angle</b> : connaître trois de ces quatre nombres suffit à trouver le quatrième.');
  }}
],

'geometrie-reperee': [
  { apres: 'Équation cartésienne d’une droite', f: function(){
    const ox = 80, oy = 150, ex = 40, ey = 26;
    const d = x => 0.6 * x + 0.5;
    const x0 = 0.6, y0 = d(x0);
    const px = ox + x0 * ex, py = oy - y0 * ey;
    return fig(460, 190,
      '<defs><marker id="fl2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" class="tete"></path></marker></defs>' +
      axes(ox, oy, -0.6, 8.4, -0.5, 4.8, ex, ey) +
      trace(d, -0.4, 8.2, ox, oy, ex, ey) +
      '<line class="vecteur" x1="' + px + '" y1="' + py + '" x2="' + (px + 62) + '" y2="' + (py - 37) + '" marker-end="url(#fl2)"></line>' +
      '<line class="vecteur n" x1="' + px + '" y1="' + py + '" x2="' + (px + 37) + '" y2="' + (py + 62) + '" marker-end="url(#fl2)"></line>' +
      pt(px, py) +
      txt(px + 70, py - 40, 'u⃗ (-b ; a) directeur', 'lab') +
      txt(px + 44, py + 72, 'n⃗ (a ; b) normal', 'lab') +
      txt(ox + 7 * ex, oy - d(7) * ey - 12, 'ax + by + c = 0', 'lab c'),
      'Dans ' + M('ax + by + c = 0') + ', on <b>lit directement</b> le vecteur normal ' + M('vec{n}(a ; b)') + ', celui qui est perpendiculaire à la droite.');
  }}
],

'probas-conditionnelles': [
  { apres: 'Arbre pondéré', f: function(){
    const branche = (x1, y1, x2, y2, p, dy) =>
      '<line class="branche" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"></line>' +
      txt((x1 + x2) / 2 - 4, (y1 + y2) / 2 + (dy || -6), p, 'lab c');
    return fig(460, 210,
      pt(70, 105, 'noeud') +
      branche(70, 105, 190, 52, '0,6') + branche(70, 105, 190, 158, '0,4', 14) +
      pt(190, 52, 'noeud') + pt(190, 158, 'noeud') +
      txt(198, 46, 'A', 'lab') + txt(198, 152, 'Ā', 'lab') +
      branche(190, 52, 330, 26, '0,02') + branche(190, 52, 330, 80, '0,98', 14) +
      branche(190, 158, 330, 132, '0,05') + branche(190, 158, 330, 186, '0,95', 14) +
      txt(340, 31, 'D', 'lab') + txt(340, 85, 'D̄', 'lab') +
      txt(340, 137, 'D', 'lab') + txt(340, 191, 'D̄', 'lab') +
      txt(392, 31, '0,012', 'lab pv') + txt(392, 137, '0,020', 'lab pv'),
      'Le long d’un chemin on <b>multiplie</b> (' + M('0,6 × 0,02 = 0,012') + '), entre les chemins on <b>additionne</b> : ' + M('P(D) = 0,032') + '.');
  }}
],

'variables-aleatoires': [
  { apres: 'Espérance, variance, écart-type', f: function(){
    const vals = [[-2, 0.6], [-1, 0.3], [8, 0.1]];
    const ox = 90, oy = 158, ex = 30, ey = 150;
    let barres = '';
    vals.forEach(v => {
      const x = ox + (v[0] + 3) * ex;
      barres += '<rect class="barre" x="' + (x - 13) + '" y="' + (oy - v[1] * ey) + '" width="26" height="' + (v[1] * ey) + '" rx="3"></rect>' +
        txt(x, oy + 18, nf(v[0]), 'lab c') + txt(x, oy - v[1] * ey - 7, nf(v[1]), 'lab c');
    });
    const xE = ox + (-0.7 + 3) * ex;
    return fig(460, 200,
      '<line class="axe" x1="' + (ox - 10) + '" y1="' + oy + '" x2="' + (ox + 12 * ex) + '" y2="' + oy + '"></line>' +
      barres +
      '<line class="esp" x1="' + xE + '" y1="26" x2="' + xE + '" y2="' + (oy + 6) + '"></line>' +
      txt(xE + 8, 36, 'E(X) = -0,7', 'lab') +
      txt(ox + 11 * ex, oy + 18, 'valeurs de X', 'lab r'),
      'Chaque bâton est une valeur possible, sa hauteur est sa probabilité. L’<b>espérance</b> est le point d’équilibre. Ici il est négatif : le jeu est perdant.');
  }}
]

};

/* insertion des figures dans les blocs de cours correspondants */
Object.keys(FIGURES).forEach(id => {
  const c = CHAP[id];
  if (!c) return;
  FIGURES[id].forEach(item => {
    for (let k = 0; k < c.cours.length; k++){
      if (c.cours[k].t === item.apres){ c.cours[k].c += item.f(); return; }
    }
  });
});
