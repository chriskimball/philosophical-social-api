const { Thought } = require('../models');

module.exports = {
  // Add reaction to thought, function is attached to POST request to `/api/thoughts/:thoughtId/reactions`
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({message: `Added reaction to thought`})
      )
      .catch((err) => res.status(500).json(err));
  },
    // Add reaction to thought, function is attached to DELETE request to `/api/thoughts/:thoughtId/reactions`
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({message: `Removed reaction from thought`})
      )
      .catch((err) => res.status(500).json(err));
  },
};
