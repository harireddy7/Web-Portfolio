const homeEl = document.querySelectorAll('a[href="#"]');
homeEl.forEach(home => {
  home.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.scrollTo({ top: 0 });
  });
});

const hamMenu = document.querySelectorAll('#ham-menu .menu a');
hamMenu.forEach(option => {
  option.addEventListener('click', function () {
    document.getElementsByTagName('input')[0].checked = false;
  });
});

const sectionEls = document.querySelectorAll('[data-section]');
const sectionOffsets = {};

sectionEls.forEach(section => {
  sectionOffsets[section.id] = section.offsetTop;
});

function setActiveNavStyle() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  for (let key in sectionOffsets) {
    if (sectionOffsets[key] <= scrollPosition + 150) {
      document.querySelectorAll('.active').forEach(link => link.classList.remove('active'));
      document
        .querySelectorAll(`[href="#${key === 'showcase' ? '' : key}"]`)
        .forEach(link => link.classList.add('active'));
    }
  }
}

const downloadBtn = document.getElementById('download-resume');
const scrollTopIcon = document.getElementById('scrollTop');

document.body.addEventListener('scroll', function () {
  if (downloadBtn.getBoundingClientRect().top < 30) {
    scrollTopIcon.style.display = 'grid';
  } else {
    scrollTopIcon.style.display = 'none';
  }
  setActiveNavStyle();
});

scrollTopIcon.addEventListener('click', function () {
  document.body.scrollTo({ top: 0 });
});
