import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mariadb from "mariadb";

dotenv.config();

const port = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const app = express();

console.log(process.env.DB_USER);

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 50,

});

app.use(cors());

app.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM your_table');
    res.json(rows);
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (conn) {
      conn.release(); // Release the connection back to the pool
    }
  }
});



// Other routes and middleware...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
