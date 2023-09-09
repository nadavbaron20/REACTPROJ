import { Business } from "../db/models/business.js"
import { User } from "../db/models/user.js"
import { defaultBusinesses } from "../utils/content/defaultBusineses.js"
import { defaultUsers } from "../utils/content/defaultUsers.js"

export const defaultContent = async () => {
  const isExistUsers = await User.find();
  if (isExistUsers?.length === 0) {
    for (let user of defaultUsers) {
      let newUser = new User(user);
      await newUser.save();
    }
    console.log(`Default users saved!`);
  }

  // Default Bussiness ---------------
  const isExistBus = await Business.find();
  if (isExistBus.length === 0) {
    let users = await User.find();

    if (users.length > 0) {
      for (let bus of defaultBusinesses) {
        let newBus = new Business(bus);
        newBus.owner = users[0]._id
        users[0].business.push(newBus._id);
        await newBus.save();
      }
      await users[0].save(); // Save the modified user with business references
      console.log(`Default business saved!`);
    }
  }
}