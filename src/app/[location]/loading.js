/* Styles */
import styles from '@/app/[location]/loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.main}>
      <div className={styles.spinner} />
    </div>
  );
}
