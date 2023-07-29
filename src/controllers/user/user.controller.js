import userRepository from "../../models/user/user.repo.js";
import { generateToken } from "../../utils/token.utils.js";
import sendMail from "./../../services/sendMail.service.js";

/*
export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const found = await userRepository.isExist(email);
    if (found.data) {
      const loggedIn = await userRepository.comparePassword(
        password,
        found.data.password
      );

      if (loggedIn) {
        const accessToken = await generateToken({
          _id: found.data._id,
          role: found.data.role,
          email: found.data.email,
        });
        res.status(200).json({
          code: 200,
          success: true,
          data: accessToken,
        });
      } else {
        res.status(403).json({
          code: 403,
          success: false,
          error: "Invalid password",
        });
      }
    } else {
      res.status(found.code).json(found);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create user!" });
  }
}
*/
export async function register(req, res) {
  const userData = req.body;

  try {
    const found = await userRepository.isExist(userData.email);

    if (found.data) {
      return res.status(400).json(found);
    }

    const result = await userRepository.createUser(userData);
    const token = await generateToken({
      _id: result.data._id,
      email: result.data.email,
      role: result.data.role,
    });
    const activationLink = `Click on this URL to verify your account: http://localhost:${process.env.PORT}/users/verify/${token}`;
    const verifyHTML = `<a href="${activationLink}">Click Here</a>`;

    await sendMail(
      result.data.email,
      "Verification",
      activationLink,
      verifyHTML
    );

    if (result.success) {
      res.status(result.code).json({ ...result, activationLink });
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
