const mongoose = require('mongoose');

//TODO:
const reactionSchema = new mongoose.Schema({
    /* */
    
// Reaction custom id field id:false will disable the default _id: field
    id: false,
});

//TODO:
const thoughtSchema = new mongoose.Schema({/* */

    reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;


