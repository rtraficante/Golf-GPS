const router = require("express").Router();

router.use("/courses", require("./courses"));

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
