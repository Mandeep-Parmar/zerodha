import Joi from "joi";

export const orderSchema = Joi.object({
  name: Joi.string().required(),
  qty: Joi.number().positive().required(),
  price: Joi.number().positive().required(),
  mode: Joi.string().valid("BUY", "SELL").required(),
});
