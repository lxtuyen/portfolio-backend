const router = require("express").Router();
const controller = require("../controllers/skill.controller");

router.get("/", controller.getSkills);
router.post("/", controller.createSkill);

module.exports = router;
