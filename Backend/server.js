require("dotenv").config();
const express = require("express");
const app = express();

//import routes
const router = require("./Routes/authRoutes");
const route = require("./Routes/messageRoute.js");
const getUsers = require("./Routes/userRoute");

const cookieParser = require("cookie-parser");
require("./db/conn");
const PORT = process.env.PORT || 5000;

//connect to frontend
// const cors = require("cors");
const bodyParser = require("body-parser");

//middleware
// app.use(cors()); //allow request from all origin
app.use(bodyParser.json()); //parse application/json
app.use(express.json()); //parse json data
app.use(cookieParser()); //parse cookie data

//routes
app.use("/api/auth", router);
app.use("/api/message", route);
app.use("/api/users", getUsers);

//listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
