export { ImagePicker };

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

  static getTracker(isOverlay) {
    if (isOverlay === 'true') return this.overlayTracker;
    else if (isOverlay === 'false') return this.pageTracker;
  }

  static updateItemOnClick(tracker, list, image, e) {
    tracker.currentIndex = this.getIndexOfListItem(
      list,
      e.target.closest('.product-image-list-item-wrapper')
    );
    list[tracker.lastIndex]
      .closest('.product-image-list-item-wrapper')
      .setAttribute('data-active', 'false');
    list[tracker.currentIndex]
      .closest('.product-image-list-item-wrapper')
      .setAttribute('data-active', 'true');
    tracker.lastIndex = tracker.currentIndex;

    image.src = this.imageMainSources[tracker.currentIndex];
  }

  static handleOnItemClick(list, image, e, isOverlay) {
    let tracker = this.getTracker(isOverlay);

    this.updateItemOnClick(tracker, list, image, e);
  }

  static handleNextOnItemClick(list, image) {
    this.overlayTracker.currentIndex += 1;

    if (this.overlayTracker.currentIndex > list.length - 1) {
      this.overlayTracker.currentIndex = 0;
    }

    list[this.overlayTracker.lastIndex].setAttribute('data-active', 'false');
    list[this.overlayTracker.currentIndex].setAttribute('data-active', 'true');
    this.overlayTracker.lastIndex = this.overlayTracker.currentIndex;

    image.src = this.imageMainSources[this.overlayTracker.currentIndex];
  }

  static handlePreviousOnItemClick(list, image) {
    this.overlayTracker.currentIndex -= 1;

    if (this.overlayTracker.currentIndex < 0) {
      this.overlayTracker.currentIndex = list.length - 1;
    }

    list[this.overlayTracker.lastIndex].setAttribute('data-active', 'false');
    list[this.overlayTracker.currentIndex].setAttribute('data-active', 'true');
    this.overlayTracker.lastIndex = this.overlayTracker.currentIndex;

    image.src = this.imageMainSources[this.overlayTracker.currentIndex];
  }
}
