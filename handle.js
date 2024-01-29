// function will execute there, where function is defined
// we can also access app.locals from an external file
// req object can access app.locals
const handle = (req, res) => {
  console.log(req.route);
  console.log(req.params);
  console.log(req.app.locals);
  res.send('this is home page');
};
module.exports = handle;
