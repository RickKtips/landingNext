import React from 'react';
import styles from '@/styles/TextSlide.module.scss';

const TextSlide = ({ title, text }) => {
  return (
    <div className={styles.textSlide}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TextSlide;
