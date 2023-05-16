const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('friends')
      // .populate('thought')

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a User
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and Thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No course with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add Friend
  async addFriend(req, res) {
    try {

      const friend = User.findOneAndUpdate(
        {_id: req.params.userId},
        {$addToSet: {friends: req.params.friendId}},
        {new: true}

        )
        if(!friend){
          res.json({message: 'no user with that id'})
        }
      res.json(friend)
    } catch (err) {
      res.status(505)
    }
  },

  async removeFriend(req, res) {
    try {
      const friend = User.findByIdAndUpdate(
        {_id: req.params.userId},
        {$pull: {friends: req.params.friendId}},
        {new:true}

        )
        if(!friend){
          res
          .status(404)
          .json({message: 'no user with that id'})
        }
      res.json(friend)
    } catch (err) {
      res.status(505)
    }
  }
};
