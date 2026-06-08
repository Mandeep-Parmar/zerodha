import PositionModel from "../models/PositionModel.js";

export const getPosition = async (req, res) => {
  try {
    const positions = await PositionModel.find();
    res.json(positions);
  } catch (error) {
    res.json({ sucess: false, message: "Error fetching postions" });
  }
};
