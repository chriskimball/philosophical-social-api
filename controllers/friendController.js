const { User } = require('../models');

module.exports = {
  // Add friend to User account
  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json({message: `Added friend to user's friend list`})
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove friend from user account
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json({message: `Removed friend from user's friend list`})
      )
      .catch((err) => res.status(500).json(err));
  },
};
