const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findById(req.params.thoughtId)
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with username',
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findByIdAndDelete( req.params.thoughtId )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          :  res.json({ message: 'Thought deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Update thought
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId,
        req.body, 
        { runValidators: true, new: true })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
