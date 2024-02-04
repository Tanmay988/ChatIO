const mongosoe = require("mongoose");

const connectdB = mongosoe
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected to server");
  })
  .catch((err) => {
    console.log("Database is not connected");
  });

module.exports = connectdB;
