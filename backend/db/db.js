import mysql from 'mysql2'

export const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'sirp',
    }
)

// DATABASE: SIRP

// TABLE NAME: HOSTELS
// ATTRIBUTES: HOSTEL_ID, HOSTEL_NAME, CARETAKER_NAME, CARETAKER_EMAIL, WARDEN_NAME, WARDEN_EMAIL
// PRIMARY KEY: HOSTEL_ID

// TABLE NAME: STUDENTS
// ATTRIBUTES: STUDENT_ID, USERNAME, PASSWORD, NAME, EMAIL, HOSTEL_NAME, ROLE, REGISTRATION_DATE
// PRIMARY KEY: STUDENT_ID

// TABLE NAME: CARETAKERS
// ATTRIBUTES: CARETAKER_ID, PASSWORD, NAME, EMAIL, HOSTEL_NAME, ROLE, REGISTRATION_DATE
// PRIMARY KEY: CARETAKER_ID

// TABLE NAME: WARDENS
// ATTRIBUTES: WARDEN_ID, PASSWORD, NAME, EMAIL, HOSTEL_NAME, ROLE, REGISTRATION_DATE
// PRIMARY KEY: WARDEN_ID

// TABLE NAME: COMPLAINTS
// ATTRIBUTES: COMPLAINT_ID, STUDENT_ID, TITLE, DESCRIPTION, STATUS, SUBMISSION_DATE, HOSTEL_NAME, ASSIGNED_TO
// PRIMARY KEY: COMPLAINT_ID

// TABLE NAME: NOTICES
// ATTRIBUTES: NOTICE_ID, HOSTEL, TITLE, CONTENT, DATE, USER_ID, USER_ROLE
// PRIMARY KEY: NOTICE_ID
