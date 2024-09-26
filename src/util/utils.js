export function preloadImages(images) {
  let loadedImages = 0;

  return new Promise((resolve) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === images.length) {
          resolve(); // All images are loaded
        }
      };
      img.onerror = () => {
        // Handle image load error, but still count it as "loaded"
        loadedImages += 1;
        if (loadedImages === images.length) {
          resolve();
        }
      };
    });
  });
}
