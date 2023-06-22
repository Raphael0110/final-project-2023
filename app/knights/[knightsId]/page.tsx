import { notFound } from 'next/navigation';
import { getherosById } from '../../../database/heros';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    heroId: string;
  };
};

export default async function heropage(props: Props) {
  const singlehero = await getherosById(Number(props.params.heroId));

  if (!singlehero) {
    notFound();
  }
  return <div>${singlehero.name}</div>;
}
