const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Have a great day!',
  'You are the best ',
  'You can totally do this',
  'When nothing goes right, go left',
  'Try Again. Fail again. Fail better',
  'ake the risk or lose the chance',
];

const types = ['info', 'success', 'error'];

const getrandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getrandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};
const createNotification = (message = null, type = null) => {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getrandomType());

  notif.innerText = message ? message : getrandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
};

button.addEventListener('click', () => createNotification());
