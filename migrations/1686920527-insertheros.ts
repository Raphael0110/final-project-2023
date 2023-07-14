import { Sql } from 'postgres';

export const heros = [
  {
    id: 1,
    name: 'Warden',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689315857/Knights/Warden_original_hfkazq.png',
    description:
      'The Wardens are powerful, noble warriors dedicated to the defense of their land and their people. Striking a balance between defense and offense, wardens wear partial plate armor with chainmail and leather. Wardens wield massive two-handed longswords for slashing enemies and blocking attacks. Trained to be proud, loyal, and brilliant diplomats, the Wardens are expected to embody the highest values of Knighthood. Many set out to achieve this, few do.',
  },
  {
    id: 2,
    name: 'Conqueror',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316192/Knights/ezgif.com-webp-to-png_l98rc2.png',
    description:
      'Conquerors are ex-prisoners and forced conscripts who rose to elite soldier rank. Originally pressed into military service as sword fodder, the skilled survivors are promoted and given heavy infantry training. Heavily armored, they rely on defense and massive flails to whittle opponents stamina until they succumb to the Conquerors onslaught. Climbing from the lowest rank, they earn respect through determination and feats of arms in the Knights forces.',
  },
  {
    id: 3,
    name: 'Warmonger',
    class: 'knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_8_cnrcur.png',
    description:
      'The Warmongers are grandiose warriors who will not go unnoticed on the battlefield. Their weapon of choice is the flamberge, a two-handed sword that is as elegant as it is deadly. According to their beliefs, they were gifted a dark power named Corruption to weed out all liars and impostors of the world.',
  },
  {
    id: 4,
    name: 'Gladiator',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_4_vpmfrq.png',
    description:
      'Peacekeepers are quick, lethal, and can win a fight before their enemy even knows they are there. It takes a special type of warrior to be a silent blade. Theirs is not a legacy of glory. They are an instrument of death, wielded to turn the tides of war. You may never see them. But you will feel the difference they make, and the trail they leave behind.',
  },
  {
    id: 5,
    name: 'Peacekeeper',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_7_ata4fp.png',
    description:
      'Peacekeepers are quick, lethal, and can win a fight before their enemy even knows they are there. It takes a special type of warrior to be a silent blade. Theirs is not a legacy of glory. They are an instrument of death, wielded to turn the tides of war. You may never see them. But you will feel the difference they make, and the trail they leave behind.',
  },
  {
    id: 6,
    name: 'Black Prior',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316193/Knights/ezgif.com-webp-to-png_1_s4z7la.png',
    description:
      'The Black Priors are heavy heroes who wield the large kite shield and longsword. These dark agents fight alongside the Knights but are free from the code of chivalry. Whatever victorys cost, the Black Priors will pay the price.',
  },
  {
    id: 7,
    name: 'Lawbringer',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_6_akutp2.png',
    description:
      'The Lawbringers are the justice in Ashfeld. They enforce the laws and dispense punishment. Their armor is without equal. Their weapon is a grim reminder of the ultimate punishment for lawlessness. They will go wherever they are needed  pray that you are on the right side when they arrive.',
  },
  {
    id: 8,
    name: 'Gryphon',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316191/Knights/ezgif.com-webp-to-png_5_dayvmu.png',
    description:
      'Some say you cant teach an old dog new tricks, but thats not true for Holden Cross. After leaving the Lawbringers, he embarked on a transformative journey across Heathmoor. As a mercenary, he learned from warriors of all factions, setting aside differences. They named him Gryphon, the warrior with a lions heart and eagle-like eyes.',
  },
  {
    id: 9,
    name: 'Centurion',
    class: 'Knight',
    url: 'https://res.cloudinary.com/di8agpaq6/image/upload/v1689316192/Knights/ezgif.com-webp-to-png_2_fhc0he.png',
    description:
      'The Centurion sees the battlefield like a chessboard. Each warrior has their part to play and sometimes sacrifices need to be made. This is the nature of war and the Centurion revels in it!',
  },
];

export async function up(sql: Sql) {
  for (const hero of heros) {
    await sql`
 INSERT INTO heros
 (name, class ,url, description)
 VALUES
 (${hero.name}, ${hero.class}, ${hero.url}, ${hero.description})

  `;
  }
}

export async function down(sql: Sql) {
  for (const hero of heros) {
    await sql`
DELETE FROM heros WHERE id = ${hero.id}

  `;
  }
}
