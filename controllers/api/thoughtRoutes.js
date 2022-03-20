const { Thought } = require("../../models");
const router = require("express").Router();

//TODO:
// GET all Users `/api/thoughts/`
router.get("/", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});
// TODO:
// GET single Thought by :thoughtId `/api/thoughts/:thoughtId`
router.get("/:thoughtId", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

//TODO:
// Post new Thought `/api/thoughts`
// {thoughtText, username, userId}
router.post("/", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// TODO:
// UPDATE thought by :thoughtId `/api/thoughts/:thoughtId`
// {thoughtText}

router.put("/:thoughtId", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// TODO:
// DELETE user by userId `/api/thoughts/:thoughtId`
router.delete("/:thoughtId", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

module.exports = router;
