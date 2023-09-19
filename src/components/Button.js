import styles from './Button.module.css';
const Button = ({ text, path }) => {
  return (
    <a href={path} className={styles.btn}>
      {text}
    </a>
  );
};
export default Button;
