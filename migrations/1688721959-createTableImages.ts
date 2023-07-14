import { Sql } from 'postgres';

export type Fotosidk = {
  id: number;
  url: string;
  username: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE fotos (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      url varchar(255),
      username varchar(255)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE fotos
  `;
}
