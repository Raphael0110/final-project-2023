import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <h1 className={styles.latesttext}>Newest 5:</h1>

      <div className={styles.Randomone}>
        <Image
          src="/warden.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/conqeror.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/warden.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/conqeror.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/conqeror.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
      </div>
      <h1 className={styles.latesttext}>Newest 5:</h1>
      <div className={styles.Randomone2}>
        <Image
          src="/conqeror.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/warden.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/conqeror.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/warden.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
        <Image
          src="/conqeror.png"
          height={200}
          width={180}
          alt="a knight whit a sword"
        />
      </div>
    </main>
  );
}
