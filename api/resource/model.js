const db = require("../../data/dbConfig");

async function findAll() {
  return db("resources");
}

async function add(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return db("resources").where("resource_id", id).first();
    });
}

module.exports = {
  findAll,
  //   findById,
  add,
};
