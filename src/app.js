const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/profile", require("./routes/profile.route"));
app.use("/api/skills", require("./routes/skill.route"));
app.use("/api/projects", require("./routes/project.route"));

module.exports = app;
