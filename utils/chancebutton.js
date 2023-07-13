'use client';
import cloudinary from 'cloudinary-core';
import React, { useState } from 'react';

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: 'di8agpaq6',
});

const PhotoComponent = (initialPhotoUrl) => {
  const [selectedPhoto, setSelectedPhoto] = useState(initialPhotoUrl);

  const changePhoto = (newPhotoUrl) => {
    setSelectedPhoto(newPhotoUrl);
  };

  return (
    <div>
      <img src={selectedPhoto} alt="Foto" />
      <button
        onClick={() =>
          changePhoto(
            'https://res.cloudinary.com/di8agpaq6/image/upload/v1687951389/finalproject/kecpyrs5cmdb9i6et3wx.png',
          )
        }
      >
        Foto 1
      </button>
      <button
        onClick={() =>
          changePhoto(
            'https://res.cloudinary.com/di8agpaq6/image/upload/v1687342367/Warden_v9lsdf.png',
          )
        }
      >
        Foto 2
      </button>
      <button
        onClick={() =>
          changePhoto(
            'https://res.cloudinary.com/di8agpaq6/image/upload/v1687946289/finalproject/bgmim0lib7ktbfrv5zrl.png',
          )
        }
      >
        Foto 3
      </button>
      <button
        onClick={() =>
          changePhoto(
            'https://res.cloudinary.com/di8agpaq6/image/upload/v1687342367/Warden_v9lsdf.png',
          )
        }
      >
        Foto 4
      </button>
    </div>
  );
};

export default PhotoComponent;
