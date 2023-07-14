import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';
import Uplodeform from './from';

type Props = {
  params: { username: string };
};

export default async function UplodePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return <Uplodeform username={params.username} />;
}
