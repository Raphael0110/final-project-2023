import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getherosById } from '../../../database/heros/heros';
import styles from './knightsid.module.scss';

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
      <div>
        <h1 className={styles.textbackground}>{singlehero.name}</h1>
        <div className={styles.im}>
          <img
            src={singlehero.url}
            alt={singlehero.name}
            height={400}
            width={400}
          />
        </div>
      </div>
      <div className={styles.textbackground2}>
        <h2>Description:</h2>
        <br />
        <br />
        {singlehero.description}
        <section className={styles.background2}>
          <br />
          <br />
          <Link href="http://localhost:3000/customise" className={styles.link}>
            customise{' '}
          </Link>
        </section>
      </div>
    </div>
  );
}
