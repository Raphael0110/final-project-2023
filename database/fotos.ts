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
  console.log(typeof id);
  const [fotosid] = await sql<Fotosidk[]>`
SELECT
*
 FROM
 fotos
 WHERE id =${id}

`;
  return fotosid;
});

export const createfotos = cache(async (imageData: string, userId: number) => {
  const [fotos] = await sql<Fotosidk[]>`
    INSERT INTO fotos
      (imageData, userId)
    VALUES
      (${imageData},${userId})
    RETURNING
      id,
      imageData ,userId
 `;

  return fotos;
});
