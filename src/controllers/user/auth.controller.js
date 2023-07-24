import userRepo from "../../models/user/user.repo.js";
import { generateToken } from "../../utils/token.utils.js";

export async function verifyUser(req, res) {
  const email = req.userEmail;
  console.log("Testing: userEmail: " + email);
  try {
    const result = await userRepo.isExist(email);
    if (result.data) {
      const verified = await userRepo.updateUser(result.data._id, {
        active: true,
      });

      if (verified.data.active) {
        res.status(200).json({
          success: true,
          code: 200,
          data: verified,
        });
      } else {
        res.status(result.code).json(result);
      }
    } else {
      res.status(result.code).json(result);
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      success: false,
      code: 500,
    });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const result = await userRepo.isExist(email);
    // check active
    if (result.data) {
      if (!result.data.active) {
        return res.status(400).json({
          code: 400,
          error: "Not Activated Account",
          success: false,
        });
      }

      const pass = await userRepo.comparePassword(
        password,
        result.data.password
      );
      if (pass.data) {
        const token = await generateToken({
          id: result.data._id,
          email: result.data.email,
          role: result.data.role,
        });

        res.cookie("accessToken", token, {
          maxAge: 2 * 24 * 60 * 60 * 1e3,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });

        res.status(201).json({
          success: true,
          token,
          code: 201,
        });
      } else {
        res.status(400).json({
          code: 400,
          success: false,
          error: "Incorrect Password",
        });
      }
    } else {
      res.status(result.code).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error });
  }
}
