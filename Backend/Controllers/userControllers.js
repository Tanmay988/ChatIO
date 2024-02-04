const User = require("../models/userModel");

const getUserSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select({
      password: 0,
      email: 0,
      createdAt: 0,
      updatedAt: 0,
    });

    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getUserSideBar;
