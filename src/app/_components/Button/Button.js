/* Styles */
import styles from '@/app/_components/Button/Button.module.scss';

export default function Button({ type, onClick, content }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
