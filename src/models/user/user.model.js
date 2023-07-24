import { Schema, model } from "mongoose";
import { hash } from "bcrypt";
let saltRounds = 10;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: Object, required: false },
  role: {
    type: String,
    enum: ["customer", "admin", "seller"],
    default: "customer",
    required: true,
  },
  active: { type: Boolean, required: true, default: false },
});

userSchema.pre("save", async function (next) {
  try {
    this.password = await hash(this.password, saltRounds);
    next();
  } catch (error) {
    console.log('Error in pre("save"): ', error);
  }
});

const User = model("Users", userSchema);

export default User;
