const db = require("../connection");
const format = require("pg-format");

const seed = ({ adminsData }) => {
  return db
    .query(`DROP TABLE IF EXISTS users CASCADE`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS appointments CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS notifications CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS feedback CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS consultations CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS project-stages CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS admins CASCADE`);
    })
    .then(() => {
      return db.query(`CREATE TABLE admins (user_id SERIAL PRIMARY KEY, 
      username VARCHAR(50) UNIQUE NOT NULL, 
      password VARCHAR(100) UNIQUE NOT NULL,
      firstName VARCHAR(50) NOT NULL,
      lastName VARCHAR(100) NOT NULL,
      email VARCHAR(200) UNIQUE NOT NULL, 
      phone VARCHAR UNIQUE NOT NULL,
      address VARCHAR NOT NULL,
      position VARCHAR(50) NOT NULL
      )`);
    })
    .then(() => {
      const insertAdminsData = format(
        `INSERT INTO admins (username, password, firstName, lastName, email, phone, address, position) VALUES %L
      RETURNING *`,
        adminsData.map(
          ({
            username,
            password,
            firstName,
            lastName,
            email,
            phone,
            address,
            position,
          }) => [
            username,
            password,
            firstName,
            lastName,
            email,
            phone,
            address,
            position,
          ]
        )
      );
      return db.query(insertAdminsData)
    });
};
