const express = require('express');

const mongoose = require('mongoose');

const todoSchema = require('../schemas/todoSchema');
const userSchema = require('../schemas/userSchema');

const Todo = new mongoose.model('Todo', todoSchema);
const User = new mongoose.model('User', userSchema);
const router = express.Router();
const checkLogin = require('../middlewares/checkLogin');

// get todos and populate user data
router.get('/', checkLogin, async (req, res) => {
  try {
    // const array = await Todo.find({ status: 'active' });

    // populate method
    const array = await Todo.find({}).populate('user', 'name username -_id');

    // built-in query helpers method
    // const array = await Todo.find({ status: 'active' }).select({
    //   _id: 0,
    //   date: 0,
    // });

    // const array = await Todo.find({ status: 'active' }).select({
    //   _id: 0,
    //   date: 0,
    // }).limit(1).exec();

    res.status(200).json({ result: array });
  } catch {
    res.status(500).json({ error: 'There was a server side error' });
  }
});

// get active todos- using our own instance method
router.get('/active', async (req, res) => {
  const todo = new Todo();
  const data = await todo.findActiveTodos();
  res.status(200).json({
    data,
  });
});

// get active todos- callback(depricated)
router.get('/active-callback', (req, res) => {
  const todo = new Todo();
  todo.findActiveCallback((err, data) => {
    res.status(200).json({ data });
  });
});

// get todos where title contains js- own static method
router.get('/js', async (req, res) => {
  const data = await Todo.findByJS();
  res.status(200).json({
    data,
  });
});

// get todos where title contains js- query helpers method
router.get('/language', async (req, res) => {
  const data = await Todo.find().byLanguage('js');
  res.status(200).json({
    data,
  });
});

router.get('/:id', async (req, res) => {
  try {
    const arr = await Todo.find({ _id: req.params.id });
    res.status(200).json({
      result: arr,
    });
  } catch (err) {
    res.status(500).json({ error: 'There was a server side error!' });
  }
});

// post a todo
router.post('/', checkLogin, async (req, res) => {
  // const newTodo = new Todo(req.body);
  // example of spread operator
  const newTodo = new Todo({
    ...req.body,
    user: req.userId,
  });
  try {
    const todo = await newTodo.save();
    await User.updateOne(
      { _id: req.userId },
      {
        $push: {
          todos: todo._id,
        },
      },
    );

    res.status(200).json({ message: 'Todo was inserted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'There was a server side error!' });
  }
});

// post multiple todo
router.post('/all', async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({ message: 'Todos were inserted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'There was a server side error!' });
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     await Todo.updateOne({ _id: req.params.id }, {
//       $set: {
//         status: 'active',
//       },
//     });
//     res.status(200).json({ message: 'Todo was updated successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'There was a server side error!' });
//   }
// });
router.put('/:id', async (req, res) => {
  try {
    const result = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: 'active',
        },
      },
      {
        new: true,
      },
    );
    res.status(200).json({
      message: 'Todo was updated successfully',
    });
    console.log(result);
  } catch (err) {
    res.status(500).json({
      error: 'There was a server side error!',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({
      result: 'Todo was deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      error: 'There was a server side error!',
    });
  }
});

module.exports = router;
