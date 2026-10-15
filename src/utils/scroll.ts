export function scrollToSection(targetIdOrHref: string) {
  // Immediately unlock body scroll in case mobile menu locked it
  document.body.style.overflow = '';

  const cleanId = targetIdOrHref.replace(/^#/, '').toLowerCase();

  // Find target element by exact ID or common aliases
  const targetElement = 
    document.getElementById(cleanId) ||
    (cleanId === 'portfolio' ? document.getElementById('work') : null) ||
    (cleanId === 'work' ? document.getElementById('portfolio') : null) ||
    (cleanId === 'process' ? document.getElementById('how-we-work') : null) ||
    (cleanId === 'how-we-work' ? document.getElementById('process') : null);

  if (targetElement) {
    const navHeight = 75;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = Math.max(0, elementPosition - navHeight);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${cleanId}`);
    }
  } else if (window.location.pathname !== '/') {
    window.location.href = `/#${cleanId}`;
  }
}
