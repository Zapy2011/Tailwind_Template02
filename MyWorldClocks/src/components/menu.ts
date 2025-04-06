export function onToggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('ion-icon[name="menu"]');
  
  if (navLinks && menuIcon) {
    const currentName = menuIcon.getAttribute('name');
    menuIcon.setAttribute('name', currentName === 'menu' ? 'close' : 'menu');
    navLinks.classList.toggle('top-[9%]');
  }
}