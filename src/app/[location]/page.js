/* Next API */
import { notFound } from 'next/navigation';

/* React API */
import { Suspense } from 'react';

/* Components */
import WeatherCard from '@/app/_components/WeatherCard/WeatherCard';
import ForecastCard from '@/app/_components/ForecastCard/ForecastCard';
import Loading from '@/app/[location]/loading';

/* Styles */
import styles from '@/app/[location]/page.module.scss';

async function getCurrent(location) {
  await new Promise((resolve) =>
    setTimeout(resolve, process.env.REQUEST_TIME_OUT)
  );

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&lang=${process.env.LANGUAGE}&units=${process.env.UNITS}`,
    {
      next: {
        revalidate: parseInt(process.env.REVALIDATE)
      }
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function getForecast(location) {
  await new Promise((resolve) =>
    setTimeout(resolve, process.env.REQUEST_TIME_OUT)
  );

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=${process.env.RES_CNT}&lang=${process.env.LANGUAGE}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`,
    {
      next: {
        revalidate: parseInt(process.env.REVALIDATE)
      }
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function Weather({ params: { location } }) {
  const currentData = getCurrent(location);
  const forecastData = getForecast(location);

  const [current, forecast] = await Promise.all([currentData, forecastData]);

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.main}>
        <div className={styles.current}>
          <h4 className={styles.header}>NOW</h4>
          <WeatherCard current={current} />
        </div>
        <div className={styles.forecast}>
          <h4 className={styles.header}>Forecast</h4>
          <ForecastCard forecast={forecast} />
        </div>
      </div>
    </Suspense>
  );
}
