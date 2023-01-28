var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');
var $gallery = document.querySelector('main');
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg', 'https://i.giphy.com/media/YWf50NNii3r4k/giphy.webp', 'https://i.giphy.com/media/xTiTnHXbRoaZ1B1Mo8/giphy.webp', 'https://i.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.webp'
];

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }

});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}
updateGallery();
