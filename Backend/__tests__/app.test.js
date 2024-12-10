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
  describe("/users", () => {
    test("GET 200: returns an object of all the users", () => {
      return request(app).get('/users').then(({body}) => {
        expect(body.users).toHaveLength(5)
        body.users.forEach((user) => {
          expect(user).toHaveProperty("username");
            expect(user).toHaveProperty("password");
            expect(user).toHaveProperty("firstname");
            expect(user).toHaveProperty("lastname");
            expect(user).toHaveProperty("email");
            expect(user).toHaveProperty("areashelpneeded");
            expect(user).toHaveProperty("businessdescription");
            expect(user).toHaveProperty("businessindustry");
            expect(user).toHaveProperty("businessname");
            expect(user).toHaveProperty("businessphone");
            expect(user).toHaveProperty("businesspostcode");
            expect(user).toHaveProperty("businessstage");
            expect(user).toHaveProperty("businesswebsite");
            expect(user).toHaveProperty("lsbustudoralum");
            expect(user).toHaveProperty("phone");
            expect(user).toHaveProperty("problemdescription");
            expect(user).toHaveProperty("socialmedia");
            expect(user).toHaveProperty("socialmedialinks");  
        })
      })
    })
    test("POST 201: returns a newly-added user", () => {
      const newUser = {
        
      firstName: "test",
      lastName: "test",
      username: "testuser",
      password: "password123",
      email: "testingh@example.com",
      phone: "+44 7700 900001",
      businessName: "test solutions",
      businessStage: "Established",
      businessDescription: "A tech consultancy providing IT solutions to SMEs.",
      businessIndustry: "Legal",
      businessRegistered: true,
      businessPostcode: "CR0 2YR",
      businessPhone: "+44 7700 800001",
      businessWebsite: "https://smithtechsolutions.com",
      socialMedia: ["LinkedIn", "Twitter"],
      socialMediaLinks: ["https://linkedin.com/smithtech", "https://twitter.com/smithtech"],
      help: ["Cyber Security", "Data Protection"],
      areasHelpNeeded: "Improving data security and compliance with GDPR regulations.",
      problemDescription: "Need a thorough security audit and advice on data compliance.",
      lsbuStudOrAlum: false
      }
      const expectedOutput = {
        user_id: 6,
        firstname: "test",
        lastname: "test",
        username: "testuser",
        password: "password123",
        email: "testingh@example.com",
        phone: "+44 7700 900001",
        businessname: "test solutions",
        businessstage: "Established",
        businessdescription: "A tech consultancy providing IT solutions to SMEs.",
        businessindustry: "Legal",
        businessregistered: true,
        businesspostcode: "CR0 2YR",
        businessphone: "+44 7700 800001",
        businesswebsite: "https://smithtechsolutions.com",
        socialmedia: ["LinkedIn", "Twitter"],
        socialmedialinks: ["https://linkedin.com/smithtech", "https://twitter.com/smithtech"],
        help: ["Cyber Security", "Data Protection"],
        areashelpneeded: "Improving data security and compliance with GDPR regulations.",
        problemdescription: "Need a thorough security audit and advice on data compliance.",
        lsbustudoralum: false
        }
      return request(app).post('/users').send(newUser).expect(201).then(({body: user}) => {
        expect(user).toMatchObject(expectedOutput)
      })
    })
  })
});
