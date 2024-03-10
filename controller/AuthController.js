const { User } = require("../models/UserModel");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    console.log(user);
    if (!user) {
      res.status(401).json({ message: "No such user with this email" });
    } else if (user.password === req.body.password) {
      res
        .status(200)
        .json({ 
          id: user.id,
          email: user.email,
          name: user.name,
          addresses: user.addresses,
        });
    } else {
      res.status(401).json({ message: "Invalid Credential" });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
