(function () {
    const nav = document.querySelector('.hextra-nav-container');
    if (nav) {
        let lastScrollY = window.pageYOffset;
        const mobileBreakpoint = 768;

        window.addEventListener('scroll', () => {
          if (window.innerWidth > mobileBreakpoint) {
            nav.classList.remove('nav-hidden');
            return;
          }
          const currentScrollY = window.pageYOffset;
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            nav.classList.add('nav-hidden');
          } else {
            nav.classList.remove('nav-hidden');
          }
          lastScrollY = currentScrollY;
        });
    }
})();


