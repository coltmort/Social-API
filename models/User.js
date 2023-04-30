const { Schema, model, mongoose } = require('mongoose');
const thoughtsSchema = require('./Thoughts');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,

    },
    thoughts: [ thoughtsSchema ]
    },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
