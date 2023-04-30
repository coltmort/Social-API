const { Schema, Types } = require('mongoose');
const userSchema = require('./User')

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: userSchema,
    // reactions: {reactionSchema},
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtsSchema;
