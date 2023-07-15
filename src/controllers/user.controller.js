import userRepository from "../models/user/user.repo.js";

export async function register(req, res) {
  const userData = req.body;

  try {
    const found = await userRepository.isExist(userData.email);

    if (found.data) {
      return res.status(400).json(found);
    }

    const result = await userRepository.createUser(userData);

    if (result.success) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create user!" });
  }
}

export async function uploadUserImage(req, res) {
  try {
    const image = req.file;
    const { id } = req.params;
    const result = await userRepository.uploadProfilePhoto(id, image);

    if (result.data) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to upload User Image" });
  }
}

export async function getUserById(req, res) {
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
}

export async function updateUser(req, res) {
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
}

export async function deleteUser(req, res) {
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
}

export async function resetPassword(req, res) {
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
}

export async function getAllUsers(req, res) {
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
}
