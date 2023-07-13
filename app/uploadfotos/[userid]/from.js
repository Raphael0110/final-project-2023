// 'use client';
// import axios from 'axios';
// import { useState } from 'react';

// export default function UplodePage({ userid }) {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [imageData, setImageData] = useState(null);
//   const [error, setError] = useState('');
//   const uploadImage = () => {
//     const formData = new FormData();
//     formData.append('file', selectedImages[0]);
//     formData.append('upload_preset', 'il4v3g2d');
//     const postImage = async () => {
//       try {
//         const response = await axios.post(
//           'https://api.cloudinary.com/v1_1/di8agpaq6/image/upload',
//           formData,
//         );
//         setImageData(response.data.secure_url);
//       } catch (error) {
//         console.error(error);
//       }
//       const response = await fetch('/api/uploadfotos', {
//         method: 'POST',
//         body: JSON.stringify({ imageData, userid }),
//       });
//       const data = await response.json();
//       if ('error' in data) {
//         setError(data.error);
//         return;
//       }
//     };
//     postImage();
//     // . catch (error) {
//     //   console.error(error);
//     // }
//   };
//   console.log('immageData', imageData);
//   return (
//     <div>
//       <h1>Cloudinary Image Upload</h1>
//       <article>
//         <input
//           type="file"
//           name="file"
//           id="file"
//           onChange={(e) => setSelectedImages(e.target.files[0])}
//           className="input"
//         />
//         <button onClick={uploadImage}>Upload Image</button>
//         {error !== '' && <div>{error}</div>}
//       </article>
//       {imageData && (
//         <article>
//           <img src={imageData} alt="Uploaded Image" />
//         </article>
//       )}
//     </div>
//   );
// }

// 'use client';
// import axios from 'axios';
// import { useState } from 'react';

// export default function Uplodeform({ userid }) {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [imageData, setImageData] = useState('');
//   const [error, setError] = useState('');
//   const uploadImage = () => {
//     const formData = new FormData();
//     formData.append('file', selectedImages);
//     formData.append('upload_preset', 'il4v3g2d');
//     const postImage = async () => {
//       try {
//         const response = await axios.post(
//           'https://api.cloudinary.com/v1_1/di8agpaq6/image/upload',
//           formData,
//         );
//         setImageData(response.data.secure_url);
//       } catch (error) {
//         console.error(error);
//       }
//       const response = await fetch('/api/uploadfotos', {
//         method: 'POST',
//         body: JSON.stringify({ imageData, userid }),
//       });
//       const data = await response.json();
//       if ('error' in data) {
//         setError(data.error);
//         return;
//       }
//       postImage();
//     };
//   };
//   console.log('imagedata', imageData);
//   return (
//     <div>
//       <h1>Cloudinary Image Upload</h1>
//       <article>
//         <input
//           type="file"
//           name="file"
//           id="file"
//           onChange={(e) => setSelectedImages(e.target.files[0])}
//           className="input"
//         />
//         <button onClick={uploadImage}>Upload Image</button>
//       </article>
//       <article>
//         {!!imageData && (
//           <Image
//             cloudName="YOUR_CLOUD_NAME"
//             publicId={`https://res.cloudinary.com/di8agpaq6/image/upload/v1649427526/${imageData}`}
//           />
//         )}
//       </article>
//     </div>
//   );
// }

'use client';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { useState } from 'react';

export default function Uplodeform({ userid }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState('');
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
        setImageData(response.data.secure_url);
      } catch (error) {
        console.error(error);
      }
      const response = await fetch('/api/uploadfotos', {
        method: 'POST',
        body: JSON.stringify({ imageData, userid }),
      });
      const data = await response.json();
      if ('error' in data) {
        setError(data.error);
        return;
      }
    };
    postImage();
  };
  console.log(typeof userid);
  console.log('imagedata', imageData);
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
        {!!imageData && (
          <Image
            cloudName="YOUR_CLOUD_NAME"
            publicId={`https://res.cloudinary.com/di8agpaq6/image/upload/v1649427526/${imageData}`}
            // Replace YOUR_CLOUD_NAME with your cloudName which you can find in your Dashboard. NOTE: Your publicId link might be different.
          />
        )}
      </article>
    </div>
  );
}
