import { cache } from 'react';
import { Fotosidk } from '../migrations/1688721959-createTableImages';
import { sql } from './connect';

export const getfotos = cache(async () => {
  const fotos = await sql<Fotosidk[]>`
 SELECT * FROM fotos;
  `;
  return fotos;
});

export const getfotosById = cache(async (id: number) => {
  const [fotos] = await sql<Fotosidk[]>`
SELECT
*
 FROM
 fotos
 WHERE id =${id}

`;
  return fotos;
});

export const createfotos = cache(async (url: string, username: string) => {
  const [fotos] = await sql<Fotosidk[]>`
    INSERT INTO fotos
      (url, username)
    VALUES
      (${url},${username})
    RETURNING
      id,
      url ,username
 `;

  return fotos;
});

export async function getFotosByUsername(username: string) {
  const fotos = await sql<Fotosidk[]>`
    SELECT
   *
    FROM fotos
    WHERE username = ${username}
  `;

  return fotos;
}
