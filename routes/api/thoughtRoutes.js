const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought
} = require('../../controllers/thoughtController');

// Attaching `getThoughts` function to GET requests to this route, and `createThought` function to POST requests to this route.
router.route('/').get(getThoughts).post(createThought);

// Attaching `getSingleThought` function to GET requests to this route, `updateThought` function to PUT reqeusts to this route, and `deleteThought` function to DELETE requests to this route.
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
