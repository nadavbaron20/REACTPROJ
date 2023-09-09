import { Role } from "../../db/models/role.js";
import { User } from "../../db/models/user.js";
import twilio from "twilio";
import nodeEvents from "../../nodeEvents/nodeEvents.js";

const accountSid = "AC5761472702b8b1f27b51279098d15748";
const authToken = "7b2b7f8a3ff420686efb2b18ade12b2d";
const myTwilioPhone = "+15077057572";
const client = twilio(accountSid, authToken);

export const tryLogin = async (req, res, next) => {
  const phone = req.params.phone;

  let user = await User.findOne({ phone });

  let isRegistered = false;
  let randomNumber = Math.floor(100000 + Math.random() * 900000);
  if (user !== null) {
    user.verficationCode = randomNumber;
    await user.save();
    isRegistered = true;
  }
  if (user === null) {
    const role = await Role.findOne({ name: "user" });
    const rolesArr = [{ _id: role._id, name: role.name }];

    const newUser = new User({
      phone,
      verficationCode: randomNumber,
      roles: [role],
    });

    await new Promise(async (resolve, reject) => {
      newUser.save(async (error, savedUser) => {
        if (error) {
          reject(error);
        } else {
          isRegistered = true;
          resolve(savedUser);
        }
      });
    });
  }
  const formattedPhoneNumber = "+972" + phone.replace(/^0+/, "");

  if (isRegistered === true) {
    return res.json({ msg: `הקוד הוא ${randomNumber}` });
    // client.messages
    //   .create({
    //     body: `הקוד שלך הוא ${randomNumber}`,
    //     from: myTwilioPhone,
    //     to: formattedPhoneNumber,
    //   })
    //   .then((message) => {
    //     res.json({ msg: `הקוד נשלח לנייד` });
    //     return nodeEvents.emit("update");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.status(500).json({ message: "Error sending verification code" });
    //   });
  } else {
    res.json({ message: `שגיאה` });
    return nodeEvents.emit("user");
  }
};
