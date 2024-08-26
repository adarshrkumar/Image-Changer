var image = document.querySelector('img')
var openImage = document.querySelector('.openImage')

function changeImage() {
  let randNum = Math.floor(Math.random() * 10);
  image.setAttribute('src', `assets/${randNum}.png`);
  openImage.setAttribute('onClick', `window.open('assets/${randNum}.png')`);
}