const Skill = require("../models/Skill");

/**
 * GET /api/skills
 * Lấy danh sách kỹ năng
 */
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: skills,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch skills",
    });
  }
};

/**
 * POST /api/skills
 * Tạo kỹ năng
 */
exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Skill created successfully",
      data: skill,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to create skill",
    });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      data: skill,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to update skill",
    });
  }
};

/**
 * DELETE /api/skills/:id
 * Xóa kỹ năng
 */
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete skill",
    });
  }
};
