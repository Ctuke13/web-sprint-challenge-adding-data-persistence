const db = require("../../data/dbConfig");

async function findAll() {
  const projects = await db("projects");
  return projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed === 1,
    };
  });
}

async function add(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return db("projects").where("project_id", id).first();
    })
    .then((project) => {
      return {
        ...project,
        project_completed: project.project_completed === 1,
      };
    });
}

module.exports = {
  findAll,
  //   findById,
  add,
};
