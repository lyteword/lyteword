(function () {
  const nav = document.querySelector('.hextra-nav-container');
  if (nav) {
    let lastScrollY = window.pageYOffset;
    const mobileBreakpoint = 768;
    const scrollDelta = 15; 

    window.addEventListener('scroll', () => {
      if (window.innerWidth > mobileBreakpoint) {
        nav.classList.remove('nav-hidden');
        return;
      }

      const currentScrollY = window.pageYOffset;
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) < scrollDelta) return;

      if (diff > 0 && currentScrollY > 50) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }

      lastScrollY = currentScrollY;
    });
  }
})();
