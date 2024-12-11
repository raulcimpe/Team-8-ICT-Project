const db = require("../db/connection");

exports.findUsers = () => {
  return db.query(`SELECT * FROM users`).then(({ rows }) => {
    return rows;
  });
};

exports.insertUsers = ({
  firstName,
  lastName,
  username,
  password,
  email,
  phone,
  businessName,
  businessStage,
  businessDescription,
  businessIndustry,
  businessRegistered,
  businessPostcode,
  businessPhone,
  businessWebsite,
  socialMedia,
  socialMediaLinks,
  help,
  areasHelpNeeded,
  problemDescription,
  lsbuStudOrAlum,
}) => {
  return db
    .query(
      `INSERT INTO users (firstname, lastname, username, password, email, phone, businessname, businessstage, businessdescription, businessindustry, businessregistered, businesspostcode, businessphone, businesswebsite, socialmedia, socialmedialinks, help, areashelpneeded, problemdescription, lsbustudoralum) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *`, [firstName, lastName,
        username,
        password,
        email,
        phone,
        businessName,
        businessStage,
        businessDescription,
        businessIndustry,
        businessRegistered,
        businessPostcode,
        businessPhone,
        businessWebsite,
        socialMedia,
        socialMediaLinks,
        help,
        areasHelpNeeded,
        problemDescription,
        lsbuStudOrAlum]
    )
    .then(({ rows }) => {
        return rows[0]
    });
};

exports.findUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE user_id = $1`, [id]).then(({rows}) => {
    return rows[0]
  })
}