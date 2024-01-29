// middleware concept
// const express = require('express');

// const app = express();
// const myMiddleware = (req, res, next) => {
//   console.log('I\'m logging');
//   next();
// };
// app.use(myMiddleware);
// app.get('/about', (req, res) => {
//   res.send('this is about page');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// my first logger
// const express = require('express');

// const app = express();
// const logger = (req, res, next) => {
//   console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} -
//   ${req.protocol} - ${req.ip}`);
//   next();
// };
// app.use(logger);
// app.get('/about', (req, res) => {
//   res.send('This is about page');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// we can end the response from a middleware
// const express = require('express');

// const app = express();
// const logger = (req, res, next) => {
//   console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} -
//   ${req.protocol} - ${req.ip}`);
//   //   we can end the request from here
//   res.end();
// };
// app.use(logger);
// app.get('/about', (req, res) => {
//   res.send('This is about page');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// next() with parameter
// const express = require('express');

// const app = express();
// const logger = (req, res, next) => {
//   console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} -
//   ${req.protocol} - ${req.ip}`);
//   //   this will create an error and will go to error handling middleware
//   next('test');
// };
// app.use(logger);
// app.get('/about', (req, res) => {
//   res.send('This is about page');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// using a sub app
// const express = require('express');

// const app = express();
// const adminRouter = express.Router();
// const logger = (req, res, next) => {
//   console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} -
//   ${req.protocol} - ${req.ip}`);
//   next();
// };
// adminRouter.use(logger);
// adminRouter.get('/dashboard', (req, res) => {
//   res.send('this is admin dashboard');
// });
// app.use('/admin', adminRouter);
// app.get('/about', (req, res) => {
//   res.send('this is about page');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// third party, built-in, error handling middleware
// const express = require('express');
// // // there was an error earlier
// // const cookieParser = require('cookie-parser');

// const app = express();
// const adminRouter = express.Router();
// // // third party middleware
// // app.use(cookieParser());
// // // built in middleware
// // app.use(express.json());
// const logger = (req, res, next) => {
//   console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} -
//   ${req.protocol} - ${req.ip}`);
//   throw new Error('there was an error!');
// };
// adminRouter.use(logger);
// adminRouter.get('/dashboard', (req, res) => {
//   res.send('this is admin dashboard');
// });
// app.use('/admin', adminRouter);
// app.get('/about', (req, res) => {
//   res.send('this is about page');
//   // console.log(req.cookies);
// });
// const errorMiddleware = (err, req, res, next) => {
//   console.log(err.message);
//   res.status(500).send('There was a server side error!');
// };
// app.use(errorMiddleware);
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// middleware with parameter
// const express = require('express');

// const app = express();
// const adminRouter = express.Router();
// const loggerWraper = (options) => function (req, res, next) {
//   if (options.log) {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} -
//     ${req.protocol} - ${req.ip}`);
//     next();
//   } else {
//     throw new Error('there was an error');
//   }
// };
// adminRouter.use(loggerWraper({ log: true }));
// adminRouter.get('/dashboard', (req, res) => {
//   res.send('this is admin dashboard');
// });
// app.use('/admin', adminRouter);
// app.get('/about', (req, res) => {
//   res.send('this is about page');
//   // console.log(req.cookies);
// });
// const errorMiddleware = (err, req, res, next) => {
//   console.log(err.message);
//   res.status(500).send('There was a server side error!');
// };
// app.use(errorMiddleware);
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });
