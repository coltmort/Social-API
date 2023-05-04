const {Schema, model, mongoose} = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // validation?
        },
        thoughts: [
            {
                 type: Schema.Types.ObjectId,
                 ref: 'thoughts',
            },
          ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: '_id'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
          },
    },

);

const User = model('user', userSchema)

module.exports = User