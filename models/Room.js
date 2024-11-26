// models/room.js
const mongoose = require('mongoose');

/**
 * Room schema for the meeting application.
 * 
 * @typedef {Object} RoomSchema
 * @property {String} name - The name of the room. This field is required.
 * @property {Array<Object>} participants - List of participants in the room.
 * @property {Object} participants[].userId - The ID of the user, referencing the User model.
 * @property {Boolean} participants[].cameraEnabled - Indicates if the participant's camera is enabled. Defaults to true.
 * @property {Boolean} participants[].microphoneEnabled - Indicates if the participant's microphone is enabled. Defaults to true.
 */
const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  participants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      cameraEnabled: { type: Boolean, default: true },
      microphoneEnabled: { type: Boolean, default: true },
    },
  ],
});

module.exports = mongoose.model('Room', RoomSchema);
