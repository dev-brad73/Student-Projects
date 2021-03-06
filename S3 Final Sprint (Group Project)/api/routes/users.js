const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Routes
// Register new user
router.post("/register", async (req, res) => {
  try {
    // Generate encrypted password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user and return response
    const user = await newUser.save();
    res.status(200).json("User created");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login user
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404).json("User not found");
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    res.status(404).json("Invalid password");
  }

  res.status(200).json(user);
});

module.exports = router;
