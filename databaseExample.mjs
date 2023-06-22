import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres(
  'postgres://raphael:Raphi0110@localhost:5432/final_project',
);

console.log(
  await sql`
    SELECT * FROM springseeds;
  `,
);

// This is only for the example, in your code you will want
// a persistent connection to the database
await sql.end();
