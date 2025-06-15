import React from 'react';
import styles from '@/styles/TextSlide2.module.scss';

const TextSlide2 = ({ title, text }) => {
  return (
    <div className={styles.textSlide2}>
     <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.lists}>
        <ul className={styles.list1}>
          <li className={styles.how}>HOW WE DID IT</li>
          <li>GLOBAL SOURCING</li>
          <li>7 POTENCIAL SUPPLIERS SOURCED</li>
          <li>1 HOMOLOGATED SUPPLIER</li>
          <li>PRODUCT DEVELOPMENT</li>
          <li>FABRIC DEFINITION </li>
          <li>STRUCTURE DEFINITION </li>
          <li>USABILITY AND DURABILITY TESTS</li>
          <li>DECORATION </li>
          <li>SPECIFICATIONS</li> 
        </ul>
        <ul className={styles.list2}>
          <li className={styles.img1}><strong>UNITS PRODUCED:</strong><br />26,000</li>
          <li className={styles.img2}><strong>COST REDUCTION:</strong><br />10% (IN THE FINAL PRICE)</li>
          <li className={styles.img3}><strong>OTIF:</strong><br />100%</li>
        </ul>
      </div>
</div>
<div className={styles.banner}>

</div>

    </div>
  );
};

export default TextSlide2;
