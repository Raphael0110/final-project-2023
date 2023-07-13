import Image from 'next/image';
import Link from 'next/link';
import { getheros } from '../../database/heros/heros';

export default async function knightspage() {
  const heros = await getheros();
  return (
    <main>
      {heros.map((hero) => {
        return (
          <main key={`heros-div-${hero.id}`}>
            <Link href={`/knights/${hero.id}`}>
              <img
                src={hero.url}
                height={200}
                width={180}
                alt="a knight whit a sword"
              />
            </Link>
          </main>
        );
      })}
    </main>
  );
}
