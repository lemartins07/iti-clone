/*= ============== SHOW MENU =============== */
{
  const showMenu = (navListClass, toggleId) => {
    const nav = document.querySelector(navListClass);
    const toggle = document.getElementById(toggleId);

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('is-active');
      });
    }
  };

  showMenu('.js-nav-mobile__list', 'nav-toggle');
}

/*= ============== REMOVE MENU MOBILE =============== */

/*= ============== SCROLL SECTIONS ACTIVE LINK =============== */

/*= ============== CHANGE BACKGROUND HEADER =============== */

/*= ============== SHOW SCROLL UP =============== */

/*= ============== DARK LIGHT THEME =============== */

/*= ============== ENABLE/DISABLE BUTTON =============== */
