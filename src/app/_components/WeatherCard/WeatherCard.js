/* Next API */
import Image from 'next/image';

/* Styles */
import styles from '@/app/_components/WeatherCard/WeatherCard.module.scss';

export default function WeatherCard({ current }) {
  const imageConfigs = {
    width: 18,
    height: 18,
    quality: 80,
    priority: true
  };

  return (
    <div className={styles.main}>
      <span className={styles.date}>
        {new Date(current.dt * 1000).toLocaleString('en-GB', {
          day: 'numeric',
          month: 'short',
          hour: 'numeric',
          minute: 'numeric'
        })}
      </span>

      <div className={styles.layout}>
        <div className={styles.current}>
          <span className={styles.location}>
            {current.name}, {current.sys.country}
          </span>
          <span className={styles.degree}>
            {current.main.temp.toFixed(1)}&#176;
          </span>
          <span className={styles.description}>
            {current.weather[0].description}
          </span>
        </div>

        <div className={styles.details}>
          <div>
            <Image
              src={'/icon-droplet.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            <span>&nbsp;{current.main.humidity}%</span>
          </div>

          <div>
            <Image
              src={'/icon-cloud-rain.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            {current.rain ? (
              <span>&nbsp;{current.rain['3h']}mm/3h</span>
            ) : (
              <span>&nbsp;0mm/3h</span>
            )}
          </div>

          <div>
            <Image
              src={'/icon-cloud-snow.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            {current.snow ? (
              <span>&nbsp;{current.snow['3h']}mm/3h</span>
            ) : (
              <span>&nbsp;0mm/3h</span>
            )}
          </div>

          <div>
            <Image
              src={'/icon-wind.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            <span>&nbsp;{current.wind.speed}m/s</span>
          </div>

          <div>
            <Image
              src={'/icon-clouds.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            <span>&nbsp;{current.clouds.all}%</span>
          </div>

          <div>
            <Image
              src={'/icon-sun.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            <span>
              &nbsp;
              {new Date(current.sys.sunrise * 1000).toLocaleString('en-GB', {
                hour: 'numeric',
                minute: 'numeric'
              })}
            </span>
          </div>

          <div>
            <Image
              src={'/icon-moon.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
            <span>
              &nbsp;
              {new Date(current.sys.sunset * 1000).toLocaleString('en-GB', {
                hour: 'numeric',
                minute: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.date}>
        <span>
          {current.coord.lat} / {current.coord.lon}
        </span>
      </div>
    </div>
  );
}
