const userRepository = require("../models/user/user.repo");

exports.createUser = async (req, res) => {
  const userData = req.body;

  try {
    const result = await userRepository.createUser(userData);

    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create user!" });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await userRepository.getUserById(userId);
    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const result = await userRepository.updateUser(userId, updateData);
    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await userRepository.deleteUser(userId);
    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

exports.resetPassword = async (req, res) => {
  const userId = req.params.id;
  const newPassword = req.body.newPassword;

  try {
    const result = await userRepository.resetPassword(userId, newPassword);
    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to reset password" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const result = await userRepository.list({});

    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all users" });
  }
};
