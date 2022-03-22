const router = require("express").Router();

const {
  addFriend,
  removeFriend,
} = require('../../controllers/friendController');

// Attaching `addFriend` function to POST requests to this route, and `removeFriend` function to DELETE requests to this route.
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
