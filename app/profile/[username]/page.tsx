import { notFound } from 'next/navigation';
import { getFotosByUsername } from '../../../database/fotos';
import { getUserByUsername } from '../../../database/users';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const fotos = await getFotosByUsername(params.username);
  if (!fotos) {
    notFound();
  }
  console.log('hello worls');
  return (
    <>
      <div>id: {user.id}</div>
      <div>username: {user.username}</div>
      <div>
        Fotos:
        {fotos.map((foto) => (
          <main key={`fotos-div-${foto.id}`}>
            <img src={foto.url} alt="Foto" width={300} height={300} />
          </main>
        ))}
      </div>
    </>
  );
}
