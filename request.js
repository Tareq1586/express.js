// const express = require('express');

// const app = express();
// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//   console.log(req.baseUrl);
//   res.send('Hello admin');
// });
// app.use('/admin', adminRoute);
// app.get('/user/:id', (req, res) => {
//   console.log(req.baseUrl);
//   res.send('Hello World');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// originalurl and url and path
// const express = require('express');

// const app = express();
// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//   console.log(req.path);
//   console.log(req.url);
//   // returns the original url
//   console.log(req.originalUrl);
//   res.send('Hello admin');
// });
// app.use('/admin', adminRoute);
// app.get('/user/:id', (req, res) => {
//   // path will return url without query object
//   console.log(req.path);
//   console.log(req.url);
//   console.log(req.originalUrl);
//   res.send('Hello World');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// hostname
// const express = require('express');

// const app = express();
// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//   console.log(req.params);
//   console.log(req.protocol);
//   console.log(req.method);
//   console.log(req.hostname);
//   res.send('Hello admin');
// });
// app.use('/admin', adminRoute);
// app.get('/user/:id', (req, res) => {
//   console.log(req.query);
//   console.log(req.params.id);
//   console.log(req.params);
//   console.log(req.protocol);
//   console.log(req.method);
//   console.log(req.hostname);
//   res.send('Hello World');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// req.body and cookies
// const express = require('express');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.post('/user', (req, res) => {
//   console.log(req.secure);
//   console.log(req.cookies);
//   console.log(req.body);
//   res.send('This is home with post request');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// req.app and req.route
// const express = require('express');
// const handle = require('./handle');

// const app = express();
// app.locals = 'bangaldesh';
// app.get('/user/:id', handle);
// app.post('/user', (req, res) => {
//   console.log(req.body);
//   res.send('This is home with post request');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// req.accepts req.get('accept')
// const express = require('express');

// const app = express();
// app.post('/user', (req, res) => {
//   console.log(req.get('accept'));
//   console.log(req.accepts('json'));
//   res.send('This is home with post request');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });
