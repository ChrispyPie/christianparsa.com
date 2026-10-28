(function () {
  // Visa "tar emot nya projekt"-märket. Sätt till true när Christian säger ja.
  var SHOW_AVAILABILITY = true;
  if (SHOW_AVAILABILITY) document.querySelectorAll('[data-avail]').forEach(function (el) { el.hidden = false; });
  var root = document.documentElement;
  var btn = document.getElementById('langToggle');
  function apply(l) {
    root.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    btn.setAttribute('aria-pressed', l === 'en');
    document.title = l === 'en'
      ? 'Christian Parsa – builds digital tools and experiences'
      : 'Christian Parsa – bygger digitala verktyg och upplevelser';
  }
  btn.addEventListener('click', function () { apply(root.lang === 'en' ? 'sv' : 'en'); });
  apply(root.lang === 'en' ? 'en' : 'sv');
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
