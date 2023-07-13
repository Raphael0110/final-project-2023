'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  user: { id: number };
};

export default function AddComments(props: Props) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState();
  const router = useRouter();

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await fetch('/api/addcomments', {
            method: 'POST',
            body: JSON.stringify({
              content: comment,
              userId: props.user.id,
            }),
          });
          const data = await response.json();

          if ('error' in data) {
            setError(data.error);
            return;
          }

          router.refresh();
        }}
      >
        <label>
          <input
            maxLength={1000}
            value={comment}
            onChange={(event) => setComment(event.currentTarget.value)}
          />
        </label>

        <button
          onClick={() => {
            router.refresh();
          }}
        />
      </form>
      <div>{error}</div>
    </>
  );
}
