const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      {
        id: 1,
        email: "ismail@gmail.com",
        password: bcrypt.hashSync("ismail", 10),
        name: "Ismail AlKamal",
        user_info: "Best seller in the country.",
        country_id: 4,
        user_photo:
          "https://ca.slack-edge.com/ESZCHB482-W015HRAH83G-46d85de735e1-512",
      },
      {
        id: 2,
        email: "chad@gmail.com",
        password: bcrypt.hashSync("chad", 10),
        name: "Chad Diaz",
        country_id: 2,
        user_info: "Best seller in the country.",
        user_photo:
          "https://ca.slack-edge.com/ESZCHB482-W01636H26C9-fbf87c32eea8-512",
      },
      {
        id: 3,
        email: "sarah@gmail.com",
        password: bcrypt.hashSync("sarah", 10),
        name: "Sarah Rose",
        user_info: "Best seller in the country.",
        country_id: 1,
        user_photo:
          "https://ca.slack-edge.com/ESZCHB482-W015WNR71UL-ff5220bd5f20-512",
      },
    ]);
  });
};
