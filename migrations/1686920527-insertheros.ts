import { Sql } from 'postgres';

export const heros = [
  {
    id: 1,
    name: 'Warden',
    class: 'Knight',
    description: 'test',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1687342367/Warden_v9lsdf.png',
  },
  {
    id: 2,
    name: 'conq',
    class: 'Knight',
    description: 'testoida',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1687342367/Warden_v9lsdf.png',
  },
];

export async function up(sql: Sql) {
  for (const hero of heros) {
    await sql`
 INSERT INTO heros
 (name, class , description,url)
 VALUES
 (${hero.name}, ${hero.class}, ${hero.description}, ${hero.url})

  `;
  }
}

export async function down(sql: Sql) {
  for (const hero of heros) {
    await sql`
DELETE FROM heros WHERE id = ${hero.id}

  `;
  }
}
