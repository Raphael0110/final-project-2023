import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const UserComments = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUserComments = async () => {
      try {
        const response = await fetch(`/api/getUserComments?userId=${userId}`);
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error('Error fetching user comments:', error);
      }
    };

    if (userId) {
      fetchUserComments();
    }
  }, [userId]);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>Posted on: {comment.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default UserComments;
