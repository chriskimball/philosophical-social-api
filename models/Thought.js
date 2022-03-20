const { Schema, Types, model } = require("mongoose");

const dateFormat = function (date) {
    return `${ date.getMonth() + 1 }/${date.getDate()}/${date.getFullYear()} ${date.getHours() + 1 }:${ date.getMinutes() + 1 }`
}


//TODO:
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxlength: [280, "Too many characters."],
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: dateFormat
    },
    
  },
  {
    toJSON: {
      // Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    //   virtuals: true,
      getters: true,
    },
    // Reaction custom id field id:false will disable the default _id: field
    id: false,
  }
);

//TODO:
const thoughtSchema = new Schema(
    {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxlength: [280, "Too many characters."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: v => `${ v.getMonth() + 1 }/${v.getDate()}/${v.getFullYear()} ${v.getHours() + 1 }:${ v.getMinutes() + 1 }`
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
  });

// Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

    


const Thought = model("Thought", thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;
