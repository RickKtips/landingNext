import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Section.module.scss';

const Section = ({ id, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  // Determine background class based on id
  let backgroundClass = '';
  if (id && styles[`${id}Background`]) {
    backgroundClass = styles[`${id}Background`];
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ''} ${backgroundClass}`}
      
    >
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Section;
