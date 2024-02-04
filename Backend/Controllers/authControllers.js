const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const getJwtToken = require("../Utils/jwtToken");

const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    // password validation
    if (password != confirmPassword) {
      return res.status(400).json({ message: "Password does not match" });
    }
    // username validation
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    // password hashing
    const hashPassword = await bcrypt.hash(password, 10);

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    // create new user
    const newUser = new User({
      fullname,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyPic : girlPic,
    });

    if (newUser) {
      await getJwtToken(newUser._id, res);
      // save user
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } else {
      res.status(500).json({ message: "User registration failed" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userValid = await User.findOne({ username });

    // username validation
    if (!userValid) {
      return res.status(400).json({ message: "Invalid username" });
    }

    // password validation
    const validPassword = await bcrypt.compare(password, userValid.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // create jwt token
    await getJwtToken(userValid._id, res);
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login, logout };
