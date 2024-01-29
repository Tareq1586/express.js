// req.baseUrl
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
//   res.send('Hello User');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// originalurl, url, path
// const express = require('express');

// const app = express();
// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//   console.log(req.path);
//   console.log(req.url);
//   // returns the original url
//   console.log(req.originalUrl);
//   res.send('Hello Admin');
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

// hostname, method, protocol, params, query
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

// req.cookie, secure
// const express = require('express');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.post('/user', (req, res) => {
//   console.log(req.secure);
//   console.log(req.cookies);
//   res.send('This is home with post request');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// app.locals and req.route, params
// const express = require('express');
// const handle = require('./handle');

// const app = express();
// app.locals = 'Bangaldesh';
// // handle function will execute there, where the function is defined
// app.get('/user/:id', handle);
// app.post('/user/:id', (req, res) => {
//   console.log(app.locals);
//   res.send('this is home page with post request');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// req.accepts, req.get('accept')
// Accept property in request header
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
