const db = require("../../data/dbConfig");

async function findAll() {
  return db("projects");
}

async function add(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return db("projects").where("project_id", id).first();
    });
}

module.exports = {
  findAll,
  //   findById,
  add,
};
