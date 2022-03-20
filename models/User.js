const {Schema, model} = require('mongoose');


// TODO:
const userSchema = new Schema({
    /* */
    
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref:'Thought',
        },
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref:'User',
        },
    ],
});

const User = model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;