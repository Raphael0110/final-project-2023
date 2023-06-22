import React from 'react';
import { getheros } from '../../database/heros';

export default async function HeroPage() {
  const heros = await getheros();
  return (
    <main>
      {heros.map((hero) => {
        return (
          <main key={`heros-div-${hero.id}`}>
            <img src={hero.url} alt={hero.name} />
          </main>
        );
      })}
    </main>
  );
}
