const app = require('../app.js')
const request = require("supertest")
const seed = require("../db/seeds/seed.js")
const db = require("../db/connection.js")
const testData = require("../db/data/test-data/index.js")

beforeEach(() => {
    return seed(testData)
})

afterAll(() => {
    return db.end()
})

describe("app", () => {
    describe("/admins", () => {
        test("GET 200: returns an object containing all the admins", () => {
            return request(app).get("/admins").expect(200).then(({body}) => {
                expect(body.admins).toHaveLength(20)
                body.admins.forEach((admin) => {
                    expect(admin).toHaveProperty("username")
                    expect(admin).toHaveProperty("password")
                    expect(admin).toHaveProperty("firstname")
                    expect(admin).toHaveProperty("lastname")
                    expect(admin).toHaveProperty("email")
                    expect(admin).toHaveProperty("address")
                    expect(admin).toHaveProperty("phone")
                    expect(admin).toHaveProperty("position")
                })
            })
        })
    })
})
