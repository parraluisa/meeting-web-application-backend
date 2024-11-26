/**
 * Express router to handle user-related routes.
 * @module routes/userRoutes
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * Route to get all users.
 * @name get/users
 * @function
 * @memberof module:routes/userRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/users', userController.getUsers);

module.exports = router;