const { User, Thought } = require('../models');

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}

//Get a single user
async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({ _id: req.body._id });
    if (!user) {
      res.status(404).json({ message: 'No user found with that ID!' });
      return;
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}
async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({ _id: req.body._id });
    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    } else {
      Thought.deleteMany({ _id: { $in: user.applications } });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!user) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );
    if (!user) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function removeFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    );
    if (!user) {
      res.status(404).json({ message: 'No user found with this ID!' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
};
