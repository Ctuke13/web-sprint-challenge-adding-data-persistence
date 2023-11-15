const projects = [
  { project_name: "Project Beast" },
  {
    project_name: "Project Gambit",
    project_description: "Ace of Spades destroys generator of villain base",
  },
];

const resources = [
  {
    resource_name: "X-Men",
    resource_description: "Uncanny",
  },
  {
    resource_name: "The Avenger",
    resource_description: "Earths Mightiest Super Heroes",
  },
];

const tasks = [
  {
    task_description: "Moving objects with mind",
    task_notes: "Telekenesis",
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: "Mental Super Power",
    task_notes: "Super Intelligence",
    project_id: 1,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
};
