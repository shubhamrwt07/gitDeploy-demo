const multer = require('multer');
const path = require('path');



const images = multer.diskStorage({});
const imagesUpload = multer({ storage: images });

module.exports = { imagesUpload };
