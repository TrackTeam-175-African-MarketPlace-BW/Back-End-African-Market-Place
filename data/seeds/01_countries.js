exports.seed = function(knex) {
    // Deletes ALL existing entries
    knex.raw("TRUNCATE TABLE countries CASCADE");
    return knex("countries").then(function() {
        // Inserts seed entries
        return knex("countries").insert([
            { id: 1, country: "Kenya" },
            { id: 2, country: "Uganda" },
            { id: 3, country: "Tanzania" },
            { id: 4, country: "Rwanda" },
            { id: 5, country: "South Sudan" },
        ]);
    });
};