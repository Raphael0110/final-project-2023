'use client';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { useState } from 'react';

export default function Uplodeform({ username }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', selectedImages);
    formData.append('upload_preset', 'il4v3g2d');
    const postImage = async () => {
      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/di8agpaq6/image/upload',
          formData,
        );
        setUrl(response.data.secure_url);
      } catch (error) {
        console.error(error);
      }
      const response = await fetch('/api/uploadfotos', {
        method: 'POST',
        body: JSON.stringify({ url, username }),
      });
      const data = await response.json();
      if ('error' in data) {
        setError(data.error);
        return;
      }
    };
    postImage();
  };
  console.log(typeof username);
  console.log('imagedata', url);
  return (
    <div>
      <h1>Cloudinary Image Upload</h1>
      <article>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setSelectedImages(e.target.files[0])}
          className="input"
        />
        <button onClick={uploadImage}>Upload Image</button>
      </article>
      <article>
        {!!url && <Image cloudName="YOUR_CLOUD_NAME" publicId={url} />}
      </article>
    </div>
  );
}
