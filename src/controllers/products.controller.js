import productRepo from "../models/product/product.repo.js";

// Create a new product
export async function createProduct(req, res) {
  try {
    const productData = req.body;
    const result = await productRepo.createProduct(productData);

    if (result.success) {
      return res.status(result.code).json({ success: true, data: result.data });
    } else {
      return res
        .status(result.code)
        .json({ success: false, error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a product by ID
export async function getProductById(req, res) {
  try {
    const productId = req.params.id;
    const result = await productRepo.getProductById(productId);

    if (result.success) {
      return res.status(result.code).json({ success: true, data: result.data });
    } else {
      return res
        .status(result.code)
        .json({ success: false, error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update a product
export async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const updateData = req.body;
    const result = await productRepo.updateProduct(productId, updateData);

    if (result.success) {
      return res.status(result.code).json({ success: true, data: result.data });
    } else {
      return res
        .status(result.code)
        .json({ success: false, error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete a product
export async function deleteProduct(req, res) {
  try {
    const productId = req.params.productId;
    const result = await productRepo.deleteProduct(productId);

    if (result.success) {
      return res.status(result.code).json({ success: true, data: result.data });
    } else {
      return res
        .status(result.code)
        .json({ success: false, error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all products
export async function listProducts(req, res) {
  try {
    const result = await productRepo.list();

    if (result.success) {
      return res.status(result.code).json({ success: true, data: result.data });
    } else {
      return res
        .status(result.code)
        .json({ success: false, error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
