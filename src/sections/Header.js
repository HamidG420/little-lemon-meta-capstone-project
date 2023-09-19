import { useState } from 'react';
import styles from './Header.module.css';
import { navItems } from '../constants';
import logo from '../Assets/Logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { nanoid } from 'nanoid';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <nav
        className={`${styles.navbarContainer} ${
          showMenu ? styles.showNav : ''
        }`}
      >
        <ul className={styles.navbar}>
          {navItems.map((item) => (
            <li key={nanoid()} className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.closeIconContainer}>
          <i onClick={() => setShowMenu(!showMenu)}>
            <AiOutlineClose />
          </i>
        </div>
      </nav>
      <div className={styles.hamburgerIconContainer}>
        <i onClick={() => setShowMenu(!showMenu)}>
          <AiOutlineMenu />
        </i>
      </div>
    </header>
  );
};
export default Header;
