import { cache } from 'react';
import { Heromigration } from '../../migrations/1686918944-createTableHeros';
import { sql } from '../connect';

export const getheros = cache(async () => {
  const heros = await sql<Heromigration[]>`
 SELECT * FROM heros;
  `;
  return heros;
});

export const getherosById = cache(async (id: number) => {
  console.log(typeof id);
  const [herosid] = await sql<Heromigration[]>`
SELECT
*
 FROM
 heros
 WHERE id =${id}

`;
  return herosid;
});
