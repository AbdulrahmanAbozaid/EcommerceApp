import { connect } from "mongoose";

const connection = () =>
  connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`${err}`);
    });

// const connect = () => {
//   _Promise = Promise;
//   _connect(process.env.CONNECTION_STING);
// };

// const disconnect = (done) => {
//   _disconnect(done);
// };

export { connection };
