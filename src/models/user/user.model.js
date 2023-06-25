const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
let rounds = 10;

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["customer", "admin", "customerService", "marketing"],
    default: "customer",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, rounds);
  next();
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
