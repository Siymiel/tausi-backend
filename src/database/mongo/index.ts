import mongoose from 'mongoose';
import Logger from '../../core/logger';

require('dotenv').config();

const DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL as string;

const options = {
  minPoolSize: 5,
  maxPoolSize: 30,
  autoIndex: true,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
  // useUnifiedTopology: true,
  // useNewUrlParser: true,
  // useCreateIndex: true
};

// connect to the database
mongoose.connect(DB_CONNECTION_URL, options)
  .then(() => {
    Logger.apiLog('MongoDB database connected');
  }).catch(() => {
    Logger.databaseActivityError('MongoDB database connection failed', false);
  });

// connection events
mongoose.connection.on('connected', () => {
  Logger.databaseActivityInfo(`Mongoose default connection open to ${DB_CONNECTION_URL}`);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  Logger.databaseActivityError(`Mongoose default connection error: ${err}`, false);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  Logger.databaseActivityInfo('Mongoose default connection disconnected');
});

export default mongoose;
