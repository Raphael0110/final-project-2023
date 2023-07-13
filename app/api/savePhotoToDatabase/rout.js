import { sql } from 'postgres';

// Backend - API Routen-Handler-Funktion
export async function uploadPhoto(req, res) {
  const userId = req.user.id; // Annahme: Der Benutzer ist authentifiziert und die Benutzer-ID ist verfügbar
  const file = req.file; // Annahme: Das hochgeladene Foto wird im "file"-Feld der Anfrage übergeben

  try {
    // Hochladen des Fotos in Cloudinary
    const cloudinaryResponse = await uploadToCloudinary(file);

    // Extrahiere die URL des hochgeladenen Fotos aus der Cloudinary-Antwort
    const photoUrl = cloudinaryResponse.secure_url;

    // Speichere das Foto in der Datenbank
    await savePhotoInDatabase(userId, photoUrl);

    // Sende eine Erfolgsantwort zurück
    res
      .status(200)
      .json({ message: 'Foto erfolgreich hochgeladen und gespeichert' });
  } catch (error) {
    // Bei einem Fehler sende eine Fehlerantwort zurück
    res
      .status(500)
      .json({ error: 'Fehler beim Hochladen und Speichern des Fotos' });
  }
}

// Funktion zum Speichern des Fotos in der Datenbank
async function savePhotoInDatabase(userId, photoUrl) {
  try {
    await sql`
      INSERT INTO fotos (user_id, photo_url)
      VALUES (${userId}, ${photoUrl})
    `;
  } catch (error) {
    throw new Error('Fehler beim Speichern des Fotos in der Datenbank');
  }
}
