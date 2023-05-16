const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .put(removeFriend)


module.exports = router;
