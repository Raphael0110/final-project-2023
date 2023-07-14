import { Sql } from 'postgres';

export type Heromigration = {
  photos: any;
  id: number;
  name: string;
  class: string;
  url: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE heros(
    id integer  PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(100) ,
    class varchar (100) ,
     url varchar(200),
     description varchar(500)
  );

  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE heros

  `;
}
