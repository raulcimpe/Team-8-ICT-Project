const app = require("../app.js");
const request = require("supertest");
const seed = require("../db/seeds/seed.js");
const db = require("../db/connection.js");
const testData = require("../db/data/test-data/index.js");
const feedback = require("../db/data/test-data/feedback.js");

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
      return request(app)
        .get("/users")
        .then(({ body }) => {
          expect(body.users).toHaveLength(5);
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
          });
        });
    });
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
        businessDescription:
          "A tech consultancy providing IT solutions to SMEs.",
        businessIndustry: "Legal",
        businessRegistered: true,
        businessPostcode: "CR0 2YR",
        businessPhone: "+44 7700 800001",
        businessWebsite: "https://smithtechsolutions.com",
        socialMedia: ["LinkedIn", "Twitter"],
        socialMediaLinks: [
          "https://linkedin.com/smithtech",
          "https://twitter.com/smithtech",
        ],
        help: ["Cyber Security", "Data Protection"],
        areasHelpNeeded:
          "Improving data security and compliance with GDPR regulations.",
        problemDescription:
          "Need a thorough security audit and advice on data compliance.",
        lsbuStudOrAlum: false,
      };
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
        businessdescription:
          "A tech consultancy providing IT solutions to SMEs.",
        businessindustry: "Legal",
        businessregistered: true,
        businesspostcode: "CR0 2YR",
        businessphone: "+44 7700 800001",
        businesswebsite: "https://smithtechsolutions.com",
        socialmedia: ["LinkedIn", "Twitter"],
        socialmedialinks: [
          "https://linkedin.com/smithtech",
          "https://twitter.com/smithtech",
        ],
        help: ["Cyber Security", "Data Protection"],
        areashelpneeded:
          "Improving data security and compliance with GDPR regulations.",
        problemdescription:
          "Need a thorough security audit and advice on data compliance.",
        lsbustudoralum: false,
      };
      return request(app)
        .post("/users")
        .send(newUser)
        .expect(201)
        .then(({ body: user }) => {
          expect(user).toMatchObject(expectedOutput);
        });
    });
    test("GET 200: returns ab object of a specific user by their id", () => {
      return request(app).get('/users/2').expect(200).then(({body: {user}}) => {
        expect(user.user_id).toBe(2)
      })
    })
  });
  describe("/appointments", () => {
    test("GET 200: return all the appointments", () => {
      return request(app)
        .get("/appointments")
        .expect(200)
        .then(({ body }) => {
          expect(body.appointments).toHaveLength(7);
          body.appointments.forEach((appointment) => {
            expect(appointment).toHaveProperty("client_id");
            expect(appointment).toHaveProperty("appointment_date");
            expect(appointment).toHaveProperty("appointment_type");
            expect(appointment).toHaveProperty("notes");
            expect(appointment).toHaveProperty("status");
          });
        });
    });
    test("GET 200: return a specific appointment by the client id", () => {
      return request(app)
        .get("/appointments/1")
        .expect(200)
        .then(({ body }) => {
          expect(body.appointments).toHaveLength(2);
        });
    });
    test("POST 201: returns a newly added appointment", () => {
      const newAppointment = {
        client_firstname: "Emma",
        client_lastname: "Johnson",
        appointment_date: "2024-12-23 11:00:00",
        appointment_type: "Online",
        status: "Scheduled",
        notes: "A meeting to discuss the future plans",
      };
      const expectedOutput = {
        appointment_id: 8,
        client_id: 2,
        appointment_date: "2024-12-23T11:00:00.000Z",
        appointment_type: "Online",
        status: "Scheduled",
        notes: "A meeting to discuss the future plans",
      };
      return request(app)
        .post("/appointments")
        .send(newAppointment)
        .expect(201)
        .then(({ body }) => {
          expect(body).toMatchObject(expectedOutput);
        });
    });
    test("DELETE 204: deletes an appointment by the appointment id", () => {
      return request(app).delete("/appointments/1").expect(204);
    });
  });
  describe("/notifications", () => {
    test("GET 200: return all the notifications", () => {
      return request(app)
        .get("/notifications")
        .expect(200)
        .then(({ body }) => {
          expect(body.notifications).toHaveLength(10);
          body.notifications.forEach((notification) => {
            expect(notification).toHaveProperty("user_id");
            expect(notification).toHaveProperty("notification_type");
            expect(notification).toHaveProperty("message");
            expect(notification).toHaveProperty("sent_at");
            expect(notification).toHaveProperty("status");
          });
        });
    });
    test("GET 200: return specific notification by its id", () => {
      return request(app)
        .get("/notifications/1")
        .expect(200)
        .then(({ body: { notifications } }) => {
          expect(notifications).toHaveLength(3);
        });
    });
    test("POST 201: inserts a new notification", () => {
      const newNotification = {
        user_firstname: "Emma",
        user_lastname: "Johnson",
        notification_type: "General",
        message:
          "A new webinar on e-commerce trends is scheduled for 2024-11-30. Register now!",
        status: "Pending",
        sent_at: null,
      };
      const expectedOutput = {
        notification_id: 11,
        user_id: 2,
        notification_type: "General",
        message:
          "A new webinar on e-commerce trends is scheduled for 2024-11-30. Register now!",
        status: "Pending",
        sent_at: null,
      };
      return request(app)
        .post("/notifications")
        .send(newNotification)
        .expect(201)
        .expect(({ body: notification }) => {
          expect(notification).toEqual(expect.objectContaining(expectedOutput));
          expect(notification).toHaveProperty("created_at");
        });
    });
    test("DELETE 204: deletes a notification by its id", () => {
      return request(app).delete("/notifications/1").expect(204);
    });
  });
  describe("/feedback", () => {
    test("GET 200: returns all the feedbacks by the project id", () => {
      return request(app)
        .get("/feedback/1")
        .expect(200)
        .then(({ body: { feedbacks } }) => {
          expect(feedbacks).toHaveLength(1);
          feedbacks.forEach((feedback) => {
            expect(feedback).toHaveProperty("feedback_id");
            expect(feedback).toHaveProperty("project_id");
            expect(feedback).toHaveProperty("client_id");
            expect(feedback).toHaveProperty("rating");
            expect(feedback).toHaveProperty("review");
            expect(feedback).toHaveProperty("created_at");
          });
        });
    });
    test("POST 201: insert a new feedback", () => {
      const newFeedback = {
        project_id: 4,
        client_id: 2,
        rating: 1,
        review:
          "The cybersecurity audit was thorough, but a bit more detail in the report would have been helpful.",
        created_at: "2024-11-16 12:30:00",
      };
      const expectedOutput = {
        feedback_id: 6,
        project_id: 4,
        client_id: 2,
        rating: 1,
        review:
          "The cybersecurity audit was thorough, but a bit more detail in the report would have been helpful.",
        created_at: "2024-11-16T12:30:00.000Z",
      };
      return request(app).post('/feedback').send(newFeedback).expect(201).then(({body: {feedback}}) => {
        expect(feedback).toMatchObject(expectedOutput)
      })
    });
    test("GET 200: returns all the feedback", () => {
      return request(app).get('/feedback').expect(200).then(({body: {feedbacks}}) => {
        expect(feedbacks).toHaveLength(5)
        feedbacks.forEach((feedback) => {
          expect(feedback).toHaveProperty('feedback_id')
          expect(feedback).toHaveProperty('created_at')
          expect(feedback).toHaveProperty('rating')
          expect(feedback).toHaveProperty('review')
          expect(feedback).toHaveProperty('project_id')
          expect(feedback).toHaveProperty('client_id')

        })
      })
    })
  });
});
