const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ['active', 'inactive'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// instance method
todoSchema.methods = {
  findActiveTodos() {
    return mongoose.model('Todo').find({ status: 'active' });
  },
  // findActiveCallback(callback) {
  //   return mongoose.model('Todo').find({ status: 'active' }, callback);
  // },
};

// static methods
todoSchema.statics = {
  findByJS() {
    return this.find({ title: /js/i });
  },
};

// qurey helpers
todoSchema.query = {
  byLanguage(language) {
    return this.find({ title: new RegExp(language, 'i') });
  },
};

module.exports = todoSchema;
