const { request } = require("express");

const getUsers = (require, response) => {
  //Get all users
};

const getUser = (require, response) => {
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id}`);
};

const createUser = (require, response) => {
  //Create new user
  response.status(201);
  response.send(request.body)
};

const updateUser = (require, response) => {
  //Update user
};

const deleteUser = (require, response) => {
  //Delete user
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
