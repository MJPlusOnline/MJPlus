(function(){
  if (window.innerWidth > 768) return;

  const header = document.querySelector('header');
  const logo   = header?.querySelector('.logo');
  const nav    = header?.querySelector('nav');
  if (!header || !logo || !nav) return;

  // Button erzeugen und NACH dem Logo einfügen (vor dem Nav)
  const btn = document.createElement('button');
  btn.className = 'menu-toggle';
  btn.type = 'button';
  btn.textContent = 'Menu';
  logo.after(btn); // wichtig: nicht vor das Logo, sondern danach

  // Toggle-Klick
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    header.classList.toggle('nav-open');
  });

  // Klick außerhalb schließt Menü
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) header.classList.remove('nav-open');
  });

  // ESC schließt Menü
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') header.classList.remove('nav-open');
  });
})();