/**
 * Express router to handle room-related routes.
 * @module routes/roomRoutes
 */

const express = require('express');
const { getRoom, updateParticipantState } = require('../controllers/roomController');
const router = express.Router();

/**
 * Route to get information about a room.
 * @name get/:roomId
 * @function
 * @memberof module:routes/roomRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:roomId', getRoom); // obtain room information

/**
 * Route to update the state of a participant in a room.
 * @name post/:roomId/participant
 * @function
 * @memberof module:routes/roomRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/:roomId/participant', updateParticipantState); // update participant state

module.exports = router;