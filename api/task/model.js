const db = require("../../data/dbConfig");

async function findAll() {
  return db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
}

async function add(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks").where("task_id", id).first();
    });
}

module.exports = {
  findAll,
  add,
};
