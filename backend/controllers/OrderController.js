import HoldingModel from "../models/HoldingModel.js";
import OrderModel from "../models/OrderModel.js";

export const placeOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user.id;

    const calculateNet = (price, avg) => {
      const net = ((price - avg) / avg) * 100;
      return net.toFixed(2) + "%";
    };

    // 1. Find existing holding first
    let existingHolding = await HoldingModel.findOne({ name, userId });

    // ===== SELL VALIDATION =====
    if (mode === "SELL") {
      if (!existingHolding) {
        return res.json({
          success: false,
          message: "No holding found to sell",
        });
      }

      if (existingHolding.qty < qty) {
        return res.json({
          success: false,
          message: "Not enough stock to sell",
        });
      }
    }

    // 2. Save Order ONLY AFTER validation
    const newOrder = new OrderModel({
      userId,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    // ================= BUY =================
    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const totalInvestment =
          existingHolding.avg * existingHolding.qty + price * qty;

        existingHolding.avg = totalInvestment / totalQty;
        existingHolding.qty = totalQty;
        existingHolding.price = price;

        // UPDATE NET
        existingHolding.net = calculateNet(price, existingHolding.avg);

        // fake day
        existingHolding.day = (Math.random() * 2 - 1).toFixed(2) + "%";

        await existingHolding.save();
      } else {
        await HoldingModel.create({
          userId,
          name,
          qty,
          avg: price,
          price,
          net: "0.00%",
          day: "0.00%",
        });
      }
    }

    // ================= SELL =================
    if (mode === "SELL") {
      const remainingQty = existingHolding.qty - qty;

      if (remainingQty === 0) {
        await HoldingModel.deleteOne({ _id: existingHolding._id });
      } else {
        existingHolding.qty = remainingQty;
        existingHolding.price = price;

        // UPDATE NET AGAIN
        existingHolding.net = calculateNet(price, existingHolding.avg);
        existingHolding.day = (Math.random() * 2 - 1).toFixed(2) + "%";
        
        await existingHolding.save();
      }
    }

    res.json({
      success: true,
      message: "Order placed & holdings updated",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to place order" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.user.id });
    res.json(orders);
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch orders" });
  }
};
