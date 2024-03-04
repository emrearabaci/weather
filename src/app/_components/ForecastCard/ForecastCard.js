/* Next API */
import Image from 'next/image';

/* Styles */
import styles from '@/app/_components/ForecastCard/ForecastCard.module.scss';

export default function ForecastCard({ forecast }) {
  const imageConfigs = {
    width: 18,
    height: 18,
    quality: 80,
    priority: true
  };

  const getForecastBackground = (weatherMain) => {
    if (weatherMain === 'Clear') {
      return [styles.icon, styles.clear];
    } else if (weatherMain === 'Clouds') {
      return [styles.icon, styles.clouds];
    } else if (weatherMain === 'Thunderstorm') {
      return [styles.icon, styles.thunderstorm];
    } else if (weatherMain === 'Drizzle') {
      return [styles.icon, styles.drizzle];
    } else if (weatherMain === 'Rain') {
      return [styles.icon, styles.rain];
    } else if (weatherMain === 'Snow') {
      return [styles.icon, styles.snow];
    } else {
      return [styles.icon, ''];
    }
  };

  return (
    <>
      {forecast.list.map((item, index) => (
        <div key={index} className={styles.main}>
          <span className={styles.date}>
            {new Date((item.dt + forecast.city.timezone) * 1000).toLocaleString(
              'en-GB',
              {
                day: 'numeric',
                month: 'short',
                hour: 'numeric',
                minute: 'numeric'
              }
            )}
          </span>
          <div
            className={getForecastBackground(item.weather[0].main).join(' ')}
          />
          <div className={styles.layout}>
            <div className={styles.forecast}>
              <span className={styles.degree}>
                {item.main.temp.toFixed(1)}&#176;
              </span>
              <span className={styles.description}>
                {item.weather &&
                  item.weather.map((item, index) => (
                    <span key={index}>{item.main}</span>
                  ))}
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
                <span>&nbsp;{item.main.humidity}%</span>
              </div>

              <div>
                {item.rain && (
                  <>
                    <Image
                      src={'/icon-cloud-rain.svg'}
                      alt={'image'}
                      width={imageConfigs.width}
                      height={imageConfigs.height}
                      quality={imageConfigs.quality}
                      priority={imageConfigs.priority}
                    />
                    <span>&nbsp;{item.rain['3h']}mm/3h</span>
                  </>
                )}
              </div>

              <div>
                {item.snow && (
                  <>
                    <Image
                      src={'/icon-cloud-snow.svg'}
                      alt={'image'}
                      width={imageConfigs.width}
                      height={imageConfigs.height}
                      quality={imageConfigs.quality}
                      priority={imageConfigs.priority}
                    />
                    <span>&nbsp;{item.snow['3h']}mm/3h</span>
                  </>
                )}
              </div>

              <div>
                {!item.rain && !item.snow && (
                  <>
                    <Image
                      src={'/icon-clouds.svg'}
                      alt={'image'}
                      width={imageConfigs.width}
                      height={imageConfigs.height}
                      quality={imageConfigs.quality}
                      priority={imageConfigs.priority}
                    />
                    <span>
                      &nbsp;<span>{item.clouds.all}%</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
