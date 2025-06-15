import React from 'react';
import styles from '@/styles/TextSlide.module.scss';

const TextSlide = ({ title, text }) => {
  return (
    <div className={styles.textSlide}>
      {/* <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p> */}
      <h3 className={styles.title}>Skol<br />
      2020 <span>Summer Umbrellas</span>
      </h3>
      <div className={styles.banner}></div>
    </div>
  );
};

export default TextSlide;
