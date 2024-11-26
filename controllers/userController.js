/**
 * Creates a new user.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.username - The username of the user.
 * @param {string} req.body.roomId - The room ID associated with the user.
 * @param {string} req.body.profileImage - The profile image URL of the user.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is created.
 */

/**
 * Retrieves a list of users.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
const User = require('../models/User');

exports.createUser = async (req, res) => {
  const { username, roomId, profileImage } = req.body;
  const user = new User({ username, roomId, profileImage });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user' });
  }
};

exports.getUsers = (req, res) => {
    res.json({ message: 'List of users' });
  };


