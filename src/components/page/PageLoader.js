import { useEffect, useState } from "react";
import { preloadImages } from "../../util/utils";

export default function PageLoader({ images, component }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    preloadImages(images).then(() => {
      setImagesLoaded(true);
    });
  }, [images]);

  return imagesLoaded && component;
}
