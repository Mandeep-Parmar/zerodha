import OrderModel from "../models/OrderModel.js";

export const placeOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrderModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    res.json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.json({ error: "Failed to place order" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.json(orders);
  } catch (error) {
    res.json({ error: "Failed to fetch orders" });
  }
};
