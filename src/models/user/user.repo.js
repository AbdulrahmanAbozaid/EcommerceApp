const User = require("./user.model");
const bcrypt = require("bcrypt");

class UserRepository {
  async createUser(userData) {
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      return { code: 201, success: true, data: savedUser, error: null };
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to create user",
      };
    }
  }

  async list(filter) {
    try {
      const users = await User.find(filter).select("-password");
      if (users) {
        return { code: 200, success: true, data: users, error: null };
      } else {
        return {
          code: 404,
          success: false,
          data: null,
          error: "Users not found",
        };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to fetch users",
      };
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      if (user) {
        return { code: 200, success: true, data: user, error: null };
      } else {
        return {
          code: 404,
          success: false,
          data: null,
          error: "User not found",
        };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to fetch user",
      };
    }
  }

  async updateUser(userId, updateData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
      });
      if (updatedUser) {
        return { code: 200, success: true, data: updatedUser, error: null };
      } else {
        return {
          code: 404,
          success: false,
          data: null,
          error: "User not found",
        };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to update user",
      };
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (deletedUser) {
        return { code: 200, success: true, data: null, error: null };
      } else {
        return {
          code: 404,
          success: false,
          data: null,
          error: "User not found",
        };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to delete user",
      };
    }
  }

  async isExist(email) {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return { code: 200, success: true, data: true, error: null };
      } else {
        return { code: 200, success: true, data: false, error: null };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to check user existence",
      };
    }
  }

  async resetPassword(userId, newPassword) {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { password: hashedPassword },
        { new: true }
      );
      if (updatedUser) {
        return { code: 200, success: true, data: updatedUser, error: null };
      } else {
        return {
          code: 404,
          success: false,
          data: null,
          error: "User not found",
        };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to reset password",
      };
    }
  }

  async comparePassword(password, hashedPassword) {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return { code: 200, success: true, data: isMatch, error: null };
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        error: "Failed to compare passwords",
      };
    }
  }
}

module.exports = new UserRepository();
