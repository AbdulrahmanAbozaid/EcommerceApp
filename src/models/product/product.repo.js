import Product from "./product.model.js";

class ProductRepo {
  // create
  async createProduct(productData) {
    try {
      const product = new Product(productData);
      const savedProduct = await product.save();

      return {
        code: 201,
        success: true,
        data: savedProduct,
      };
    } catch (error) {
      return { code: 500, success: false, error: "Failed to create Product" };
    }
  }

  // update
  async updateProduct(productId, productData) {
    try {
      const product = await Product.findByIdAndUpdate(productId, productData, {
        new: true, // to return it after updated
      });

      if (!product) {
        return {
          code: 404,
          success: false,
          error: "Product not found",
        };
      }
      return {
        code: 200,
        success: true,
        data: product,
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        error: "Failed to update product",
      };
    }
  }

  // destroy
  async deleteProduct(productId) {
    try {
      const product = await Product.findOneAndDelete(productId);
      if (!product) {
        return {
          code: 404,
          success: false,
          error: "Product not found",
        };
      }
      return {
        code: 200,
        success: true,
        data: "Product deleted successfully",
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        error: "Failed to delete product",
      };
    }
  }

  // list
  async list(filter) {
    try {
      const products = await Product.find(filter);
      return {
        code: 200,
        success: true,
        data: products,
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        error: "Failed to list products",
      };
    }
  }

  // get by id
  async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return {
          code: 404,
          success: false,
          error: "Product not found",
        };
      } else {
        return {
          code: 200,
          success: true,
          data: product,
        };
      }
    } catch (error) {
      return {
        code: 500,
        success: false,
        error: "Failed to fetch product",
      };
    }
  }
}

export default new ProductRepo();
