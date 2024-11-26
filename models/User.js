/**
 * User model schema for MongoDB using Mongoose.
 * 
 * @module models/User
 */

const mongoose = require('mongoose');

/**
 * @typedef {Object} User
 * @property {string} username - The username of the user.
 * @property {string} roomId - The ID of the room the user is associated with.
 * @property {string} [profileImage] - The URL of the user's profile image.
 */

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  roomId: { type: String, required: true },
  profileImage: { type: String }, // random profile image
});

module.exports = mongoose.model('User', userSchema);
