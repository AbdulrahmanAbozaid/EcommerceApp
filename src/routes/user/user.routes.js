import { Router } from "express";
const app = Router();
import {
  register,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  uploadUserImage,
} from "../../controllers/user.controller.js";
import validate from "../../services/validator.js";
import {
  userSchema,
  userUpdateSchema,
} from "../../validationSchemas/user/user.validation.js";
import uploader from "../../services/uploader.js";
const upload = uploader("users");

app.post("/createUser", validate(userSchema), register);
app.put("/uploadImage", upload.single("profileImage"), uploadUserImage);
app.get("/getAllUsers", getAllUsers);
app.get("/getUserById/:id", getUserById);
app.put("/updateUser/:id", validate(userUpdateSchema), updateUser); // optional joi option for update schema
app.delete("/deleteUser/:id", deleteUser);

export default app;
