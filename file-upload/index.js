// multer.single()
const express = require('express');
const multer = require('multer');

const UPLOADS_FOLDER = '../uploads/';
const upload = multer({
  dest: UPLOADS_FOLDER,
});
const app = express();
app.post('/', upload.single('avatar'), (req, res) => {
  res.send('Hello file');
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});

// upload.array()
// const express = require('express');
// const multer = require('multer');

// const UPLOADS_FOLDER = '../uploads/';
// const upload = multer({
//   dest: UPLOADS_FOLDER,
// });
// const app = express();
// app.post('/', upload.array('avatar', 3), (req, res) => {
//   res.send('Hello World');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// upload.fields() can receive array of objects
// const express = require('express');
// const multer = require('multer');

// const UPLOADS_FOLDER = '../uploads/';
// const upload = multer({
//   dest: UPLOADS_FOLDER,
// });
// const app = express();
// app.post('/', upload.fields([
//   { name: 'avatar', maxCount: 3 },
//   { name: 'gallery', maxCount: 2 },
// ]), (req, res) => {
//   res.send('Hello World!');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// upload.none()
// const express = require('express');
// const multer = require('multer');

// const UPLOADS_FOLDER = '../uploads/';
// const upload = multer({
//   dest: UPLOADS_FOLDER,
// });
// const app = express();
// app.post('/', upload.none(), (req, res) => {
//   res.send('Hello World');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// configuring multer with limit, fileFilter
// const express = require('express');
// const multer = require('multer');

// const UPLOADS_FOLDER = '../uploads/';
// const upload = multer({
//   dest: UPLOADS_FOLDER,
//   limits: {
//     fileSize: 1000000, // 1 MB
//   },
//   fileFilter: (req, file, cb) => {
//     // console.log(file);
//     if (
//       file.mimetype === 'image/jpg'
//       || file.mimetype === 'image/png'
//       || file.mimetype === 'image/jpeg'
//     ) {
//       // callback will follow error back pattern
//       cb(null, true);
//     } else {
//       // this will interrupt file upload
//       // cb(null, false);
//       cb(new Error('only jpg, png, jpeg are allowed!'));
//     }
//   },
// });
// const app = express();
// app.post('/', upload.single('avatar'), (req, res) => {
//   res.send('Hello World!');
// });
// app.use((err, req, res, next) => {
//   // if (err) {
//   //   res.status(500).send(err.message);
//   // } else {
//   //   res.send('success');
//   // }
//   // configure multer specific error
//   if (err) {
//     if (err instanceof multer.MulterError) {
//       res.status(500).send('There is an upload error!');
//     } else {
//       res.status(500).send(err.message);
//     }
//   } else {
//     res.send('success');
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// configuring multer for multiple fields
// const express = require('express');
// const multer = require('multer');

// const UPLOADS_FOLDER = '../uploads/';
// const upload = multer({
//   dest: UPLOADS_FOLDER,
//   limits: {
//     fileSize: 1000000, // 1 MB
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.fieldname === 'avatar') {
//       if (
//         file.mimetype === 'image/jpg'
//         || file.mimetype === 'image/png'
//         || file.mimetype === 'image/jpeg'
//       ) {
//         cb(null, true);
//       } else {
//         cb(new Error('only jpg, png, jpeg are allowed'));
//       }
//     } else if (file.fieldname === 'doc') {
//       if (file.mimetype === 'application/pdf') {
//         cb(null, true);
//       } else {
//         cb(new Error('only .pdf format is allowed!'));
//       }
//     } else {
//       cb(new Error('There is an unknown error!'));
//     }
//   },
// });
// const app = express();
// app.post('/', upload.fields([
//   { name: 'avatar', maxCount: 3 },
//   { name: 'doc', maxCount: 2 },
// ]), (req, res) => {
//   res.send('Hello World!');
// });
// app.use((err, req, res, next) => {
//   if (err) {
//     if (err instanceof multer.MulterError) {
//       res.status(500).send('There is an upload error!');
//     } else {
//       res.status(500).send(err.message);
//     }
//   } else {
//     res.send('success');
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// upload file with prefered name
// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const UPLOADS_FOLDER = '../uploads/';
// // define the storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, UPLOADS_FOLDER);
//   },
//   filename: (req, file, cb) => {
//     const fileExt = path.extname(file.originalname);
//     const fileName = file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-');
//     cb(null, fileName + fileExt);
//   },
// });
// const upload = multer({
//   storage,
//   dest: UPLOADS_FOLDER,
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.fieldname === 'avatar') {
//       if (
//         file.mimetype === 'image/jpg'
//         || file.mimetype === 'image/png'
//         || file.mimetype === 'image/jpeg'
//       ) {
//         cb(null, true);
//       } else {
//         cb(new Error('only jpg, png, jpeg are allowed'));
//       }
//     } else if (file.fieldname === 'doc') {
//       if (file.mimetype === 'application/pdf') {
//         cb(null, true);
//       } else {
//         cb(new Error('only .pdf format is allowed!'));
//       }
//     } else {
//       cb(new Error('There is an unknown error!'));
//     }
//   },
// });
// const app = express();
// app.post('/', upload.fields([
//   { name: 'avatar', maxCount: 3 },
//   { name: 'doc', maxCount: 2 },
// ]), (req, res) => {
//   console.log(req.files);
//   res.send('Hello World!');
// });
// app.use((err, req, res, next) => {
//   if (err) {
//     if (err instanceof multer.MulterError) {
//       res.status(500).send('There is an upload error!');
//     } else {
//       res.status(500).send(err.message);
//     }
//   } else {
//     res.send('success');
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });
