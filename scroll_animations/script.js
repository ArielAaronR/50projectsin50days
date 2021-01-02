const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  // gets height of the window
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //   getBoundingClientRect give you a rectagle
    const boxTop = box.getBoundingClientRect().top;

    boxTop < triggerBottom
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
};
window.addEventListener('scroll', checkBoxes);

checkBoxes();

