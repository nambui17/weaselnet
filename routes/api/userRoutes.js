import express from 'express';
import {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} from '../../controllers/userController';

const router = express.Router();

router
  .route('/')
  .get(getUsers)
  .get(getSingleUser)
  .post(createUser)
  .delete(deleteUser)
  .put(updateUser);

//Add friend route
router.route('/:userId').post(addFriend);
//remove friend route
router.route('/:userId/freinds/:friendId').delete(removeFriend);

export default router;
