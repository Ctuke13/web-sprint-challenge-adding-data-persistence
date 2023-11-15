const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.findAll()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const project = req.body;

  Projects.add(project)
    .then((project) => {
      res.status(201).json(project);
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
