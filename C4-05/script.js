const container = document.querySelector('.img-container');
const image = document.querySelector('.img-base');
const magnifier = document.querySelector('.img-magnifier');
const magnifiedImage = magnifier.querySelector('img');

// マウスが画像上に入ったとき
container.addEventListener('mouseenter', () => {
  magnifier.style.display = 'block';
});

// マウスが画像から離れたとき
container.addEventListener('mouseleave', () => {
  magnifier.style.display = 'none';
});

// マウスの動きに応じてルーペを動かす
container.addEventListener('mousemove', (e) => {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // ルーペの位置を更新
  const magnifierSize = magnifier.offsetWidth / 2;
  magnifier.style.left = `${x - magnifierSize}px`;
  magnifier.style.top = `${y - magnifierSize}px`;

  // 拡大画像の位置を更新
  const scale = magnifiedImage.offsetWidth / image.offsetWidth;
  magnifiedImage.style.left = `${-x * scale + magnifierSize}px`;
  magnifiedImage.style.top = `${-y * scale + magnifierSize}px`;
});