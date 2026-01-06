const router = require("express").Router();
const controller = require("../controllers/skill.controller");

router.get("/", controller.getSkills);
router.post("/", controller.createSkill);
router.put("/:id", controller.updateSkill);
router.delete("/:id", controller.deleteSkill);

module.exports = router;
