// mobile-menu.js – aktiviert nur auf Smartphones/Tablets
(function () {
  // Desktop ignorieren
  if (window.innerWidth > 768) return;

  const header = document.querySelector('header');
  if (!header) return;

  // ❗️Vorhandene doppelte Buttons entfernen (Fix)
  const existingButtons = header.querySelectorAll('.menu-toggle');
  existingButtons.forEach((b, i) => { if (i > 0) b.remove(); });

  // Wenn nach dem Aufräumen noch einer da ist -> nichts neu einfügen
  if (header.querySelector('.menu-toggle')) return;

  // Logo finden
  const logo = header.querySelector('.logo');

  // Button erstellen (☰)
  const btn = document.createElement('button');
  btn.className = 'menu-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML = '&#9776;'; // ☰

  // Direkt NACH dem Logo einfügen (unter dem Menübereich in deiner Mobile-Layout-Spalte)
  if (logo) logo.after(btn);
  else header.appendChild(btn);

  // Klick auf ☰ → Menü auf/zu
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    header.classList.toggle('nav-open');
  });

  // Klick außerhalb → Menü schließen
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove('nav-open');
    }
  });

  // ESC-Taste → Menü schließen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') header.classList.remove('nav-open');
  });
})();