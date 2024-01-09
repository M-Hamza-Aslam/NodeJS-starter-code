const express = require("express");
const User = require("./user");
const {
  newUserController,
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/user");

const router = express.Router();

// Create a new user
router.post("/users", newUserController);

// Get all users
router.get("/users", getUsersController);

// get a single user
router.get("/users/:id", getUsersController);

// Update a user
router.put("/users/:id", updateUserController);

// Delete a user
router.delete("/users/:id", deleteUserController);

module.exports = router;
