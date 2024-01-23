// app.locals
// const express = require('express');
// const handle = require('./handle');

// const app = express();
// // local variable of application
// app.locals.title = 'My App';
// app.get('/', handle);
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// mountpath
// const express = require('express');

// const app = express();
// const admin = express();
// // অ্যাপ এর moddhe mount হলে mount event ta fire hobe
// admin.on('mount', (parent) => {
//   console.log(parent);
// });
// admin.get('/dashboard', (req, res) => {
//   // admin এর root path dibe
//   console.log(admin.mountpath);
//   res.send('This is admin dashboard');
// });
// // this is a sub app
// // কেউ jokhon /admin dibe tokhon take admin app e pathiye debe
// app.use('/admin', admin);
// app.listen(3000, () => {
//   console.log('lisenng to port 3000');
// });

// app.all()
// const express = require('express');

// const app = express();
// app.all('/', (req, res) => {
//   res.send('This is home page');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// app.enable()
// const express = require('express');

// const app = express();
// app.enable('case sensitive routing');
// app.all('/about', (req, res) => {
//   res.send('This is about page');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// app.param
// const express = require('express');

// const app = express();
// // this is like a middleware
// // middleware is like an interceptor
// app.param('id', (req, res, next, id) => {
//   const user = {
//     id,
//     name: 'Bangladesh',
//   };
//   req.user = user;
//   // this will execute the route callback
//   next();
// });
// app.get('/user/:id', (req, res) => {
//   console.log(req.user);
//   res.send('This is about page');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// app.route()
// const express = require('express');

// const app = express();
// app.route('/about/mission')
//   .get((req, res) => {
//     res.send('This is about page with get request');
//   })
//   .post((req, res) => {
//     res.send('This is about page with post request');
//   })
//   .put((req, res) => {
//     res.send('This is about page with put request');
//   });

// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// app.render()
// app.route()
// const express = require('express');

// const app = express();
// app.set('view engine', 'ejs');
// app.route('/about')
//   .get((req, res) => {
//     res.render('pages/about');
//   })
//   .post((req, res) => {
//     res.send('This is about page with post request');
//   })
//   .put((req, res) => {
//     res.send('This is about page with put request');
//   });

// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });
