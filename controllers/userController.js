const { User, Thought } = require('../models');

module.exports = {
  // Get all users, function is attached to GET request to `/api/users`
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user, function is attached to GET request to `/api/users/:userId`
  getSingleUser(req, res) {
    User.findById(req.params.userId)
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user, function is attached to POST request to `/api/users`
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps, function is attached to DELETE request to `/api/users/:userId`
  deleteUser(req, res) {
    User.findByIdAndDelete( req.params.userId )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user, function is attached to a PUT request to `/api/users/:userId`
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId,
        req.body, 
        { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
