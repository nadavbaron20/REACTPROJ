import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";
import { Role } from "./models/role.js";
import { defaultContent } from "../functions/defaultContent.js";

const { HOST, DB, PORT, ROLES } = dbConfig;

const connect = async () => {
  mongoose.set("strictQuery", false);
  //await mongoose.connect(
  //`mongodb+srv://inviteserv:klV8jwuXUF4Kt8YT@badats-phone.mjo1avl.mongodb.net`
  //);

  // mongodump --uri "mongodb+srv://matan:n3XTDyNe9rB0arcW@cluster0.845lyom.mongodb.net/Madigital" --ssl --authenticationDatabase=admin --db=Madigital --out="C:\שמור\קורס Full Stack\dump"
  await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
  console.log(`Succesfully connected to the database ${DB}`);
  initDB();
  defaultContent()
};

const initDB = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      ROLES.map((s) => new Role({ name: s })).forEach((role) => {
        role.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("added ", role.name, "to Roles collection");
          }
        });
      });
    }
  });
};

export { connect };
