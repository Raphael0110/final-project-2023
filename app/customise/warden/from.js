'use client';

import React, { useState } from 'react';
import styles from './warden.module.scss';

export default function PhotoComponent() {
  const [headOption, setHeadOption] = useState('1');
  const [bodyOption, setBodyOption] = useState('1');
  const [feetOption, setFeetOption] = useState('1');

  const getPhotoUrl = () => {
    const photoUrl = `https://res.cloudinary.com/di8agpaq6/image/upload/v1688372900/final_project/Warden/${headOption}${bodyOption}${feetOption}.png`;
    return photoUrl;
  };

  const changeHeadOption = (option) => {
    setHeadOption(option);
  };

  const changeBodyOption = (option) => {
    setBodyOption(option);
  };

  const changeFeetOption = (option) => {
    setFeetOption(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={getPhotoUrl()} alt="Foto" width={400} height={400} />
      </div>
      <div className={styles.allbuttons}>
        <h2 className={styles.headOption}>Kopf:</h2>
        <br />
        <div className={styles.buttonhead}>
          <button onClick={() => changeHeadOption(1)}>Option 1</button>
          <button onClick={() => changeHeadOption(2)}>Option 2</button>
          <button onClick={() => changeHeadOption(3)}>Option 3</button>
        </div>
        <br />
        <br />
        <h2 className={styles.bodyOption}>Körper:</h2>
        <br />
        <div className={styles.buttonbody}>
          <button onClick={() => changeBodyOption(1)}>Option 1</button>
          <button onClick={() => changeBodyOption(2)}>Option 2</button>
          <button onClick={() => changeBodyOption(3)}>Option 3</button>
        </div>
        <br />
        <br />
        <h2 className={styles.feetOption}>Füße:</h2>
        <br />
        <div className={styles.buttonfeet}>
          <button onClick={() => changeFeetOption(1)}>Option 1</button>
          <button onClick={() => changeFeetOption(2)}>Option 2</button>
          <button onClick={() => changeFeetOption(3)}>Option 3</button>
        </div>
      </div>
    </div>
  );
}
