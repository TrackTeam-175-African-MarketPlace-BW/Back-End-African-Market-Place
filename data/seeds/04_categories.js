exports.seed = function(knex) {
    // Deletes ALL existing entries
    knex.raw("TRUNCATE TABLE categories CASCADE");
    return knex("categories").then(function() {
        // Inserts seed entries
        return knex("categories").insert([
            { id: 1, category: "Animal Products" },
            { id: 2, category: "Beans" },
            { id: 3, category: "Cereals - Maize" },
            { id: 4, category: "Cereals - Other" },
            { id: 5, category: "Cereals - Rice" },
            { id: 6, category: "Fruits" },
            { id: 7, category: "Other" },
            { id: 8, category: "Peas" },
            { id: 9, category: "Roots & Tubers" },
            { id: 10, category: "Seeds & Nuts" },
            { id: 11, category: "Vegetables" },
        ]);
    });
};