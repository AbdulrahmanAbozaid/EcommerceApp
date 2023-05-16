const app = require("./app");
require("dotenv").config();

// Server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server Is Up and Running on ${process.env.PORT || 8080}`);
});

module.exports = app;
