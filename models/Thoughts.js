const { Schema, model, mongoose } = require('mongoose')

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'username'
          }
        // reactions: reactionSchema,
    }
)




function formatDate(date){
    return date.toDateString()
}

// thoughtSchema.virtuals('thoughtCount').get(function (){
//     return this.thoughts.length
// })

const Thought = model('thought', thoughtSchema)

module.exports = Thought