const { Schema, model } = require("mongoose");

// TODO:
const userSchema = new Schema({
  /* */
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
});

/*TODO:
Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
*/

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

const User = model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;
