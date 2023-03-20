import User from "./index.js";

const controller = {
  async create(newUser) {
    const createdUser = await User.create(newUser);

    return createdUser.authenticate(newUser.password);
  },
  async show(username, password) {
    const user = await User.findOne({ username });

    return user?.authenticate(password);
  },
};

export default controller;
