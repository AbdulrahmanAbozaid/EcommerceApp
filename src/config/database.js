import mongoose from "mongoose";

const connection = () =>
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`${err}`);
    });

const connect = () => {
  mongoose.Promise = Promise;
  mongoose.connect(process.env.CONNECTION_STING);
};

const disconnect = (done) => {
  mongoose.disconnect(done);
};

export { connection, connect, disconnect };
