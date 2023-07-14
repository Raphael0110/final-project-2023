import Link from 'next/link';
import styles from './test.module.scss';

export default function CustomisePage() {
  return (
    <main className={styles.main}>
      <Link href="http://localhost:3000/customise/warden">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689315857/Knights/Warden_original_hfkazq.png"
          alt="warden"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/blackprior">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316193/Knights/ezgif.com-webp-to-png_1_s4z7la.png"
          alt="blackprior"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/centurion">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316192/Knights/ezgif.com-webp-to-png_2_fhc0he.png"
          alt="centurion"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/conqueror">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316192/Knights/ezgif.com-webp-to-png_l98rc2.png"
          alt="conqueror"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/gladiator">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_4_vpmfrq.png"
          alt="gladiator"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/gryphon">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_5_dayvmu.png"
          alt="gryphon"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/lawbringer">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_6_akutp2.png"
          alt="lawbringer"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/peacekeeper">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_7_ata4fp.png"
          alt="peacekeeper"
          height={200}
          width={200}
        />
      </Link>
      <br />
      <Link href="http://localhost:3000/customise/warmonger">
        <img
          src="https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_8_cnrcur.png"
          alt="warmonger"
          height={200}
          width={200}
        />
      </Link>
    </main>
  );
}
