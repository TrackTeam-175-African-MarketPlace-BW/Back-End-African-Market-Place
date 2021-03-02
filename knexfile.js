// Update with your config settings.
require("dotenv").config();
const pgConnection = process.env.DATABASE_URL;

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./data/marketplace.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        pool: {
            afterCreate: (conn, cb) => {
                conn.run("PRAGMA foreign_keys = ON", cb);
            },
        },
    },

    testing: {
        client: "sqlite3",
        connection: {
            filename: "./data/testing.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        pool: {
            afterCreate: (conn, cb) => {
                conn.run("PRAGMA foreign_keys = ON", cb);
            },
        },
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "pg",
        connection: {
            connectionString: pgConnection,
            ssl: { rejectUnauthorized: false },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    },
};