const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatData = require('../utils/formatDate')

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => formatData(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
