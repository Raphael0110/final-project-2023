'use client';

import React, { useState } from 'react';

const PhotoComponent = () => {
  const [headOption, setHeadOption] = useState('1');
  const [bodyOption, setBodyOption] = useState('1');
  const [feetOption, setFeetOption] = useState('1');
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState('');

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

  const handleGetPhotoUrl = () => {
    const photoUrl = getPhotoUrl();
    setCurrentPhotoUrl(photoUrl);
  };

  return (
    <div>
      <img src={getPhotoUrl()} alt="Foto" width={300} height={300} />
      <div>
        <h2>Kopf:</h2>
        <button onClick={() => changeHeadOption(1)}>Option 1</button>
        <button onClick={() => changeHeadOption(2)}>Option 2</button>
        <button onClick={() => changeHeadOption(3)}>Option 3</button>
      </div>
      <div>
        <h2>Körper:</h2>
        <button onClick={() => changeBodyOption(1)}>Option 1</button>
        <button onClick={() => changeBodyOption(2)}>Option 2</button>
        <button onClick={() => changeBodyOption(3)}>Option 3</button>
      </div>
      <div>
        <h2>Füße:</h2>
        <button onClick={() => changeFeetOption(1)}>Option 1</button>
        <button onClick={() => changeFeetOption(2)}>Option 2</button>
        <button onClick={() => changeFeetOption(3)}>Option 3</button>
      </div>
      {/* <button onClick={handleGetPhotoUrl}>Aktuelle Foto-URL erhalten</button> */}
    </div>
  );
};

export default PhotoComponent;
