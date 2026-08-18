// Wait until the page elements exist
document.addEventListener("DOMContentLoaded", () => {
  // Find the title by its ID
  const siteTitle = document.getElementById("site-title");

  // Add the click event listener
  if (siteTitle) {
    siteTitle.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

  const floatingCta = document.getElementById('floatingCta');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    floatingCta.classList.add('visible');
  } else {
    floatingCta.classList.remove('visible');
  }
});
 // Burger buttons
 const navToggle = document.getElementById('navToggle');
  const headerNav = document.getElementById('headerNav');

  navToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
