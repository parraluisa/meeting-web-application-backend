const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database using the connection URI from environment variables.
 * If the connection is successful, a success message is logged to the console.
 * If the connection fails, an error message is logged and the process exits with a status code of 1.
 * 
 * @throws {Error} If the MONGO_URI environment variable is not defined.
 */
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;