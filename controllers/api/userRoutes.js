const { User } = require("../../models");
const router = require("express").Router();

// GET all Users `/api/users/`
router.get("/", async (req, res) => {
  try {
    const userData = await User.find({});

    res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// GET a single user by userId `/api/users/:userId`
router.get("/:userId", async (req, res) => {
  try {
    const userData = await User.findById(req.params.userId);

    res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  };
});

// TODO:
// POST new user `/api/users` 
// {username, email}
router.post("/", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});

// TODO:
// UPDATE user by userId `/api/users/:userId` 
// {username}
router.put("/:userId", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});



// TODO:
// DELETE user by userId `/api/users/:userId` 
router.delete("/:userId", async (req, res) => {
  try {
    //   const userData = await User.find({});
    //   res.json(userData);
  } catch (err) {
    res.json(500).send(err);
  }
});



/*

    `POST` a new user:

        ```json
        // example data
        {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
        }
        ```

    `PUT` to update a user by its `_id`

    `DELETE` to remove user by its `_id`

    **BONUS**: Remove a user's associated thoughts when deleted.

*/


module.exports = router;
