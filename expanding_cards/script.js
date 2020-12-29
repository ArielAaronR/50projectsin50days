// querySelectorAll creates a node list
const panels = document.querySelectorAll('.panel');

/*
Loop through all the elements that have a panel class
*/
panels.forEach((panel) => {
  //Add a click eventlistner to each panel
  panel.addEventListener('click', () => {
    //Removes all active class to all the panels that currently have it
    removeActiveClasses();
    //Adds active class to the clicked panel
    panel.classList.add('active');
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
