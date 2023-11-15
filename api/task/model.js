const db = require("../../data/dbConfig");

async function findAll() {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  return tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed === 1,
    };
  });
}

async function add(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks").where("task_id", id).first();
    })
    .then((task) => {
      return {
        ...task,
        task_completed: task.task_completed === 1,
      };
    });
}

module.exports = {
  findAll,
  add,
};
