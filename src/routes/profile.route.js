const router = require("express").Router();
const controller = require("../controllers/profile.controller");

router.get("/", controller.getProfile);
router.post("/", controller.createOrUpdateProfile);

module.exports = router;
