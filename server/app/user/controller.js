import User from "./index.js";

const controller = {
  create(username, password) {
    return User.create({ username, password });
  },
  async show(username, password) {
    const user = await User.findOne({ username });

    const correctPassword = await user?.isCorrectPassword(password);

    if (!correctPassword) {
      throw new Error("Incorrect password");
    }

    return user;
  },
};

export default controller;
