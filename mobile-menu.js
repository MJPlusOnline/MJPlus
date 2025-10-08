// mobile-menu.js – aktiviert nur auf Smartphones/Tablets
(function () {
  // Desktop ignorieren
  if (window.innerWidth > 768) return;

  const header = document.querySelector('header');
  if (!header) return;

  // Wenn der Menübutton schon existiert → nichts tun
  if (header.querySelector('.menu-toggle')) return;

  // Logo finden
  const logo = header.querySelector('.logo');

  // Button erstellen (☰)
  const btn = document.createElement('button');
  btn.className = 'menu-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML = '&#9776;'; // ☰

  // Nach dem Logo einfügen (nicht davor!)
  if (logo) logo.after(btn);
  else header.prepend(btn);

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