const mongoose = require("mongoose");
// require("dotenv").config();
// console.log(process.env.CONNECTION_STING);
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

module.exports = {
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect(process.env.CONNECTION_STING);
  },
  disconnect: (done) => {
    mongoose.disconnect(done);
  },
  connection,
};
