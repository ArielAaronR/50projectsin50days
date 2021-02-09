const contents = document.querySelectorAll('.content');
const icons = document.querySelectorAll('nav ul li');

icons.forEach((icon, idx) => {
  icon.addEventListener('click', () => {
    hideAllContents();
    hideAllIcons();

    icon.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllIcons() {
  icons.forEach((icon) => icon.classList.remove('active'));
}
