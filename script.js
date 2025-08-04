let currentPage = 0;
const pages = document.querySelectorAll('.page');
const seitenSelect = document.getElementById('seitenSelect');

function showPage(index) {
  if (index >= 0 && index < pages.length) {
    pages[currentPage].classList.remove('active');
    currentPage = index;
    pages[currentPage].classList.add('active');
    if (seitenSelect) seitenSelect.value = index;
  }
}

document.addEventListener('wheel', function (event) {
  if (event.deltaY > 0) {
    showPage(currentPage + 1);
  } else {
    showPage(currentPage - 1);
  }
});

if (seitenSelect) {
  seitenSelect.addEventListener('change', function () {
    showPage(parseInt(this.value));
  });
}
