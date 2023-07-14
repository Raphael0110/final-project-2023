import Image from 'next/image';
import Link from 'next/link';
import { getheros } from '../../database/heros/heros';
import styles from './knights.module.scss';

export default async function knightspage() {
  const heros = await getheros();
  return (
    <main className={styles.images}>
      {heros.map((hero) => {
        return (
          <main key={`heros-div-${hero.id}`}>
            <div>
              <Link href={`/knights/${hero.id}`}>
                <img
                  src={hero.url}
                  height={200}
                  width={200}
                  alt="a knight whit a sword"
                />
              </Link>
            </div>
          </main>
        );
      })}
    </main>
  );
}
