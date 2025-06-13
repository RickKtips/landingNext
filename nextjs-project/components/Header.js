import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={styles.header}>
      <nav>
       
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="#banner" legacyBehavior>
              <a className={styles.navLink} onClick={(e) => handleScroll(e, 'banner')}>
                Solutions
             <h1 className={styles.logo}>Next3</h1>
             </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#solutions" legacyBehavior>
              <a className={styles.navLink} onClick={(e) => handleScroll(e, 'solutions')}>
                Solutions
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#differentials" legacyBehavior>
              <a className={styles.navLink} onClick={(e) => handleScroll(e, 'differentials')}>
                Differentials
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#cases" legacyBehavior>
              <a className={styles.navLink} onClick={(e) => handleScroll(e, 'cases')}>
                Cases
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#about" legacyBehavior>
              <a className={styles.navLink} onClick={(e) => handleScroll(e, 'about')}>
                About Us
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact" legacyBehavior>
              <a className={styles.navLink} onClick={(e) => handleScroll(e, 'contact')}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
