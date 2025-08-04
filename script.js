let currentPage = 0;
const pages = document.querySelectorAll('.page');

document.addEventListener('wheel', function (event) {
  if (event.deltaY > 0) {
    if (currentPage < pages.length - 1) {
      pages[currentPage].classList.remove('active');
      currentPage++;
      pages[currentPage].classList.add('active');
    }
  } else {
    if (currentPage > 0) {
      pages[currentPage].classList.remove('active');
      currentPage--;
      pages[currentPage].classList.add('active');
    }
  }
});
