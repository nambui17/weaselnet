const express = require('express');
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(getUsers)
  .post(createUser)
  .delete(deleteUser)
  .put(updateUser);

router.route('/singleUser').get(getSingleUser);

router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;
