document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  let hideTimeout = null;
  let transitionDuration = 500;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdown.classList.remove('closing');
    dropdown.classList.add('open');
  });

  dropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.add('closing');

      setTimeout(() => {
        dropdown.classList.remove('open', 'closing');
      }, transitionDuration);
    }, 1000);
  });
});