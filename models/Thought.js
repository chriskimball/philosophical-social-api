const { Schema, Types, model } = require("mongoose");

// Getter function to format dates into readable format.
const dateFormat = (v) => {return `${ v.toDateString()} at ${v.toTimeString()}`}

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
      getters: true,
    },
    // Reaction custom id field id:false will disable the default _id: field
    id: false,
  }
);

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
    get: dateFormat
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
