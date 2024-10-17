const imageMainSources = [
  '/src/assets/images/image-product-1.jpg',
  '/src/assets/images/image-product-2.jpg',
  '/src/assets/images/image-product-3.jpg',
  '/src/assets/images/image-product-4.jpg',
];

let currentIndex = 0;
let lastIndex = 0;

function getIndexOfListItem(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
}

export function handleOnItemClick(list, image, e) {
  currentIndex = getIndexOfListItem(list, e.target.parentElement);
  list[lastIndex].setAttribute('data-active', 'false');
  list[currentIndex].setAttribute('data-active', 'true');
  lastIndex = currentIndex;

  image.src = imageMainSources[currentIndex];
}

export function handleNextOnItemClick() {}

export function handlePreviousOnItemClick() {}
