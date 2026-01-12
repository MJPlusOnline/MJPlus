// === GLOBAL LOGO CLICK ===
(function () {
  const logo = document.querySelector('header .logo');
  if (!logo) return;

  const audio = new Audio('logo-click.mp3');
  audio.volume = 0.45;

  logo.addEventListener('click', (e) => {
    e.preventDefault();

    audio.currentTime = 0;
    audio.play().catch(() => {});

    audio.onended = () => {
      window.location.href = 'home.html';
    };
  });
})();