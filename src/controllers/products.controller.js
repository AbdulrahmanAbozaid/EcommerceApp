const productRepo = rquire("../models/product/product.repo.js");

// Create a new product
exports.createProduct = async (req, res) => {
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
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
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
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
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
};

// Delete a product
exports.deleteProduct = async (req, res) => {
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
};

// Get all products
exports.listProducts = async (req, res) => {
  try {
    const result = await productRepo.listProducts();

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
};
