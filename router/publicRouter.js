// const express = require('express');

// const publicRouter = express.Router();
// const log = (req, res, next) => {
//   console.log('I\'m logging something');
//   next();
// };
// publicRouter.all('*', log);
// publicRouter.get('/', (req, res) => {
//   res.send('Home');
// });
// publicRouter.get('/login', (req, res) => {
//   res.send('About');
// });
// module.exports = publicRouter;

// app.param
// const express = require('express');

// const publicRouter = express.Router();
// publicRouter.param('user', (req, res, next, id) => {
//   req.user = id === '1' ? 'Admin' : 'Anonymous';
//   next();
// });
// publicRouter.get('/:user', (req, res) => {
//   res.send(`Hello ${req.user}`);
// });
// publicRouter.get('/login', (req, res) => {
//   res.send('About');
// });
// module.exports = publicRouter;

// const express = require('express');

// const publicRouter = express.Router();
// publicRouter.param((param, option) => (req, res, next, val) => {
//   if (val === option) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });
// publicRouter.param('user', '12');
// publicRouter.get('/:user', (req, res) => {
//   res.send('Hello Admin');
// });
// publicRouter.get('/login', (req, res) => {
//   res.send('About');
// });
// module.exports = publicRouter;

// app.route with middleware
// const express = require('express');

// const publicRouter = express.Router();
// publicRouter
//   .route('/user')
//   .all((req, res, next) => {
//     console.log('I\'m logging something');
//     next();
//   })
//   .get((req, res) => {
//     res.send('Home page with get request');
//   })
//   .post((req, res) => {
//     res.send('Home page with post request');
//   });
// module.exports = publicRouter;
