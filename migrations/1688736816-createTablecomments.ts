import { Sql } from 'postgres';

export type Comment = {
  id: number;
  content: string;
  userId: number | null;

  blob: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE comments (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      content varchar(255) NOT NULL,
      user_id integer

    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE comments
  `;
}
