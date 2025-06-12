import React from 'react';
import styles from '@/styles/ImageAlbumSlide.module.scss';

const ImageAlbumSlide = ({ images, title }) => {
  if (!images || images.length === 0) {
    return (
      <div className={styles.imageAlbumSlide}>
        <h2 className={styles.title}>{title || 'Image Album'}</h2>
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    <div className={styles.imageAlbumSlide}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={image.src} alt={image.alt || `Album image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAlbumSlide;
