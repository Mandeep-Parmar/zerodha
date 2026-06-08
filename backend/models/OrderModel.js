import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
