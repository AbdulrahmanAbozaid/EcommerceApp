const mongoose = require("mongoose");

const connection = () =>
  mongoose
    .connect(process.env.CONNECTION_STING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`Mongoose Error: ${err}`);
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
