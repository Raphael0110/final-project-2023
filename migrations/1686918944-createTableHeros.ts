import { Sql } from 'postgres';

export type Heromigration = {
  id: number;
  name: string;
  class: string;
  description: string;
  url: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE heros(
    id integer  PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) ,
    class varchar (30) ,
    description varchar(200),
     url varchar(200)
  );

  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE heros

  `;
}
