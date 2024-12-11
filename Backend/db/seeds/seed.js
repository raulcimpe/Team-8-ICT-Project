const db = require("../connection");
const format = require("pg-format");
const services = require("../data/test-data/services");

const seed = ({
  adminsData,
  servicesData,
  usersData,
  appointmentsData,
  appointmentServicesData,
  notificationsData,
  consultationSummariesData,
  projectsData,
  projectStagesData,
  feedbackData
}) => {
  return db
    .query(`DROP TABLE IF EXISTS users CASCADE`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS services CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS appointments CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS appointment_services`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS notifications CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS feedback CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS consultation_summaries CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS projects CASCADE`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS project_stages CASCADE`);
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
      return db.query(`CREATE TABLE services (service_id SERIAL PRIMARY KEY, 
        service_name VARCHAR(150) NOT NULL,
        description VARCHAR NOT NULL,
        category VARCHAR(150) NOT NULL
        )`);
    })
    .then(() => {
      return db.query(`CREATE TABLE users (
      user_id SERIAL PRIMARY KEY,
      firstName VARCHAR(50) NOT NULL,
      lastName VARCHAR(50) NOT NULL,
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      phone VARCHAR(20) NOT NULL,
      businessName VARCHAR(100) NOT NULL,
      businessStage VARCHAR(50),
      businessDescription TEXT,
      businessIndustry VARCHAR(50),
      businessRegistered BOOLEAN NOT NULL,
      businessPostcode VARCHAR(10),
      businessPhone VARCHAR(20),
      businessWebsite VARCHAR(255),
      socialMedia TEXT[],
      socialMediaLinks TEXT[],
      help TEXT[],
      areasHelpNeeded TEXT,
      problemDescription TEXT,
      lsbuStudOrAlum BOOLEAN NOT NULL
      )`);
    })
    .then(() => {
      return db.query(`CREATE TABLE appointments (
        appointment_id SERIAL PRIMARY KEY,
        client_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
        appointment_date TIMESTAMP NOT NULL,
        appointment_type VARCHAR(20) NOT NULL CHECK (appointment_type IN ('Online', 'Face-to-Face')),
        status VARCHAR(20) NOT NULL CHECK (status IN ('Scheduled', 'Completed', 'Canceled')),
        notes TEXT
      )
    `);
    })
    .then(() => {
      return db.query(`CREATE TABLE appointment_services (
        appointment_service_id SERIAL PRIMARY KEY,
        appointment_id INT NOT NULL REFERENCES appointments(appointment_id) ON DELETE CASCADE,
        service_id INT NOT NULL REFERENCES services(service_id) ON DELETE CASCADE,
        UNIQUE (appointment_id, service_id)
      );
    `);
    })
    .then(() => {
      return db.query(`CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,                  
    user_id INT NOT NULL REFERENCES users(user_id)      
        ON DELETE CASCADE,
    notification_type VARCHAR(50) NOT NULL,             
    message TEXT NOT NULL,                              
    status VARCHAR(20) DEFAULT 'Pending'               
        CHECK (status IN ('Pending', 'Sent', 'Read')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,     
    sent_at TIMESTAMP                                  
);`);
    })
    .then(() => {
      return db.query(
`CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,                     
    client_id INT NOT NULL REFERENCES users(user_id)   
        ON DELETE CASCADE,
    project_name VARCHAR(100) NOT NULL,               
    project_description TEXT,                         
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   
    status VARCHAR(20) DEFAULT 'Active'               
        CHECK (status IN ('Active', 'Completed', 'Canceled', 'Pending'))
);
`);
    })
    .then(() => {
      return db.query(
        `CREATE TABLE consultation_summaries (
    summary_id SERIAL PRIMARY KEY,                    
    appointment_id INT NOT NULL REFERENCES appointments(appointment_id) 
        ON DELETE CASCADE,                             
    client_id INT NOT NULL REFERENCES users(user_id)
        ON DELETE CASCADE,    
    project_id INT NOT NULL REFERENCES projects(project_id)
        ON DELETE CASCADE,                         
    summary_text TEXT NOT NULL,                        
    approval_status VARCHAR(20) DEFAULT 'Pending'      
        CHECK (approval_status IN ('Pending', 'Approved', 'Rejected')),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   
    approved_at TIMESTAMP                              
);
`);
    })
    .then(() => {
      return db.query(`CREATE TABLE project_stages (
    stage_id SERIAL PRIMARY KEY,                     
    project_id INT NOT NULL REFERENCES appointments(appointment_id)
        ON DELETE CASCADE,                          
    stage_name VARCHAR(100) NOT NULL 
    CHECK (stage_name IN (
          'Registration form submission', 
          'Initial consultation booking', 
          'Uploading of interview summary', 
          'Approval of consultation summary', 
          'Solution approved', 
          'Delivery of solutions', 
          'Business Feedback collection'
        )),                  
    status VARCHAR(20) DEFAULT 'Pending'            
        CHECK (status IN ('Pending', 'Completed', 'In Progress')),
    start_date TIMESTAMP,                           
    completion_date TIMESTAMP,                      
    notes TEXT                                      
);
`);
    })
    .then(() => {
      return db.query(`CREATE TABLE feedback (
    feedback_id SERIAL PRIMARY KEY,                     
    project_id INT NOT NULL REFERENCES projects(project_id)
        ON DELETE CASCADE,                              
    client_id INT NOT NULL REFERENCES users(user_id)
        ON DELETE CASCADE,                              
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5), 
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP      
);
`);
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
      return db.query(insertAdminsData);
    })
    .then(() => {
      const insertServiceData = format(
        `INSERT INTO services (service_name, description, category) VALUES %L RETURNING *`,
        servicesData.map(({ service_name, description, category }) => [
          service_name,
          description,
          category,
        ])
      );
      return db.query(insertServiceData);
    })
    .then(() => {
      const insertUsersData = format(
        `INSERT INTO users (
    firstName, lastName, username, password, email, phone, businessName, businessStage, 
    businessDescription, businessIndustry, businessRegistered, businessPostcode, 
    businessPhone, businessWebsite, socialMedia, socialMediaLinks, help, 
    areasHelpNeeded, problemDescription, lsbuStudOrAlum
) VALUES %L RETURNING *`,
        usersData.map((user) => [
          user.firstName,
          user.lastName,
          user.username,
          user.password,
          user.email,
          user.phone,
          user.businessName,
          user.businessStage,
          user.businessDescription,
          user.businessIndustry,
          user.businessRegistered,
          user.businessPostcode,
          user.businessPhone,
          user.businessWebsite,
          `{"${user.socialMedia.join('","')}"}`,
          `{"${user.socialMediaLinks.join('","')}"}`,
          `{"${user.help.join('","')}"}`,
          user.areasHelpNeeded,
          user.problemDescription,
          user.lsbuStudOrAlum,
        ])
      );
      return db.query(insertUsersData);
    })
    .then(() => {
      const insertAppointmentsData = format(
        `INSERT INTO appointments (client_id, appointment_date, appointment_type, status, notes) VALUES %L RETURNING *`,
        appointmentsData.map(
          ({
            client_id,
            appointment_date,
            appointment_type,
            status,
            notes,
          }) => [client_id, appointment_date, appointment_type, status, notes]
        )
      );
      return db.query(insertAppointmentsData);
    })
    .then(() => {
      const insertAppointmentServicesQuery = format(
        `INSERT INTO appointment_services (appointment_id, service_id) VALUES %L RETURNING *`,
        appointmentServicesData.map(({ appointment_id, service_id }) => [
          appointment_id,
          service_id,
        ])
      );
      return db.query(insertAppointmentServicesQuery);
    })
    .then(() => {
      const insertNotificationsData = format(
        `INSERT INTO notifications (user_id, notification_type, message, status, sent_at) VALUES %L RETURNING *`,
        notificationsData.map(
          ({ user_id, notification_type, message, status, sent_at }) => [
            user_id,
            notification_type,
            message,
            status,
            sent_at,
          ]
        )
      );
      return db.query(insertNotificationsData);
    })
    .then(() => {
      const insertProjectData = format(
        `INSERT INTO projects (client_id, project_name, project_description, created_at, status) VALUES %L RETURNING *`,
        projectsData.map(
          ({
            client_id,
            project_name,
            project_description,
            created_at,
            status,
          }) => [
            client_id,
            project_name,
            project_description,
            created_at,
            status,
          ]
        )
      );
      return db.query(insertProjectData);
    })
    .then(() => {
      const insertConsultationSummariesData = format(
        `INSERT INTO consultation_summaries (appointment_id, client_id, project_id, summary_text, approval_status, uploaded_at, approved_at) VALUES %L RETURNING *`,
        consultationSummariesData.map(
          ({
            appointment_id,
            client_id,
            project_id,
            summary_text,
            approval_status,
            uploaded_at,
            approved_at,
          }) => [
            appointment_id,
            client_id,
            project_id,
            summary_text,
            approval_status,
            uploaded_at,
            approved_at,
          ]
        )
      );
      return db.query(insertConsultationSummariesData);
    })
    .then(() => {
      const insertProjectStagesQuery = format(
        `INSERT INTO project_stages (project_id, stage_name, status, start_date, completion_date, notes) VALUES %L RETURNING *`,
        projectStagesData.map(
          ({
            project_id,
            stage_name,
            status,
            start_date,
            completion_date,
            notes,
          }) => [
            project_id,
            stage_name,
            status,
            start_date,
            completion_date,
            notes,
          ]
        )
      );
      return db.query(insertProjectStagesQuery);
    })
    .then(() => {
      const insertFeedbackQuery = format(
        `INSERT INTO feedback (project_id, client_id, rating, review, created_at) VALUES %L RETURNING *`,
        feedbackData.map(({ project_id, client_id, rating, review, created_at }) => [
          project_id,
          client_id,
          rating,
          review,
          created_at,
        ])
      )
      return db.query(insertFeedbackQuery)
    })
};

module.exports = seed;
