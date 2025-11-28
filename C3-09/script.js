const colors = ['#0bd', '#f66', '#0c6', '#f83'];
let colorIndex = 0;
const button = document.querySelector('.btn-click-bounce');

button.addEventListener('click', () => {
  button.style.transition = 'translate 0.2s ease, background-color 0.2s ease';
  button.style.translate = '0 -10px';
  button.style.backgroundColor = colors[colorIndex];
  
  setTimeout(() => button.style.translate = '0', 200);
  colorIndex = (colorIndex + 1) % colors.length;
});