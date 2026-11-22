/* Sunny Image Technology — small progressive enhancements */
(function () {
  'use strict';

  // Mark external links so they are announced consistently.
  var host = location.hostname;
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    try {
      var h = new URL(a.href).hostname;
      if (h && h !== host) {
        a.setAttribute('rel', (a.getAttribute('rel') || 'noopener') + ' noopener');
      }
    } catch (e) { /* ignore malformed hrefs */ }
  });

  // Add a subtle shadow to the sticky header once the page is scrolled.
  var head = document.querySelector('.site-head');
  if (head) {
    var onScroll = function () {
      head.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Fallback active-state when the page is opened from a file path.
  if (!document.querySelector('.nav a[aria-current="page"]')) {
    var here = location.pathname.split('/').pop() || 'index.html';
    var link = document.querySelector('.nav a[href="' + here + '"]');
    if (link) link.setAttribute('aria-current', 'page');
  }
})();
