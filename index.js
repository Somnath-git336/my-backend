const { Pool } = require('pg');

// Create a connection pool using DATABASE_URL from environment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Needed for Render's hosted PostgreSQL
  }
});

// Example query
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected, current time:', res.rows[0]);
  }
});

module.exports = pool;
