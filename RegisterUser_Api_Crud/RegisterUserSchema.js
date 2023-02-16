import Joi from "joi";
import mongoose from "mongoose";

const complexityOptions = {
  min: 3,
  max: 15,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 2,
};

const userSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
    minlength: 3,
    maxlength: 18,
  },
  email: {
    require: true,
    type: String,
    minlength: 7,
    maxlength: 25,
    unique: true,
  },
  password: {
    require: true,
    type: String,
    minlength: 7,
    maxlength: 300,
  },
});

const User = mongoose.model("RegisterUser", userSchema);

const ValidateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(18).required(),
    email: Joi.string().min(7).max(25).required().email(),
    password: Joi.string(),
    confirmPassword: Joi.string(),
  });
  return schema.validate(user);
};

export { User, ValidateUser };
