import jwt from "jsonwebtoken";
import userRepo from "../models/user/user.repo.js";
import rbac from "../helpers/rbac.js";

export async function generateToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET);
}

export async function verifyUser(req, res, next) {
  const token = req.params.token;

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (verified.email) {
      req.userEmail = verified.email;
      next();
    } else {
      return res.status(400).json({
        success: false,
        error: "Invalid token",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "Something went wrong with the server",
    });
  }
}

export const authenticate = (endpoint) => async (req, res, next) => {
  const head = req.headers["authorization"];
  const token = head && head.split(" ")[1];
  try {
    if (token) {
      const { role } = jwt.verify(token, process.env.TOKEN_SECRET);
      // ROLE_BASED_ACCESS
      const isAllowed = rbac.can(role, endpoint);

      if (isAllowed) next();
      else
        return res.status(403).json({
          error: "Access denied",
          code: 403,
          data: role,
        });
    } else {
      res.status(401).json({
        success: false,
        error: "No Token found",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error,
      success: false,
      error: "Internal Server Error",
    });
  }
};
