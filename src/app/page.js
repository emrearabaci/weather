'use client';

/* Next API */
import { useRouter } from 'next/navigation';
import Image from 'next/image';

/* Utils */
import { searchLocation } from '@/app/_utils/utils';

/* Components */
import InputField from '@/app/_components/InputField/InputField';
import Button from '@/app/_components/Button/Button';

/* Styles */
import styles from '@/app/page.module.scss';

export default function Home() {
  const imageConfigs = {
    width: 18,
    height: 18,
    quality: 80,
    priority: true
  };

  const images = [
    '/icon-droplet.svg',
    '/icon-cloud-rain.svg',
    '/icon-wind.svg',
    '/icon-clouds.svg',
    '/icon-sun.svg',
    '/icon-cloud-snow.svg',
    '/icon-moon.svg',
    '/icon-cloud-drizzle.svg',
    '/icon-brightness-low.svg',
    '/icon-cloud-lightning.svg'
  ];

  const router = useRouter();

  const handleSubmit = async (event) => {
    await searchLocation(event, router);
  };

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h4 className={styles.header}>Weather & Forecast</h4>
        <div className={styles.icon}>
          {images.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
          ))}
        </div>
        <span className={styles.description}>
          This app provides the current weather for the searched location and
          the forecast for the next 24 hours (in 3-hour intervals).
        </span>
        <span className={styles.description}>
          This app does not use automated location information. It does not
          request any location information from users.
        </span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <InputField
            name={'location'}
            type={'text'}
            placeholder={'find location'}
            autoFocus={true}
          />
          <Button
            type={'text'}
            content={
              <Image
                src={'/icon-search.svg'}
                alt={'image'}
                width={imageConfigs.width}
                height={imageConfigs.height}
                quality={imageConfigs.quality}
                priority={imageConfigs.priority}
              />
            }
          />
        </form>
      </div>
    </div>
  );
}
