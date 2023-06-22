import Link from 'next/link';
import { getheros } from '../../database/heros';

export default async function knightspage() {
  const heros = await getheros();
  return (
    <main>
      {heros.map((hero) => {
        return (
          <main key={`heros-div-${hero.id}`}>
            <Link href={`/knights/${hero.id}`}>{hero.name} </Link>
          </main>
        );
      })}
    </main>
  );
}
