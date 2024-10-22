import { ImagePicker } from '/src/scripts/imagePicker.mjs';

const listItems = document.querySelectorAll(
  `.${this.dataset.listItemClassNames}`
);
const mainImage = document.getElementById(this.dataset.mainImageId);

listItems.forEach((item) => {
  item.addEventListener('click', (e) =>
    ImagePicker.handleOnItemClick(listItems, mainImage, e, isOverlay)
  );
});
