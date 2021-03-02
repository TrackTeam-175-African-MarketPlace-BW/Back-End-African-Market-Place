const db = require("../data/dbConfig");
const server = require("./server");
const request = require("supertest");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("tests for server.js", () => {
  //Check if we are in testing environment
  test("We are in the testing environment", () => {
    expect(process.env.ENVIRONMENT).toBe("testing");
  }, 10000);
});

describe("tests for countries endpoint", () => {
  test("GET /api/countries check status code", () => {
    return request(server)
      .get("/api/countries")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  }, 10000);

  test("GET /api/countries check response length", () => {
    return request(server)
      .get("/api/countries")
      .then((res) => {
        expect(res.body.length).toEqual(5);
      });
  }, 10000);

  test("GET /api/countries check first country value in response", () => {
    return request(server)
      .get("/api/countries")
      .then((res) => {
        expect(res.body[0].country).toEqual("Kenya");
      });
  }, 10000);
});

describe("tests for categories endpoint", () => {
  test("GET /api/categories check status code", () => {
    return request(server)
      .get("/api/categories")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  }, 10000);

  test("GET /api/categories check response length", () => {
    return request(server)
      .get("/api/categories")
      .then((res) => {
        expect(res.body.length).toEqual(11);
      });
  }, 10000);

  test("GET /api/categories check Eigth category value in response", () => {
    return request(server)
      .get("/api/categories")
      .then((res) => {
        expect(res.body[7].category).toEqual("Peas");
      });
  }, 10000);
});

describe("tests for markets endpoint", () => {
  test("GET /api/markets check status code", () => {
    return request(server)
      .get("/api/markets")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  }, 10000);

  test("GET /api/markets check response length", () => {
    return request(server)
      .get("/api/markets")
      .then((res) => {
        expect(res.body.length).toEqual(13);
      });
  }, 10000);

  test("GET /api/markets check Tenth market value in response", () => {
    return request(server)
      .get("/api/markets")
      .then((res) => {
        expect(res.body[9].market).toEqual("Kisumu");
      });
  }, 10000);
});

describe("tests for markets endpoint with country query", () => {
  test("GET /api/markets?country=Kenya check status code", () => {
    return request(server)
      .get("/api/markets")
      .query({ country: "Kenya" })
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  }, 10000);

  test("GET /api/markets?country=Kenya check response length", () => {
    return request(server)
      .get("/api/markets")
      .query({ country: "Kenya" })
      .then((res) => {
        expect(res.body.length).toEqual(3);
      });
  }, 10000);

  test("GET /api/markets?country=Kenya check First market value in response", () => {
    return request(server)
      .get("/api/markets")
      .query({ country: "Kenya" })
      .then((res) => {
        expect(res.body[0].market).toEqual("Bungoma");
      });
  }, 10000);
});

describe("tests for registering a user", () => {
  test("GET /api/users/register [success] check status code", () => {
    return request(server)
      .post("/api/users/register")
      .send({
        name: "Brian Evans",
        email: "brian@evans.com",
        password: "brian",
        country: "Rwanda",
        user_info: "The best corn seller.",
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
      });
  }, 10000);

  test("GET /api/users/register [success] check returned email value", () => {
    return request(server)
      .post("/api/users/register")
      .send({
        name: "Brian Evans",
        email: "brian@evans.com",
        password: "brian",
        country: "Rwanda",
        user_info: "The best corn seller.",
      })
      .then((res) => {
        expect(res.body.email).toBe("brian@evans.com");
      });
  }, 10000);
  test("GET /api/users/register [failure] check status code if email missing.", () => {
    return request(server)
      .post("/api/users/register")
      .send({
        name: "Brian Evans",
        password: "brian",
        country: "Rwanda",
        user_info: "The best corn seller.",
      })
      .expect(400);
  }, 10000);
  test("GET /api/users/register [failure] check status code if password missing.", () => {
    return request(server)
      .post("/api/users/register")
      .send({
        name: "Brian Evans",
        email: "brian@evans.com",
        country: "Rwanda",
        user_info: "The best corn seller.",
      })
      .expect(400);
  }, 10000);
});

describe("tests for markets endpoint with country query", () => {
  test("GET /api/markets?country=Kenya check status code", () => {
    return request(server)
      .get("/api/markets")
      .query({ country: "Kenya" })
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  }, 10000);

  test("GET /api/markets?country=Kenya check response length", () => {
    return request(server)
      .get("/api/markets")
      .query({ country: "Kenya" })
      .then((res) => {
        expect(res.body.length).toEqual(3);
      });
  }, 10000);

  test("GET /api/markets?country=Kenya check First market value in response", () => {
    return request(server)
      .get("/api/markets")
      .query({ country: "Kenya" })
      .then((res) => {
        expect(res.body[0].market).toEqual("Bungoma");
      });
  }, 10000);
});

describe("tests for logging in a user", () => {
  test("GET /api/users/login [success] login successful and received token", () => {
    return request(server)
      .post("/api/users/login")
      .send({
        email: "sarah@gmail.com",
        password: "sarah",
      })
      .expect(200)
      .then((res) => {
        expect(res.body.token).toBeDefined();
      });
  }, 10000);
});
