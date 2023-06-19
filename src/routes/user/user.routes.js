const app = require("express").Router();
const userController = require("../../controllers/user.controller");

app.post("/createUser", userController.createUser);
app.get("/getAllUsers", userController.getAllUsers);
app.get("/getUserById/:id", userController.getUserById);
app.put("/updateUser/:id", userController.updateUser);
app.delete("/deleteUser/:id", userController.deleteUser);

module.exports = app;
