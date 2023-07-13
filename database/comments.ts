import { cache } from 'react';
import { Comment } from '../migrations/1688736816-createTablecomments';
import { sql } from './connect';

type Comments = {
  commentId: number;
  commentContent: string;
  userId: number;
  userName: string;
};

// create a comment
export const createComment = cache(async (content: string, userId: number) => {
  const [comment] = await sql<Comments[]>`
  INSERT INTO comments
    (content, user_id)
  VALUES
    (${content}, ${userId})
  RETURNING
    id,
    content,
    user_id,
  `;

  return comment;
});

// delete a comment
export const deleteCommentById = cache(async (id: number) => {
  const [comment] = await sql<Comments[]>`
  DELETE FROM
    comments
  WHERE
    id = ${id}
  RETURNING *
  `;

  return comment;
});

// get comments along with info of the user that made the comments
// export const getCommentsWithUserInfo = cache(async (shopId: number) => {
//   const commentsFromUser = await sql<Comments[]>`
//   SELECT distinct
//     comments.id AS comment_id,
//     comments.content AS comment_content,
//     users.id AS user_id,
//     users.username AS user_name,
//   FROM
//     comments
//   INNER JOIN
//     users ON comments.user_id = users.id
//   WHERE
//     comments.shop_id = ${shopId}
//   `;

//   return commentsFromUser;
// });
