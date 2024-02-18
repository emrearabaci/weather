'use client';

/* Next API */
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

/* Utils */
import { searchLocation } from '@/app/_utils/utils';

/* Components */
import Button from '@/app/_components/Button/Button';
import InputField from '@/app/_components/InputField/InputField';

/* Styles */
import styles from '@/app/_components/NavigationBar/NavigationBar.module.scss';

export default function NavigationBar() {
  const router = useRouter();

  const imageConfigs = {
    width: 18,
    height: 18,
    quality: 80,
    priority: true
  };

  const handleSubmit = async (event) => {
    await searchLocation(event, router);
  };

  return (
    <div className={styles.main}>
      <Link href={'/'}>
        <Button
          type={'button'}
          content={
            <Image
              src={'/icon-house.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
          }
        />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          name={'location'}
          type={'text'}
          placeholder={'find location'}
          autoFocus={false}
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
  );
}
