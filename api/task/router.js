const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.findAll()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const task = req.body;

  Tasks.add(task)
    .then((task) => {
      res.status(201).json(task);
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
