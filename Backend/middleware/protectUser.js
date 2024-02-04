const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectUser = async (req, res, next) => {
  try {
    //get token from cookies
    const token = req.cookies.token;

    //if token not found
    if (!token) {
      return res.status(401).json({
        message:
          "You are not authorized to access this route or token not found",
      });
    }

    //verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    //if token not verified
    if (!decode) {
      return res.status(401).json({
        message:
          "You are not authorized to access this route or jwt not verify",
      });
    }

    //if token verified then find user by id
    const user = await User.findById(decode._id).select({ password: 0 });

    //assign user to req object
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ message: "You are not authorized to access this route" });
  }
};

module.exports = protectUser;
