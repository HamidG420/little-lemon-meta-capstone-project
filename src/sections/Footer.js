import logoFooter from '../Assets/Logo Footer.png';
import {
  contactInformation,
  navItems,
  socialMediaInformation,
} from '../constants';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src={logoFooter}
          alt="Little Lemon logo"
          className={styles.footerLogo}
        />
      </div>
      <div>
        <h3 className={styles.footerTitleSection}>Little Lemon</h3>
        <ul className={styles.footerNavListContainer}>
          {navItems.map((item) => (
            <li className={styles.footerListItem}>
              <a href="/" className={styles.footerNavLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={styles.footerTitleSection}>Contact Information</h3>
        <ul className={styles.footerContactListContainer}>
          {contactInformation.map((data) => (
            <li className={styles.footerListItem}>
              {data[0]}: {data[1]}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerSocialNetworkContainer}>
        <h3 className={styles.footerTitleSection}>
          Find us in Social networks!
        </h3>
        <ul className={styles.footerSocialNetworkListContainer}>
          {socialMediaInformation.map((item) => (
            <li>
              <a href={item[0]} className={styles.footerSocialNetworkLink}>
                {item[1]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerCopyrightContainer}>
        <p>&copy; Copyright. All rights reserved.</p>
        <p>
          Designed and developed by Hamid Goodarzi for the capstone project of
          the professional certificate of Meta front-end developer
        </p>
      </div>
    </footer>
  );
};
export default Footer;
