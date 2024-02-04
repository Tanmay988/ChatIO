const jwt = require("jsonwebtoken");

const getJwtToken = async (userId, res) => {
  const token = jwt.sign({ _id: userId }, process.env.SECRET_KEY, {
    expiresIn: "30h",
  });

  res.cookie("token", token, {
    maxAge: 30 * 12 * 60 * 60 * 1000, // 30 days in milliseconds
    httpOnly: true, // cookie cannot be accessed by client side script
  });
  //console.log("Token  = ", token);
};

module.exports = getJwtToken;
