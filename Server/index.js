import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql'; // Use mysql2 instead of mysql

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  // Add the following line to interpret zero as false for the connection
  zeroDateTimeBehavior: 'convertToNull',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
