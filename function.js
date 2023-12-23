// express function
// which handle the request data
// const express = require('express');

// const app = express();
// application কোন function use করবে সেটা বলে দিলাম
// আমার application- express.json() function jeta return korbe seta use korbe
// app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('This is home page');
// });
// app.post('/', (req, res) => {
// req.body এর moddhe object akare diye debe
//   console.log(req.body);
//   res.send('This is home page with post request');
// });
// app.listen(3000, () => {
//   console.log('listening to port 3000');
// });

// express.raw()
// express.text()
// express.urlencoded()

// express static
// const express = require('express');

// const app = express();
// we can make a foder as a static root folder 
// app.use(express.static(`${__dirname}/public/`, {
//   index: 'home.html',
// }));
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
// returns a router object
// we can add option
// const router = express.Router({
//   caseSensitive: true,
// });
// app, use this router object
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
