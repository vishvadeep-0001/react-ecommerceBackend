const { User } = require("../models/UserModel");

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};


// update user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(401).json(error);
    }
  };
