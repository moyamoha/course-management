import Joi from "joi";

export const changeNamePayload = Joi.object({
  firstname: Joi.string().min(2).required(),
  lastname: Joi.string().min(2).required(),
});
