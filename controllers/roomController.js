/**
 * Get information about a room
 * @async
 * @function getRoom
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.roomId - ID of the room to retrieve
 * @param {Object} res - Express response object
 * @returns {Promise<void>} - Returns room information or an error message
 */

/**
 * Update the state of a participant
 * @async
 * @function updateParticipantState
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.roomId - ID of the room
 * @param {Object} req.body - Request body
 * @param {string} req.body.userId - ID of the participant
 * @param {boolean} req.body.cameraEnabled - State of the participant's camera
 * @param {boolean} req.body.microphoneEnabled - State of the participant's microphone
 * @param {Object} res - Express response object
 * @returns {Promise<void>} - Returns a success message or an error message
 */
// controllers/roomController.js
const Room = require('../models/room');

// Obtaining information about a room
const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId).populate('participants.userId', 'name');
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// updating the state of a participant
const updateParticipantState = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { userId, cameraEnabled, microphoneEnabled } = req.body;

    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    const participant = room.participants.find(p => p.userId.toString() === userId);
    if (participant) {
      participant.cameraEnabled = cameraEnabled;
      participant.microphoneEnabled = microphoneEnabled;
    } else {
      room.participants.push({ userId, cameraEnabled, microphoneEnabled });
    }

    await room.save();
    res.json({ message: 'Participant state updated', room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRoom, updateParticipantState };
