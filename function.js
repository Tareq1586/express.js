// express function
// which handle the request data
// req.body
// const express = require('express');

// const app = express();
// app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('This is home page');
// });
// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('This is home page with post request');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// express.raw()
// express.text()
// express.urlencoded()
// express.static
// const express = require('express');

// const app = express();
// // we can make a foder as a static root folder
// app.use(express.static(`${__dirname}/public/`, {
//   index: 'home.html',
// }));
// // just need to change the req headers object
// // content-type: plain/text
// app.use(express.text());
// app.get('/', (req, res) => {
//   res.send('This is home page');
// });
// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('This is home page with post request');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// express router
// const express = require('express');

// const app = express();
// // returns a router object
// // we can add option
// const router = express.Router({
//   caseSensitive: true,
// });
// // app, use this router object
// app.use(router);
// router.get('/', (req, res) => {
//   res.send('This is home page');
// });
// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('This is home page with post request');
// });
// router.get('/about', (req, res) => {
//   res.send('This is about page');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });
