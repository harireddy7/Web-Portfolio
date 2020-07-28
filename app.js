const homeEl = document.querySelectorAll('a[href="#"]');

homeEl.forEach(home => {
  home.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.scrollTo({ top: 0 });
  });
});

const hamMenu = document.querySelectorAll('#ham-menu .menu a');
const menuCheck = document.querySelector('#menu');

hamMenu.forEach(option => {
  option.addEventListener('click', function () {
    document.getElementsByTagName('input')[0].checked = false;
  });
});

const downloadBtn = document.getElementById('download-resume');
const scrollTopIcon = document.getElementById('scrollTop');

document.body.addEventListener('scroll', function () {
  if (downloadBtn.getBoundingClientRect().top < 30) {
    scrollTopIcon.style.display = 'grid';
  } else {
    scrollTopIcon.style.display = 'none';
  }
});

scrollTopIcon.addEventListener('click', function () {
  document.body.scrollTo({ top: 0 });
});
