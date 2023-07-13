import { Sql } from 'postgres';

export type Fotosidk = {
  id: number;
  imageData: string;
  userId: number | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE fotos (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      imageData varchar(255),
      userId integer REFERENCES users(id) ON DELETE CASCADE
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE fotos
  `;
}
