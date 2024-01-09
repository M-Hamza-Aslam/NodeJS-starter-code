module.exports = {
  // create User
  newUserController: async (req, res) => {
    const { name, email, age } = req.body;

    try {
      const user = new User({ name, email, age });
      await user.save();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  //update
  updateUserController: async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    try {
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
      );
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // read all users
  getUsersController: async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // read one user
  getUserController: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // delete
  deleteUserController: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByIdAndDelete(id);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
