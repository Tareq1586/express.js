// basic server
// express returns a function
const express = require('express');

// we can call the function and get an object named app
const app = express();
// ইউজার যদি গেট request করে এই url এ, তাহলে callback কল করে দাও
app.get('/', (req, res) => {
  // express extends req and res
  res.send('This is home page');
});
app.get('/about-us', (req, res) => {
  res.send('This is about us page');
});
app.post('/', (req, res) => {
  res.send('This is home page with post request');
});
// server listening is a system process
app.listen(3000, () => {
  console.log('listening to port 3000');
});
