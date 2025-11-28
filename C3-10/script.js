const button = document.querySelector('.btn-click-ripple');

button.addEventListener('click', (e) => {
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});