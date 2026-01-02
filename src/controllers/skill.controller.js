const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

exports.createSkill = async (req, res) => {
  const skill = await Skill.create(req.body);
  res.json(skill);
};
