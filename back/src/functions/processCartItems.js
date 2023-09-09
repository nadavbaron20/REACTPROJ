import { CartItem } from "../db/models/cartItem.js";
import { Restaurant } from "../db/models/restaurant.js";
import { User } from "../db/models/user.js";
import { cartItemExamples } from "../utils/content.js";

const numberOfIterations = 5; // You can change this to any number of iterations you want

export async function processCartItems() {
  let users = await User.find();
  let rests = await Restaurant.find();

  for (let iteration = 0; iteration < numberOfIterations; iteration++) {
    for (const [i, user] of users.entries()) {
      const updatedCartItems = [];

      for (const itemId of user.cartItems) {
        let foundCartItem = await CartItem.findById(itemId);
        if (foundCartItem) {
          updatedCartItems.push(itemId);
        }
      }

      user.cartItems = updatedCartItems;

      let newCartItem = new CartItem({
        restId: rests[i]._id,
        userId: user._id,
        ...cartItemExamples[0],
      });

      user.cartItems.push(newCartItem._id);
      await Promise.all([user.save(), newCartItem.save()]);
    }
  }
}
