import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUserPhoto } from '../../../database/fotos';
import { getUserByUsername } from '../../../database/users';

export default async function handleUploadPhoto(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { username, imageUrl } = req.body;

    // Überprüfe, ob der Benutzer existiert
    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(404).json({ error: 'Benutzer nicht gefunden.' });
    }

    // Speichere das Foto in Cloudinary
    const uploadResult = await cloudinary.uploader.upload(imageUrl);

    if (!uploadResult.secure_url) {
      return res
        .status(500)
        .json({ error: 'Fehler beim Hochladen des Fotos.' });
    }

    // Speichere das Foto in der Datenbank
    await createUserPhoto(user.id, uploadResult.secure_url);

    return res.status(200).json({ message: 'Foto erfolgreich hochgeladen.' });
  } catch (error) {
    console.error('Fehler beim Hochladen des Fotos:', error);
    return res.status(500).json({ error: 'Serverfehler.' });
  }
}
