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
const projectData = {
  1: {
    title: "Magazine Mock Up",
    src: "Media/W7Design - Vega.pdf#toolbar=0"
  },
  2: {
    title: "Website Mock Up",
    src: "Media/Final Project.pdf#toolbar=0"
  },
  3: {
    title: "How-To Project",
    src: "Media/How-To Document - Vega.pdf#toolbar=0"
  }
};
function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  const project = params.get("project");

  if (project && projectData[project]) {
    document.getElementById("projectTitle").textContent =
      projectData[project].title;

    document.getElementById("projectFrame").src =
      projectData[project].src;
  } else {
    document.getElementById("projectTitle").textContent =
      "How-To Project";

    document.getElementById("projectFrame").src =
      projectData.howto.src;
  }
}
loadFromURL();