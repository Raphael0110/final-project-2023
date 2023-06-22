// config.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'Air_Gecko',
  api_key: '869391287662585',
  api_secret: 'KaB28NR-nwtQocGPIxbbpgjLaFQ',
});

module.exports = {
  cloudinary,
};
