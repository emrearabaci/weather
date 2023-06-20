/* Components */
import WeatherCard from '@/app/_components/WeatherCard/WeatherCard';

/* Styles */
import styles from '@/app/page.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.background} />
      <WeatherCard />
    </div>
  );
}
