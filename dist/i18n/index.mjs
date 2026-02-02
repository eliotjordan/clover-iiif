"use client";
import l from "i18next-browser-languagedetector";
import t from "i18next";
import { initReactI18next as m } from "react-i18next";
const h = "Close", f = "Next", S = "Open", u = "Previous", $ = "Search", P = "Search...", g = "Share", b = "View All", C = "Failed", p = "Copied", T = "Loading...", R = "Search", d = "No Results", y = "More Results", A = "Full screen", L = "Reset zoom", M = "Rotate left", N = "Rotate right", k = "Zoom in", F = "Zoom out", J = "Select", V = "Viewer", v = "About", O = "Annotations", w = "Search", x = "More Information", Z = "View Collection", K = "Copy Collection URL", j = "View Manifest", I = "Copy Manifest URL", U = {
  commonClose: h,
  commonNext: f,
  commonOpen: S,
  commonPrevious: u,
  commonSearch: $,
  commonSearchPlaceholder: P,
  commonShare: g,
  commonViewAll: b,
  copyFailure: C,
  copySuccess: p,
  contentSearchLoading: T,
  contentSearchPlaceholder: R,
  contentSearchResultsNone: d,
  contentSearchResultsMore: y,
  imageFullScreen: A,
  imageResetZoom: L,
  imageRotateLeft: M,
  imageRotateRight: N,
  imageZoomIn: k,
  imageZoomOut: F,
  informationPanelTabs: J,
  informationPanelTabsClose: V,
  informationPanelTabsAbout: v,
  informationPanelTabsAnnotations: O,
  informationPanelTabsSearch: w,
  informationPanelToggle: x,
  shareCollectionJson: Z,
  shareCollectionCopy: K,
  shareManifestJson: j,
  shareManifestCopy: I
}, E = "Sulje", H = "Seuraava", z = "Edellinen", D = "Hae", _ = "Hae...", B = "Jaa", q = "Näytä kaikki", G = "Kopiointi epäonnistui", Q = "Kopioitu", W = "Ladataan...", X = "Haku", Y = "Ei osumia", oo = "Lisää osumia", no = "Valitse", eo = "Katselu", to = "Tiedot", ao = "Annotaatiot", co = "Haku", so = "Lisätiedot", io = "Näytä kokoelma", ro = "Kopioi kokoelman osoite", lo = "Näytä manifesti", mo = "Kopioi manifestin osoite", ho = {
  commonClose: E,
  commonNext: H,
  commonPrevious: z,
  commonSearch: D,
  commonSearchPlaceholder: _,
  commonShare: B,
  commonViewAll: q,
  copyFailure: G,
  copySuccess: Q,
  contentSearchLoading: W,
  contentSearchPlaceholder: X,
  contentSearchResultsNone: Y,
  contentSearchResultsMore: oo,
  informationPanelTabs: no,
  informationPanelTabsClose: eo,
  informationPanelTabsAbout: to,
  informationPanelTabsAnnotations: ao,
  informationPanelTabsSearch: co,
  informationPanelToggle: so,
  shareCollectionJson: io,
  shareCollectionCopy: ro,
  shareManifestJson: lo,
  shareManifestCopy: mo
}, fo = "Fermer", So = "Suivant", uo = "Ouvrir", $o = "Précédent", Po = "Rechercher", go = "Rechercher…", bo = "Partager", Co = "Tout afficher", po = "Échec", To = "Copié", Ro = "Chargement…", yo = "Rechercher", Ao = "Aucun résultat", Lo = "Plus de résultats", Mo = "Plein écran", No = "Réinitialiser le zoom", ko = "Rotation à gauche", Fo = "Rotation à droite", Jo = "Zoom avant", Vo = "Zoom arrière", vo = "Sélectionner", Oo = "Visionneuse", wo = "À propos", xo = "Annotations", Zo = "Recherche", Ko = "Plus d’informations", jo = "Afficher la collection", Io = "Copier l’URL de la collection", Uo = "Afficher le manifeste", Eo = "Copier l’URL du manifeste", Ho = {
  commonClose: fo,
  commonNext: So,
  commonOpen: uo,
  commonPrevious: $o,
  commonSearch: Po,
  commonSearchPlaceholder: go,
  commonShare: bo,
  commonViewAll: Co,
  copyFailure: po,
  copySuccess: To,
  contentSearchLoading: Ro,
  contentSearchPlaceholder: yo,
  contentSearchResultsNone: Ao,
  contentSearchResultsMore: Lo,
  imageFullScreen: Mo,
  imageResetZoom: No,
  imageRotateLeft: ko,
  imageRotateRight: Fo,
  imageZoomIn: Jo,
  imageZoomOut: Vo,
  informationPanelTabs: vo,
  informationPanelTabsClose: Oo,
  informationPanelTabsAbout: wo,
  informationPanelTabsAnnotations: xo,
  informationPanelTabsSearch: Zo,
  informationPanelToggle: Ko,
  shareCollectionJson: jo,
  shareCollectionCopy: Io,
  shareManifestJson: Uo,
  shareManifestCopy: Eo
}, zo = "Lukk", Do = "Neste", _o = "Forrige", Bo = "Søk", qo = "Søk...", Go = "Del", Qo = "Se alle", Wo = "Feilet", Xo = "Kopiert", Yo = "Laster inn...", on = "Søk", nn = "Ingen resultat", en = "Flere resultat", tn = "Velg", an = "Viewer", cn = "Om", sn = "Annoteringer", rn = "Søk", ln = "Mer informasjon", mn = "Se samlingen", hn = "Kopiér samlingens URL", fn = "Se manifestet", Sn = "Kopiér manifestets URL", un = {
  commonClose: zo,
  commonNext: Do,
  commonPrevious: _o,
  commonSearch: Bo,
  commonSearchPlaceholder: qo,
  commonShare: Go,
  commonViewAll: Qo,
  copyFailure: Wo,
  copySuccess: Xo,
  contentSearchLoading: Yo,
  contentSearchPlaceholder: on,
  contentSearchResultsNone: nn,
  contentSearchResultsMore: en,
  informationPanelTabs: tn,
  informationPanelTabsClose: an,
  informationPanelTabsAbout: cn,
  informationPanelTabsAnnotations: sn,
  informationPanelTabsSearch: rn,
  informationPanelToggle: ln,
  shareCollectionJson: mn,
  shareCollectionCopy: hn,
  shareManifestJson: fn,
  shareManifestCopy: Sn
}, $n = "Lukk", Pn = "Neste", gn = "Førre", bn = "Søk", Cn = "Søk...", pn = "Del", Tn = "Sjå alle", Rn = "Feila", dn = "Kopiert", yn = "Laster inn...", An = "Søk", Ln = "Ingen resultat", Mn = "Fleire resultat", Nn = "Vel", kn = "Viewer", Fn = "Om", Jn = "Annoteringa", Vn = "Søk", vn = "Meir informasjon", On = "Sjå samlinga", wn = "Kopiér samlingas URL", xn = "Sjå manifestet", Zn = "Kopiér manifestets URL", Kn = {
  commonClose: $n,
  commonNext: Pn,
  commonPrevious: gn,
  commonSearch: bn,
  commonSearchPlaceholder: Cn,
  commonShare: pn,
  commonViewAll: Tn,
  copyFailure: Rn,
  copySuccess: dn,
  contentSearchLoading: yn,
  contentSearchPlaceholder: An,
  contentSearchResultsNone: Ln,
  contentSearchResultsMore: Mn,
  informationPanelTabs: Nn,
  informationPanelTabsClose: kn,
  informationPanelTabsAbout: Fn,
  informationPanelTabsAnnotations: Jn,
  informationPanelTabsSearch: Vn,
  informationPanelToggle: vn,
  shareCollectionJson: On,
  shareCollectionCopy: wn,
  shareManifestJson: xn,
  shareManifestCopy: Zn
}, jn = "Lukk", In = "Neste", Un = "Forrige", En = "Søk", Hn = "Søk...", zn = "Del", Dn = "Se alle", _n = "Feilet", Bn = "Kopiert", qn = "Laster inn...", Gn = "Søk", Qn = "Ingen resultat", Wn = "Flere resultat", Xn = "Velg", Yn = "Viewer", oe = "Om", ne = "Annoteringer", ee = "Søk", te = "Mer informasjon", ae = "Se samlingen", ce = "Kopiér samlingens URL", se = "Se manifestet", ie = "Kopiér manifestets URL", re = {
  commonClose: jn,
  commonNext: In,
  commonPrevious: Un,
  commonSearch: En,
  commonSearchPlaceholder: Hn,
  commonShare: zn,
  commonViewAll: Dn,
  copyFailure: _n,
  copySuccess: Bn,
  contentSearchLoading: qn,
  contentSearchPlaceholder: Gn,
  contentSearchResultsNone: Qn,
  contentSearchResultsMore: Wn,
  informationPanelTabs: Xn,
  informationPanelTabsClose: Yn,
  informationPanelTabsAbout: oe,
  informationPanelTabsAnnotations: ne,
  informationPanelTabsSearch: ee,
  informationPanelToggle: te,
  shareCollectionJson: ae,
  shareCollectionCopy: ce,
  shareManifestJson: se,
  shareManifestCopy: ie
}, le = {}, me = {
  en: U,
  fi: ho,
  fr: Ho,
  nb: un,
  nn: Kn,
  no: re,
  pt: le
}, a = "clover", he = Object.fromEntries(
  Object.entries(me).map(([o, n]) => [
    o,
    { [a]: n }
  ])
), e = {
  defaultNS: a,
  fallbackLng: "en",
  ns: [a],
  resources: { ...he }
}, fe = (o, n) => ({
  ...o || {},
  ...n || {}
});
let i = !1;
function Se(o) {
  if (o) {
    for (const [n, c] of Object.entries(o))
      if (c)
        for (const [r, s] of Object.entries(c))
          s && t.addResourceBundle(n, r, s, !0, !0);
  }
}
function ue(o = {}) {
  if (i)
    Se(o.resources), o.lng && t.changeLanguage(o.lng), o.fallbackLng && (t.options.fallbackLng = o.fallbackLng);
  else {
    const n = fe(e.resources, o.resources);
    t.use(l).use(m).init({
      ...e,
      ...o,
      resources: n,
      // Preserve our namespace defaults unless explicitly overridden.
      ns: o.ns ?? e.ns,
      defaultNS: o.defaultNS ?? e.defaultNS,
      fallbackLng: o.fallbackLng ?? e.fallbackLng
    }), i = !0;
  }
  return t;
}
ue();
export {
  a as CLOVER_I18N_NAMESPACE,
  ue as initCloverI18n
};
