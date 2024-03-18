// error handling in express
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   throw new Error('There was an error!');
// });
// // invisible default error handling middleware
// /*
// app.use((err, req, res, next) => {

// });
// */
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// solution: handling the error instade of printinting stack trace
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   throw new Error('There was an error!');
// });

// app.use((err, req, res, next) => {
//   if (err.message) {
//     res.send(err.message);
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// custom error handler with syntax error
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   res.send(a);
// });
// app.use((err, req, res, next) => {
//   if (err.message) {
//     res.status(500).send(err.message);
//   } else {
//     res.status(500).send('There was an error!');
//   }
// });
// // still invisible default error handling middleware is there
// /*
// app.use((err, req, res, next) => {

// });
// */
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// 404 not found handling middleware
// const express = require('express');

// const app = express();
// app.use((req, res, next) => {
//   res.status(404).send('Requested URL was not found');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// next with parameter
// const express = require('express');

// const app = express();
// app.use((req, res, next) => {
//   next('Requested URL was not found!');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// next with parameter with custom error handling middleware
// next does not have any error message
// const express = require('express');

// const app = express();
// app.use((req, res, next) => {
//   next('Requested URL was not found!');
// });
// app.use((err, req, res, next) => {
//   if (err.message) {
//     res.status(500).send(err.message);
//   } else {
//     res.status(500).send('There was an error!');
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// still error, somewhere solved
// this is not a big deal
// const express = require('express');

// const app = express();
// app.get('/', (req, res, next) => {
//   for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//       res.end();
//       next('There is an error at 5 no. iteration');
//     } else {
//       res.write('a');
//     }
//   }
// });
// app.use((req, res, next) => {
//   next('Requested URL was not found!');
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent!');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There was an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// asynchronous
// const express = require('express');
// const fs = require('fs');

// const app = express();
// app.get('/', (req, res, next) => {
//   fs.readFile('/file-does-not-exist', (err, data) => {

//   });
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// synchronous way
// const express = require('express');
// const fs = require('fs');

// const app = express();
// app.get('/', (req, res, next) => {
//   fs.readFileSync('/file-does-not-exist', (err, data) => {

//   });
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// we can handle this behaviour using next
// const express = require('express');
// const fs = require('fs');

// const app = express();
// app.get('/', (req, res, next) => {
//   fs.readFile('/file-does-not-exist', (err, data) => {
//     if (err) {
//       next(err);
//     } else {
//       res.send(data);
//     }
//   });
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent!');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There is an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// our own asynchronous function
// const express = require('express');

// const app = express();
// app.get('/', (req, res, next) => {
//   setTimeout(() => {
//     try {
//       console.log(a);
//     } catch (err) {
//       next(err);
//     }
//   }, 1000);
// });
// app.use((req, res, next) => {
//   console.log('I\'m not called!');
//   next();
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There is an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// without try catch, app will be crushed
// const express = require('express');

// const app = express();
// app.get('/', (req, res, next) => {
//   setTimeout(() => {
//     console.log(a);
//   }, 1000);
// });
// app.use((req, res, next) => {
//   console.log('I\'m not called!');
//   next();
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There is an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// we can use next to handle file-does-not-exist
// const express = require('express');
// const fs = require('fs');

// const app = express();
// app.get('/', (req, res, next) => {
//   fs.readFile('/file-does-not-exist', 'utf-8', (err, data) => {
//     console.log(data);
//     next(err);
//   });
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There is an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// another error after one
// const express = require('express');
// const fs = require('fs');

// const app = express();
// app.get('/', (req, res, next) => {
//   fs.readFile('/file-does-not-exist', 'utf-8', (err, data) => {
//     console.log(data);
//     next(err);
//     console.log(data.property);
//   });
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There is an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// we can apply middleware chaining
// const express = require('express');
// const fs = require('fs');

// const app = express();
// app.get('/', [
//   (req, res, next) => {
//     fs.readFile('/file-does-not-exist', 'utf-8', (err, data) => {
//       console.log(data);
//       next(err);
//     });
//   },
//   (req, res, next) => {
//     console.log(data.property);
//   },
// ]);
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next('Headers already sent');
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send('There is an error!');
//     }
//   }
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });
