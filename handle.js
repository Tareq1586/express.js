// we can also access app.locals from an external file
// req object has the access
const handle = (req, res) => {
  console.log(req.route);
  console.log(req.params);
  console.log(req.app.locals);
  res.send('this is home page');
};
module.exports = handle;
