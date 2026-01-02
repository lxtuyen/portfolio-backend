const Profile = require("../models/Profile");

exports.getProfile = async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
};

exports.createOrUpdateProfile = async (req, res) => {
  const data = req.body;

  let profile = await Profile.findOne();
  if (profile) {
    profile = await Profile.findOneAndUpdate({}, data, { new: true });
  } else {
    profile = await Profile.create(data);
  }

  res.json(profile);
};
