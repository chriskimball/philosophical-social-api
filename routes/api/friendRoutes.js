const router = require("express").Router();

const {
  addFriend,
  removeFriend,
} = require('../../controllers/friendController');

// TODO:
// POST new friend by :friendId to user by :userId `/api/users/:userId/friends/:friendId`
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// router.post("/:userId/friends/:friendId", async (req, res) => {
//   try {
//       const result = await User.findOneAndUpdate(
//         { _id: req.params.userId }, 
//         {
//           $addToSet: { friends: { _id: req.params.friendId } }
//         },
//         { runValidators: true, new: true }
//       );

//       res.status(200).json(result);
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

// // TODO:
// // DELETE friend by :friendId from user by :userId `/api/users/:userId/friends/:friendId`

// router.delete("/:userId/friends/:friendId", async (req, res) => {
//   try {
//     const result = await User.findByIdAndUpdate(
//       req.params.userId, 
//       {
//         $pull: { friends: { _id: req.params.friendId } }
//       },
//       { runValidators: true, new: true }
//     );

//     res.status(200).json(result);
//   } catch (err) {
//     res.json(500).send(err);
//   }
// });

module.exports = router;
