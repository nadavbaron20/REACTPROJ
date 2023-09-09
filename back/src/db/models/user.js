import { model } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: false },
    phone: { type: String, required: true },
    name: { type: String, default: "" },
    password: { type: String },
    city: String,
    street: String,
    country: String,
    business: {
      type: [Schema.Types.ObjectId], // An array of ObjectIds
      ref: 'Business',
      default: [],
    },
    roles: [
      {
        type: String,
        ref: "Role",
      },
    ],
  }
);

const User = model("User", userSchema);
export { User };
