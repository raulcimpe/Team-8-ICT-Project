const db = require("../connection");
const format = require("pg-format");

const seed = () => {
  return db.query(`DROP TABLE IF EXISTS users CASCADE`)
  .then(() => {
    return db.query(`DROP TABLE IF EXISTS appointments CASCADE`);
  })
  .then(() => {
    return db.query(`DROP TABLE IF EXISTS notifications CASCADE`)
  })
  .then(() => {
    return db.query(`DROP TABLE IF EXISTS feedback CASCADE`)
  })
  .then(() => {
    return db.query(`DROP TABLE IF EXISTS consultations CASCADE`)
  })
  .then(() => {
    return db.query(`DROP TABLE IF EXISTS project-stages CASCADE`)
  })
  .then(() => {
    return db.query(`DROP TABLE IF EXISTS admins CASCADE`)
  })
};




