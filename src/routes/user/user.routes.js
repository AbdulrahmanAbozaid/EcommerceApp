import { Router } from "express";
const app = Router();
import {
  register,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  uploadUserImage,
} from "../../controllers/user/user.controller.js";
import validator from "../../services/validator.service.js";
import {
  userSchema,
  userUpdateSchema,
} from "../../validationSchemas/user/user.validation.js";
import uploader from "../../services/uploader.service.js";
import { authenticate } from "./../../utils/token.utils.js";
import * as endpoints from "../../helpers/endpoints.js";
const upload = uploader("users");

app.post("/createUser", validator(userSchema), register);
app.put("/uploadImage/:id", upload.single("profileImage"), uploadUserImage);
app.get("/getAllUsers", authenticate(endpoints.GET_ALL_USERS), getAllUsers);
app.get(
  "/getUserById/:id",
  authenticate(endpoints.GET_USER_BY_ID),
  getUserById
);
app.put(
  "/updateUser/:id",
  [validator(userUpdateSchema), authenticate(endpoints.UPDATE_USER)],
  updateUser
); // optional joi option for update schema
app.delete("/deleteUser/:id", authenticate(endpoints.DELETE_USER), deleteUser);

export default app;
