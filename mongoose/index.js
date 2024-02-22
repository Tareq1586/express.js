const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');

// express app initialization
const app = express();
app.use(express.json());

// connect with mongodb database
mongoose.connect('mongodb://0.0.0.0:27017/todos')
  .then(() => console.log('successfully connected'))
  .catch((err) => console.log(err));

// application routes
app.use('/todo', todoHandler);

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}
app.listen(3000, () => {
  console.log('listening on port 3000');
});
