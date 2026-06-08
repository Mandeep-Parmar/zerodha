import mongoose from "mongoose";

const holdingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  net: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const HoldingModel = mongoose.model("Holding", holdingSchema);

export default HoldingModel;
