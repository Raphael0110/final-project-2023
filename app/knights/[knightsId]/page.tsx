import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getherosById } from '../../../database/heros/heros';
import styles from '../knights.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    knightsId: number;
  };
};

export default async function heropage(props: Props) {
  console.log('props', props.params.knightsId);
  const singlehero = await getherosById(Number(props.params.knightsId));

  console.log('test', singlehero);

  if (!singlehero) {
    notFound();
  }
  return (
    <div className={styles.background}>
      <div>{singlehero.name}</div>
      <div>
        <img src={singlehero.url} alt={singlehero.name} />
      </div>
      <section className={styles.background2}>
        <Link href="http://localhost:3000/customise">customise </Link>
      </section>
    </div>
  );
}
