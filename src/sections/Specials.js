import Button from '../components/Button';
import SpecialCard from '../components/SpecialCard';
import { specialsData } from '../constants';
import styles from './Specials.module.css';

const Specials = () => {
  return (
    <section id="specials" className={styles.specialsContainer}>
      <div className={styles.specialsHeader}>
        <h2 className={styles.specialsHeaderTitle}>This weeks specials!</h2>
        <Button
          text="Online Menu"
          path="/"
          className={styles.specialsHeaderBtn}
        />
      </div>
      <div className={styles.specialsCardsContainer}>
        {specialsData.map((special) => (
          <SpecialCard key={special.id} {...special} />
        ))}
      </div>
    </section>
  );
};
export default Specials;
