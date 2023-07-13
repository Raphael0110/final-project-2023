import { notFound } from 'next/navigation';
import { getUserById } from '../../../database/users';
import Uplodeform from './from';

type Props = {
  params: { userid: number };
};

export default async function UplodePage({ params }: Props) {
  const user = await getUserById(params.userid);

  if (!user) {
    notFound();
  }

  return <Uplodeform userid={params.userid} />;
}
