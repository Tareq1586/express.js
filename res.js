// response object
// headersSent property
// const express = require('express');

// const app = express();
// app.set('view engine', 'ejs');
// app.get('/about', (req, res) => {
//   console.log(res.headersSent);
//   res.render('pages/about', {
//     name: 'Bangladesh',
//   });
//   console.log(res.headersSent);
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// res.json
// const express = require('express');

// const app = express();
// app.get('/about', (req, res) => {
//   // res.send('this is about page');
//   // // without data
//   // res.end();
//   // sending data in json format
//   res.json({
//     name: 'Bangladesh',
//   });
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// res.status is like res.write
// we have to end the request
// const express = require('express');

// const app = express();
// app.get('/about', (req, res) => {
// //   res.status(400);
// //   res.end();
// // send status and end request
//   res.sendStatus(403);
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// res.format
// const express = require('express');

// const app = express();
// app.set('view engine', 'ejs');
// app.get('/about', (req, res) => {
//   res.format({
//     'text/plain': () => {
//       res.send('plain text');
//     },
//     'text/html': () => {
//       res.render('pages/about', {
//         name: 'Bangladesh',
//       });
//     },
//     'application/json': () => {
//       res.json({
//         name: 'Bangladesh',
//       });
//     },
//     default: () => {
//       res.status(406).send('Not acceptable');
//     },
//   });
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });
