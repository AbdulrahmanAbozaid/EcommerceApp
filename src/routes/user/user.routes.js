const app = require("express").Router();
const userController = require("../../controllers/user.controller");
const validate = require("../../utils/validator");
const userSchema = require("../../validation/user.validation");

app.post("/createUser", validate(userSchema), userController.createUser);
app.get("/getAllUsers", userController.getAllUsers);
app.get("/getUserById/:id", userController.getUserById);
app.put("/updateUser/:id", validate(userSchema), userController.updateUser); // optional joi option for update schema
app.delete("/deleteUser/:id", userController.deleteUser);

module.exports = app;
