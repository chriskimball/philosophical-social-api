const { User } = require("../../models");
const router = require("express").Router();

// TODO:
// POST new friend by :friendId to user by :userId `/api/users/:userId/friends/:friendId`

router.post("/:userId/friends/:friendId", async (req, res) => {
  try {
    //   const userData = await User.findById(req.params.userId);
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// TODO:
// DELETE friend by :friendId from user by :userId `/api/users/:userId/friends/:friendId`

router.delete("/:userId/friends/:friendId", async (req, res) => {
  try {
    //   const userData = await User.findById(req.params.userId);
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

module.exports = router;
