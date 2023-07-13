import { notFound } from 'next/navigation';
// import { getCommentsWithUserInfo } from '../../../database/comments';
import { getUserByUsername } from '../../../database/users';
import AddComments from '../../samurai/form';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }
  // const userComments = await getCommentsWithUserInfo(user.id);

  return (
    <>
      <div>id: {user.id}</div>
      <div>username: {user.username}</div>
      <AddComments
        user={{
          id: 1,
        }}
      />
    </>
  );
}
