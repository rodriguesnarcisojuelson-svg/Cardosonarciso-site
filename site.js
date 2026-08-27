(() => {
  const toggle = document.getElementById('navtoggle');
  const links = document.getElementById('navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const bar = document.getElementById('cookieBar');
  const accept = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  const KEY = 'cn_cookie_choice';
  function loadAnalytics() {
    if (window.cnAnalyticsLoaded) return;
    window.cnAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', 'G-CVNZ67WM1V');
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CVNZ67WM1V';
    document.head.appendChild(script);
  }
  const choice = localStorage.getItem(KEY);
  if (!choice && bar) bar.hidden = false;
  if (choice === 'accepted') loadAnalytics();
  if (accept && bar) accept.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    bar.hidden = true;
    loadAnalytics();
  });
  if (decline && bar) decline.addEventListener('click', () => {
    localStorage.setItem(KEY, 'declined');
    bar.hidden = true;
  });
})();
