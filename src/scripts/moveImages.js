class ImagePicker {
  static imageMainSources = [
    '/src/assets/images/image-product-1.jpg',
    '/src/assets/images/image-product-2.jpg',
    '/src/assets/images/image-product-3.jpg',
    '/src/assets/images/image-product-4.jpg',
  ];

  static overlayTracker = {
    currentIndex: 0,
    lastIndex: 0,
  };

  static pageTracker = {
    currentIndex: 0,
    lastIndex: 0,
  };

  static getIndexOfListItem(list, target) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === target) {
        return i;
      }
    }
  }

  static updateItem(tracker, list, image, e) {
    tracker.currentIndex = this.getIndexOfListItem(
      list,
      e.target.parentElement
    );
    list[tracker.lastIndex].setAttribute('data-active', 'false');
    list[tracker.currentIndex].setAttribute('data-active', 'true');
    tracker.lastIndex = tracker.currentIndex;

    image.src = this.imageMainSources[tracker.currentIndex];
  }

  static handleOnItemClick(list, image, e, isOverlay) {
    const tracker = isOverlay ? this.overlayTracker : this.pageTracker;
    this.updateItem(tracker, list, image, e);
  }

  static handleNextOnItemClick() {}

  static handlePreviousOnItemClick() {}
}

export default ImagePicker;
