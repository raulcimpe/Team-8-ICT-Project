const app = require("../app.js");
const request = require("supertest");
const seed = require("../db/seeds/seed.js");
const db = require("../db/connection.js");
const testData = require("../db/data/test-data/index.js");

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  return db.end();
});

describe("app", () => {
  describe("/admins", () => {
    test("GET 200: returns an object containing all the admins", () => {
      return request(app)
        .get("/admins")
        .expect(200)
        .then(({ body }) => {
          expect(body.admins).toHaveLength(20);
          body.admins.forEach((admin) => {
            expect(admin).toHaveProperty("username");
            expect(admin).toHaveProperty("password");
            expect(admin).toHaveProperty("firstname");
            expect(admin).toHaveProperty("lastname");
            expect(admin).toHaveProperty("email");
            expect(admin).toHaveProperty("address");
            expect(admin).toHaveProperty("phone");
            expect(admin).toHaveProperty("position");
          });
        });
    });
    test("POST 201: returns a newly-added admin", () => {
      const newAdmin = {
        username: "newAdmin",
        password: "adminPW12",
        firstname: "Admin",
        lastname: "AdminSurname",
        email: "admin@admin.com",
        address: "123 admin street, admin, se1 0pq",
        phone: "+44 77777 77777",
        position: "Supervisor",
      };
      return request(app)
        .post("/admins")
        .send(newAdmin)
        .expect(201)
        .then(({ body: { admin } }) => {
          expect(admin.username).toBe("newAdmin");
          expect(admin.password).toBe("adminPW12");
          expect(admin.firstname).toBe("Admin");
          expect(admin.lastname).toBe("AdminSurname");
          expect(admin.email).toBe("admin@admin.com");
          expect(admin.address).toBe("123 admin street, admin, se1 0pq");
          expect(admin.phone).toBe("+44 77777 77777"),
            expect(admin.position).toBe("Supervisor");
        });
    });
  });
});
