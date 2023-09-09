import { model } from "mongoose";
import { Schema } from "mongoose";

const businessSchema = new Schema({
  imgUrl: String,
  name: String,
  website: String,
  phone: String,
  address: { country: String, city: String, street: String }
  , createdAt: { type: Date, default: Date.now() },
  owner: { type: Schema.Types.ObjectId, ref: `User` }
});
const Business = model("Business", businessSchema);

export { Business };
