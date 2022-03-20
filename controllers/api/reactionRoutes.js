const { Thought } = require("../../models");
const router = require("express").Router();

// TODO:
// POST new reaction to thought by :thoughtId `/api/thoughts/:thoughtId/reactions`
router.post("/:thoughtId/reactions", async (req, res) => {
  try {
    //   const userData = await User.findById(req.params.userId);
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// TODO:
// DELETE reaction by :reactionId from thought by :thoughtId `/api/thoughts/:thoughtId/reactions/:reactionId`
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  try {
    //   const userData = await User.findById(req.params.userId);
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// $PUSH, $PULL from sub-documents in activity 25/26

module.exports = router;
