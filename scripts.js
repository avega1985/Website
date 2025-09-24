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
document.addEventListener('DOMContentLoaded', function() {
  const Buttons = document.querySelectorAll('.button');
  const Contents = document.querySelectorAll('.tab-content');

  Buttons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.button.active').classList.remove('active');
      document.querySelector('.tab-content.active').classList.remove('active');

      button.classList.add('active');
      const targetTabId = button.dataset.tab;
      document.getElementById(targetTabId).classList.add('active');
    });
  });
});