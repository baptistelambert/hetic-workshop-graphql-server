import Mongoose from 'mongoose';

Mongoose.promise = global.Promise;

const mongoOptions = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  db: { safe: true },
};

Mongoose.connect('mongodb://localhost:27017/perfweek', mongoOptions);

const dbConnect = Mongoose.connection;

dbConnect.on('error', err => {
  if (err) console.error(err.message);
});
