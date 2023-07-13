const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();

app.post('/api/upload', upload.single('photo'), (req, res) => {
  // Hier kannst du den empfangenen Dateinamen oder Dateipfad verwenden,
  // um das Foto in der Datenbank zu speichern und mit dem Benutzer zu verknüpfen.
  // Führe die entsprechenden Datenbankoperationen aus, um das Foto zu speichern.

  const { filename } = req.file;
  // Speichere den Dateinamen oder Dateipfad in der Datenbank.

  res.json({ message: 'Photo uploaded successfully' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
