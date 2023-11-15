const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.findAll()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const resource = req.body;

  Resources.add(resource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.use((err, req, res) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong inside the projects router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
