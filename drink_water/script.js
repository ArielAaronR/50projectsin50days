const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const boba = document.querySelector('.boba-container');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (smallCups[idx].nextElementSibling !== null) {
    if (
      smallCups[idx].classList.contains('full') &&
      !smallCups[idx].nextElementSibling.classList.contains('full')
    ) {
      idx--;
    }
  }
  smallCups.forEach((cup, idx2) => {
    idx2 <= idx ? cup.classList.add('full') : cup.classList.remove('full');
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  const totalCups = smallCups.length;

  console.log(totalCups);

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
    boba.classList.remove('fill');
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = ` ${(fullCups / totalCups) * 100}%`;
    boba.classList.add('fill');
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = ` ${2 - (250 * fullCups) / 1000}L`;
  }
}
