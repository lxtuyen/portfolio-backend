const Project = require("../models/Project");

/**
 * GET /api/projects
 */
exports.getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

/**
 * GET /api/projects/:id
 */
exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};

/**
 * POST /api/projects
 */
exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

/**
 * PUT /api/projects/:id
 */
exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(project);
};

/**
 * DELETE /api/projects/:id
 */
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
