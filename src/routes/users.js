const router = require("express").Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:user_id', getUser);
router.patch('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);

module.exports = router;
