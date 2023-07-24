import { Router } from "express";
import { verifyUser } from "../../utils/token.utils";
import {
  verifyUser as verifyUserCtrl,
  login,
} from "../../controllers/user/auth.controller";
import validator from "../../services/validator.js";
import { userAuthSchema } from "../../validationSchemas/user/user.validation.js";
const app = Router();

app.get("/:token", verifyUser, verifyUserCtrl);
app.post("/login", validator(userAuthSchema), login);

export default app;
