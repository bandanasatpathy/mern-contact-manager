const mongoose = require("mongoose");
const dbSrv = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}`;
console.log("dbSrvr",dbSrv)
const db = mongoose
  .connect(dbSrv)
  .then(() => console.log("Database has been connected successfully"))
  .catch((err) => console.log(err));

module.exports = { db };



