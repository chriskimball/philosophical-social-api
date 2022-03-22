const router = require("express").Router();

const {
  addReaction,
  removeReaction,
} = require('../../controllers/reactionController');

// Attaching `addReaction` function to POST requests to this route, and `removeReaction` function to DELETE requests to this route.
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;
