const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email address is required!"],
      unique: true,
      trim: true,
      // Built in validator to make sure email address that user is created with matches the formatting of a valid email address.
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

const User = model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;
