import Profile from "./index.js";

const controller = {
  create(newProfileName) {
    return Profile.create({ name: newProfileName });
  },
  index() {
    return Profile.find({});
  },
  show(profileId) {
    return Profile.findById(profileId);
  },
  delete(profileId) {
    return Profile.findByIdAndDelete(profileId);
  },
};

export default controller;
