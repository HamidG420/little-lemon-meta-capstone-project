import styles from './Button.module.css';
const Button = ({ text, path, order, icon }) => {
  return (
    <a href={path} className={order ? styles.orderBtn : styles.btn}>
      <span>{text}</span>
      {icon && <i>{icon}</i>}
    </a>
  );
};
export default Button;
