// const { User } = require("../../models");
const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

/*
    TODO:
    **BONUS**: Remove a user's associated thoughts when deleted.
*/

module.exports = router;
