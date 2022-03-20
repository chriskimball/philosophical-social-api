// const { User } = require("../../models");
const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
} = require('../../controllers/userController');

// GET all Users `/api/users/`
router.route('/').get(getUsers).post(createUser);

// router.get("/", 
// async (req, res) => {
//   try {
//     const userData = await User.find({});

//     res.json(userData);
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

// GET a single user by userId `/api/users/:userId`
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// router.get("/:userId", async (req, res) => {
//   try {
//     const userData = await User.findById(req.params.userId);

//     res.json(userData);
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

// POST new user `/api/users`
// body: {username, email}
// router.post("/", async (req, res) => {
//   try {
//     const result = await User.create(req.body);
//     res.status(200).json(result);
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

// UPDATE user by userId `/api/users/:userId`
// {username}
// router.put("/:userId", async (req, res) => {
//   try {
//     const result = await User.findByIdAndUpdate(
//       req.params.userId, 
//       req.body, 
//       { new: true }
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

// // DELETE user by userId `/api/users/:userId`
// router.delete("/:userId", async (req, res) => {
//   try {
//     const result = await User.findByIdAndDelete(req.params.userId)

//     res.status(200).json("Successfully deleted user.");
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

/*
    TODO:
    **BONUS**: Remove a user's associated thoughts when deleted.
*/

module.exports = router;
