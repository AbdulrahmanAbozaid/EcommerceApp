import request from "supertest";
import app from "../config/server.js";
import { connect, disconnect } from "../config/database.js";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzU5OTlmZmUyODNmMWFjMTY5NGIyNiIsImVtYWlsIjoic3Bla3RyYXNtaXRoQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MTczMzIwNH0.YHy09JKc4LgHuaMOZ0XJTrVbtG7zTAjTQl_xtL3o3eQ";

describe("Testing Cart Module", () => {
  beforeEach(() => {
    connect();
  });

  describe("Cart Routes", () => {
    // Test for creating a new cart
    it("should create a new cart", async () => {
      const res = await request(app)
        .post("cart/createCart")
        .send({ userId: "64c5999ffe283f1ac1694b26" })
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
    });

    it("should handle cart creation failure", async () => {
      const res = await request(app)
        .post("cart/createCart")
        .send({ userId: "invalid-user-id" })
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(500);
      expect(res.body.success).toBe(false);
    });

    // Test for getting cart by user ID
    it("should get cart by user ID", async () => {
      const res = await request(app)
        .get("cart/getCartByUserId/64c5999ffe283f1ac1694b26")
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it("should handle cart retrieval failure", async () => {
      const res = await request(app)
        .get("cart/getCartByUserId/invalid-user-id")
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(404);
      expect(res.body.success).toBe(false);
    });

    // Test for adding item to cart
    it("should add item to cart", async () => {
      const res = await request(app)
        .post("cart/addToCart")
        .send({
          userId: "64c5999ffe283f1ac1694b26",
          productId: "64d6c759293abf326a454422",
          quantity: 2,
        })
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it("should handle adding item to cart failure", async () => {
      const res = await request(app)
        .post("cart/addToCart")
        .send({
          userId: "invalid-user-id",
          productId: "invalid-product-id",
          quantity: -1,
        })
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(500);
      expect(res.body.success).toBe(false);
    });

    // Test for updating cart item quantity
    it("should update cart item quantity", async () => {
      const res = await request(app)
        .put("cart/updateCartItemQuantity")
        .send({
          userId: "64c5999ffe283f1ac1694b26",
          productId: "64d6c759293abf326a454422",
          quantity: 3,
        })
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it("should handle updating cart item quantity failure", async () => {
      const res = await request(app)
        .put("cart/updateCartItemQuantity")
        .send({
          userId: "invalid-user-id",
          productId: "invalid-product-id",
          quantity: -1,
        })
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(500);
      expect(res.body.success).toBe(false);
    });

    // Test for removing item from cart
    it("should remove item from cart", async () => {
      const res = await request(app).delete(
        "cart/removeFromCart/64c5999ffe283f1ac1694b26/64d6c759293abf326a454422"
      );

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it("should handle removing item from cart failure", async () => {
      const res = await request(app)
        .delete("cart/removeFromCart/invalid-user-id/invalid-product-id")
        .set("Authorization", `bearer ${TOKEN}`);

      expect(res.statusCode).toBe(500);
      expect(res.body.success).toBe(false);
    });
  });

  afterAll(async () => {
    disconnect();
  });
});
