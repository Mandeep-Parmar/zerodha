import HoldingModel from "../models/HoldingModel.js";

export const getHoldings = async (req, res) => {
  try {
    const holdings = await HoldingModel.find();
    res.json(holdings);
  } catch (error) {
    res.json({ sucess: false, message: "Error fetching holdings" });
  }
};
