import { cache } from 'react';
import { User } from '../migrations/1687259563-createUsers';
import { sql } from './connect';

type UserWithPasswordHash = User & {
  passwordHash: string;
  userid: number;
};

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
    SELECT * FROM
      users
    WHERE
      users.username = ${username.toLowerCase()}
 `;

    return user;
  },
);

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      users.username = ${username.toLowerCase()}
 `;

  return user;
});

export const createUser = cache(
  async (username: string, passwordHash: string) => {
    console.log(passwordHash);
    const [user] = await sql<User[]>`
    INSERT INTO users
      (username, password_hash)
    VALUES
      (${username.toLowerCase()}, ${passwordHash})
    RETURNING
      id,
      username
 `;

    return user;
  },
);

export const getUserBySessionToken = cache(async (token: string) => {
  const [user] = await sql<User[]>`
  SELECT
    users.id,
    users.username
  FROM
    users
  INNER JOIN
    sessions ON (
      sessions.token = ${token} AND
      sessions.user_id = users.id AND
      sessions.expiry_timestamp > now()
    )
  `;

  return user;
});

export const updateUserById = cache(
  async (id: number, username: string, imageUrl: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      UPDATE users
      SET
        username = ${username.toLowerCase()},
        image_url = ${imageUrl}
      WHERE
        id = ${id}
        RETURNING *
    `;
    return user;
  },
);

export const getUserById = cache(async (id: number) => {
  const [user] = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
    WHERE
      id = ${id}
  `;
  return user;
});
