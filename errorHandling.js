// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   throw new Error('There was an error!');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// custom error handler
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
// // invisible default error handling middleware
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
// app.get('/', (req, res) => {
//   res.send('a');
// });
// // 404 not found
// app.use((req, res, next) => {
//   res.status(404).send('Requested URL was not found');
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });

// next with parameter
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   res.send('a');
// });
// // 404 not found
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

// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//   for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//       throw new Error('There is a problem on this iteration!');
//     } else {
//       res.write('a');
//     }
//   }
//   res.end();
// });
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     res.send(err.message);
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

//
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

// without try catch
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

//
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

//
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

//
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
