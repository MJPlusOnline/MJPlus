// mobile-menu.js – aktiviert nur auf Smartphones/Tablets
(function () {
  // Desktop ignorieren
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (!isMobile) return;

  const header = document.querySelector('header');
  if (!header) return;

  // ❌ Feedback-Seite: kein Burger-Menü
  if (document.body.dataset.page === 'feedback') return;

  // ❌ Short Films im Mobile-Menü ausblenden
  const shortFilmsLink = header.querySelector('a[href*="short-films"]');
  if (shortFilmsLink) {
    shortFilmsLink.style.display = 'none';
  }

  // ❗️Vorhandene doppelte Buttons entfernen (Fix)
  const existingButtons = header.querySelectorAll('.menu-toggle');
  existingButtons.forEach((b, i) => {
    if (i > 0) b.remove();
  });

  // Wenn nach dem Aufräumen noch einer da ist → nichts neu einfügen
  if (header.querySelector('.menu-toggle')) return;

  // Logo finden
  const logo = header.querySelector('.logo');

  // Button erstellen (☰)
  const btn = document.createElement('button');
  btn.className = 'menu-toggle';
  btn.textContent = '☰';
  btn.setAttribute('aria-label', 'Menu');
  btn.type = 'button';

  // Direkt NACH dem Logo einfügen
  if (logo) logo.after(btn);
  else header.appendChild(btn);

  // Klick auf ☰ → Menü auf/zu
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    header.classList.toggle('nav-open');
  });

  // Klick außerhalb → Menü schließen
  document.addEventListener('click', (e) => {
    if (!header.classList.contains('nav-open')) return;
    if (e.target.closest('.menu-toggle')) return;
    if (!header.contains(e.target)) {
      header.classList.remove('nav-open');
    }
  });

  // ESC-Taste → Menü schließen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') header.classList.remove('nav-open');
  });
})();
