import {
  connect as _connect,
  Promise as _Promise,
  disconnect as _disconnect,
} from "mongoose";
const connection = () =>
  _connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`${err}`);
    });

export default {
  connect: () => {
    _Promise = Promise;
    _connect(process.env.CONNECTION_STING);
  },
  disconnect: (done) => {
    _disconnect(done);
  },
  connection,
};
