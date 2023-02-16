import express from "express";
import { CartProduct, ValidateCartProduct } from "./CartProduct_schema.js";

const cartProductRouter = express.Router();

cartProductRouter.post("/api/CartProduct", async (req, res) => {
  let cartProduct = new CartProduct(req.body);

  const result = await cartProduct.save();

  return res.send(result);
});

cartProductRouter.get("/api/CartProduct", async (req, res) => {
  const result = await CartProduct.find();

  res.send(result);
});

cartProductRouter.get("/api/CartProduct/:userId", async (req, res) => {
  const result = await CartProduct.find({ userId: req.params.userId });

  res.send(result);
});

cartProductRouter.put("/api/CartProduct/:id", async (req, res) => {
  const result = await CartProduct.findByIdAndUpdate(req.params.id, req.body);

  res.send(result);
});

cartProductRouter.delete("/api/CartProduct/:id", async (req, res) => {
  const result = await CartProduct.findByIdAndRemove(req.params.id);
  if (!result) res.status(404).send("Not Find This id");
  res.send(result);
});

export default cartProductRouter;

// {
//     productImage: req.body.productImage,
//     productName: req.body.productName,
//     productPrice: req.body.productPrice,
//     productSubTotal: req.body.productSubTotal,
//     productQuantity: req.body.productQuantity,
//   }
