export function onToggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('ion-icon[name="menu"], ion-icon[name="close"]');
  
  if (navLinks && menuIcon) {
    const currentName = menuIcon.getAttribute('name');
    const isOpen = currentName === 'menu';
    
    // Toggle the icon
    menuIcon.setAttribute('name', isOpen ? 'close' : 'menu');
    
    // Toggle the menu visibility and position
    if (isOpen) {
      navLinks.classList.remove('top-[-100%]', 'opacity-0', 'invisible');
      navLinks.classList.add('top-[9%]', 'opacity-100', 'visible');
    } else {
      navLinks.classList.remove('top-[9%]', 'opacity-100', 'visible');
      navLinks.classList.add('top-[-100%]', 'opacity-0', 'invisible');
    }
  }
}