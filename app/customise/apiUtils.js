import axios from 'axios';

export const savePhotoUrlToDatabase = async (userId, photoUrl) => {
  try {
    await axios.put(`/api/users/${userId}`, { imageUrl: photoUrl });
    console.log('Foto-URL erfolgreich in der Datenbank gespeichert.');
  } catch (error) {
    console.error(
      'Fehler beim Speichern der Foto-URL in der Datenbank:',
      error,
    );
  }
};
